export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'smartphones' | 'headphones' | 'laptops' | 'gaming' | 'smarthome' | 'smartwatches';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  isFeatured?: boolean;
  rating: number; // e.g. 4.8
  reviewCount: number;
  releaseYear: string;
  affiliateUrl: string; // The user's custom affiliate destination or base store link
  affiliateLetterCode?: string; // Custom affiliate letter / tracking code
  specs: {
    label: string;
    value: string;
  }[];
  bulletSpecs: string[]; // Highlights for cards
  advantages: string[]; // Pros
  disadvantages: string[]; // Cons
  scores?: {
    design: number;
    performance: number;
    battery: number;
    value: number;
    overall: number;
  };
  verdict: string;
  badge?: string;
}

export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: {
    heading: string;
    content: string;
    tips?: string[];
  }[];
  checklist: string[];
  recommendedProductIds: string[];
}

export interface Comparison {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  product1: Product;
  product2: Product;
  summary: string;
  verdict: string;
  features: {
    name: string;
    p1Value: string;
    p2Value: string;
    winner: 'p1' | 'p2' | 'tie';
  }[];
}

export interface CategoryInfo {
  id: 'smartphones' | 'headphones' | 'laptops' | 'gaming' | 'smarthome' | 'smartwatches';
  name: string;
  iconName: string;
  description: string;
  image: string;
  count: number;
}
