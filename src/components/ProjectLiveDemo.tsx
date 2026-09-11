import React, { useState } from 'react';
import { Smartphone, Monitor, ExternalLink, Calendar, Check, ShoppingBag, Utensils, Star, Phone, MapPin, Sparkles, Send } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectLiveDemoProps {
  project: ProjectItem;
}

export const ProjectLiveDemo: React.FC<ProjectLiveDemoProps> = ({ project }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  // Hotel interactive state
  const [selectedRoom, setSelectedRoom] = useState('Suite Océan Prestige');
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const [hotelBookSuccess, setHotelBookSuccess] = useState(false);

  // Ecommerce interactive state
  const [cartCount, setCartCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mode' | 'raphia' | 'accessoires'>('all');
  const [cartOpen, setCartOpen] = useState(false);
  const [paymentProvider, setPaymentProvider] = useState<'mvola' | 'orange' | 'airtel'>('mvola');
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Restaurant interactive state
  const [tableDate, setTableDate] = useState('Ce soir 19:30');
  const [tableGuests, setTableGuests] = useState('2 personnes');
  const [restaurantBookSuccess, setRestaurantBookSuccess] = useState(false);
  const [menuTab, setMenuTab] = useState<'mer' | 'grillades' | 'cocktails'>('mer');

  const productsList = [
    {
      id: 1,
      name: 'Robe Brodée Soie Sauvage',
      category: 'mode',
      price: '185 000 Ar',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Cabas Raphia & Cuir Zébu',
      category: 'raphia',
      price: '120 000 Ar',
      image: project.col1Img2
    },
    {
      id: 3,
      name: 'Chemise Lin Baobab',
      category: 'mode',
      price: '145 000 Ar',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      name: 'Bracelet Argent Massif Malagasy',
      category: 'accessoires',
      price: '95 000 Ar',
      image: 'https://images.unsplash.com/photo-1611591475155-4284ec289e61?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? productsList
    : productsList.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#111111] border border-white/15 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl">
      {/* Device Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#181818] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-xs font-mono text-[#D7E2EA]/60 hidden sm:inline">
            https://{project.id}.pixelstudio.mg
          </span>
        </div>

        {/* Switcher & info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Ordinateur</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (375px)</span>
            </button>
          </div>

          <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            Aperçu interactif
          </span>
        </div>
      </div>

      {/* Screen Container */}
      <div className={`w-full bg-[#0A0A0A] p-2 sm:p-6 transition-all duration-300 flex justify-center overflow-x-auto`}>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            deviceMode === 'mobile'
              ? 'w-[375px] border-4 border-[#2A2A2A] rounded-[42px] shadow-2xl min-h-[640px] max-h-[720px] overflow-y-auto bg-[#0F0F0F]'
              : 'w-full rounded-2xl border border-white/10 bg-[#0F0F0F] min-h-[560px]'
          }`}
        >
          {/* ===================== 1. HOTEL NOSY BE DEMO ===================== */}
          {project.demoType === 'hotel' && (
            <div className="w-full text-white font-sans flex flex-col">
              {/* Hotel Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/60 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold tracking-widest uppercase font-serif text-amber-300">
                    Nosy Be Resort
                  </span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">5★</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs text-white/70">Nosy Be, Madagascar</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById('hotel-booking-box');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400 transition-colors"
                  >
                    Réserver
                  </button>
                </div>
              </div>

              {/* Hotel Hero Banner */}
              <div className="relative h-48 sm:h-72 w-full overflow-hidden">
                <img
                  src={project.heroImage}
                  alt="Hotel Nosy Be"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-xs text-amber-300 uppercase tracking-widest font-semibold">
                    Éco-Lodge & Suites Sur Pilotis
                  </span>
                  <h3 className="text-lg sm:text-3xl font-serif font-bold text-white leading-tight">
                    Votre Échappée Tropicale au Bout du Monde
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-lg">
                    Chambres d'exception face au couchant, plage privée de sable blanc et service sur-mesure.
                  </p>
                </div>
              </div>

              {/* Hotel Booking Widget */}
              <div id="hotel-booking-box" className="p-4 sm:p-6 bg-[#161616] border-y border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Calculateur de Séjour en Direct
                  </h4>
                  <span className="text-xs text-white/60">Garantie meilleur prix direct</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Choix de la Suite</label>
                    <select
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Suite Océan Prestige">Suite Océan Prestige (450 000 Ar/nuit)</option>
                      <option value="Villa Pilotis Lagon">Villa Pilotis Lagon (680 000 Ar/nuit)</option>
                      <option value="Bungalow Jardin Tropical">Bungalow Tropical (290 000 Ar/nuit)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Nombre de nuits</label>
                    <div className="flex items-center bg-black/60 border border-white/20 rounded-xl px-3 py-1.5">
                      <button
                        onClick={() => setNights(Math.max(1, nights - 1))}
                        className="text-amber-400 font-bold px-2 py-0.5 hover:bg-white/10 rounded"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-xs text-white font-medium">{nights} nuits</span>
                      <button
                        onClick={() => setNights(nights + 1)}
                        className="text-amber-400 font-bold px-2 py-0.5 hover:bg-white/10 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Voyageurs</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value={1}>1 voyageur</option>
                      <option value={2}>2 adultes</option>
                      <option value={3}>3 personnes</option>
                      <option value={4}>4 personnes (Famille)</option>
                    </select>
                  </div>
                </div>

                {/* Estimate box */}
                <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-white/60 block">Estimation Totale :</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base sm:text-xl font-bold text-amber-300">
                        {(nights * (selectedRoom.includes('Villa') ? 680000 : selectedRoom.includes('Suite') ? 450000 : 290000)).toLocaleString()} Ar
                      </span>
                      <span className="text-xs text-white/60">
                        (~{Math.round(nights * (selectedRoom.includes('Villa') ? 140 : selectedRoom.includes('Suite') ? 95 : 60))} €)
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setHotelBookSuccess(true);
                      setTimeout(() => setHotelBookSuccess(false), 4000);
                    }}
                    className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-transform active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Bloquer via WhatsApp (+261)</span>
                  </button>
                </div>

                {hotelBookSuccess && (
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Demande de devis WhatsApp simulée avec succès ! Réponse de l'hôtel en moins de 15 min.</span>
                  </div>
                )}
              </div>

              {/* Room Cards Preview */}
              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col">
                  <img
                    src={project.col1Img2}
                    alt="Suite Océan"
                    referrerPolicy="no-referrer"
                    className="h-32 sm:h-40 w-full object-cover"
                  />
                  <div className="p-3.5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] text-amber-300 uppercase tracking-widest">Le Choix Signature</span>
                      <h5 className="font-semibold text-sm text-white">Suite Océan & Balcon Privatif</h5>
                      <p className="text-xs text-white/60 mt-1">Lit king size, climatisation solaire, baignoire vue lagon.</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">450 000 Ar / nuit</span>
                      <span className="text-[11px] text-emerald-400">Petit-déjeuner inclus</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col">
                  <img
                    src={project.heroImage}
                    alt="Piscine Lagon"
                    referrerPolicy="no-referrer"
                    className="h-32 sm:h-40 w-full object-cover"
                  />
                  <div className="p-3.5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] text-amber-300 uppercase tracking-widest">Prestige</span>
                      <h5 className="font-semibold text-sm text-white">Villa Pilotis avec Accès Lagon</h5>
                      <p className="text-xs text-white/60 mt-1">Deck privé en palissandre, accès direct aux coraux de Nosy Be.</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">680 000 Ar / nuit</span>
                      <span className="text-[11px] text-emerald-400">Cocktail offert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== 2. BOUTIQUE TANA DEMO ===================== */}
          {project.demoType === 'ecommerce' && (
            <div className="w-full text-white font-sans flex flex-col">
              {/* Ecommerce Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/70 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold tracking-widest uppercase text-white font-serif">
                    Boutique Tana
                  </span>
                  <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded-full">Madagascar</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Panier ({cartCount})</span>
                  </button>
                </div>
              </div>

              {/* Promo Banner */}
              <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 px-4 py-2 text-center text-xs text-white font-medium border-b border-purple-500/20">
                ⚡ Livraison Express 24h sur Antananarivo • Paiement MVola & Orange Money accepté
              </div>

              {/* Category Filter Tabs */}
              <div className="px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto border-b border-white/10 bg-[#141414]">
                {(['all', 'mode', 'raphia', 'accessoires'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {cat === 'all' && 'Tous les articles'}
                    {cat === 'mode' && 'Vêtements & Soie'}
                    {cat === 'raphia' && 'Maroquinerie & Raphia'}
                    {cat === 'accessoires' && 'Bijoux & Accessoires'}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="rounded-2xl bg-[#151515] border border-white/10 overflow-hidden flex flex-col group"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 text-[10px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-white/80">
                        Fait main
                      </span>
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1">
                      <div>
                        <h5 className="font-medium text-xs sm:text-sm text-white line-clamp-1">{prod.name}</h5>
                        <p className="font-bold text-xs sm:text-sm text-purple-300 mt-1">{prod.price}</p>
                      </div>
                      <button
                        onClick={() => setCartCount(cartCount + 1)}
                        className="mt-2.5 w-full py-1.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black text-xs font-medium transition-colors"
                      >
                        + Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Drawer / Modal Simulator */}
              {cartOpen && (
                <div className="p-4 sm:p-6 bg-[#1A1A1A] border-t-2 border-purple-500/50 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-purple-400" /> Votre Commande Express
                    </h4>
                    <span className="text-xs text-white/60">{cartCount} articles</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Cabas Raphia & Cuir Zébu</span>
                      <span className="font-semibold text-white">120 000 Ar</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Livraison Tana Ville (Ankorondrano, Analakely...)</span>
                      <span className="font-semibold text-emerald-400">5 000 Ar</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-bold text-white">
                      <span>Total à régler :</span>
                      <span className="text-purple-300">125 000 Ar</span>
                    </div>
                  </div>

                  {/* Payment selection */}
                  <div>
                    <label className="text-[11px] text-white/60 block mb-1.5">Mode de Paiement Instantané :</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setPaymentProvider('mvola')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                          paymentProvider === 'mvola'
                            ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300'
                            : 'bg-black/40 border-white/10 text-white/70'
                        }`}
                      >
                        <span>🟡 MVola</span>
                        <span className="text-[10px] text-white/50">034 / 038</span>
                      </button>

                      <button
                        onClick={() => setPaymentProvider('orange')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                          paymentProvider === 'orange'
                            ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                            : 'bg-black/40 border-white/10 text-white/70'
                        }`}
                      >
                        <span>🟠 Orange Money</span>
                        <span className="text-[10px] text-white/50">032</span>
                      </button>

                      <button
                        onClick={() => setPaymentProvider('airtel')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                          paymentProvider === 'airtel'
                            ? 'bg-red-500/20 border-red-400 text-red-300'
                            : 'bg-black/40 border-white/10 text-white/70'
                        }`}
                      >
                        <span>🔴 Airtel Money</span>
                        <span className="text-[10px] text-white/50">033</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOrderSuccess(true);
                      setTimeout(() => setOrderSuccess(false), 4000);
                    }}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Valider et payer via {paymentProvider.toUpperCase()}
                  </button>

                  {orderSuccess && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Paiement test MVola validé ! SMS de confirmation et lien livreur envoyés.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ===================== 3. RESTAURANT TAMATAVE DEMO ===================== */}
          {project.demoType === 'restaurant' && (
            <div className="w-full text-white font-sans flex flex-col">
              {/* Restaurant Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <span className="text-sm sm:text-base font-serif font-bold text-white tracking-wider">
                    L'Océan Tamatave
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/60 hidden sm:inline">Bord de mer Toamasina</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById('table-booking');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400 transition-colors"
                  >
                    Réserver une Table
                  </button>
                </div>
              </div>

              {/* Restaurant Hero */}
              <div className="relative h-44 sm:h-64 w-full overflow-hidden">
                <img
                  src={project.heroImage}
                  alt="Restaurant Tamatave"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-xs text-amber-300 uppercase tracking-widest font-semibold">
                    Cuisine Océane & Saveurs de Madagascar
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-white leading-tight">
                    Langoustes Fraîches & Vanille Bourbon
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5">
                    Terrasse les pieds dans le sable, poissons du jour sélectionnés chaque matin au port.
                  </p>
                </div>
              </div>

              {/* Menu Tabs */}
              <div className="px-4 sm:px-6 py-3 bg-[#141414] border-y border-white/10 flex gap-2">
                <button
                  onClick={() => setMenuTab('mer')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    menuTab === 'mer' ? 'bg-amber-400 text-black font-semibold' : 'bg-white/5 text-white/70'
                  }`}
                >
                  🦐 Pêche du Jour & Crustacés
                </button>
                <button
                  onClick={() => setMenuTab('grillades')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    menuTab === 'grillades' ? 'bg-amber-400 text-black font-semibold' : 'bg-white/5 text-white/70'
                  }`}
                >
                  🥩 Filet de Zébu & Grillades
                </button>
                <button
                  onClick={() => setMenuTab('cocktails')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    menuTab === 'cocktails' ? 'bg-amber-400 text-black font-semibold' : 'bg-white/5 text-white/70'
                  }`}
                >
                  🍹 Rhums Arrangés & Cocktails
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 sm:p-6 space-y-3">
                {menuTab === 'mer' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#161616] border border-white/10 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-white">Plateau de Langoustes Grillées au Beurre d'Ail</h5>
                        <p className="text-[11px] text-white/60">Pêchées le matin même, riz coco et rougail mangue vert.</p>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-amber-300 ml-3 shrink-0">65 000 Ar</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#161616] border border-white/10 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-white">Tartare d'Espadon au Combava & Poivre Rose</h5>
                        <p className="text-[11px] text-white/60">Filet ultra-frais mariné au citron vert et huile vierge.</p>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-amber-300 ml-3 shrink-0">38 000 Ar</span>
                    </div>
                  </>
                )}

                {menuTab === 'grillades' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#161616] border border-white/10 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-white">Pavé de Zébu sauce Poivre Vert de Tamatave</h5>
                        <p className="text-[11px] text-white/60">Viande tendre saisie au feu de bois, frites de manioc.</p>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-amber-300 ml-3 shrink-0">42 000 Ar</span>
                    </div>
                  </>
                )}

                {menuTab === 'cocktails' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#161616] border border-white/10 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-white">Mojito Litchi & Rhum Dzama Ambré</h5>
                        <p className="text-[11px] text-white/60">Menthe fraîche du potager, jus de litchis de Tamatave.</p>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-amber-300 ml-3 shrink-0">22 000 Ar</span>
                    </div>
                  </>
                )}
              </div>

              {/* Table Booking Form */}
              <div id="table-booking" className="p-4 sm:p-6 bg-[#161616] border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-3">
                  🍷 Réserver votre Table Face à la Mer
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Date & Heure</label>
                    <input
                      type="text"
                      value={tableDate}
                      onChange={(e) => setTableDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Nombre de personnes</label>
                    <select
                      value={tableGuests}
                      onChange={(e) => setTableGuests(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs text-white"
                    >
                      <option value="1 personne">1 personne</option>
                      <option value="2 personnes">2 personnes (En amoureux)</option>
                      <option value="4 personnes">4 personnes (Repas d'affaires)</option>
                      <option value="6+ personnes">Grande table (Famille / Fête)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setRestaurantBookSuccess(true);
                    setTimeout(() => setRestaurantBookSuccess(false), 4000);
                  }}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Confirmer la Table (SMS Instantané)
                </button>

                {restaurantBookSuccess && (
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Table réservée avec succès ! SMS de confirmation envoyé au client.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
