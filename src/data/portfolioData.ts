import { Project, ServiceItem, Testimonial } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'hotel-nosy-be',
    num: '01',
    category: 'Site Vitrine & Réservation',
    sector: 'hotel',
    name: 'Hôtel Baie Bleue Nosy Be',
    clientLocation: 'Nosy Be, Madagascar',
    tagline: 'Expérience éco-lodge de luxe en bord d’océan Indien',
    description: 'Conception d’un site vitrine haut de gamme avec moteur de réservation en direct, galerie immersive 4K et synchronisation WhatsApp Conciergerie pour les touristes internationaux et locaux.',
    metrics: [
      { label: 'Réservations directes', value: '+185%' },
      { label: 'Temps de chargement', value: '0.7s (4G)' },
      { label: 'Taux de conversion', value: '4.8%' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Direct WhatsApp API', 'SEO Multilingue (FR/EN/IT)'],
    desktopImage: 'https://images.unsplash.com/photo-1582719478250-c89d14b402b8?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    ],
    demoUrl: 'https://hotel-nosybe-demo.pixelstudio.mg',
    testimonial: {
      quote: 'PixelStudio a livré notre nouveau site en seulement 48 heures avant l’ouverture de la saison touristique. Nous recevons des demandes de réservation quotidiennes sans payer de commission Booking.com !',
      author: 'Andry R.',
      role: 'Directeur Général, Hôtel Baie Bleue',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'boutique-tana',
    num: '02',
    category: 'E-commerce & Catalogue MVola',
    sector: 'ecommerce',
    name: 'Maison Soie & Coton Tana',
    clientLocation: 'Analakely, Antananarivo',
    tagline: 'Mode éthique, soieries sauvages et créations malgaches',
    description: 'Plateforme e-commerce ultra-fluide pensée pour les acheteurs sur smartphone à Madagascar. Intégration de commande simplifiée en 1 clic par WhatsApp et instructions de paiement instantané MVola/Orange Money.',
    metrics: [
      { label: 'Ventes en ligne', value: 'x3.2' },
      { label: 'Paniers validés par MVola', value: '74%' },
      { label: 'Visiteurs mobiles', value: '92%' },
    ],
    technologies: ['Next.js', 'Boutique Express', 'Mobile Money Ready', 'WhatsApp Checkout'],
    desktopImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'
    ],
    demoUrl: 'https://maison-soie-tana.pixelstudio.mg',
    testimonial: {
      quote: 'Avant, nos clients se perdaient dans nos albums Facebook. Maintenant, ils ont un vrai catalogue clair avec boutons MVola. Notre image de marque a franchi un cap.',
      author: 'Fanja Ravelomanana',
      role: 'Fondatrice & Styliste',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'restaurant-tamatave',
    num: '03',
    category: 'Landing Page & Menu QR Code',
    sector: 'restaurant',
    name: 'Le Baobab Gourmand',
    clientLocation: 'Bord de mer, Tamatave',
    tagline: 'Cuisine fusion créole et fruits de mer frais du canal des Pangalanes',
    description: 'Création d’une landing page gastronomique interactive avec menu dynamique optimisé pour QR code sur table, géolocalisation Waze/Google Maps et module de réservation de table en direct.',
    metrics: [
      { label: 'Scans du menu QR', value: '1,200+/semaine' },
      { label: 'Avis Google 5 étoiles', value: '+45 ce mois' },
      { label: 'Temps de réponse', value: '450ms' },
    ],
    technologies: ['PWA Fast Cache', 'QR Code Generator', 'Google Maps API', 'Local SEO Toamasina'],
    desktopImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338988691282?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
    ],
    demoUrl: 'https://baobab-gourmand.pixelstudio.mg',
    testimonial: {
      quote: 'Les clients scannent le QR code à table, voient les photos haute définition de nos plats et commandent directement. Le site a été configuré et livré en 36h chrono !',
      author: 'Chef Heriniaina',
      role: 'Chef Propriétaire',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'excursions-madagascar',
    num: '04',
    category: 'Portail Tourisme & Aventures',
    sector: 'service',
    name: 'Madagascar Discovery Tours',
    clientLocation: 'Ivato, Antananarivo',
    tagline: 'Circuits authentiques Tsingy de Bemaraha & Allée des Baobabs',
    description: 'Portail immersif pour agence de voyage réceptive avec itinéraires pas-à-pas, devis sur-mesure en Ariary et en Devises, et témoignages clients vérifiés.',
    metrics: [
      { label: 'Demandes de circuits', value: '+210%' },
      { label: 'Trafic international', value: '68% France/EU' },
      { label: 'Optimisation SEO', value: 'Position #1' },
    ],
    technologies: ['Vite + React', 'Calculateur de Circuits', 'Stripe & MVola', 'Multilingue'],
    desktopImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    demoUrl: 'https://mada-discovery.pixelstudio.mg',
    testimonial: {
      quote: 'Une présentation ultra-pro qui rassure immédiatement les voyageurs étrangers. PixelStudio est sans conteste le meilleur studio web de Tana.',
      author: 'Tsiry Rakotomalala',
      role: 'Fondateur, Mada Discovery',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const SERVICES_DETAILED: ServiceItem[] = [
  {
    num: '01',
    title: 'Site Vitrine Express 48h',
    subtitle: 'Idéal pour artisans, cabinets, commerces & professions libérales',
    description: 'Un site web moderne, rapide et percutant conçu pour asseoir votre crédibilité, présenter vos prestations et convertir chaque visiteur en appel ou message WhatsApp.',
    deliverables: [
      'Design sur-mesure responsive (Mobile & Desktop)',
      'Livraison clé en main en 48 heures',
      'Bouton d’action direct WhatsApp & Appel',
      'Référencement local Google Madagascar inclus',
      'Nom de domaine offert pendant 1 an'
    ],
    deliveryTime: '48 heures chrono',
    startingPriceMGA: '650 000 Ar',
    startingPriceEUR: '130 €',
    iconName: 'Zap',
    highlight: true
  },
  {
    num: '02',
    title: 'E-Commerce & Catalogue Produit',
    subtitle: 'Vendez vos produits en continu sans dépendre de l’algorithme Facebook',
    description: 'Une boutique en ligne fluide avec fiches produits détaillées, gestion de stock simple, et panier connecté directement à WhatsApp et aux paiements mobiles malgaches.',
    deliverables: [
      'Catalogue jusqu’à 50 produits (extensible)',
      'Intégration MVola, Orange Money & Airtel Money',
      'Notification de commande instantanée par WhatsApp',
      'Système de calcul des frais de livraison à Tana & provinces',
      'Formation vidéo de 30 min pour gérer vos produits'
    ],
    deliveryTime: '3 à 4 jours',
    startingPriceMGA: '1 200 000 Ar',
    startingPriceEUR: '240 €',
    iconName: 'ShoppingBag'
  },
  {
    num: '03',
    title: 'Refonte & Optimisation Performance',
    subtitle: 'Votre site actuel est trop lent ou ne vous rapporte pas de clients ?',
    description: 'Transformation radicale de votre site existant : passage à un code ultra-léger, optimisation pour le réseau 4G malgache et restructuration marketing orientée conversion.',
    deliverables: [
      'Audit technique complet avant/après',
      'Accélération x3 de la vitesse de chargement',
      'Design rajeuni et aligné sur les standards 2026',
      'Correction des failles de sécurité SSL',
      'Indexation prioritaire sur Google Tana & Madagascar'
    ],
    deliveryTime: '48 heures chrono',
    startingPriceMGA: '500 000 Ar',
    startingPriceEUR: '100 €',
    iconName: 'Gauge'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Fanja Ravelomanana',
    business: 'Maison Soie & Coton',
    location: 'Antananarivo (Analakely)',
    role: 'Gérante',
    comment: 'La livraison en 48h a été respectée à la minute près. Le site se charge super vite même quand la connexion Telma rame un peu. Le paiement par MVola était indispensable pour nous.',
    rating: 5,
    date: 'Il y a 2 semaines',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    projectType: 'E-commerce MVola',
    paymentMethod: 'Payé par MVola'
  },
  {
    id: 't2',
    name: 'Andry Razafindrakoto',
    business: 'Hôtel Baie Bleue',
    location: 'Nosy Be (Hell-Ville)',
    role: 'Directeur',
    comment: 'Nos clients italiens et français adorent la clarté du site et le bouton WhatsApp direct. On a économisé plus de 800€ de commissions OTA dès le premier mois.',
    rating: 5,
    date: 'Il y a 3 semaines',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectType: 'Site Vitrine Hôtelier',
    paymentMethod: 'Payé par Orange Money'
  },
  {
    id: 't3',
    name: 'Chef Heriniaina',
    business: 'Le Baobab Gourmand',
    location: 'Tamatave',
    role: 'Chef Restaurateur',
    comment: 'Le QR code sur table a révolutionné le service. Les touristes de croisière trouvent notre restaurant tout de suite sur Google grâce au référencement fait par PixelStudio.',
    rating: 5,
    date: 'Il y a 1 mois',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectType: 'Landing & Menu QR',
    paymentMethod: 'Payé par MVola'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Comment fonctionne la livraison en 48 heures ?',
    a: 'Dès validation de votre commande et réception de vos textes/photos essentiels (nous pouvons aussi vous aider à les rédiger), notre studio se consacre à 100% sur votre projet sans interruption. Vous recevez un lien de prévisualisation interactif sous 24h, nous effectuons les ajustements et le site est mis en ligne avec son nom de domaine sous 48h.'
  },
  {
    q: 'Quels modes de paiement acceptez-vous à Madagascar ?',
    a: 'Nous acceptons directement MVola (Telma), Orange Money et Airtel Money. Pour les clients internationaux ou entreprises, nous acceptons également les virements bancaires locaux (BNI, BMOI, Société Générale Madagasikara) et cartes Visa/Mastercard.'
  },
  {
    q: 'Est-ce que le nom de domaine et l’hébergement sont inclus ?',
    a: 'Oui ! Tous nos forfaits comprennent la réservation de votre nom de domaine (.com ou .mg sur devis) ainsi que l’hébergement sécurisé ultra-rapide avec certificat SSL (HTTPS) offert pour la première année.'
  },
  {
    q: 'Le site est-il optimisé pour la connexion internet à Madagascar ?',
    a: 'Absolument. C’est notre grande force : nous n’utilisons pas de templates WordPress lourds. Tous nos sites sont codés sur-mesure en technologies ultra-légères (React/Next), garantissant un temps de chargement inférieur à 1 seconde, même en 3G/4G locale.'
  },
  {
    q: 'Pourrai-je modifier mes textes et mes prix moi-même ?',
    a: 'Oui, nous concevons des interfaces d’administration intuitives et nous vous fournissons un tutoriel vidéo sur-mesure de 15 minutes pour mettre à jour vos tarifs, ajouter de nouveaux produits ou modifier vos horaires sans aucune compétence technique.'
  }
];
