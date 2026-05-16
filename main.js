/**
 * JAMROS.CO — Main JavaScript
 * ============================================
 * Includes:
 *  1. Bilingual System (EN / ES)
 *  2. Header Scroll Behavior
 *  3. Mobile Navigation
 *  4. Particles Canvas Animation
 *  5. Counter Animation (Stats Bar)
 *  6. Intersection Observer (Scroll Animations)
 *  7. Inventory Filter
 *  8. Contact Form Handler
 *  9. Back to Top Button
 * 10. Chart.js Financial Projections
 * ============================================
 */

'use strict';

/* =============================================
   1. BILINGUAL CONTENT (EN / ES)
   ============================================= */

const i18n = {
  en: {
    // Navigation
    nav_solution:    'Solution',
    nav_market:      'Market',
    nav_model:       'Business Model',
    nav_team:        'Team',
    nav_projections: 'Projections',
    nav_inventory:   'Inventory',
    nav_contact:     'Contact',
    nav_cta:         'Get My Car',

    // Hero
    hero_badge:    '📍 Saint Louis, Missouri',
    hero_title_1:  'YOUR NEXT',
    hero_title_2:  'CAR AWAITS',
    hero_title_3:  'AT FULL SPEED.',
    hero_subtitle: 'Verified used cars, lightning-fast financing, zero stress.<br/>The STL dealership that moves as fast as you do.',
    hero_cta_1:    'Browse Inventory',
    hero_cta_2:    'WhatsApp Us',
    trust_1:       'Verified Titles',
    trust_2:       '24h Response',
    trust_3:       'Trade-In Accepted',
    trust_4:       'Easy Financing',
    scroll_down:   'SCROLL',

    // Stats
    stat_1: 'Vehicles Sold',
    stat_2: 'Customer Satisfaction',
    stat_3: 'Avg Response Time',
    stat_4: 'Google Rating',

    // Solution
    solution_tag:      'THE SOLUTION',
    solution_title:    'Buying a Car Shouldn\'t Feel Like a Race Against Time.',
    solution_subtitle: 'Most buyers in Saint Louis waste weeks visiting dealerships, dealing with unclear titles, and struggling to get financing. Jamros changes all that.',
    problem_title:     'The Problem',
    problem_1:         'Unclear vehicle history',
    problem_2:         'Slow, complicated financing',
    problem_3:         'Dealers that ignore trade-ins',
    problem_4:         'Hidden fees and surprises',
    problem_5:         'Poor after-sale support',
    solution_col_title:'The Jamros Way',
    solution_1:        'Full title & Carfax verification',
    solution_2:        'Financing approved in hours',
    solution_3:        'We value your trade-in fairly',
    solution_4:        'Transparent pricing, no surprises',
    solution_5:        'Dedicated buyer support team',
    feat_1_title:      '100% Verified',
    feat_1_desc:       'Every vehicle passes our rigorous inspection. Clean titles, no salvage, no surprises.',
    feat_2_title:      'Speed to Market',
    feat_2_desc:       'From inquiry to keys in hand — we move at your speed. No endless waiting.',
    feat_3_title:      'Flexible Financing',
    feat_3_desc:       'Multiple lender options. Bad credit? No credit? We find a solution for you.',
    feat_4_title:      'Fair Trade-In',
    feat_4_desc:       'Bring your current vehicle and we\'ll give you a competitive offer — instantly.',

    // Market
    market_tag:         'MARKET OPPORTUNITY',
    market_title:       'Saint Louis Is a Goldmine for Used Cars.',
    market_subtitle:    'STL\'s growing population, rising demand for affordable transportation, and limited quality inventory create a perfect runway for Jamros.',
    market_stat_1:      'Metro Population',
    market_stat_1_desc: 'Greater Saint Louis metro area, one of the largest in the Midwest.',
    market_stat_2:      'Used Car Market MO',
    market_stat_2_desc: 'Missouri\'s used vehicle market annual value.',
    market_stat_3:      'YoY Demand Growth',
    market_stat_3_desc: 'Year-over-year growth in used vehicle purchases in the STL area.',
    market_stat_4:      'Buy Used vs New',
    market_stat_4_desc: 'Of STL buyers prefer used vehicles due to affordability and value.',
    competitive_title:  'Jamros Competitive Advantage',
    adv_1_title:        'Speed & Agility',
    adv_1_desc:         'While big dealers take weeks, we close deals in 24-48 hours. Modern buyers demand speed.',
    adv_2_title:        'Digital-First Approach',
    adv_2_desc:         'WhatsApp, online listings, social media — we meet buyers where they already are.',
    adv_3_title:        'Community Trust',
    adv_3_desc:         'Deep roots in STL\'s Hispanic and multicultural communities — a segment underserved by major chains.',
    adv_4_title:        'Curated Low-Overhead Inventory',
    adv_4_desc:         'Lean model with high-turnover, high-demand vehicles. Lower costs = better deals for buyers.',

    // Business Model
    model_tag:     'BUSINESS MODEL',
    model_title:   'How Jamros Generates Revenue',
    model_subtitle:'A diversified revenue model built for sustainable growth and maximum value delivery.',
    rev_1_title:   'Vehicle Sales',
    rev_1_desc:    'Direct margin on each vehicle sold. Average gross profit of $2,500–$4,500 per unit.',
    rev_2_title:   'Financing Commissions',
    rev_2_desc:    'Backend commissions from lending partners. $400–$1,200 per financed deal.',
    rev_3_title:   'Trade-In Arbitrage',
    rev_3_desc:    'Buy low on trade-ins, recondition, and resell at market value. Recurring inventory pipeline.',
    rev_4_title:   'Add-Ons & Warranties',
    rev_4_desc:    'Extended warranties, gap insurance, and service packages. High-margin supplemental revenue.',
    process_title: 'The Jamros Process',
    flow_1:        'Source',
    flow_1_desc:   'Auctions, trade-ins & private sellers',
    flow_2:        'Inspect',
    flow_2_desc:   'Full mechanical & title verification',
    flow_3:        'List',
    flow_3_desc:   'Multi-platform digital marketing',
    flow_4:        'Finance',
    flow_4_desc:   'Fast approvals with partner lenders',
    flow_5:        'Deliver',
    flow_5_desc:   'Happy customer drives away',

    // Team
    team_tag:      'THE TEAM',
    team_title:    'Driven by Passion. Powered by Expertise.',
    team_subtitle: 'A dedicated team with deep roots in Saint Louis and a passion for connecting people with their perfect car.',
    role_1:        'Founder & CEO',
    role_2:        'Finance Director',
    role_3:        'Head of Sales',
    role_4:        'Digital Marketing',
    bio_1:         '10+ years in automotive sales in the Midwest. Former finance director at major STL dealership.',
    bio_2:         'Expert in automotive lending and credit solutions. Specializes in helping buyers with diverse financial backgrounds.',
    bio_3:         'Bilingual sales professional with 7 years serving the STL community. Known for no-pressure consultative selling.',
    bio_4:         'Social media and digital advertising specialist driving Jamros\'s online presence and lead generation.',

    // Projections
    proj_tag:       'FINANCIAL PROJECTIONS',
    proj_title:     'Scaling Toward $5M+ Revenue by Year 3',
    proj_subtitle:  'Conservative projections based on current market data, average deal values, and a disciplined growth strategy.',
    kpi_1:          'Year 1 Revenue',
    kpi_1_sub:      '~35 units/month',
    kpi_2:          'Year 2 Revenue',
    kpi_2_sub:      '~70 units/month',
    kpi_3:          'Year 3 Revenue',
    kpi_3_sub:      '~130 units/month',
    kpi_4:          'Avg Gross/Unit',
    kpi_4_sub:      'Including F&I backend',
    chart_1_title:  'Revenue Growth (3 Years)',
    chart_2_title:  'Units Sold Per Month',
    chart_3_title:  'Revenue by Stream (Year 3)',
    chart_4_title:  'Gross Profit Margin',
    invest_title:   'Ready to Accelerate Growth?',
    invest_desc:    'Jamros is positioned for rapid scale. We\'re seeking strategic partners and investors who believe in the STL market opportunity.',
    invest_cta:     'Talk to Us',

    // Inventory
    inv_tag:      'FEATURED INVENTORY',
    inv_title:    'Hot Picks. Ready to Drive.',
    inv_subtitle: 'Every vehicle is inspected, verified, and priced to move. Your next car is right here.',
    filter_all:   'All Vehicles',
    filter_sedan: 'Sedans',
    filter_suv:   'SUVs',
    badge_hot:    '🔥 HOT',
    badge_deal:   '💰 BEST DEAL',
    badge_budget: '💎 VALUE',
    tag_verified: '✓ Verified',
    tag_finance:  '✓ Finance Available',
    car_inquire:  'Inquire Now',
    car_call:     'Call',
    car_wa:       'WhatsApp',
    inv_see_all:  'See Full Inventory',

    // Testimonials
    testi_tag:    'CUSTOMER REVIEWS',
    testi_title:  'Real People. Real Results.',
    testi_1:      '"Jamros helped me get my first car in less than 48 hours. They explained everything clearly and the financing was smooth. Highly recommend!"',
    testi_1_loc:  'Saint Louis, MO',
    testi_2:      '"I traded in my old car and drove off in a 2022 CR-V same day! They gave me fair value for my trade and zero pressure. This is how car buying should be."',
    testi_2_loc:  'Florissant, MO',
    testi_3:      '"El equipo de Jamros es increíble. Hablan español y me ayudaron a conseguir financiamiento aunque mi crédito no era perfecto. ¡Gracias!"',
    testi_3_loc:  'Saint Charles, MO',

    // Contact
    contact_tag:       'GET IN TOUCH',
    contact_title:     'Your Dream Car Is One Message Away.',
    contact_subtitle:  'Reach out via any channel. We respond fast — that\'s the Jamros promise.',
    channel_wa:        'Chat with us instantly',
    channel_phone:     'Call Mon–Sat 9AM–7PM',
    channel_email:     'Email us anytime',
    channel_loc_title: 'Saint Louis, Missouri',
    channel_loc:       'Serving the entire STL metro area',
    form_title:        'Send Us a Message',
    form_name:         'Your Name',
    form_phone:        'Phone / WhatsApp',
    form_interest:     'I\'m interested in...',
    form_opt_buy:      'Buying a car',
    form_opt_fin:      'Financing options',
    form_opt_trade:    'Trade-in my vehicle',
    form_opt_sell:     'Selling my car',
    form_message:      'Message (optional)',
    form_submit:       'Send Message',
    form_disclaimer:   'We respect your privacy. No spam, ever.',
    form_success_title:'Message Sent!',
    form_success_msg:  'We\'ll contact you within 24 hours. Check your WhatsApp!',

    // Footer
    footer_tagline: 'Premium used cars in Saint Louis, MO. Fast. Verified. Trusted.',
    footer_nav:     'Navigation',
    footer_services:'Services',
    footer_contact: 'Contact',
    footer_rights:  'All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms:   'Terms of Use',
    serv_1:         'Buy a Car',
    serv_2:         'Get Financing',
    serv_3:         'Trade-In',
    serv_4:         'Sell Your Car',

    // WhatsApp float
    wa_tooltip: 'Chat with us!'
  },

  es: {
    // Navegación
    nav_solution:    'Solución',
    nav_market:      'Mercado',
    nav_model:       'Modelo de Negocio',
    nav_team:        'Equipo',
    nav_projections: 'Proyecciones',
    nav_inventory:   'Inventario',
    nav_contact:     'Contacto',
    nav_cta:         'Quiero Mi Auto',

    // Hero
    hero_badge:    '📍 Saint Louis, Missouri',
    hero_title_1:  'TU PRÓXIMO',
    hero_title_2:  'AUTO TE',
    hero_title_3:  'ESPERA. RÁPIDO.',
    hero_subtitle: 'Autos usados verificados, financiamiento rápido, sin estrés.<br/>La concesionaria de STL que se mueve tan rápido como tú.',
    hero_cta_1:    'Ver Inventario',
    hero_cta_2:    'WhatsApp',
    trust_1:       'Títulos Verificados',
    trust_2:       'Respuesta en 24h',
    trust_3:       'Trade-In Aceptado',
    trust_4:       'Financiamiento Fácil',
    scroll_down:   'BAJAR',

    // Stats
    stat_1: 'Vehículos Vendidos',
    stat_2: 'Satisfacción del Cliente',
    stat_3: 'Tiempo de Respuesta',
    stat_4: 'Calificación Google',

    // Solución
    solution_tag:      'LA SOLUCIÓN',
    solution_title:    'Comprar un Auto No Debería Sentirse Como una Carrera Contra el Tiempo.',
    solution_subtitle: 'La mayoría de los compradores en Saint Louis pierden semanas visitando concesionarias, lidiando con títulos poco claros y luchando por financiamiento. Jamros cambia todo eso.',
    problem_title:     'El Problema',
    problem_1:         'Historial del vehículo poco claro',
    problem_2:         'Financiamiento lento y complicado',
    problem_3:         'Concesionarias que ignoran los trade-ins',
    problem_4:         'Cargos ocultos y sorpresas',
    problem_5:         'Poco soporte post-venta',
    solution_col_title:'El Método Jamros',
    solution_1:        'Verificación completa de título y Carfax',
    solution_2:        'Financiamiento aprobado en horas',
    solution_3:        'Valoramos tu trade-in de forma justa',
    solution_4:        'Precios transparentes, sin sorpresas',
    solution_5:        'Equipo dedicado al soporte del comprador',
    feat_1_title:      '100% Verificado',
    feat_1_desc:       'Cada vehículo pasa nuestra rigurosa inspección. Títulos limpios, sin salvage, sin sorpresas.',
    feat_2_title:      'Rapidez al Mercado',
    feat_2_desc:       'De la consulta a las llaves en mano — nos movemos a tu ritmo. Sin esperas interminables.',
    feat_3_title:      'Financiamiento Flexible',
    feat_3_desc:       '¿Mal crédito? ¿Sin crédito? Múltiples opciones de prestamistas. Encontramos una solución para ti.',
    feat_4_title:      'Trade-In Justo',
    feat_4_desc:       'Trae tu vehículo actual y te daremos una oferta competitiva — al instante.',

    // Mercado
    market_tag:         'OPORTUNIDAD DE MERCADO',
    market_title:       'Saint Louis es una Mina de Oro para los Autos Usados.',
    market_subtitle:    'La creciente población de STL, la demanda de transporte asequible y el inventario de calidad limitado crean la pista perfecta para Jamros.',
    market_stat_1:      'Población Metropolitana',
    market_stat_1_desc: 'Área metropolitana de Greater Saint Louis, una de las más grandes del Medio Oeste.',
    market_stat_2:      'Mercado Autos Usados MO',
    market_stat_2_desc: 'Valor anual del mercado de vehículos usados en Missouri.',
    market_stat_3:      'Crecimiento Anual de Demanda',
    market_stat_3_desc: 'Crecimiento año a año en compras de vehículos usados en el área de STL.',
    market_stat_4:      'Prefieren Usado vs Nuevo',
    market_stat_4_desc: 'De los compradores de STL prefieren vehículos usados por su asequibilidad y valor.',
    competitive_title:  'Ventaja Competitiva de Jamros',
    adv_1_title:        'Velocidad y Agilidad',
    adv_1_desc:         'Mientras los grandes concesionarios tardan semanas, nosotros cerramos negocios en 24-48 horas.',
    adv_2_title:        'Enfoque Digital Primero',
    adv_2_desc:         'WhatsApp, listados en línea, redes sociales — nos encontramos con los compradores donde ya están.',
    adv_3_title:        'Confianza Comunitaria',
    adv_3_desc:         'Raíces profundas en las comunidades hispanas y multiculturales de STL — un segmento desatendido.',
    adv_4_title:        'Inventario Eficiente y Curado',
    adv_4_desc:         'Modelo lean con vehículos de alta rotación y alta demanda. Menores costos = mejores precios.',

    // Modelo de Negocio
    model_tag:     'MODELO DE NEGOCIO',
    model_title:   'Cómo Genera Ingresos Jamros',
    model_subtitle:'Un modelo de ingresos diversificado construido para un crecimiento sostenible y la máxima entrega de valor.',
    rev_1_title:   'Venta de Vehículos',
    rev_1_desc:    'Margen directo en cada vehículo vendido. Ganancia bruta promedio de $2,500–$4,500 por unidad.',
    rev_2_title:   'Comisiones de Financiamiento',
    rev_2_desc:    'Comisiones de socios prestamistas. $400–$1,200 por negocio financiado.',
    rev_3_title:   'Arbitraje de Trade-In',
    rev_3_desc:    'Comprar bajo en trade-ins, reacondicionar y revender al valor del mercado.',
    rev_4_title:   'Complementos y Garantías',
    rev_4_desc:    'Garantías extendidas, seguro gap y paquetes de servicio. Ingresos suplementarios de alto margen.',
    process_title: 'El Proceso Jamros',
    flow_1:        'Fuente',
    flow_1_desc:   'Subastas, trade-ins y vendedores privados',
    flow_2:        'Inspección',
    flow_2_desc:   'Verificación mecánica y de título completa',
    flow_3:        'Publicar',
    flow_3_desc:   'Marketing digital en múltiples plataformas',
    flow_4:        'Financiar',
    flow_4_desc:   'Aprobaciones rápidas con prestamistas socios',
    flow_5:        'Entregar',
    flow_5_desc:   'Cliente feliz se va manejando',

    // Equipo
    team_tag:      'EL EQUIPO',
    team_title:    'Impulsados por Pasión. Potenciados por Experiencia.',
    team_subtitle: 'Un equipo dedicado con raíces profundas en Saint Louis y pasión por conectar personas con su auto perfecto.',
    role_1:        'Fundador y CEO',
    role_2:        'Directora de Finanzas',
    role_3:        'Jefe de Ventas',
    role_4:        'Marketing Digital',
    bio_1:         'Más de 10 años en ventas automotrices en el Medio Oeste. Ex director de finanzas en una importante concesionaria de STL.',
    bio_2:         'Experta en préstamos automotrices y soluciones de crédito. Se especializa en ayudar a compradores con diferentes perfiles financieros.',
    bio_3:         'Profesional de ventas bilingüe con 7 años sirviendo a la comunidad de STL. Conocido por su venta consultiva sin presión.',
    bio_4:         'Especialista en redes sociales y publicidad digital que impulsa la presencia en línea y la generación de leads de Jamros.',

    // Proyecciones
    proj_tag:       'PROYECCIONES FINANCIERAS',
    proj_title:     'Escalando Hacia Más de $5M en Ingresos al Año 3',
    proj_subtitle:  'Proyecciones conservadoras basadas en datos actuales del mercado, valores promedio de negocios y una estrategia de crecimiento disciplinada.',
    kpi_1:          'Ingresos Año 1',
    kpi_1_sub:      '~35 unidades/mes',
    kpi_2:          'Ingresos Año 2',
    kpi_2_sub:      '~70 unidades/mes',
    kpi_3:          'Ingresos Año 3',
    kpi_3_sub:      '~130 unidades/mes',
    kpi_4:          'Ganancia Bruta/Unidad',
    kpi_4_sub:      'Incluyendo F&I backend',
    chart_1_title:  'Crecimiento de Ingresos (3 Años)',
    chart_2_title:  'Unidades Vendidas por Mes',
    chart_3_title:  'Ingresos por Fuente (Año 3)',
    chart_4_title:  'Margen de Ganancia Bruta',
    invest_title:   '¿Listo para Acelerar el Crecimiento?',
    invest_desc:    'Jamros está posicionado para escalar rápidamente. Buscamos socios estratégicos e inversores que crean en la oportunidad del mercado de STL.',
    invest_cta:     'Hablemos',

    // Inventario
    inv_tag:      'INVENTARIO DESTACADO',
    inv_title:    'Las Mejores Opciones. Listas para Manejar.',
    inv_subtitle: 'Cada vehículo es inspeccionado, verificado y con precio para vender. Tu próximo auto está aquí.',
    filter_all:   'Todos los Vehículos',
    filter_sedan: 'Sedanes',
    filter_suv:   'SUVs',
    badge_hot:    '🔥 POPULAR',
    badge_deal:   '💰 MEJOR OFERTA',
    badge_budget: '💎 VALOR',
    tag_verified: '✓ Verificado',
    tag_finance:  '✓ Financiamiento Disponible',
    car_inquire:  'Consultar Ahora',
    car_call:     'Llamar',
    car_wa:       'WhatsApp',
    inv_see_all:  'Ver Inventario Completo',

    // Testimonios
    testi_tag:    'RESEÑAS DE CLIENTES',
    testi_title:  'Personas Reales. Resultados Reales.',
    testi_1:      '"Jamros me ayudó a conseguir mi primer auto en menos de 48 horas. Explicaron todo con claridad y el financiamiento fue muy fácil. ¡Muy recomendado!"',
    testi_1_loc:  'Saint Louis, MO',
    testi_2:      '"¡Hice trade-in de mi auto viejo y me fui manejando un CR-V 2022 el mismo día! Me dieron un valor justo y cero presión. Así debería ser la compra de autos."',
    testi_2_loc:  'Florissant, MO',
    testi_3:      '"El equipo de Jamros es increíble. Hablan español y me ayudaron a conseguir financiamiento aunque mi crédito no era perfecto. ¡Gracias!"',
    testi_3_loc:  'Saint Charles, MO',

    // Contacto
    contact_tag:       'CONTÁCTANOS',
    contact_title:     'Tu Auto de Ensueño Está a un Mensaje de Distancia.',
    contact_subtitle:  'Contáctanos por cualquier canal. Respondemos rápido — esa es la promesa de Jamros.',
    channel_wa:        'Chatea con nosotros al instante',
    channel_phone:     'Llama Lun–Sáb 9AM–7PM',
    channel_email:     'Escríbenos cuando quieras',
    channel_loc_title: 'Saint Louis, Missouri',
    channel_loc:       'Servimos a toda el área metropolitana de STL',
    form_title:        'Envíanos un Mensaje',
    form_name:         'Tu Nombre',
    form_phone:        'Teléfono / WhatsApp',
    form_interest:     'Me interesa...',
    form_opt_buy:      'Comprar un auto',
    form_opt_fin:      'Opciones de financiamiento',
    form_opt_trade:    'Hacer trade-in de mi vehículo',
    form_opt_sell:     'Vender mi auto',
    form_message:      'Mensaje (opcional)',
    form_submit:       'Enviar Mensaje',
    form_disclaimer:   'Respetamos tu privacidad. Sin spam, nunca.',
    form_success_title:'¡Mensaje Enviado!',
    form_success_msg:  'Te contactaremos en 24 horas. ¡Revisa tu WhatsApp!',

    // Footer
    footer_tagline: 'Autos usados premium en Saint Louis, MO. Rápido. Verificado. De Confianza.',
    footer_nav:     'Navegación',
    footer_services:'Servicios',
    footer_contact: 'Contacto',
    footer_rights:  'Todos los derechos reservados.',
    footer_privacy: 'Política de Privacidad',
    footer_terms:   'Términos de Uso',
    serv_1:         'Comprar un Auto',
    serv_2:         'Obtener Financiamiento',
    serv_3:         'Trade-In',
    serv_4:         'Vender Mi Auto',

    // WhatsApp float
    wa_tooltip: '¡Chatea con nosotros!'
  }
};

