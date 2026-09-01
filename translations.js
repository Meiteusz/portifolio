/* Content for both languages.
   `audiences` powers the role selector in the hero: same person, three framings. */
const translations = {
  en: {
    doc_title: "Matheus Teixeira — Fullstack Developer",
    doc_description:
      "Matheus Teixeira is a fullstack developer in Blumenau, Brazil, with five years in logistics and distribution systems built on .NET, Angular, Oracle, Kafka and Flutter.",

    nav_intro: "Intro",
    nav_background: "Background",
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",

    reading_as: "Reading as",

    audiences: {
      anyone: {
        tab: "Anyone",
        role: "Software that moves things",
        bio: "I build the systems behind logistics and distribution — warehouse stock, automatic store replenishment, product catalogues. Five years of it, mostly .NET and Angular, with Flutter on mobile. On the side I run my own app, live on both stores with paying subscribers."
      },
      recruiters: {
        tab: "Recruiters",
        role: "Fullstack developer, 5 years",
        bio: "Mid-level developer at Grupo Autoglass working in .NET, Angular, Oracle and Kafka. I designed the board that tracks more than 25,000 SKUs and retired a spreadsheet five people maintained by hand. At Benner I went from apprentice to mid-level in 16 months and built the Flutter checklist app that issues over 5,000 checklists a month. English at professional working level."
      },
      engineers: {
        tab: "Engineers",
        role: ".NET, Kafka, Oracle, Flutter",
        bio: "Business-rule heavy systems with a lot of integration surface. I moved a synchronous addressing algorithm onto a Kafka FIFO queue and gave operators back a five-minute wait; tuned Oracle queries with CTEs behind Quartz jobs and a materialised view. DDD, EF Core, xUnit, Azure DevOps. I also run my own app in production, which taught me most of what I know about what breaks after the deploy."
      }
    },

    btn_email: "Send an email",
    btn_resume: "Download résumé",
    btn_github: "GitHub",

    /* ---------- Background ---------- */
    bg_label: "Background",
    bg_meta: "5 years · 2021 — now",

    exp_role_1: "Mid-level Developer",
    exp_desc_1:
      "Across the product platform, WMS and DRP teams. Built the SKU Kanban, moved WMS addressing off the synchronous path, and helped ship the DRP feature that returns idle stock between units instead of raising a new purchase order.",
    exp_role_2: "Apprentice → Junior → Mid-level",
    exp_desc_2:
      "Three years on a logistics product, reaching mid-level in 16 months. Technical reference for the squad, reviewing the team's code and backing both technical and business-rule decisions. Lead developer on a payment partner integration — I travelled to the client's city, at their invitation, to understand the operation first hand. Also worked in the architecture and DevOps squad on Jenkins CI/CD and pipeline automation.",

    edu_label: "Education",
    edu_degree_1: "Systems Analysis & Development (CST)",
    edu_degree_2: "Systems Development Technician",

    cert_label: "Certifications",
    cert_1: "Flutter Advanced: Multi-Modular & Clean Architecture | Bloc",
    cert_2: "Microservices with .NET 6: implementing communication",
    cert_3: "Docker: building and managing containers",
    cert_4: "Claude Code in Action",

    /* ---------- Work ---------- */
    work_label: "Selected work",
    work_meta: "5 projects · 2021 — now",

    key_personal: "Personal",

    proj_aura_desc:
      "My own product: a Flutter app on the App Store and Google Play with subscription plans and paying users, backed by a .NET 8 API on PostgreSQL. I built the app end to end and most of the API, and it has shipped an update almost every month since launch.",
    proj_aura_state: "Live · App Store & Google Play",

    proj_hub_desc:
      "The company's central product platform, replacing the legacy system as the source of truth for the catalogue — any system or API that needs product context queries the hub. I work on the catalogue migration and the continuous sync, with jobs that detect divergences and publish the events to Kafka.",
    proj_hub_state: "Current",

    proj_kanban_desc:
      "A digital board tracking more than 25,000 SKUs, replacing a spreadsheet five people maintained by hand. A .NET job on Quartz applies the business rules to the main table, and a materialised view built from it feeds the Tableau dashboards. Queries tuned with CTEs. Updated daily, with no manual entry.",

    proj_wms_desc:
      "The addressing algorithm swept every address by product dimension and turnover, and ran synchronously — some products left an operator waiting up to five minutes, in an operation handling thousands of products a day. The step did not need to be synchronous, since the product still awaited physical allocation afterwards. I moved it onto a Kafka FIFO queue, kept only the address lookup synchronous, and notified the user by email on completion. The wait is gone.",

    proj_mobile_desc:
      "The app that digitised logistics transport checklists, integrated directly with the core system and replacing a manual process. I built the mobile side and its layered API. In use across several of the client's branches, issuing more than 5,000 checklists a month.",
    proj_mobile_state: "Google Play",

    /* ---------- About ---------- */
    about_label: "About",
    about_meta: "Blumenau, SC · UTC−3",
    about_p1:
      "These are systems with a lot of business rules and a lot of integration surface. The hard part is rarely writing the feature — it is understanding the operation behind it, and changing things without breaking what already runs.",
    about_p2:
      "Outside work I build and run my own products. Keeping one live taught me plenty that never shows up on a Jira card, mostly about what breaks after the deploy.",
    about_p3:
      "I use AI daily while developing, building agents and skills to speed up my own workflow, and I'm working on integrating it into the applications I build.",

    /* ---------- Contact ---------- */
    contact_label: "Contact",
    contact_meta: "Usually replies same day",
    contact_line: "Have a role, a project, or a question?",
    footer_rights: "All rights reserved.",
    back_to_top: "Back to top ↑"
  },

  pt: {
    doc_title: "Matheus Teixeira — Desenvolvedor Fullstack",
    doc_description:
      "Matheus Teixeira é desenvolvedor fullstack em Blumenau, com 5 anos em sistemas de logística e distribuição em .NET, Angular, Oracle, Kafka e Flutter.",

    nav_intro: "Início",
    nav_background: "Trajetória",
    nav_work: "Projetos",
    nav_about: "Sobre",
    nav_contact: "Contato",

    reading_as: "Lendo como",

    audiences: {
      anyone: {
        tab: "Qualquer um",
        role: "Software que move coisas",
        bio: "Construo os sistemas por trás da logística e da distribuição — estoque de armazém, abastecimento automático de lojas, catálogo de produtos. São 5 anos disso, principalmente .NET e Angular, com Flutter no mobile. Fora do trabalho, mantenho meu próprio app no ar, publicado nas duas lojas e com assinantes pagantes."
      },
      recruiters: {
        tab: "Recrutadores",
        role: "Desenvolvedor fullstack, 5 anos",
        bio: "Desenvolvedor pleno no Grupo Autoglass, atuando com .NET, Angular, Oracle e Kafka. Projetei o quadro que acompanha mais de 25 mil SKUs e aposentou uma planilha mantida à mão por um time de 5 pessoas. Na Benner, saí de aprendiz a pleno em 16 meses e construí o app de checklists em Flutter que emite mais de 5 mil checklists por mês. Inglês em nível profissional."
      },
      engineers: {
        tab: "Devs",
        role: ".NET, Kafka, Oracle, Flutter",
        bio: "Sistemas com muita regra de negócio e muita superfície de integração. Tirei o algoritmo de endereçamento do fluxo síncrono para uma fila FIFO no Kafka e devolvi ao operador uma espera de cinco minutos; otimizei consultas Oracle com CTEs por trás de jobs Quartz e uma view materializada. DDD, EF Core, xUnit, Azure DevOps. Também mantenho meu próprio app em produção, que me ensinou quase tudo que sei sobre o que quebra depois do deploy."
      }
    },

    btn_email: "Enviar e-mail",
    btn_resume: "Baixar currículo",
    btn_github: "GitHub",

    /* ---------- Trajetória ---------- */
    bg_label: "Trajetória",
    bg_meta: "5 anos · 2021 — hoje",

    exp_role_1: "Desenvolvedor Pleno",
    exp_desc_1:
      "Passagem pelos times de plataforma de produtos, WMS e DRP. Projetei o Kanban de SKUs, tirei o endereçamento do WMS do fluxo síncrono e participei da feature do DRP que devolve estoque encalhado entre unidades em vez de gerar uma compra nova.",
    exp_role_2: "Aprendiz → Júnior → Pleno",
    exp_desc_2:
      "Três anos em produto logístico, chegando a pleno em 16 meses. Referência técnica da squad, revisando o código do time e apoiando decisões técnicas e de regra de negócio. Desenvolvedor principal da integração de um parceiro de pagamento — fui até a cidade do cliente, a convite dele, para entender a operação de perto. Também atuei na squad de arquitetura e DevOps, com CI/CD em Jenkins e automação de pipeline.",

    edu_label: "Formação",
    edu_degree_1: "Análise e Desenvolvimento de Sistemas (CST)",
    edu_degree_2: "Técnico em Desenvolvimento de Sistemas",

    cert_label: "Certificações",
    cert_1: "Flutter Advanced: Multi-Modular & Clean Architecture | Bloc",
    cert_2: "Microsserviços e .NET 6: implementando a comunicação",
    cert_3: "Docker: criando e gerenciando containers",
    cert_4: "Claude Code in Action",

    /* ---------- Projetos ---------- */
    work_label: "Projetos selecionados",
    work_meta: "5 projetos · 2021 — hoje",

    key_personal: "Pessoal",

    proj_aura_desc:
      "Meu produto próprio: um app em Flutter na App Store e no Google Play, com planos de assinatura e usuários pagantes, sustentado por uma API .NET 8 sobre PostgreSQL. Fiz o app inteiro e boa parte da API, e ele recebe atualização quase todo mês desde o lançamento.",
    proj_aura_state: "No ar · App Store e Google Play",

    proj_hub_desc:
      "A plataforma central de produtos da empresa, que substitui o legado como fonte de verdade do catálogo — qualquer sistema ou API que precise de contexto de produto consulta o hub. Atuo na migração do catálogo e na sincronização contínua, com jobs que identificam divergências e publicam os eventos em Kafka.",
    proj_hub_state: "Atual",

    proj_kanban_desc:
      "Um quadro digital que acompanha mais de 25 mil SKUs, substituindo uma planilha mantida à mão por um time de 5 pessoas. Um job .NET em Quartz aplica as regras de negócio na tabela principal, e uma view materializada alimentada a partir dela serve os dashboards em Tableau. Consultas otimizadas com CTEs. Atualização diária, sem entrada manual.",

    proj_wms_desc:
      "O algoritmo de endereçamento varria todos os endereços considerando dimensões e giro do produto, e rodava de forma síncrona — alguns produtos deixavam o operador parado esperando até cinco minutos, numa operação de milhares de produtos por dia. A etapa não precisava ser síncrona, já que o produto ainda aguardava alocação física depois. Reestruturei o fluxo com fila FIFO no Kafka, mantendo síncrona apenas a busca de endereços e notificando o usuário por e-mail na conclusão. A espera acabou.",

    proj_mobile_desc:
      "O app que digitalizou os checklists de transporte logístico, com integração direta ao sistema e substituindo o processo manual. Construí o mobile e a API em camadas. Em uso em várias filiais do cliente, emitindo mais de 5 mil checklists por mês.",
    proj_mobile_state: "Google Play",

    /* ---------- Sobre ---------- */
    about_label: "Sobre",
    about_meta: "Blumenau, SC · UTC−3",
    about_p1:
      "São sistemas com muita regra de negócio e muita superfície de integração. O trabalho difícil raramente é escrever a feature, mas sim entender a operação por trás dela e mexer sem quebrar o que já roda.",
    about_p2:
      "Fora do trabalho, construo e opero meus próprios produtos. Manter um deles no ar me ensinou muita coisa que não aparece em card do Jira, principalmente o que quebra depois do deploy.",
    about_p3:
      "Uso IA no dia a dia de desenvolvimento, construindo agentes e skills para acelerar meu próprio fluxo, e venho trabalhando na integração de IA nas aplicações que desenvolvo.",

    /* ---------- Contato ---------- */
    contact_label: "Contato",
    contact_meta: "Costuma responder no mesmo dia",
    contact_line: "Tem uma vaga, um projeto ou uma dúvida?",
    footer_rights: "Todos os direitos reservados.",
    back_to_top: "Voltar ao topo ↑"
  }
};
