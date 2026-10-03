const translations = {
  es: {
    skip: 'Ir al contenido', navLabel: 'Navegación principal', languageLabel: 'Idioma',
    navResearch: 'Investigación', navProjects: 'Proyectos', navPublications: 'Publicaciones', navTeaching: 'Docencia', navEducation: 'Formación', navContact: 'Contacto',
    profession: 'Economista · Doctor en Economía',
    profileTitle: 'Sobre mí',
    profileOne: 'Soy economista y doctor en Economía por la Universidad Nacional del Sur, y magíster en Inteligencia de Datos por la Universidad Nacional de La Plata. Soy becario posdoctoral del CONICET y docente de la Universidad Nacional del Sur.',
    profileTwo: 'Mi investigación aborda los mercados inmobiliarios, los precios minoristas y las redes sociales digitales. Trabajo con información en línea y métodos de econometría, aprendizaje automático y análisis de redes.',
    researchTitle: 'Líneas de investigación', researchHousingTitle: 'Mercados inmobiliarios',
    researchHousingText: 'Precios de la vivienda, atributos de los inmuebles y su entorno. Valoración con datos en línea, econometría espacial y aprendizaje automático.',
    researchPricesTitle: 'Precios minoristas', researchPricesText: 'Dinámica de precios, promociones y liderazgo de precios en mercados de alimentos. Análisis de información obtenida de comercios en línea.',
    researchNetworksTitle: 'Redes sociales y pobreza', researchNetworksText: 'Redes sociales digitales, capital social y pobreza urbana. Estructura e interacciones en entornos urbanos.',
    projectsTitle: 'Proyectos de investigación', director: 'Director', coDirector: 'Co-director',
    projectPricesTitle: 'Evolución de precios semanales en aceleración inflacionaria: determinantes de volatilidad, predicción temporal, dispersión y liderazgo de precios a nivel de agrupamientos y productos',
    projectNetworksTitle: 'Tres casos de análisis de redes sociales aplicado en Argentina: la influencia socioeconómica de linajes históricos, microdimensiones de la vida en línea y redes de parentesco y conflicto en una colonia menonita',
    projectTandilTitle: 'Índice de Precios al Consumidor (IPC) de Tandil mediante datos en línea',
    projectTandilInstitution: 'Jóvenes Investigadores (JOVIN) · Universidad Nacional del Centro de la Provincia de Buenos Aires, Argentina',
    publicationsTitle: 'Publicaciones seleccionadas', allPublications: 'Ver más publicaciones en ORCID',
    teachingTitle: 'Docencia', teachingCurrent: '2024–actualidad',
    teachingSystems: 'Sistemas Económicos', teachingSystemsRole: 'Asistente de docencia · Universidad Nacional del Sur, Argentina',
    teachingEconometrics: 'Econometría I y II', teachingEconometricsRole: 'Ayudante de docencia · Universidad Nacional del Sur, Argentina',
    teachingUnicen: 'Profesor Adjunto', teachingUnicenInstitution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires, Argentina',
    teachingIndicators: 'Indicadores Económicos y Cuentas Nacionales', teachingIndicatorsRole: 'Asistente de docencia · Universidad Nacional del Sur, Argentina',
    teachingPrevious: 'Ayudante de docencia en distintas asignaturas', teachingPreviousInstitution: 'Universidad Nacional del Sur, Argentina',
    educationTitle: 'Formación',
    mastersTitle: 'Magíster en Inteligencia de Datos', mastersText: 'Orientación Big Data · Universidad Nacional de La Plata, Argentina',
    phdTitle: 'Doctor en Economía', phdText: 'Universidad Nacional del Sur, Argentina',
    bachelorTitle: 'Licenciado en Economía', bachelorText: 'Universidad Nacional del Sur, Argentina',
    thesisLabel: 'Tesis:',
    mastersThesis: 'Valoración de viviendas urbanas en Argentina utilizando técnicas de Machine Learning. Interpretabilidad de los modelos obtenidos.',
    phdThesis: 'Estudios de pobreza, estructuras de redes y grandes datos en línea para la ciudad de Bahía Blanca.',
    contactTitle: 'Contacto',
    title: 'Emiliano Martín Gutierrez | Investigación',
    description: 'Emiliano Martín Gutierrez. Economista, doctor en Economía y magíster en Inteligencia de Datos. Investigación, publicaciones, docencia y contacto.'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', languageLabel: 'Language',
    navResearch: 'Research', navProjects: 'Projects', navPublications: 'Publications', navTeaching: 'Teaching', navEducation: 'Education', navContact: 'Contact',
    profession: 'Economist · Ph.D. in Economics',
    profileTitle: 'About me',
    profileOne: 'I am an economist with a Ph.D. in Economics from Universidad Nacional del Sur and an M.Sc. in Data Intelligence from Universidad Nacional de La Plata. I am a postdoctoral fellow at CONICET and teach at Universidad Nacional del Sur.',
    profileTwo: 'My research focuses on housing markets, retail prices, and digital social networks. I use online data, econometrics, machine learning, and network analysis.',
    researchTitle: 'Research interests', researchHousingTitle: 'Housing markets',
    researchHousingText: 'Housing prices, property characteristics, and neighborhood attributes. Valuation with online data, spatial econometrics, and machine learning.',
    researchPricesTitle: 'Retail prices', researchPricesText: 'Price dynamics, promotions, and price leadership in food markets using data collected from online retailers.',
    researchNetworksTitle: 'Social networks and poverty', researchNetworksText: 'Digital social networks, social capital, and urban poverty, with a focus on network structure and interactions.',
    projectsTitle: 'Research projects', director: 'Director', coDirector: 'Co-director',
    projectPricesTitle: 'Weekly price dynamics under accelerating inflation: volatility, forecasting, price dispersion, and price leadership across product groups and individual products',
    projectNetworksTitle: 'Three applications of social network analysis in Argentina: historical lineages, online life, and kinship and conflict networks in a Mennonite colony',
    projectTandilTitle: 'Online Consumer Price Index (CPI) for Tandil',
    projectTandilInstitution: 'Young Researchers Program (JOVIN) · Universidad Nacional del Centro de la Provincia de Buenos Aires, Argentina',
    publicationsTitle: 'Selected publications', allPublications: 'More publications on ORCID',
    teachingTitle: 'Teaching experience', teachingCurrent: '2024–present',
    teachingSystems: 'Economic Systems', teachingSystemsRole: 'Assistant Lecturer · Universidad Nacional del Sur, Argentina',
    teachingEconometrics: 'Econometrics I and II', teachingEconometricsRole: 'Teaching Assistant · Universidad Nacional del Sur, Argentina',
    teachingUnicen: 'Adjunct Professor', teachingUnicenInstitution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires, Argentina',
    teachingIndicators: 'Economic Indicators and National Accounts', teachingIndicatorsRole: 'Assistant Lecturer · Universidad Nacional del Sur, Argentina',
    teachingPrevious: 'Teaching Assistant in various courses', teachingPreviousInstitution: 'Universidad Nacional del Sur, Argentina',
    educationTitle: 'Education',
    mastersTitle: 'M.Sc. in Data Intelligence', mastersText: 'Big Data track · Universidad Nacional de La Plata, Argentina',
    phdTitle: 'Ph.D. in Economics', phdText: 'Universidad Nacional del Sur, Argentina',
    bachelorTitle: 'Licenciatura in Economics (five-year undergraduate degree)', bachelorText: 'Universidad Nacional del Sur, Argentina',
    thesisLabel: 'Thesis:',
    mastersThesis: 'Urban housing valuation in Argentina using machine learning techniques. Interpretability of the resulting models.',
    phdThesis: 'Studies on poverty, network structures, and online big data for the city of Bahía Blanca.',
    contactTitle: 'Contact',
    title: 'Emiliano Martín Gutierrez | Research',
    description: 'Emiliano Martín Gutierrez. Economist with a Ph.D. in Economics and an M.Sc. in Data Intelligence. Research, publications, teaching, and contact.'
  }
};

function setLanguage(language) {
  const text = translations[language];
  if (!text) return;
  document.documentElement.lang = language;
  document.title = text.title;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = text[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', text[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  try { localStorage.setItem('emg-language', language); } catch (_) { /* Language selection also works without browser storage. */ }
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

try {
  const savedLanguage = localStorage.getItem('emg-language');
  if (translations[savedLanguage]) setLanguage(savedLanguage);
} catch (_) { /* Keep the Spanish default. */ }
