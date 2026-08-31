import { Product, QuickCategory, HeroBanner, LocationInfo, TrustBadgeItem } from '../types';

export const INITIAL_LOCATION: LocationInfo = {
  city: 'Ahilyanagar',
  area: 'MIDC Industrial Area Sector 3',
  pincode: '414111',
  deliveryEstimate: '⚡ 2-Hour Express Delivery'
};

export const POPULAR_PINCODES: LocationInfo[] = [
  { city: 'Ahilyanagar', area: 'MIDC Industrial Area Sector 3', pincode: '414111', deliveryEstimate: '⚡ 2-Hour Express' },
  { city: 'Ahilyanagar', area: 'Savedi & Pipeline Road', pincode: '414003', deliveryEstimate: '⚡ 90-Min Delivery' },
  { city: 'Ahilyanagar', area: 'Kedgaon Industrial Zone', pincode: '414005', deliveryEstimate: '⚡ 2-Hour Express' },
  { city: 'Ahilyanagar', area: 'Nagar City Center & Cloth Market', pincode: '414001', deliveryEstimate: '⚡ 45-Min Superfast' },
];

export const CATEGORIES_LIST = [
  'All Categories',
  'Hardware & Components',
  'CCTV & Security',
  'SSD & RAM Upgrades',
  'Laptops & Refurbished',
  'Printers & Toners',
  'Software & AMC'
];

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: 'banner-1',
    title: 'High-Speed PC & NVMe SSD Upgrades',
    subtitle: 'Transform your desktop or factory workstation with ultra-fast NVMe storage and DDR4/DDR5 RAM.',
    highlightText: 'Starting at ₹1,499 • Free Thermal Paste & Installation',
    ctaText: 'Shop Upgrades Now',
    ctaSecondaryText: 'Explore RAM Bundles',
    bgGradient: 'from-slate-950 via-blue-950 to-indigo-950',
    tag: '⚡ 10X Speed Boost',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'banner-2',
    title: 'Industrial CCTV & Biometric Factory Security',
    subtitle: 'Complete 4K ColorVU camera kits, NVR recording units & AI face recognition attendance hardware.',
    highlightText: 'End-to-End MIDC Factory Setup with 2-Year Onsite AMC',
    ctaText: 'Book Free Site Survey',
    ctaSecondaryText: 'View CCTV Bundles',
    bgGradient: 'from-slate-900 via-slate-950 to-emerald-950',
    tag: '🛡️ MIDC Factory Approved',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'banner-3',
    title: 'Certified Refurbished Laptops & Desktops',
    subtitle: 'Intel Core i5 / i7 Business Laptops fully tested, upgraded SSDs & original charger included.',
    highlightText: '6-Month Direct Replacement Warranty • GST Invoice',
    ctaText: 'View Refurbished Stock',
    ctaSecondaryText: 'Compare Specs',
    bgGradient: 'from-indigo-950 via-slate-900 to-slate-950',
    tag: '💻 Grade A Business Stock',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80'
  }
];

export const QUICK_CATEGORIES: QuickCategory[] = [
  {
    id: 'cat-cctv',
    name: 'CCTV Cameras',
    iconName: 'Camera',
    bgGradient: 'from-blue-500/15 to-indigo-500/10 text-blue-600 border-blue-200',
    itemCount: '48+ Models',
    tag: 'Popular'
  },
  {
    id: 'cat-ssd',
    name: 'SSD & NVMe',
    iconName: 'HardDrive',
    bgGradient: 'from-emerald-500/15 to-teal-500/10 text-emerald-600 border-emerald-200',
    itemCount: 'Crucial & WD',
    tag: 'Up to 50% Off'
  },
  {
    id: 'cat-ram',
    name: 'DDR4 / DDR5 RAM',
    iconName: 'Cpu',
    bgGradient: 'from-amber-500/15 to-orange-500/10 text-amber-600 border-amber-200',
    itemCount: 'Desktop & Laptop',
  },
  {
    id: 'cat-peripherals',
    name: 'Keyboards & Mice',
    iconName: 'Keyboard',
    bgGradient: 'from-purple-500/15 to-pink-500/10 text-purple-600 border-purple-200',
    itemCount: 'Logitech & HP',
  },
  {
    id: 'cat-wifi',
    name: 'Wi-Fi & Routers',
    iconName: 'Wifi',
    bgGradient: 'from-cyan-500/15 to-blue-500/10 text-cyan-600 border-cyan-200',
    itemCount: 'TP-Link & D-Link',
    tag: 'Express Delivery'
  },
  {
    id: 'cat-pos',
    name: 'POS & Billing',
    iconName: 'Receipt',
    bgGradient: 'from-rose-500/15 to-red-500/10 text-rose-600 border-rose-200',
    itemCount: 'Thermal Printers',
  },
  {
    id: 'cat-printers',
    name: 'Printers & Ink',
    iconName: 'Printer',
    bgGradient: 'from-indigo-500/15 to-purple-500/10 text-indigo-600 border-indigo-200',
    itemCount: 'Epson & Canon',
  },
  {
    id: 'cat-cables',
    name: 'Adapters & Cables',
    iconName: 'Zap',
    bgGradient: 'from-amber-500/15 to-yellow-500/10 text-amber-700 border-amber-200',
    itemCount: 'HDMI, VGA, LAN',
  }
];

