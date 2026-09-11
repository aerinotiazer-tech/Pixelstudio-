import hotelNosyBe from '../assets/images/hotel_nosy_be_1789109928572.jpg';
import boutiqueTana from '../assets/images/boutique_tana_1789109943937.jpg';
import restoTamatave from '../assets/images/resto_tamatave_1789109958355.jpg';
import nosySuite from '../assets/images/nosy_suite_1789109973248.jpg';
import tanaCrafts from '../assets/images/tana_crafts_1789109986554.jpg';

export interface ProjectItem {
  id: string;
  numericId: number;
  name: string;
  category: string;
  tagline: string;
  location: string;
  delivery: string;
  results: string;
  clientName: string;
  clientRole: string;
  testimonial: string;
  stack: string[];
  features: string[];
  description: string;
  challenges: string;
  solutions: string;
  heroImage: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  gallery: string[];
  tags: string[];
  metrics: { label: string; value: string; detail: string }[];
  demoType: 'hotel' | 'ecommerce' | 'restaurant';
}

export const projectsData: ProjectItem[] = [
  {
    id: 'hotel-nosy-be',
    numericId: 1,
    name: 'Hôtel Nosy Be',
    category: 'Site vitrine & Réservation',
    tagline: 'Resort & Éco-Lodge de Prestige avec Vue Océan à Madagascar',
    location: 'Nosy Be, Madagascar',
    delivery: 'Livré en 48h chrono',
    results: '+240% de réservations directes sans commissions Booking/Airbnb',
    clientName: 'Jean-Marc R.',
    clientRole: 'Directeur Général, Éco-Lodge Nosy Be',
    testimonial: '« Avant PixelStudio, 80% de nos réservations passaient par des plateformes qui prélevaient 18% de commission. En 48h, nous avions un site ultra-rapide et responsive. Dès la première semaine, nous avons signé 6 séjours directs via le module WhatsApp intégré ! »',
    stack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Cloud Link', 'OpenGraph SEO'],
    features: [
      'Galerie immersive 4K et visite des suites privées avec vue lagon',
      'Moteur de réservation directe avec calculateur automatique de devis',
      'Système bilingue Français / Anglais adapté aux touristes internationaux',
      'Paiements acceptés : Ariary (MGA), Carte Bancaire internationale, Euro (EUR)',
      'Optimisation SEO locale Madagascar & référencement îles de l’Océan Indien'
    ],
    description: "Création d'un site vitrine haut de gamme pour un éco-resort à Nosy Be. L'objectif principal était de réduire drastiquement la dépendance aux plateformes de réservation en offrant une expérience sensorielle immédiate et un canal de réservation direct WhatsApp en 2 clics.",
    challenges: "La lenteur de chargement de l'ancien site sur les téléphones portables et la perte de clients potentiels rebutés par des formulaires de réservation trop longs.",
    solutions: "Architecture React ultralégère (< 1s de chargement sur réseau 3G/4G à Madagascar), intégration d'un bouton de réservation instantanée WhatsApp pré-rempli et visuels cinématographiques haute définition.",
    heroImage: hotelNosyBe,
    col1Img1: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    col1Img2: nosySuite,
    col2Img: hotelNosyBe,
    gallery: [
      hotelNosyBe,
      nosySuite,
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Luxe & Tourisme', 'Réservation Directe', 'Mobile First', 'Nosy Be'],
    metrics: [
      { label: 'Réservations Directes', value: '+240%', detail: 'Économie de 18% de commissions' },
      { label: 'Temps de chargement', value: '0.7s', detail: 'Optimisé 4G Madagascar' },
      { label: 'Score Lighthouse', value: '99/100', detail: 'SEO & Performance globale' }
    ],
    demoType: 'hotel'
  },
  {
    id: 'boutique-tana',
    numericId: 2,
    name: 'Boutique Tana',
    category: 'Boutique E-commerce',
    tagline: "Concept-Store Mode & Artisanat d'Exception à Antananarivo",
    location: 'Antananarivo, Madagascar',
    delivery: 'Livré en 48h chrono',
    results: '850+ commandes générées dès le 1er mois via paiement Mobile Money',
    clientName: 'Haingo R.',
    clientRole: 'Fondatrice & Styliste, Boutique Tana',
    testimonial: '« Répondre aux DMs sur Instagram prenait des heures et faisait fuir des clients le soir. Avec notre boutique PixelStudio, les clientes choisissent leur taille, payent par MVola en 30 secondes et reçoivent un SMS de confirmation. C’est le jour et la nuit ! »',
    stack: ['React', 'Next-gen Cart', 'Passerelle MVola / Orange Money', 'Tailwind', 'Cloudinary CDN'],
    features: [
      'Paiement Mobile Money instantané (MVola, Orange Money, Airtel Money)',
      'Calcul automatique des frais de livraison à Tana (intra-muros & banlieue) et province',
      'Catalogue interactif avec filtres par tailles, coloris et matières locales',
      'Panier express optimisé pour smartphone sans inscription obligatoire',
      'Notification automatique de commande sur WhatsApp commerçant'
    ],
    description: "Développement d'une boutique e-commerce ultra-fluide adaptée aux réalités du marché malgache. Finie la perte de conversion en message privé : le client sélectionne son article, valide son panier et règle directement via son numéro mobile.",
    challenges: "La majorité des acheteurs malgaches n'ont pas de carte bancaire visa/mastercard et achètent à 95% depuis leur smartphone le soir après le travail.",
    solutions: "Mise en place d'un tunnel de commande sans mot de passe avec paiement direct MVola / Orange Money et synchronisation immédiate du livreur par WhatsApp.",
    heroImage: boutiqueTana,
    col1Img1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    col1Img2: tanaCrafts,
    col2Img: boutiqueTana,
    gallery: [
      boutiqueTana,
      tanaCrafts,
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['E-Commerce', 'MVola / Orange Money', 'Panier Express', 'Antananarivo'],
    metrics: [
      { label: 'Commandes Mobile', value: '850+', detail: 'Dès les 30 premiers jours' },
      { label: 'Taux de conversion', value: '4.8%', detail: 'Contre 1.2% en messagerie DM' },
      { label: 'Temps de paiement', value: '35s', detail: 'Validation MVola instantanée' }
    ],
    demoType: 'ecommerce'
  },
  {
    id: 'restaurant-tamatave',
    numericId: 3,
    name: 'Restaurant Tamatave',
    category: 'Landing page & Menu QR',
    tagline: 'Table Gastronomique Océane & Cocktails Signature à Toamasina',
    location: 'Toamasina (Tamatave), Madagascar',
    delivery: 'Livré en 48h chrono',
    results: 'Terrasse complète chaque week-end et 100% de fluidité grâce au menu QR',
    clientName: 'Chef Andry M.',
    clientRole: 'Propriétaire & Chef Exécutif',
    testimonial: '« Les clients adorent scanner le QR code pour voir les photos réelles de nos plats et la carte des vins mise à jour. Nous avons doublé les réservations en ligne pour les événements privés et mariages grâce à la landing page conçue par PixelStudio. »',
    stack: ['React', 'Framer Motion', 'Interactive QR Menu', 'Google Maps API', 'SMS Notify'],
    features: [
      'Menu digital interactif avec photos appétissantes des plats et suggestions du chef',
      'Formulaire de réservation de table avec confirmation automatique par SMS',
      'Mise à jour en temps réel des poissons et fruits de mer selon l’arrivage du jour',
      'Intégration Google Maps et itinéraire direct en un clic',
      'Interface ultra-fluide consultable sans connexion Wi-Fi haut débit'
    ],
    description: "Conception d'une landing page séduisante et immersive pour un restaurant réputé du bord de mer à Tamatave. Les photos haute résolution et le menu accessible par QR code transforment chaque internaute en convive assis à table.",
    challenges: "Menus papier abîmés par les embruns marins, prix des poissons fluctuant au jour le jour et perte de clients faute d'un menu en ligne visible sur Google.",
    solutions: "Menu QR code dynamique instantané, référencement Google Maps optimisé et module de réservation de table par créneaux horaires.",
    heroImage: restoTamatave,
    col1Img1: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    col1Img2: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    col2Img: restoTamatave,
    gallery: [
      restoTamatave,
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Gastronomie', 'QR Code Menu', 'Réservation Table', 'Tamatave'],
    metrics: [
      { label: 'Taux de Remplissage', value: '100%', detail: 'Terrasse complète ven/sam/dim' },
      { label: 'Consultations Menu QR', value: '3200+', detail: 'Scans mensuels en salle' },
      { label: 'Avis Google 5 étoiles', value: '+68', detail: 'Gain de visibilité locale' }
    ],
    demoType: 'restaurant'
  }
];
