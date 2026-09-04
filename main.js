/* ============================================================
   Matheus Teixeira — portfolio behaviour
   1. Timeline (dates resolved at render time)
   2. Language (URL > storage > browser)
   3. Split-flap hero + nav text
   4. Scroll spy for the rail
   5. Section reveal
   ============================================================ */

(function () {
  'use strict';

  // Guarded so a missing matchMedia can never take the whole script down.
  var reduceMotion =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };

  function prefersReduced() {
    return reduceMotion.matches;
  }

  /* ============================================================
     Timeline — the single place a date lives. Copy in
     translations.js never spells out a figure that ages ("5 years",
     "since 2021"); it writes {years_experience} / {career_start_year}
     and these are resolved against today on every render, so the
     page still reads correctly next year with nothing to edit.
     ============================================================ */

  // First professional developer role (Benner, apprentice). Time in
  // the field is counted from here and nowhere else.
  var CAREER_START = '2021-06';

  // Whole years elapsed since a YYYY-MM mark. Floored, so "over N
  // years" stays true right up to the anniversary, then rolls to N+1.
  function fullYearsSince(yearMonth) {
    var parts = String(yearMonth).split('-');
    var now = new Date();
    var months =
      (now.getFullYear() - Number(parts[0])) * 12 +
      (now.getMonth() + 1 - Number(parts[1] || 1));
    return Math.max(0, Math.floor(months / 12));
  }

  var TOKENS = {
    years_experience: String(fullYearsSince(CAREER_START)),
    career_start_year: CAREER_START.slice(0, 4),
    current_year: String(new Date().getFullYear())
  };

  // Swaps {token} placeholders for their current value. An unknown
  // token is left as written rather than blanked, so a typo shows up
  // instead of quietly eating part of a sentence.
  function fill(text) {
    return String(text).replace(/\{(\w+)\}/g, function (match, key) {
      return Object.prototype.hasOwnProperty.call(TOKENS, key) ? TOKENS[key] : match;
    });
  }

  /* ---------- Elements ---------- */
  var wordmarkEl = document.getElementById('wordmark');
  var roleLine = document.getElementById('roleLine');
  var roleLive = document.getElementById('roleLive');
  var bioText = document.getElementById('bioText');
  var langToggle = document.getElementById('langToggle');
  var langCurrent = langToggle.querySelector('.lang-current');
  var langOther = langToggle.querySelector('.lang-other');
  var metaDesc = document.getElementById('meta-description');
  var metaOgTitle = document.getElementById('meta-og-title');
  var metaOgDesc = document.getElementById('meta-og-description');
  var resumeLink = document.getElementById('resumeLink');
  var railLinks = Array.prototype.slice.call(document.querySelectorAll('.rail-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));

  var currentLang = 'en';

  // data-i18n keys that split-flap on init/change, same treatment as the
  // role line, rather than swapping in place.
  var FLIP_KEYS = [
    'nav_intro', 'nav_background', 'nav_work', 'nav_about', 'nav_contact',
    'btn_email', 'btn_resume', 'btn_github'
  ];

  /* ============================================================
     Split-flap — text settles one glyph at a time, the way a
     dispatch board does. Used across the whole hero block on
     init (and again on language change), so every element tracks
     its own animation token: several elements can be mid-flip at
     once without cancelling each other.
     ============================================================ */
  var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·+.';
  var flipTokens = new WeakMap();

  function flipChars(el, text, token) {
    // Each glyph is its own inline-block cell, which browsers treat as
    // freely breakable — without grouping, a line can wrap mid-word.
    // Wrapping each word's cells in a nowrap span keeps breaks where a
    // reader expects them, while a real space node between words (not
    // a cell) still gives the line normal, natural break points.
    var words = String(text).split(' ');
    var index = 0;

    words.forEach(function (word, wordIndex) {
      var wordWrap = document.createElement('span');
      wordWrap.className = 'flip-word';
      el.appendChild(wordWrap);

      word.split('').forEach(function (ch) {
        var i = index++;
        var span = document.createElement('span');
        span.className = 'flip';
        span.textContent = ch;
        wordWrap.appendChild(span);

        span.classList.add('is-settling');
        var ticks = 0;
        var total = Math.min(3 + Math.floor(i * 0.55), 18);

        var timer = setInterval(function () {
          if (flipTokens.get(el) !== token) {
            clearInterval(timer);
            return;
          }
          ticks++;
          if (ticks >= total) {
            clearInterval(timer);
            span.textContent = ch;
            span.classList.remove('is-settling');
          } else {
            span.textContent = GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
          }
        }, 45);
      });

      if (wordIndex < words.length - 1) {
        index++; // keeps the cascade timing in step with the space it stands for
        el.appendChild(document.createTextNode(' '));
      }
    });
  }

  // Accessible name is set up front so focus/AT reads the real text
  // even mid-scramble; roleLine additionally hides itself via
  // aria-hidden and announces through the roleLive region instead.
  function flipTo(el, text) {
    var token = (flipTokens.get(el) || 0) + 1;
    flipTokens.set(el, token);
    el.setAttribute('aria-label', text);

    if (prefersReduced()) {
      el.textContent = text;
      return;
    }

    el.textContent = '';
    flipChars(el, text, token);
  }

  // Same idea, but for a multi-line block (the wordmark) where each
  // line needs its own run of glyph cells joined by a real <br>.
  function flipLines(el, lines) {
    var token = (flipTokens.get(el) || 0) + 1;
    flipTokens.set(el, token);
    el.setAttribute('aria-label', lines.join(' '));

    el.textContent = '';

    if (prefersReduced()) {
      lines.forEach(function (line, i) {
        el.appendChild(document.createTextNode(line));
        if (i < lines.length - 1) el.appendChild(document.createElement('br'));
      });
      return;
    }

    lines.forEach(function (line, i) {
      flipChars(el, line, token);
      if (i < lines.length - 1) el.appendChild(document.createElement('br'));
    });
  }

  /* Bio settles word by word behind the flip line. */
  function settleWords(el, text) {
    if (prefersReduced()) {
      el.textContent = text;
      return;
    }

    el.textContent = '';
    var words = String(text).split(' ');

    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word';
      span.textContent = word;
      span.style.opacity = '0';
      span.style.transform = 'translateY(5px)';
      span.style.transition = 'opacity .32s ease, transform .32s ease';
      span.style.transitionDelay = Math.min(i * 14, 420) + 'ms';
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });

    // Two frames so the initial state is committed before transitioning.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var spans = el.querySelectorAll('.word');
        for (var i = 0; i < spans.length; i++) {
          spans[i].style.opacity = '';
          spans[i].style.transform = '';
        }
      });
    });
  }

  /* ============================================================
     Language
     ============================================================ */
  function validLang(value) {
    return value && Object.prototype.hasOwnProperty.call(translations, value) ? value : null;
  }

  function preferredLang() {
    var fromUrl = validLang(new URLSearchParams(window.location.search).get('lang'));
    if (fromUrl) return fromUrl;

    try {
      var saved = validLang(localStorage.getItem('lang'));
      if (saved) return saved;
    } catch (e) {
      /* Storage unavailable — fall through to the browser preference. */
    }

    var list = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      if (String(list[i]).toLowerCase().indexOf('pt') === 0) return 'pt';
    }
    return 'en';
  }

  function applyLang(lang, animate, updateUrl) {
    currentLang = validLang(lang) || 'en';
    var t = translations[currentLang];

    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.title = fill(t.doc_title);
    if (metaDesc) metaDesc.setAttribute('content', fill(t.doc_description));
    if (metaOgTitle) metaOgTitle.setAttribute('content', fill(t.doc_title));
    if (metaOgDesc && t.og_description) {
      metaOgDesc.setAttribute('content', fill(t.og_description));
    }

    // Each language downloads its own file: "Resume ..." in English,
    // "Currículo ..." in Portuguese. Encoded because both names carry
    // spaces, and the Portuguese one an accent.
    if (resumeLink && t.resume_file) {
      resumeLink.setAttribute('href', encodeURI(t.resume_file));
    }

    // Reading-as label and the action links flip like the role line;
    // everything else below the fold just gets the plain text swap.
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] == null) return;
      var value = fill(t[key]);
      if (animate && FLIP_KEYS.indexOf(key) !== -1) {
        flipTo(el, value);
      } else {
        el.textContent = value;
      }
    });

    if (animate) {
      flipTo(roleLine, fill(t.hero_title));
      settleWords(bioText, fill(t.hero_text));
    } else {
      roleLine.textContent = fill(t.hero_title);
      bioText.textContent = fill(t.hero_text);
    }

    // Announce the settled title once, rather than every flipping glyph.
    if (roleLive) roleLive.textContent = fill(t.hero_title);

    langCurrent.textContent = currentLang.toUpperCase();
    langOther.textContent = currentLang === 'en' ? 'PT' : 'EN';
    langToggle.setAttribute(
      'aria-label',
      currentLang === 'en' ? 'Mudar para português' : 'Switch to English'
    );

    try {
      localStorage.setItem('lang', currentLang);
    } catch (e) {
      /* The page stays usable without storage. */
    }

    if (updateUrl) {
      try {
        var url = new URL(window.location.href);
        if (currentLang === 'en') url.searchParams.delete('lang');
        else url.searchParams.set('lang', currentLang);
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
      } catch (e) {
        /* Some hosts disallow URL rewriting; the switch still applies. */
      }
    }
  }

  langToggle.addEventListener('click', function () {
    applyLang(currentLang === 'en' ? 'pt' : 'en', true, true);
  });

  /* ============================================================
     Entry expand ("see more")
     ============================================================ */
  var entryToggles = Array.prototype.slice.call(document.querySelectorAll('.entry-toggle'));

  entryToggles.forEach(function (btn) {
    var wrap = btn.nextElementSibling;
    var panel = wrap ? wrap.querySelector('.entry-more') : null;
    if (!panel) return;

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      wrap.classList.toggle('is-open', !open);
      panel.inert = open;

      var key = open ? 'see_more' : 'see_less';
      btn.dataset.i18n = key;
      btn.textContent = fill(translations[currentLang][key]);
    });
  });

  /* ============================================================
     Scroll spy
     ============================================================ */
  var spyQueued = false;
  var lastActive = null;
  var railList = document.querySelector('.rail-list');

  // Scrolls only the nav's own horizontal track, never the page — a plain
  // scrollIntoView() walks every scrollable ancestor including the
  // document, which can jump the whole page under a sticky/fixed nav.
  function scrollLinkIntoView(link) {
    if (!railList) return;
    var containerRect = railList.getBoundingClientRect();
    var linkRect = link.getBoundingClientRect();
    var margin = 16;
    var delta = null;

    if (linkRect.left < containerRect.left) {
      delta = linkRect.left - containerRect.left - margin;
    } else if (linkRect.right > containerRect.right) {
      delta = linkRect.right - containerRect.right + margin;
    }
    if (delta == null) return;

    railList.scrollTo({
      left: railList.scrollLeft + delta,
      behavior: prefersReduced() ? 'auto' : 'smooth'
    });
  }

  function spy() {
    spyQueued = false;
    var mark = window.scrollY + window.innerHeight * 0.3;
    var active = sections.length ? sections[0].id : null;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= mark) active = sections[i].id;
    }
    // Anchor the last section once the page bottoms out.
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      active = sections[sections.length - 1].id;
    }

    var activeLink = null;
    railLinks.forEach(function (link) {
      var on = link.getAttribute('href') === '#' + active;
      link.classList.toggle('is-active', on);
      if (on) activeLink = link;
    });

    // On the horizontally-scrolling mobile/tablet nav, keep the current
    // section's tab in view instead of leaving it scrolled off-screen.
    if (activeLink && active !== lastActive) {
      lastActive = active;
      scrollLinkIntoView(activeLink);
    }
  }

  window.addEventListener(
    'scroll',
    function () {
      if (spyQueued) return;
      spyQueued = true;
      requestAnimationFrame(spy);
    },
    { passive: true }
  );

  /* ============================================================
     Section reveal
     ============================================================ */
  var revealTargets = [];

  // Sections carry the coarse fade.
  Array.prototype.push.apply(revealTargets, document.querySelectorAll('.section'));

  // Rows inside a group settle one after another rather than all together.
  document.querySelectorAll('.ledger, .projects').forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (row, i) {
      row.style.transitionDelay = Math.min(i * 70, 350) + 'ms';
      revealTargets.push(row);
    });
  });

  // Blocks that are not rows but still deserve their own entrance.
  Array.prototype.push.apply(
    revealTargets,
    document.querySelectorAll('.about, .socials')
  );

  function revealAll() {
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  if ('IntersectionObserver' in window && !prefersReduced()) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealAll();
  }

  /* ============================================================
     Boot
     ============================================================ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = TOKENS.current_year;

  // Name doesn't change with language, so it only flips once, on boot.
  if (wordmarkEl) flipLines(wordmarkEl, ['Matheus', 'Teixeira']);

  applyLang(preferredLang(), true, false);
  spy();
})();