/* =============================================
   LANGUAGE MANAGER
   ============================================= */
const LangManager = {
  currentLang: 'en',

  init() {
    // Load preference from localStorage
    const saved = localStorage.getItem('jamros_lang');
    if (saved && (saved === 'en' || saved === 'es')) {
      this.currentLang = saved;
    }
    this.apply();
    this.bindToggle();
  },

  apply() {
    const lang = this.currentLang;
    const dict = i18n[lang];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Use innerHTML for elements that may contain HTML (e.g. <br/>)
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else if (el.tagName === 'OPTION') {
          el.textContent = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update toggle active state
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');

    // Save preference
    localStorage.setItem('jamros_lang', lang);
  },

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.apply();

    // Animate toggle button
    const btn = document.getElementById('lang-toggle');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  },

  bindToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};

/* =============================================
   2. HEADER SCROLL BEHAVIOR
   ============================================= */
const HeaderManager = {
  header: null,
  lastScroll: 0,

  init() {
    this.header = document.getElementById('site-header');
    if (!this.header) return;

    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  },

  onScroll() {
    const scrollY = window.scrollY;

    // Add scrolled class after 50px
    this.header.classList.toggle('scrolled', scrollY > 50);

    this.lastScroll = scrollY;
  }
};

/* =============================================
   3. MOBILE NAVIGATION
   ============================================= */
