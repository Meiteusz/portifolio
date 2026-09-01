/* ============================================================
   Matheus Teixeira — portfolio behaviour
   1. Language (URL > storage > browser)
   2. Audience switcher + split-flap role line
   3. Scroll spy for the rail
   4. Section reveal
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

  /* ---------- Elements ---------- */
  var roleLine = document.getElementById('roleLine');
  var roleLive = document.getElementById('roleLive');
  var bioText = document.getElementById('bioText');
  var langToggle = document.getElementById('langToggle');
  var langCurrent = langToggle.querySelector('.lang-current');
  var langOther = langToggle.querySelector('.lang-other');
  var metaDesc = document.getElementById('meta-description');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var railLinks = Array.prototype.slice.call(document.querySelectorAll('.rail-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));

  var currentLang = 'en';
  var currentAudience = 'anyone';

  /* ============================================================
     Split-flap — the role line settles one glyph at a time,
     the way a dispatch board does.
     ============================================================ */
  var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·+.';
  var flipToken = 0;

  function flipTo(el, text) {
    var token = ++flipToken;

    if (prefersReduced()) {
      el.textContent = text;
      return;
    }

    el.textContent = '';
    var chars = String(text).split('');

    chars.forEach(function (ch, i) {
      var span = document.createElement('span');
      span.className = 'flip';
      span.textContent = ch;
      el.appendChild(span);

      if (ch === ' ') return;

      span.classList.add('is-settling');
      var ticks = 0;
      var total = Math.min(3 + Math.floor(i * 0.55), 18);

      var timer = setInterval(function () {
        if (token !== flipToken) {
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
     Audience
     ============================================================ */
  function renderAudience(key, animate) {
    var copy = translations[currentLang].audiences[key];
    if (!copy) return;

    currentAudience = key;

    tabs.forEach(function (btn) {
      var on = btn.dataset.audience === key;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (animate) {
      flipTo(roleLine, copy.role);
      settleWords(bioText, copy.bio);
    } else {
      roleLine.textContent = copy.role;
      bioText.textContent = copy.bio;
    }

    // Announce the settled string once, rather than every flipping glyph.
    if (roleLive) roleLive.textContent = copy.role;
  }

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.dataset.audience === currentAudience) return;
      renderAudience(btn.dataset.audience, true);
      try {
        localStorage.setItem('audience', btn.dataset.audience);
      } catch (e) {
        /* Private browsing — the switch still works for this visit. */
      }
    });
  });

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
    document.title = t.doc_title;
    if (metaDesc) metaDesc.setAttribute('content', t.doc_description);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] != null) el.textContent = t[key];
    });

    tabs.forEach(function (btn) {
      var copy = t.audiences[btn.dataset.audience];
      if (copy) btn.textContent = copy.tab;
    });

    langCurrent.textContent = currentLang.toUpperCase();
    langOther.textContent = currentLang === 'en' ? 'PT' : 'EN';
    langToggle.setAttribute(
      'aria-label',
      currentLang === 'en' ? 'Mudar para português' : 'Switch to English'
    );

    renderAudience(currentAudience, animate);

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
     Scroll spy
     ============================================================ */
  var spyQueued = false;

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

    railLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + active);
    });
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
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  try {
    var savedAudience = localStorage.getItem('audience');
    if (savedAudience && translations.en.audiences[savedAudience]) {
      currentAudience = savedAudience;
    }
  } catch (e) {
    /* Default audience is fine. */
  }

  applyLang(preferredLang(), true, false);
  spy();
})();