export const PRODUCTS_DATABASE: Product[] = [
  // FLASH DEALS
  {
    id: 'fd-1',
    name: 'Crucial P3 1TB PCIe M.2 NVMe SSD (Up to 3500MB/s)',
    category: 'SSD & RAM Upgrades',
    price: 5499,
    mrp: 9500,
    rating: 4.8,
    reviewsCount: 1240,
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Ultra-fast NVMeGen3 speed for OS & Gaming',
    badge: '42% OFF FLASH DEAL',
    discountPercentage: 42,
    inStock: true,
    isFlashDeal: true,
    tabGroup: 'upgrades',
    deliveryTimeMinutes: 60,
    gstPercent: 18
  },
  {
    id: 'fd-2',
    name: 'CP PLUS 2MP Full HD Outdoor Bullet CCTV Camera (Night Vision 20m)',
    category: 'CCTV & Security',
    price: 1399,
    mrp: 2350,
    rating: 4.6,
    reviewsCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Weatherproof IP66 rating with Smart IR LED',
    badge: 'DEAL OF THE DAY',
    discountPercentage: 40,
    inStock: true,
    isFlashDeal: true,
    tabGroup: 'industrial-cctv',
    deliveryTimeMinutes: 45,
    gstPercent: 18
  },
  {
    id: 'fd-3',
    name: 'Kingston FURY Beast 16GB DDR4 3200MHz Desktop Memory RAM',
    category: 'SSD & RAM Upgrades',
    price: 3199,
    mrp: 5200,
    rating: 4.9,
    reviewsCount: 1530,
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Plug N Play automatic overclocking & low profile heat spreader',
    badge: 'HOT SELLER',
    discountPercentage: 38,
    inStock: true,
    isFlashDeal: true,
    tabGroup: 'top-rated',
    deliveryTimeMinutes: 60,
    gstPercent: 18
  },
  {
    id: 'fd-4',
    name: 'Logitech MK270 Wireless Keyboard & Mouse Combo (2.4GHz USB Nano Receiver)',
    category: 'Hardware & Components',
    price: 1449,
    mrp: 2195,
    rating: 4.5,
    reviewsCount: 2300,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80',
    specBullet: '36-month battery life with 8 hotkeys for Instant Control',
    badge: '34% OFF',
    discountPercentage: 34,
    inStock: true,
    isFlashDeal: true,
    tabGroup: 'office-it',
    deliveryTimeMinutes: 30,
    gstPercent: 18
  },
  {
    id: 'fd-5',
    name: 'TP-Link Archer C6 AC1200 Dual Band Gigabit Wi-Fi Router',
    category: 'Hardware & Components',
    price: 2299,
    mrp: 3999,
    rating: 4.7,
    reviewsCount: 940,
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
    specBullet: '4 External Antennas with MU-MIMO Technology',
    badge: 'POPULAR',
    discountPercentage: 42,
    inStock: true,
    isFlashDeal: true,
    tabGroup: 'office-it',
    deliveryTimeMinutes: 45,
    gstPercent: 18
  },

  // INDUSTRIAL CCTV & OFFICE IT
  {
    id: 'prod-6',
    name: 'Hikvision 4-Channel 1080P Turbo HD DVR with H.265+ Compression',
    category: 'CCTV & Security',
    price: 3699,
    mrp: 5400,
    rating: 4.7,
    reviewsCount: 420,
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Supports mobile app remote monitoring & 4CH HD-TVI inputs',
    badge: 'MIDC CHOICE',
    discountPercentage: 31,
    inStock: true,
    tabGroup: 'industrial-cctv',
    deliveryTimeMinutes: 90,
    gstPercent: 18
  },
  {
    id: 'prod-7',
    name: 'Dahua 8-Channel NVR Network Video Recorder (Smart Motion Detection)',
    category: 'CCTV & Security',
    price: 7499,
    mrp: 11000,
    rating: 4.8,
    reviewsCount: 280,
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Up to 8MP resolution recording with HDMI 4K output',
    badge: 'FACTORY GRADE',
    discountPercentage: 32,
    inStock: true,
    tabGroup: 'industrial-cctv',
    deliveryTimeMinutes: 120,
    gstPercent: 18
  },
  {
    id: 'prod-8',
    name: 'Lenovo ThinkPad L480 (Refurbished Core i5 8th Gen / 16GB RAM / 512GB SSD)',
    category: 'Laptops & Refurbished',
    price: 22999,
    mrp: 45000,
    rating: 4.9,
    reviewsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Tested & Certified Grade A • 6-Month Replacement Warranty',
    badge: 'BEST B2B VALUE',
    discountPercentage: 48,
    inStock: true,
    tabGroup: 'top-rated',
    deliveryTimeMinutes: 120,
    gstPercent: 18
  },
  {
    id: 'prod-9',
    name: 'Epson EcoTank L3210 All-in-One Multi-Function InkTank Printer',
    category: 'Printers & Toners',
    price: 11999,
    mrp: 15999,
    rating: 4.6,
    reviewsCount: 1120,
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=80',
    specBullet: 'High-yield printing: 4,500 Black / 7,500 Color pages',
    badge: 'SAVE ₹4,000',
    discountPercentage: 25,
    inStock: true,
    tabGroup: 'office-it',
    deliveryTimeMinutes: 60,
    gstPercent: 18
  },
  {
    id: 'prod-10',
    name: 'Western Digital WD Blue 2TB 3.5" SATA III Surveillance/Desktop Hard Drive',
    category: 'Hardware & Components',
    price: 4999,
    mrp: 7200,
    rating: 4.7,
    reviewsCount: 670,
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=80',
    specBullet: '24/7 continuous operation design with AllFrame technology',
    badge: '30% OFF',
    discountPercentage: 30,
    inStock: true,
    tabGroup: 'upgrades',
    deliveryTimeMinutes: 45,
    gstPercent: 18
  },
  {
    id: 'prod-11',
    name: 'Annual PC Maintenance Contract (AMC) - Corporate Factory Plan (Per PC/Year)',
    category: 'Software & AMC',
    price: 1499,
    mrp: 2999,
    rating: 4.9,
    reviewsCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Includes 4 quarterly hardware cleanings, antivirus & 24/7 emergency response',
    badge: 'B2B POPULAR',
    discountPercentage: 50,
    inStock: true,
    tabGroup: 'top-rated',
    deliveryTimeMinutes: 30,
    gstPercent: 18
  },
  {
    id: 'prod-12',
    name: 'Windows 11 Professional Retail Digital License Key (Instant Delivery)',
    category: 'Software & AMC',
    price: 1299,
    mrp: 3999,
    rating: 4.8,
    reviewsCount: 4100,
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&auto=format&fit=crop&q=80',
    specBullet: 'Lifetime valid license with official Microsoft online activation',
    badge: 'INSTANT KEY',
    discountPercentage: 67,
    inStock: true,
    tabGroup: 'office-it',
    deliveryTimeMinutes: 5,
    gstPercent: 18
  }
];

export const TRUST_BADGES: TrustBadgeItem[] = [
  {
    id: 'tb-1',
    title: 'Same Day Express Delivery',
    subtitle: '⚡ Delivering in MIDC Ahilyanagar within 2 hours',
    iconName: 'Truck'
  },
  {
    id: 'tb-2',
    title: '100% Verified Hardware',
    subtitle: 'Direct OEM warranty & genuine GST tax invoice',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tb-3',
    title: 'Free Technical Consultation',
    subtitle: 'Dedicated engineers for CCTV & IT setup planning',
    iconName: 'Headphones'
  },
  {
    id: 'tb-4',
    title: 'B2B Bulk Pricing & AMC',
    subtitle: 'Custom quotes for factories, schools & corporate offices',
    iconName: 'Building2'
  }
];