const MobileNav = {
  hamburger: null,
  menu: null,
  isOpen: false,

  init() {
    this.hamburger = document.getElementById('hamburger');
    this.menu      = document.getElementById('mobile-menu');
    if (!this.hamburger || !this.menu) return;

    this.hamburger.addEventListener('click', () => this.toggle());

    // Close on link click
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (this.isOpen && !this.menu.contains(e.target) && !this.hamburger.contains(e.target)) {
        this.close();
      }
    });
  },

  toggle() {
    this.isOpen ? this.close() : this.open();
  },

  open() {
    this.isOpen = true;
    this.hamburger.classList.add('open');
    this.hamburger.setAttribute('aria-expanded', 'true');
    this.menu.classList.add('open');
    this.menu.setAttribute('aria-hidden', 'false');
  },

  close() {
    this.isOpen = false;
    this.hamburger.classList.remove('open');
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.menu.classList.remove('open');
    this.menu.setAttribute('aria-hidden', 'true');
  }
};

/* =============================================
   4. PARTICLES CANVAS ANIMATION
   ============================================= */
const ParticlesManager = {
  canvas: null,
  ctx: null,
  particles: [],
  animId: null,
  W: 0,
  H: 0,
  COUNT: 80,

  init() {
    this.canvas = document.getElementById('particles-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    }, { passive: true });
  },

  resize() {
    this.W = this.canvas.width  = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  },

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.COUNT; i++) {
      this.particles.push(this.newParticle());
    }
  },

  newParticle(reset = false) {
    return {
      x:       reset ? Math.random() * this.W : Math.random() * this.W,
      y:       reset ? -10 : Math.random() * this.H,
      vx:      (Math.random() - 0.5) * 0.4,
      vy:      Math.random() * 0.5 + 0.1,
      radius:  Math.random() * 1.5 + 0.3,
      alpha:   Math.random() * 0.5 + 0.1,
      color:   Math.random() > 0.5 ? '0,212,255' : '255,60,0'
    };
  },

  animate() {
    this.ctx.clearRect(0, 0, this.W, this.H);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Reset if out of bounds
      if (p.y > this.H + 5) {
        this.particles[i] = this.newParticle(true);
        continue;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      this.ctx.fill();
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
};

/* =============================================
   5. COUNTER ANIMATION (Stats Bar)
   ============================================= */
const CounterManager = {
  init() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => obs.observe(c));
  },

  animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
};

