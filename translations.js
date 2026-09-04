/* Content for both languages.

   Anything that would age is written as a placeholder rather than a
   figure — main.js resolves them against today's date on every render:

     {years_experience}   whole years since the first dev role
     {career_start_year}  the year that count starts from
     {current_year}       this year

   Change the date once, in CAREER_START (main.js). Closed periods that
   can never drift ("Three years at Benner", "2022 — 2025") stay literal.

   resume_file points each language at its own PDF in assets/. */
const translations = {
  en: {
    doc_title: "Matheus Teixeira — Fullstack Developer",
    doc_description:
      "Matheus Teixeira is a fullstack developer in Blumenau, Brazil, with over {years_experience} years in logistics and distribution systems built on .NET, Angular, Oracle, Kafka and Flutter.",
    og_description:
      "Over {years_experience} years in logistics and distribution systems. .NET, Angular, Oracle, Kafka, Flutter.",

    nav_intro: "Intro",
    nav_background: "Background",
    nav_work: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    hero_title: "Software developer. Product builder.",
    hero_text:
      "Brazilian, with over {years_experience} years delivering scalable, high-performance solutions for logistics companies. I also build and run my own digital products, as a way to grow beyond code.",

    btn_email: "Send an email",
    btn_resume: "Download résumé",
    btn_github: "GitHub",

    resume_file: "assets/Resume Matheus Teixeira.pdf",

    /* ---------- Background ---------- */
    bg_label: "Background",
    now: "Now",

    exp_role_1: "Mid-level Developer",
    exp_desc_1: "Across the Product Platform, WMS and DRP teams.",
    exp_desc_1_b1:
      "Designed and automated the SKU Kanban, previously 100% manually managed in Excel spreadsheets and requiring 5 people.",
    exp_desc_1_b2:
      "Removed WMS addressing from the synchronous flow, saving warehouse staff hundreds of hours.",
    exp_desc_1_b3:
      "Worked on the DRP feature that redistributes idle stock between units instead of raising a new purchase order, recovering more than 10 million in stranded inventory.",
    exp_role_2: "Apprentice → Junior → Mid-level",
    exp_desc_2: "Three years on a logistics product, reaching mid-level in 16 months.",
    exp_desc_2_b1:
      "Technical reference for the squad, reviewing the team's code and backing technical and business-rule decisions.",
    exp_desc_2_b2:
      "Lead developer on a payment partner integration — I even travelled to the client's city, at their invitation, to understand the operation first hand.",
    exp_desc_2_b3:
      "Last major delivery: led a fully customizable travel logistics checklist app from planning onward, integrated with the company's other systems and used to issue more than 5,000 checklists a month.",

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
      "Built the app that digitized transport checklists, integrated directly with the core system and replacing a paper process. The checklists were fully customizable, supporting different question and answer types set up by analysts and answered by drivers. I worked on the mobile app end to end and on the API and its layered architecture. In use across several of the client's branches, issuing 5,000+ checklists a month.",
    exp2_more_1_stack_api: "Stack — API: .NET 7, EF Core, DDD, RESTful API, unit tests.",
    exp2_more_1_stack_mobile: "Mobile: Flutter, Dart, dio, provider, shared_preferences, shipped to Google Play.",
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

    proj_aura_cat: "Scheduling",
    proj_aura_note:
      "A scheduling and management app for barbershops. Live on both stores, with subscription plans and paying users.",

    proj_diff_cat: "Language",
    proj_diff_note:
      "English review treated as code review, for people in tech who won't settle for just being \"understood.\"",

    proj_post_cat: "Content",
    proj_post_note:
      "Turns your app's screenshot into a ready-to-post Instagram graphic. Built to make creating social content for Aura faster and easier.",

    /* ---------- About ---------- */
    about_label: "About",
    about_p1:
      "I've worked in fullstack software development since {career_start_year}, mostly on the .NET stack, primarily building systems for the logistics industry.",
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
      "Matheus Teixeira é desenvolvedor fullstack em Blumenau, com mais de {years_experience} anos em sistemas de logística e distribuição em .NET, Angular, Oracle, Kafka e Flutter.",
    og_description:
      "Mais de {years_experience} anos em sistemas de logística e distribuição. .NET, Angular, Oracle, Kafka, Flutter.",

    nav_intro: "Início",
    nav_background: "Trajetória",
    nav_work: "Projetos",
    nav_about: "Sobre",
    nav_contact: "Contato",

    hero_title: "Desenvolvedor de software. Construtor de produtos.",
    hero_text:
      "Brasileiro, com mais de {years_experience} anos entregando soluções escaláveis e performáticas para empresas do setor logístico. Também construo e opero meus próprios produtos digitais, como forma de crescer além do código.",

    btn_email: "Enviar e-mail",
    btn_resume: "Baixar currículo",
    btn_github: "GitHub",

    resume_file: "assets/Currículo Matheus Teixeira.pdf",

    /* ---------- Trajetória ---------- */
    bg_label: "Trajetória",
    now: "Hoje",

    exp_role_1: "Desenvolvedor Pleno",
    exp_desc_1: "Passagem pelos times de Plataforma de Produtos, WMS e DRP.",
    exp_desc_1_b1:
      "Projetei e automatizei o Kanban de SKUs, que antes era 100% gerenciado manualmente em planilhas Excel e exigia 5 pessoas.",
    exp_desc_1_b2:
      "Removi o endereçamento do WMS do fluxo síncrono, economizando centenas de horas dos estoquistas.",
    exp_desc_1_b3:
      "Participei da feature do DRP que redistribui estoque encalhado entre unidades em vez de gerar uma compra nova, recuperando mais de 10 milhões em produtos parados.",
    exp_role_2: "Aprendiz → Júnior → Pleno",
    exp_desc_2: "Três anos em produto logístico, chegando a pleno em 16 meses.",
    exp_desc_2_b1:
      "Referência técnica da squad, revisando o código do time e apoiando decisões técnicas e de regra de negócio.",
    exp_desc_2_b2:
      "Desenvolvedor principal da integração de um parceiro de pagamento, cheguei até a ir na cidade do cliente, a convite dele, para entender a operação de perto.",
    exp_desc_2_b3:
      "Última grande entrega: liderei desde o planejamento um aplicativo de checklist logístico de viagem, totalmente personalizável e integrado aos demais sistemas da empresa, usado para gerar mais de 5 mil checklists por mês.",

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
      "Construí o app que digitalizou os checklists de transporte logístico, com integração direta ao sistema, substituindo o processo manual. Os checklists eram totalmente personalizáveis incluindo diferentes tipos de perguntas e respostas que eram feitas pelos analistas e respondidos pelos motoristas. Atuei na criação e estruturação do mobile e também na API e sua arquitetura em camadas. Em uso em várias filiais do cliente, emitindo mais de 5 mil checklists por mês.",
    exp2_more_1_stack_api: "Stack — API: .NET 7, EF Core, DDD, API RESTful, testes unitários.",
    exp2_more_1_stack_mobile: "Mobile: Flutter, Dart, dio, provider, shared_preferences, publicado na Google Play.",
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

    proj_aura_cat: "Agenda",
    proj_aura_note:
      "App de agenda e gestão para barbearias. No ar nas duas lojas, com planos de assinatura e usuários pagantes.",

    proj_diff_cat: "Idioma",
    proj_diff_note:
      "Revisão de inglês tratada como code review, pra quem trabalha com tecnologia e não se contenta em só \"ser entendido\".",

    proj_post_cat: "Conteúdo",
    proj_post_note:
      "Transforma o print do seu app em um post pronto para o Instagram. Foi criado com o objetivo de facilitar e agilizar a criação de conteúdo sobre o Aura para as redes sociais.",

    /* ---------- Sobre ---------- */
    about_label: "Sobre",
    about_p1:
      "Atuo com desenvolvimento de software fullstack desde {career_start_year}, com foco principal na plataforma .NET. Ao longo desse período, trabalhei majoritariamente com sistemas para o setor de logística.",
    about_p2:
      "Além do trabalho como desenvolvedor, construo e opero meus próprios produtos. Um deles é um aplicativo de agenda e gestão para barbearias, lançado em 2025. Manter um sistema no ar com usuários ativos me ensinou lições que dificilmente aprenderia apenas prestando serviço para empresas, desafios que vão muito além do código e que transformaram a forma como enxergo o desenvolvimento de software.",
    about_p3:
      "Atualmente, continuo trabalhando principalmente com .NET, mas também explorando outras tecnologias. Sigo operando meus produtos e estudando continuamente, com foco especial em IA generativa.",

    /* ---------- Contato ---------- */
    contact_label: "Contato",
    back_to_top: "Voltar ao topo ↑"
  }
};
