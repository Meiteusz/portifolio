/* Content for both languages.
   `audiences` powers the role selector in the hero: same person, three framings. */
const translations = {
  en: {
    doc_title: "Matheus Teixeira — Fullstack Developer",
    doc_description:
      "Matheus Teixeira is a fullstack developer in Blumenau, Brazil, with five years in logistics and distribution systems built on .NET, Angular, Oracle, Kafka and Flutter.",

    nav_intro: "Intro",
    nav_background: "Background",
    nav_work: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    reading_as: "Reading as",

    audiences: {
      anyone: {
        tab: "Anyone",
        role: "Software that moves things",
        bio: "I build the systems behind logistics and distribution — warehouse stock, automatic store replenishment, product catalogues. Five years of it, mostly .NET and Angular, with Flutter on mobile. On the side I build and run my own products — one of them live on both stores with paying subscribers."
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
    now: "Now",

    exp_role_1: "Mid-level Developer",
    exp_desc_1:
      "Across the product platform, WMS and DRP teams. Built the SKU Kanban, moved WMS addressing off the synchronous path, and helped ship the DRP feature that returns idle stock between units instead of raising a new purchase order.",
    exp_role_2: "Apprentice → Junior → Mid-level",
    exp_desc_2:
      "Three years on a logistics product, reaching mid-level in 16 months. Technical reference for the squad, reviewing the team's code and backing both technical and business-rule decisions. Lead developer on a payment partner integration — I travelled to the client's city, at their invitation, to understand the operation first hand. Also worked in the architecture and DevOps squad on Jenkins CI/CD and pipeline automation.",

    see_more: "See more ↓",
    see_less: "See less ↑",

    exp1_more_1_title: "ProductHub (current)",
    exp1_more_1_desc:
      "The company's central product platform, replacing the legacy system as the source of truth for the catalog: any system or API that needs product context calls the hub. I work on the catalog migration and on continuous sync, with jobs that detect drift between both sides and publish the events to Kafka topics.",
    exp1_more_2_title: "Product development Kanban board",
    exp1_more_2_desc:
      "Designed and delivered the digital board that tracks 25,000+ SKUs, replacing a spreadsheet five people maintained by hand. The main table is updated by a .NET job (Quartz) that holds the business rules, and a materialized view built from it feeds the Tableau dashboards. I optimized the queries with CTEs. Updated daily, no manual data entry.",
    exp1_more_3_title: "WMS: async slotting",
    exp1_more_3_desc:
      "WMS runs the warehouse, from receiving through slotting across the DCs. The slotting algorithm scans every location, weighing product dimensions and turnover to pick the best one, and it ran synchronously: some items took up to 5 minutes with the operator standing there waiting, in an operation that slots thousands of products a day. Working with the business team, I found the step didn't need to be synchronous, since the item still waited on someone to physically put it away after digital slotting. Refactoring the algorithm was the right fix, but it didn't fit the urgency. I restructured the flow around a FIFO Kafka queue, keeping only the location lookup synchronous and notifying the user by email on completion. The wait was gone for the operator.",
    exp1_more_4_title: "DRP: slow-moving stock transfers",
    exp1_more_4_desc:
      "DRP handles store replenishment, forecasting demand so each store gets what it needs before it runs out. The company was sitting on thousands of slow-moving items and still buying those same SKUs whenever a location needed them. I worked on the feature that flags that stock and, instead of raising a new purchase order, triggers a transfer from the location holding it to the one that needs it.",

    exp2_role_a_title: "Mid-Level Developer",
    exp2_more_1_title: "BL Mobile — logistics checklists",
    exp2_more_1_desc:
      "Built the app that digitized transport checklists, integrated directly with the core system and replacing a paper process. I worked on the mobile app end to end and on the API and its layered architecture. In use across several of the client's branches, issuing 5,000+ checklists a month. Stack — API: .NET 7, EF Core, DDD, RESTful API, unit tests. Mobile: Flutter, Dart, dio, provider, shared_preferences, shipped to Google Play.",
    exp2_more_2_title: "Tech lead for the squad",
    exp2_more_2_desc:
      "I was the squad's technical point of contact, both for engineering and for the logistics domain. I reviewed the team's code and backed the other developers on technical decisions and on questions about the product's business rules, keeping code standards and unit test coverage consistent across our work.",
    exp2_more_3_title: "Payment provider integration",
    exp2_more_3_desc:
      "Lead developer on the integration of a new payment provider into the system. I traveled to the client's site at their invitation to see the operation's pain points firsthand and build against them more precisely.",
    exp2_more_4_title: "Architecture and DevOps squad",
    exp2_more_4_desc:
      "Worked on the architecture and DevOps/CI-CD squad with Jenkins, improving the team's internal tooling: release and update processes, and pipeline automation.",

    exp2_role_b_title: "Junior Developer",
    exp2_role_b_desc:
      "Worked on features and improvements in the logistics product, including the payment provider integration I went on to lead as a mid-level developer. Contributed to the product architecture squad, improving the internal development environment: release process automation and database scripts. Reviewed the team's merge requests before they went to production. Refactored critical paths for performance in routines running over large data volumes.",

    exp2_role_c_title: "Apprentice Developer",
    exp2_role_c_desc:
      "First contributions to the logistics product: fixes and improvements, working with TDD, SOLID and unit test coverage.",

    edu_label: "Education",
    edu_degree_1: "Systems Analysis & Development (CST)",
    edu_degree_2: "Systems Development Technician",


    /* ---------- Projects ---------- */
    work_label: "Active Projects",
    work_meta: "Personal products",

    proj_aura_cat: "Scheduling",
    proj_aura_note:
      "Scheduling and management for barbershops. Live on both stores, with subscription plans and paying users.",

    proj_diff_cat: "Language",
    proj_diff_note:
      "English review treated as code review — a diff of what a native speaker would have said, and the reason behind each change.",

    proj_post_cat: "Content",
    proj_post_note:
      "Turns an app screenshot into a finished Instagram post, with your product's own branding applied.",

    /* ---------- About ---------- */
    about_label: "About",
    about_meta: "Blumenau, SC · UTC−3",
    about_p1:
      "I've been building software since 2021, mostly on the .NET stack, working primarily on systems for the logistics industry.",
    about_p2:
      "Outside of client work, I build and run my own products. One of them is a scheduling and management app for barbershops, launched in 2025. Keeping a system live with real, active users taught me things no amount of client work alone would — challenges that go well beyond code and reshaped how I think about building software.",
    about_p3:
      "Today I still work mainly with .NET, while exploring other technologies on the side. I keep running my own products and learning continuously, with a particular focus on generative AI.",

    /* ---------- Contact ---------- */
    contact_label: "Contact",
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
        bio: "Construo os sistemas por trás da logística e da distribuição — estoque de armazém, abastecimento automático de lojas, catálogo de produtos. São 5 anos disso, principalmente .NET e Angular, com Flutter no mobile. Fora do trabalho, construo e mantenho meus próprios produtos — um deles no ar nas duas lojas, com assinantes pagantes."
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
    now: "Hoje",

    exp_role_1: "Desenvolvedor Pleno",
    exp_desc_1:
      "Passagem pelos times de plataforma de produtos, WMS e DRP. Projetei o Kanban de SKUs, tirei o endereçamento do WMS do fluxo síncrono e participei da feature do DRP que devolve estoque encalhado entre unidades em vez de gerar uma compra nova.",
    exp_role_2: "Aprendiz → Júnior → Pleno",
    exp_desc_2:
      "Três anos em produto logístico, chegando a pleno em 16 meses. Referência técnica da squad, revisando o código do time e apoiando decisões técnicas e de regra de negócio. Desenvolvedor principal da integração de um parceiro de pagamento — fui até a cidade do cliente, a convite dele, para entender a operação de perto. Também atuei na squad de arquitetura e DevOps, com CI/CD em Jenkins e automação de pipeline.",

    see_more: "Ver detalhes ↓",
    see_less: "Ver menos ↑",

    exp1_more_1_title: "ProductHub (atual)",
    exp1_more_1_desc:
      "Plataforma central de produtos da empresa, que substitui o legado como fonte de verdade do catálogo: qualquer sistema ou API que precise de contexto de produto consulta o hub. Atuo na migração do catálogo e na sincronização contínua, com jobs que identificam divergências e publicam os eventos em filas Kafka.",
    exp1_more_2_title: "Kanban de desenvolvimento de produtos",
    exp1_more_2_desc:
      "Projetei e entreguei o quadro digital que acompanha mais de 25 mil SKUs, substituindo uma planilha mantida à mão por um time de 5 pessoas. A tabela principal é atualizada por job em .NET (Quartz) com as regras de negócio, e uma view materializada alimentada a partir dela serve os dashboards em Tableau. Otimizei as consultas com CTEs. Atualização diária, sem entrada manual.",
    exp1_more_3_title: "WMS: endereçamento assíncrono",
    exp1_more_3_desc:
      "O WMS é o estoque digital da empresa, do recebimento ao endereçamento nos CDs e CLs. O algoritmo de endereçamento varre todos os endereços considerando dimensões e giro do produto, e rodava de forma síncrona: alguns produtos levavam até 5 minutos com o operador parado esperando, numa operação de milhares de produtos por dia. Junto com a área, identifiquei que a etapa não precisava ser síncrona, já que o produto ainda aguardava alocação física depois do endereçamento digital. Refatorar o algoritmo era o ideal, mas não cabia na urgência: reestruturei o fluxo com fila FIFO no Kafka, mantendo síncrona apenas a busca de endereços e notificando o usuário por e-mail na conclusão. A espera acabou para o operador.",
    exp1_more_4_title: "DRP: devolução de produtos encalhados",
    exp1_more_4_desc:
      "O DRP abastece as lojas automaticamente, prevendo por demanda o que cada uma vai precisar. A empresa tinha milhares de produtos encalhados e seguia comprando esses mesmos itens quando alguma unidade precisava. Participei da construção da feature que identifica esse estoque e, em vez de gerar compra nova, dispara a devolução da unidade que está com o produto parado para a que precisa.",

    exp2_role_a_title: "Analista Desenvolvedor Pleno",
    exp2_more_1_title: "BL Mobile — checklists logísticos",
    exp2_more_1_desc:
      "Construí o app que digitalizou os checklists de transporte logístico, com integração direta ao sistema, substituindo o processo manual. Atuei na criação e estruturação do mobile e também na API e sua arquitetura em camadas. Em uso em várias filiais do cliente, emitindo mais de 5 mil checklists por mês. Stack — API: .NET 7, EF Core, DDD, API RESTful, testes unitários. Mobile: Flutter, Dart, dio, provider, shared_preferences, publicado na Google Play.",
    exp2_more_2_title: "Referência técnica da squad",
    exp2_more_2_desc:
      "Fui RT da squad, por conhecimento técnico e do domínio de logística. Revisava o código dos desenvolvedores do time e servia de apoio nas decisões técnicas e nas dúvidas de regra de negócio do produto, mantendo padrão de código e cobertura de testes unitários nas entregas.",
    exp2_more_3_title: "Integração de parceiro de pagamento",
    exp2_more_3_desc:
      "Desenvolvedor principal da implementação de um novo parceiro de pagamento no sistema. Fui até a cidade do cliente, a convite dele, para entender as dores da operação de perto e entregar com mais precisão.",
    exp2_more_4_title: "Squad de arquitetura e DevOps",
    exp2_more_4_desc:
      "Atuei na squad de arquitetura e DevOps/CI-CD com Jenkins, em melhorias internas do time: processos de liberação, atualização e automação de pipeline.",

    exp2_role_b_title: "Desenvolvedor Junior",
    exp2_role_b_desc:
      "Atuei em implementações e melhorias no produto logístico, incluindo o projeto de integração de parceiro de pagamento que continuei como pleno. Contribuí com a squad de arquitetura do produto, melhorando o ambiente de desenvolvimento interno: automação de processos de release e scripts de banco de dados. Revisei merge requests do time antes da subida para produção. Refatorei pontos críticos do código para ganho de performance em rotinas sobre grande volume de dados.",

    exp2_role_c_title: "Desenvolvedor Aprendiz",
    exp2_role_c_desc:
      "Primeiras entregas em produto logístico: correções e melhorias com foco em TDD, SOLID e cobertura de testes unitários.",

    edu_label: "Formação",
    edu_degree_1: "Análise e Desenvolvimento de Sistemas (CST)",
    edu_degree_2: "Técnico em Desenvolvimento de Sistemas",


    /* ---------- Projetos ---------- */
    work_label: "Projetos ativos",
    work_meta: "Produtos próprios",

    proj_aura_cat: "Agenda",
    proj_aura_note:
      "Agenda e gestão para barbearias. No ar nas duas lojas, com planos de assinatura e usuários pagantes.",

    proj_diff_cat: "Idioma",
    proj_diff_note:
      "Revisão de inglês tratada como code review — um diff do que soaria diferente na boca de um nativo, e o motivo de cada troca.",

    proj_post_cat: "Conteúdo",
    proj_post_note:
      "Transforma o print do seu app em um post pronto para o Instagram, com a identidade do seu produto aplicada.",

    /* ---------- Sobre ---------- */
    about_label: "Sobre",
    about_meta: "Blumenau, SC · UTC−3",
    about_p1:
      "Atuo com desenvolvimento de software desde 2021, com foco principal na plataforma .NET. Ao longo desse período, trabalhei majoritariamente com sistemas para o setor de logística.",
    about_p2:
      "Além do trabalho como desenvolvedor, construo e opero meus próprios produtos. Um deles é um aplicativo de agenda e gestão para barbearias, lançado em 2025. Manter um sistema no ar com usuários ativos me ensinou lições que dificilmente aprenderia apenas prestando serviço para empresas, desafios que vão muito além do código e que transformaram a forma como enxergo o desenvolvimento de software.",
    about_p3:
      "Atualmente, continuo trabalhando principalmente com .NET, mas também explorando outras tecnologias. Sigo operando meus produtos e estudando continuamente, com foco especial em IA generativa.",

    /* ---------- Contato ---------- */
    contact_label: "Contato",
    back_to_top: "Voltar ao topo ↑"
  }
};