/* =============================================
   6. INTERSECTION OBSERVER (Scroll Animations)
   ============================================= */
const ScrollAnimator = {
  init() {
    const elements = document.querySelectorAll(
      '.fade-up, .fade-left, .stagger-children, ' +
      '.feature-card, .market-card, .revenue-card, ' +
      '.team-card, .car-card, .testi-card, .kpi-card, ' +
      '.chart-wrapper, .advantage-item, .vs-column'
    );

    // Add fade-up to elements that don't have an animation class
    elements.forEach(el => {
      if (!el.classList.contains('fade-up') &&
          !el.classList.contains('fade-left') &&
          !el.classList.contains('stagger-children')) {
        el.classList.add('fade-up');
      }
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up, .fade-left, .stagger-children').forEach(el => {
      obs.observe(el);
    });
  }
};

/* =============================================
   7. INVENTORY FILTER
   ============================================= */
const InventoryFilter = {
  init() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards      = document.querySelectorAll('.car-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const show = filter === 'all' || category === filter;

          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          if (show) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = '';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }
};

/* =============================================
   8. CONTACT FORM HANDLER
   ============================================= */
const FormHandler = {
  init() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const lang = LangManager.currentLang;

      // Basic validation
      const name  = form.querySelector('#name').value.trim();
      const phone = form.querySelector('#phone').value.trim();

      if (!name || !phone) {
        this.showError(form, lang === 'es' ? 'Por favor completa los campos requeridos.' : 'Please fill in required fields.');
        return;
      }

      // Simulate submission (since this is a static site)
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${lang === 'es' ? 'Enviando...' : 'Sending...'}`;

      // Simulate async delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success state
      form.style.display   = 'none';
      success.style.display = 'block';

      // Redirect to WhatsApp with pre-filled message
      const interest = form.querySelector('#interest').value;
      const message  = form.querySelector('#message').value;
      const waMsg = lang === 'es'
        ? `Hola Jamros! Mi nombre es ${name}. Me interesa: ${interest}. ${message}`
        : `Hi Jamros! My name is ${name}. I'm interested in: ${interest}. ${message}`;

      setTimeout(() => {
        const waUrl = `https://wa.me/13145550100?text=${encodeURIComponent(waMsg)}`;
        window.open(waUrl, '_blank');
      }, 1000);
    });
  },

  showError(form, msg) {
    let errEl = form.querySelector('.form-error');
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.className = 'form-error';
      errEl.style.cssText = 'color: #ff3c00; font-size: 0.85rem; margin-bottom: 1rem; text-align: center;';
      form.insertBefore(errEl, form.querySelector('button[type="submit"]'));
    }
    errEl.textContent = msg;
    setTimeout(() => { if (errEl.parentNode) errEl.remove(); }, 4000);
  }
};

