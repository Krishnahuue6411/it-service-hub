export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  specBullet: string;
  badge?: string;
  discountPercentage: number;
  inStock: boolean;
  isFlashDeal?: boolean;
  tabGroup: 'top-rated' | 'industrial-cctv' | 'office-it' | 'upgrades';
  deliveryTimeMinutes?: number;
  gstPercent?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuickCategory {
  id: string;
  name: string;
  iconName: string;
  bgGradient: string;
  itemCount: string;
  tag?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  highlightText: string;
  ctaText: string;
  ctaSecondaryText?: string;
  bgGradient: string;
  tag: string;
  imageUrl: string;
}

export interface LocationInfo {
  city: string;
  area: string;
  pincode: string;
  deliveryEstimate: string;
}

export interface TrustBadgeItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}
