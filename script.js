const translations = {
  es: {
    skip: 'Ir al contenido', navLabel: 'Navegación principal', languageLabel: 'Idioma',
    navResearch: 'Investigación', navPublications: 'Publicaciones', navEducation: 'Formación', navContact: 'Contacto',
    profession: 'Economista · Doctor en Economía',
    profileTitle: 'Sobre mí',
    profileOne: 'Soy economista y doctor en Economía por la Universidad Nacional del Sur, y magíster en Inteligencia de Datos por la Universidad Nacional de La Plata. Soy becario posdoctoral del CONICET y docente de la Universidad Nacional del Sur.',
    profileTwo: 'Mi investigación aborda los mercados inmobiliarios, los precios minoristas y las redes sociales digitales. Trabajo con información en línea y métodos de econometría, aprendizaje automático y análisis de redes.',
    researchTitle: 'Líneas de investigación', researchHousingTitle: 'Mercados inmobiliarios',
    researchHousingText: 'Precios de la vivienda, atributos de los inmuebles y su entorno. Valoración con datos en línea, econometría espacial y aprendizaje automático.',
    researchPricesTitle: 'Precios minoristas', researchPricesText: 'Dinámica de precios, promociones y liderazgo de precios en mercados de alimentos. Análisis de información obtenida de comercios en línea.',
    researchNetworksTitle: 'Redes sociales y pobreza', researchNetworksText: 'Redes sociales digitales, capital social y pobreza urbana. Estructura e interacciones en entornos urbanos.',
    publicationsTitle: 'Publicaciones seleccionadas', allPublications: 'Ver más publicaciones en ORCID',
    educationTitle: 'Formación', mastersTitle: 'Magíster en Inteligencia de Datos', mastersText: 'Orientación Big Data · Universidad Nacional de La Plata', phdTitle: 'Doctor en Economía', bachelorTitle: 'Licenciado en Economía', contactTitle: 'Contacto',
    title: 'Emiliano Martín Gutierrez | Investigación',
    description: 'Emiliano Martín Gutierrez. Economista, doctor en Economía y magíster en Inteligencia de Datos. Investigación, publicaciones y contacto.'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', languageLabel: 'Language',
    navResearch: 'Research', navPublications: 'Publications', navEducation: 'Education', navContact: 'Contact',
    profession: 'Economist · Ph.D. in Economics',
    profileTitle: 'About me',
    profileOne: 'I am an economist with a Ph.D. in Economics from Universidad Nacional del Sur and an M.Sc. in Data Intelligence from Universidad Nacional de La Plata. I am a postdoctoral research fellow at CONICET and a lecturer at Universidad Nacional del Sur.',
    profileTwo: 'My research focuses on housing markets, retail prices and digital social networks. I work with online data and methods from econometrics, machine learning and network analysis.',
    researchTitle: 'Research interests', researchHousingTitle: 'Housing markets',
    researchHousingText: 'Housing prices, property characteristics and neighborhood attributes. Valuation using online data, spatial econometrics and machine learning.',
    researchPricesTitle: 'Retail prices', researchPricesText: 'Price dynamics, promotions and price leadership in food markets. Analysis of data collected from online retailers.',
    researchNetworksTitle: 'Social networks and poverty', researchNetworksText: 'Digital social networks, social capital and urban poverty. Network structure and interactions in urban settings.',
    publicationsTitle: 'Selected publications', allPublications: 'More publications on ORCID',
    educationTitle: 'Education', mastersTitle: 'M.Sc. in Data Intelligence', mastersText: 'Big Data track · Universidad Nacional de La Plata', phdTitle: 'Ph.D. in Economics', bachelorTitle: 'B.A. in Economics', contactTitle: 'Contact',
    title: 'Emiliano Martín Gutierrez | Research',
    description: 'Emiliano Martín Gutierrez. Economist, Ph.D. in Economics and M.Sc. in Data Intelligence. Research, publications and contact.'
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