/* =============================================
   9. BACK TO TOP BUTTON
   ============================================= */
const BackToTop = {
  btn: null,

  init() {
    this.btn = document.getElementById('back-to-top');
    if (!this.btn) return;

    window.addEventListener('scroll', () => {
      this.btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* =============================================
   10. CHART.JS — FINANCIAL PROJECTIONS
   ============================================= */
const ChartsManager = {
  charts: {},

  chartDefaults: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#8888aa',
          font: { family: 'Inter', size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(9,9,18,0.95)',
        borderColor: 'rgba(0,212,255,0.3)',
        borderWidth: 1,
        titleColor: '#f0f0f8',
        bodyColor: '#8888aa',
        padding: 12
      }
    },
    scales: {
      x: {
        grid:  { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: '#8888aa', font: { family: 'Inter', size: 11 } }
      },
      y: {
        grid:  { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: '#8888aa', font: { family: 'Inter', size: 11 } }
      }
    }
  },

  init() {
    if (typeof Chart === 'undefined') return;

    // Set global Chart.js defaults
    Chart.defaults.color = '#8888aa';
    Chart.defaults.font.family = 'Inter';

    this.initRevenueChart();
    this.initUnitsChart();
    this.initRevenueStreamChart();
    this.initMarginChart();

    // Observe charts section to animate on scroll
    const section = document.getElementById('projections');
    if (section) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCharts();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      obs.observe(section);
    }
  },

  initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    this.charts.revenue = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1 Y1', 'Q2 Y1', 'Q3 Y1', 'Q4 Y1', 'Q1 Y2', 'Q2 Y2', 'Q3 Y2', 'Q4 Y2', 'Q1 Y3', 'Q2 Y3', 'Q3 Y3', 'Q4 Y3'],
        datasets: [{
          label: 'Revenue ($)',
          data: [210000, 280000, 330000, 380000, 550000, 650000, 750000, 850000, 1100000, 1250000, 1450000, 1600000],
          backgroundColor: ctx => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, 'rgba(255,60,0,0.8)');
            gradient.addColorStop(1, 'rgba(255,60,0,0.1)');
            return gradient;
          },
          borderColor: '#ff3c00',
          borderWidth: 1,
          borderRadius: 6,
        }]
      },
      options: {
        ...this.chartDefaults,
        plugins: {
          ...this.chartDefaults.plugins,
          legend: { display: false },
          tooltip: {
            ...this.chartDefaults.plugins.tooltip,
            callbacks: {
              label: (ctx) => ` $${(ctx.raw/1000).toFixed(0)}K`
            }
          }
        },
        scales: {
          ...this.chartDefaults.scales,
          y: {
            ...this.chartDefaults.scales.y,
            ticks: {
              ...this.chartDefaults.scales.y.ticks,
              callback: (v) => `$${(v/1000).toFixed(0)}K`
            }
          }
        }
      }
    });
  },

  initUnitsChart() {
    const ctx = document.getElementById('unitsChart');
    if (!ctx) return;

    this.charts.units = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Year 1',
            data: [20, 22, 28, 30, 32, 35, 38, 35, 38, 40, 42, 45],
            borderColor: 'rgba(0,212,255,0.8)',
            backgroundColor: 'rgba(0,212,255,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#00d4ff'
          },
          {
            label: 'Year 2',
            data: [50, 55, 60, 62, 65, 68, 72, 70, 75, 78, 82, 85],
            borderColor: 'rgba(255,60,0,0.8)',
            backgroundColor: 'rgba(255,60,0,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#ff3c00'
          },
          {
            label: 'Year 3',
            data: [95, 100, 108, 112, 118, 122, 128, 125, 132, 138, 142, 150],
            borderColor: 'rgba(0,255,140,0.8)',
            backgroundColor: 'rgba(0,255,140,0.06)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#00ff8c'
          }
        ]
      },
      options: {
        ...this.chartDefaults,
        plugins: {
          ...this.chartDefaults.plugins,
          legend: {
            labels: { color: '#8888aa', font: { family: 'Inter', size: 11 } }
          }
        }
      }
    });
  },

  initRevenueStreamChart() {
    const ctx = document.getElementById('revenueStreamChart');
    if (!ctx) return;

    this.charts.stream = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Vehicle Sales', 'Financing', 'Trade-In', 'Add-Ons'],
        datasets: [{
          data: [65, 20, 10, 5],
          backgroundColor: [
            'rgba(255,60,0,0.8)',
            'rgba(0,212,255,0.8)',
            'rgba(255,204,0,0.8)',
            'rgba(0,255,140,0.8)'
          ],
          borderColor: '#050508',
          borderWidth: 3,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#8888aa',
              padding: 16,
              font: { family: 'Inter', size: 11 }
            }
          },
          tooltip: {
            ...this.chartDefaults.plugins.tooltip,
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw}%`
            }
          }
        }
      }
    });
  },

  initMarginChart() {
    const ctx = document.getElementById('marginChart');
    if (!ctx) return;

    this.charts.margin = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Y1 Q1', 'Y1 Q2', 'Y1 Q3', 'Y1 Q4', 'Y2 Q1', 'Y2 Q2', 'Y2 Q3', 'Y2 Q4', 'Y3 Q1', 'Y3 Q2', 'Y3 Q3', 'Y3 Q4'],
        datasets: [
          {
            label: 'Gross Margin %',
            data: [22, 23, 24, 25, 26, 27, 27, 28, 28, 29, 30, 31],
            borderColor: 'rgba(255,204,0,0.9)',
            backgroundColor: 'rgba(255,204,0,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: '#ffcc00',
            borderWidth: 2
          },
          {
            label: 'Net Margin %',
            data: [8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 17, 18],
            borderColor: 'rgba(0,255,140,0.8)',
            backgroundColor: 'rgba(0,255,140,0.06)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: '#00ff8c',
            borderWidth: 2
          }
        ]
      },
      options: {
        ...this.chartDefaults,
        plugins: {
          ...this.chartDefaults.plugins,
          legend: {
            labels: { color: '#8888aa', font: { family: 'Inter', size: 11 } }
          }
        },
        scales: {
          ...this.chartDefaults.scales,
          y: {
            ...this.chartDefaults.scales.y,
            ticks: {
              ...this.chartDefaults.scales.y.ticks,
              callback: (v) => `${v}%`
            }
          }
        }
      }
    });
  },

  animateCharts() {
    // Charts auto-animate on creation, so this is just a hook for future use
    Object.values(this.charts).forEach(chart => {
      if (chart && chart.update) chart.update('active');
    });
  }
};

/* =============================================
   11. SMOOTH SCROLL & ACTIVE NAV
   ============================================= */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }
};

/* =============================================
   12. SCROLL FADE ANIMATION SETUP
   ============================================= */
const AnimationSetup = {
  init() {
    // Add fade-up classes to key sections
    const targets = [
      '.section-tag', '.section-title', '.section-subtitle',
      '.subsection-title', '.feature-card', '.market-card',
      '.revenue-card', '.team-card', '.car-card', '.testi-card',
      '.kpi-card', '.chart-wrapper', '.advantage-item',
      '.vs-column', '.competitive-section', '.process-flow',
      '.investment-block', '.contact-channel', '.proj-kpis'
    ];

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (!el.classList.contains('fade-up')) {
          el.classList.add('fade-up');
          el.style.transitionDelay = `${(i % 6) * 0.08}s`;
        }
        obs.observe(el);
      });
    });
  }
};

/* =============================================
   MAIN INIT — Run when DOM is ready
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  LangManager.init();
  HeaderManager.init();
  MobileNav.init();
  ParticlesManager.init();
  CounterManager.init();
  AnimationSetup.init();
  InventoryFilter.init();
  FormHandler.init();
  BackToTop.init();
  SmoothScroll.init();

  // Charts need slight delay to ensure canvas is visible
  setTimeout(() => {
    ChartsManager.init();
  }, 300);

  // Performance: Preload critical assets
  console.log('🚗 JAMROS.co — Loaded and ready to race!');
});

/* =============================================
   WINDOW LOAD — Heavy asset complete
   ============================================= */
window.addEventListener('load', () => {
  // Remove any loading states
  document.body.classList.add('loaded');
});
