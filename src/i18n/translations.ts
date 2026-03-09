export const supportedLanguages = ['en', 'es'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

type TranslationShape = {
  htmlLang: string;
  metaDescription: string;
  pageTitle: string;
  langLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    ariaLabel: string;
    digitalArtTitle: string;
    digitalArtCopy: string;
    craftedArtTitle: string;
    craftedArtCopy: string;
    softwareArtifactsTitle: string;
    softwareArtifactsCopy: string;
  };
  proof: {
    ariaLabel: string;
    title: string;
    point1: string;
    point2: string;
    point3: string;
  };
  lead: {
    ariaLabel: string;
    title: string;
    copy: string;
    nameLabel: string;
    emailLabel: string;
    interestLabel: string;
    interestPlaceholder: string;
    interestOptionDigital: string;
    interestOptionCrafted: string;
    interestOptionSoftware: string;
    interestOptionMultiple: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submit: string;
  };
};

export const translations: Record<SupportedLanguage, TranslationShape> = {
  en: {
    htmlLang: 'en',
    metaDescription:
      'Cat Gogh Studio sells digital art, handcrafted art, and software artifacts for modern brands and creators.',
    pageTitle: 'Cat Gogh Studio | Art + Software Artifacts',
    langLabel: 'Language',
    hero: {
      eyebrow: 'Cat Gogh Studio',
      title: 'Professional creative products at the intersection of art and software.',
      copy:
        'We help creators, teams, and businesses stand out with premium digital art, handcrafted art pieces, and production-ready software artifacts. Built with taste, delivered with reliability.',
      ctaPrimary: 'Get pricing & availability',
      ctaSecondary: 'Email the studio',
    },
    services: {
      ariaLabel: 'What we offer',
      digitalArtTitle: 'Digital Art',
      digitalArtCopy:
        'Illustrations, character packs, assets, and branded visual systems ready for web, social, and product use.',
      craftedArtTitle: 'Crafted Art Shop',
      craftedArtCopy:
        'Handcrafted pieces made in small batches for collectors, creative workspaces, and gift-ready orders.',
      softwareArtifactsTitle: 'Software Artifacts',
      softwareArtifactsCopy:
        'High-quality software components, internal tools, and polished product deliverables that teams can ship fast.',
    },
    proof: {
      ariaLabel: 'Why clients choose us',
      title: 'Why Cat Gogh Studio',
      point1: '<strong>Cross-disciplinary expertise:</strong> one partner for visual quality and technical execution.',
      point2: '<strong>Business-friendly delivery:</strong> clear scope, timelines, and communication.',
      point3: '<strong>Scalable output:</strong> from one-off commissions to ongoing collaboration.',
    },
    lead: {
      ariaLabel: 'Lead capture form',
      title: 'Tell us what you need',
      copy: 'Share a few details and we’ll respond with the best next step, pricing direction, and availability.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      interestLabel: 'Primary interest',
      interestPlaceholder: 'Select one',
      interestOptionDigital: 'Digital art',
      interestOptionCrafted: 'Crafted art shop',
      interestOptionSoftware: 'Software artifacts',
      interestOptionMultiple: 'Multiple services',
      detailsLabel: 'Project details',
      detailsPlaceholder: 'Goals, timeline, and budget range',
      submit: 'Request a consultation',
    },
  },
  es: {
    htmlLang: 'es',
    metaDescription:
      'Cat Gogh Studio vende arte digital, arte artesanal y productos de software para marcas y creadores modernos.',
    pageTitle: 'Cat Gogh Studio | Arte + Productos de Software',
    langLabel: 'Idioma',
    hero: {
      eyebrow: 'Cat Gogh Studio',
      title: 'Productos creativos profesionales en la intersección entre arte y software.',
      copy:
        'Ayudamos a creadores, equipos y negocios a destacar con arte digital premium, piezas artesanales y productos de software listos para producción. Diseñados con gusto, entregados con confiabilidad.',
      ctaPrimary: 'Solicitar precios y disponibilidad',
      ctaSecondary: 'Escribir al estudio',
    },
    services: {
      ariaLabel: 'Qué ofrecemos',
      digitalArtTitle: 'Arte Digital',
      digitalArtCopy:
        'Ilustraciones, paquetes de personajes, assets y sistemas visuales de marca listos para web, redes sociales y producto.',
      craftedArtTitle: 'Tienda de Arte Artesanal',
      craftedArtCopy:
        'Piezas hechas a mano en lotes pequeños para coleccionistas, espacios creativos y pedidos para regalo.',
      softwareArtifactsTitle: 'Productos de Software',
      softwareArtifactsCopy:
        'Componentes de software de alta calidad, herramientas internas y entregables pulidos para lanzar rápido.',
    },
    proof: {
      ariaLabel: 'Por qué nos eligen nuestros clientes',
      title: 'Por qué Cat Gogh Studio',
      point1: '<strong>Experiencia multidisciplinaria:</strong> un solo aliado para calidad visual y ejecución técnica.',
      point2: '<strong>Entrega orientada al negocio:</strong> alcance, tiempos y comunicación claros.',
      point3: '<strong>Producción escalable:</strong> desde encargos puntuales hasta colaboraciones continuas.',
    },
    lead: {
      ariaLabel: 'Formulario de contacto',
      title: 'Cuéntanos lo que necesitas',
      copy: 'Comparte algunos detalles y te responderemos con el siguiente mejor paso, orientación de precio y disponibilidad.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      interestLabel: 'Interés principal',
      interestPlaceholder: 'Selecciona una opción',
      interestOptionDigital: 'Arte digital',
      interestOptionCrafted: 'Tienda de arte artesanal',
      interestOptionSoftware: 'Productos de software',
      interestOptionMultiple: 'Múltiples servicios',
      detailsLabel: 'Detalles del proyecto',
      detailsPlaceholder: 'Objetivos, plazos y rango de presupuesto',
      submit: 'Solicitar una consulta',
    },
  },
};

export const defaultLanguage: SupportedLanguage = 'en';

export const normalizeLanguage = (value?: string | null): SupportedLanguage => {
  if (!value) {
    return defaultLanguage;
  }

  const shortCode = value.toLowerCase().split('-')[0];
  return supportedLanguages.includes(shortCode as SupportedLanguage)
    ? (shortCode as SupportedLanguage)
    : defaultLanguage;
};
