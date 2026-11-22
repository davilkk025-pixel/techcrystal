import { Product, BuyingGuide, Comparison, CategoryInfo } from '../types.ts';
import { SMARTPHONE_PRODUCTS } from './smartphonesData.ts';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    iconName: 'Smartphone',
    description: 'Flagships, foldables, camera kings & mobile powerhouses from all major brands.',
    image: '/assets/products/iphone16.jpg',
    count: 24,
  },
  {
    id: 'headphones',
    name: 'Headphones',
    iconName: 'Headphones',
    description: 'Noise-cancelling over-ears, audiophile gear & true wireless earbuds.',
    image: '/assets/products/sony_xm5.jpg',
    count: 18,
  },
  {
    id: 'laptops',
    name: 'Laptops',
    iconName: 'Laptop',
    description: 'Ultrabooks, creator workstations, and everyday powerhouses.',
    image: '/assets/products/macbook_air.jpg',
    count: 12,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    iconName: 'Gamepad2',
    description: 'Controllers, mechanical keyboards, mice & pro headsets.',
    image: '/assets/products/xbox_controller.jpg',
    count: 22,
  },
  {
    id: 'smarthome',
    name: 'Smart Home',
    iconName: 'Home',
    description: 'Security cameras, ambient lighting, hubs & smart automation.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=85',
    count: 16,
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    iconName: 'Watch',
    description: 'Fitness trackers, biometric sensors & wrist computers.',
    image: '/assets/products/apple_watch10.jpg',
    count: 9,
  },
];

export const PRODUCTS: Product[] = [
  SMARTPHONE_PRODUCTS[0], // iPhone 16 (Featured #1)
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'headphones',
    categoryLabel: 'Headphones',
    shortDesc: 'Premium noise-canceling headphones for immersive sound.',
    fullDesc: 'Equipped with two processors and eight microphones, the Sony WH-1000XM5 sets the global benchmark for noise cancellation and pristine audio fidelity with LDAC high-resolution wireless streaming.',
    image: '/assets/products/sony_xm5.jpg',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 3890,
    releaseYear: '2024',
    affiliateUrl: 'https://electronics.sony.com/audio/headphones/headband-headphones/p/wh1000xm5-b',
    bulletSpecs: ['Noise cancellation', 'Long battery life', 'Comfortable design'],
    specs: [
      { label: 'Driver Size', value: '30mm carbon fiber composite' },
      { label: 'Battery Life', value: '30 hours with ANC on (40 hours ANC off)' },
      { label: 'Quick Charge', value: '3 min charge gives 3 hours playback' },
      { label: 'Microphones', value: '8 beamforming mics with AI noise reduction' },
      { label: 'Codecs', value: 'LDAC, AAC, SBC' },
      { label: 'Multipoint', value: 'Yes (Connect to two Bluetooth devices)' },
      { label: 'Weight', value: '250 grams' },
    ],
    advantages: [
      'Unrivaled active noise cancellation across mid and high frequency ambient chatter',
      'Exceptionally lightweight, feather-soft synthetic leather earcups for all-day comfort',
      'Crystal-clear call clarity through 4 AI beamforming microphones',
      'Rich, punchy sound signature with customizable EQ via Sony Headphones Connect app'
    ],
    disadvantages: [
      'Earcups fold flat but do not collapse inward into a compact fist size like the XM4',
      'Headband padding is slightly narrow for very wide head shapes'
    ],
    scores: {
      design: 9.0,
      performance: 9.9,
      battery: 9.5,
      value: 9.2,
      overall: 9.4,
    },
    verdict: 'Sony WH-1000XM5 remains our top recommendation for travelers, remote workers, and audiophiles seeking benchmark-setting noise cancellation paired with comfortable, featherlight ergonomics.',
    badge: 'Best in ANC'
  },
  {
    id: 'asus-vivobook-15',
    name: 'ASUS Vivobook 15',
    brand: 'ASUS',
    category: 'laptops',
    categoryLabel: 'Laptops',
    shortDesc: 'Reliable laptop for work, study and everyday use.',
    fullDesc: 'The ASUS Vivobook 15 delivers dependable everyday computing with an expansive 15.6-inch anti-glare display, responsive ErgoSense keyboard, 180-degree lay-flat hinge, and comprehensive I/O port selection.',
    image: '/assets/products/asus_vivobook.jpg',
    isFeatured: true,
    rating: 4.6,
    reviewCount: 2120,
    releaseYear: '2024',
    affiliateUrl: 'https://www.asus.com/laptops/for-home/vivobook/vivobook-15/',
    bulletSpecs: ['15.6" Full HD display', 'Fast performance', 'Lightweight design'],
    specs: [
      { label: 'Processor', value: 'Intel Core i5-1235U / i7-1355U' },
      { label: 'Display', value: '15.6" FHD (1920 x 1080) 16:9 NanoEdge slim bezel' },
      { label: 'Memory', value: '16GB DDR4 RAM' },
      { label: 'Storage', value: '512GB / 1TB PCIe NVMe SSD' },
      { label: 'Ports', value: 'USB-C 3.2, 2x USB-A 3.2, USB 2.0, HDMI 1.4, Audio Combo' },
      { label: 'Weight', value: '1.7 kg (3.75 lbs)' },
      { label: 'Security', value: 'Webcam privacy shield & optional fingerprint' },
    ],
    advantages: [
      'Unbeatable price-to-performance ratio for everyday productivity and college coursework',
      'Comfortable typing experience with ASUS ErgoSense keyboard and dedicated numeric keypad',
      'Physical privacy shutter for the webcam and generous port array eliminates dongle hassles',
      'Sturdy build quality with military-grade MIL-STD-810H durability certification'
    ],
    disadvantages: [
      'Screen brightness maxes out at 250 nits, which is dim in direct outdoor sunlight',
      'Speakers lack deep bass resonance for cinematic movie watching'
    ],
    scores: {
      design: 8.4,
      performance: 8.8,
      battery: 8.2,
      value: 9.6,
      overall: 8.8,
    },
    verdict: 'For students, home offices, and budget-conscious professionals, the ASUS Vivobook 15 represents the sweet spot of responsive performance, tactile keyboard ergonomics, and durable longevity.',
    badge: 'Best Value'
  },
  {
    id: 'xbox-wireless-controller',
    name: 'Xbox Wireless Controller',
    brand: 'Microsoft',
    category: 'gaming',
    categoryLabel: 'Gaming',
    shortDesc: 'Comfortable and responsive for the best gaming experience.',
    fullDesc: 'Modernized ergonomics, textured grip on triggers, bumpers, and back-case, plus a hybrid D-pad for precise and familiar input across Xbox Series X|S, PC, iOS, and Android platforms.',
    image: '/assets/products/xbox_controller.jpg',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 15400,
    releaseYear: '2024',
    affiliateUrl: 'https://www.xbox.com/accessories/controllers/xbox-wireless-controller',
    bulletSpecs: ['Wireless connectivity', 'Precise control', 'Wide device support'],
    specs: [
      { label: 'Connectivity', value: 'Xbox Wireless, Bluetooth Low Energy, USB-C' },
      { label: 'Compatibility', value: 'Xbox Series X/S, Xbox One, Windows 10/11, Android, iOS' },
      { label: 'Battery', value: 'Up to 40 hours with standard AA or rechargeable pack' },
      { label: 'Audio', value: '3.5mm stereo headset jack' },
      { label: 'D-Pad', value: 'Faceted hybrid tactile D-pad' },
      { label: 'Grip', value: 'Textured trigger, bumper, and rear grips' },
      { label: 'Weight', value: '287 grams (with batteries)' },
    ],
    advantages: [
      'Universal compatibility: seamlessly pairs with Windows PC, Steam Deck, mobile, and Xbox',
      'Sculpted surface contours fit comfortably in small, medium, and large hands',
      'Hybrid D-pad provides crisp, tactile clicks ideal for fighting games and platformers',
      'Low wireless input latency via Xbox Wireless protocol or USB-C tethered play'
    ],
    disadvantages: [
      'Comes with disposable AA batteries out of the box rather than built-in lithium-ion',
      'Face buttons produce a relatively loud tactile click'
    ],
    scores: {
      design: 9.4,
      performance: 9.6,
      battery: 9.3,
      value: 9.5,
      overall: 9.5,
    },
    verdict: 'The gold standard for PC and console gaming. Microsoft’s refined ergonomic grip, universal Bluetooth support, and rock-solid analog sticks make this an essential peripheral.',
    badge: 'Gamer Essential'
  },
  // All latest flagship smartphones from all major companies (Apple, Samsung, Google, OnePlus, Xiaomi, Nothing, Motorola, Sony, ASUS)
  ...SMARTPHONE_PRODUCTS.slice(1),
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 13" (M3)',
    brand: 'Apple',
    category: 'laptops',
    categoryLabel: 'Laptops',
    shortDesc: 'Fanless ultraportable with extraordinary battery endurance.',
    fullDesc: 'Supercharged by Apple’s M3 chip with hardware-accelerated ray tracing, support for up to two external displays with the lid closed, MagSafe charging, and up to 18 hours of true battery endurance in an all-aluminum unibody.',
    image: '/assets/products/macbook_air.jpg',
    isFeatured: false,
    rating: 4.9,
    reviewCount: 3450,
    releaseYear: '2024',
    affiliateUrl: 'https://www.apple.com/macbook-air/',
    bulletSpecs: ['Apple M3 Silicon', '18-Hour Battery', 'Fanless Silent Design'],
    specs: [
      { label: 'Processor', value: 'Apple M3 8-core CPU / 8-core or 10-core GPU' },
      { label: 'Display', value: '13.6" Liquid Retina (2560 x 1664) 500 nits P3 color' },
      { label: 'Battery', value: 'Up to 18 hours Apple TV app / 15 hours wireless web' },
      { label: 'Ports', value: 'MagSafe 3, 2x Thunderbolt / USB 4, 3.5mm headphone jack' },
      { label: 'Weight', value: '1.24 kg (2.73 lbs)' },
      { label: 'Audio', value: 'Four-speaker sound system with Spatial Audio' },
    ],
    advantages: [
      'Complete silent operation with zero fan noise under any workload',
      'Realistic all-day battery life that reliably lasts 14 to 18 hours between charges',
      'Best-in-class glass Force Touch trackpad and rigid aluminum chassis',
      'Now supports driving two external displays with laptop lid closed'
    ],
    disadvantages: [
      'Base configuration begins at 256GB SSD storage',
      'Only two Thunderbolt ports on the left side'
    ],
    scores: {
      design: 9.8,
      performance: 9.4,
      battery: 9.9,
      value: 9.1,
      overall: 9.6,
    },
    verdict: 'The definitive laptop for college students, journalists, and everyday creators. No Windows ultrabook matches its synergy of silent performance, battery life, and tactile build quality.',
    badge: 'Editor’s Choice'
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13',
    brand: 'Dell',
    category: 'laptops',
    categoryLabel: 'Laptops',
    shortDesc: 'Futuristic Windows ultrabook with CNC aluminum minimalism.',
    fullDesc: 'Crafted from machined CNC aluminum with Gorilla Glass 3 palm rest, capacitive touch function keys, seamless zero-lattice keyboard, and optional 3K+ OLED InfinityEdge touch screen powered by Intel Core Ultra processors.',
    image: '/assets/products/dell_xps13.jpg',
    isFeatured: false,
    rating: 4.6,
    reviewCount: 820,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.dell.com/en-us/shop/dell-laptops/xps-13-laptop/spd/xps-13-9340-laptop',
    bulletSpecs: ['Intel Core Ultra 7', 'OLED InfinityEdge', 'CNC Machined Aluminum'],
    specs: [
      { label: 'Processor', value: 'Intel Core Ultra 7 155H with dedicated NPU' },
      { label: 'Display', value: '13.4" 3K+ (2880 x 1800) OLED Touch 400 nits' },
      { label: 'Memory', value: '16GB / 32GB LPDDR5x' },
      { label: 'Storage', value: '512GB / 1TB PCIe Gen 4 SSD' },
      { label: 'Ports', value: '2x Thunderbolt 4 (Type-C) with DisplayPort and Power Delivery' },
      { label: 'Weight', value: '1.19 kg (2.6 lbs)' },
    ],
    advantages: [
      'Stunning 3K+ OLED panel with vibrant colors and pitch-black contrast levels',
      'Extremely compact footprint with borderless four-sided InfinityEdge bezels',
      'Built-in Intel AI Boost NPU accelerates local machine learning workflows',
      'Superb lightweight portability under 2.6 pounds'
    ],
    disadvantages: [
      'Capacitive touch function row lacks physical tactile feedback',
      'No 3.5mm headphone jack (requires USB-C adapter or Bluetooth audio)'
    ],
    scores: {
      design: 9.5,
      performance: 9.0,
      battery: 8.4,
      value: 8.6,
      overall: 8.9,
    },
    verdict: 'A futuristic technological statement piece. If you desire ultra-sleek minimalist design, borderless OLED visuals, and Windows Copilot+ acceleration, Dell’s flagship is head-turning.',
    badge: 'Futuristic Pick'
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    brand: 'Apple',
    category: 'smartwatches',
    categoryLabel: 'Smartwatches',
    shortDesc: 'Thinnest Apple Watch with widest view angle and sleep apnea detection.',
    fullDesc: 'Features Apple’s largest and most advanced Wide-Angle OLED display, nearly 10% thinner design, faster charging (80% in ~30 minutes), water temperature sensor, and sleep apnea notification capabilities.',
    image: '/assets/products/apple_watch10.jpg',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1650,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.apple.com/apple-watch-series-10/',
    bulletSpecs: ['Wide-Angle OLED', 'Thinnest Case Yet', 'Sleep Apnea Tracking'],
    specs: [
      { label: 'Processor', value: 'Apple S10 SiP with 4-core Neural Engine' },
      { label: 'Display', value: 'Wide-angle OLED, up to 40% brighter off-axis, up to 2,000 nits' },
      { label: 'Case Thickness', value: '9.7mm (almost 10% thinner than Series 9)' },
      { label: 'Sensors', value: 'Electrical ECG, blood oxygen, temperature, depth gauge to 6m' },
      { label: 'Charging', value: '0 to 80% battery in approximately 30 minutes' },
    ],
    advantages: [
      'Noticeably thinner on the wrist with refined beveled edges that slip smoothly under shirt cuffs',
      'Expansive screen provides even larger text and easier touchscreen interaction than Apple Watch Ultra',
      'Rapid charging means a quick 15-minute top-up provides 8 hours of overnight sleep tracking',
      'Built-in speaker can now play podcasts and music directly without headphones'
    ],
    disadvantages: [
      'Battery still requires daily charging for active workout and sleep monitoring users',
      'Exclusively works with Apple iPhone'
    ],
    scores: {
      design: 9.7,
      performance: 9.6,
      battery: 8.3,
      value: 8.9,
      overall: 9.3,
    },
    verdict: 'The pinnacle of consumer smartwatches. Its featherweight wrist profile, generous wide-angle OLED, and rapid charging make it Apple’s most refined everyday wearable yet.',
    badge: 'Wearable of the Year'
  },
  {
    id: 'google-nest-cam',
    name: 'Google Nest Cam (Indoor/Outdoor)',
    brand: 'Google',
    category: 'smarthome',
    categoryLabel: 'Smart Home',
    shortDesc: 'Intelligent battery security camera with person and vehicle recognition.',
    fullDesc: 'Battery-powered smart security camera that operates indoors or outdoors. Features wire-free magnetic installation, 1080p HDR video with night vision, and on-device machine learning that distinguishes between people, animals, and vehicles without requiring a mandatory cloud subscription.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 4120,
    releaseYear: '2024',
    affiliateUrl: 'https://store.google.com/product/nest_cam_battery',
    bulletSpecs: ['Wire-Free Battery', 'Smart Object Detection', 'Weather Resistant'],
    specs: [
      { label: 'Resolution', value: '1080p HDR at 30 FPS' },
      { label: 'Field of View', value: '130° diagonal with 6x digital zoom' },
      { label: 'Night Vision', value: 'High-power 850nm infrared LEDs up to 20 feet' },
      { label: 'Power', value: 'Built-in 6 Ah rechargeable lithium-ion battery or hardwired' },
      { label: 'Weather Rating', value: 'IP54 weather resistant' },
      { label: 'Audio', value: 'Full-duplex 2-way audio with noise cancellation' },
    ],
    advantages: [
      'Free 3-hour event video history stored locally on device without mandatory monthly subscription',
      'Magnetic mount makes recharging and angle adjustment effortless',
      'Intelligent notifications alert specifically for people, packages, animals, or vehicles',
      'Seamless Google Home and Google Assistant smart display integration'
    ],
    disadvantages: [
      'Battery recharge requires detaching unit or routing optional weatherproof cable',
      'Resolution capped at 1080p rather than 2K or 4K'
    ],
    scores: {
      design: 9.3,
      performance: 8.9,
      battery: 8.7,
      value: 9.0,
      overall: 9.0,
    },
    verdict: 'The easiest and most dependable smart security camera to deploy. The on-device object detection gives you actionable peace of mind without nickeling and diming for basic features.',
    badge: 'Smart Home Star'
  },
  {
    id: 'razer-blackshark-v2-pro',
    name: 'Razer BlackShark V2 Pro (2024)',
    brand: 'Razer',
    category: 'gaming',
    categoryLabel: 'Gaming',
    shortDesc: 'Esports wireless gaming headset with broadcast-grade mic clarity.',
    fullDesc: 'Engineered in collaboration with elite esports professionals, featuring Razer HyperClear Super Wideband Microphone, TriForce Titanium 50mm Drivers, on-headset FPS audio profiles, and up to 70 hours of battery life.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 3180,
    releaseYear: '2024',
    affiliateUrl: 'https://www.razer.com/gaming-headsets/razer-blackshark-v2-pro',
    bulletSpecs: ['70-Hour Battery Life', 'Super Wideband Mic', 'THX Spatial Audio'],
    specs: [
      { label: 'Drivers', value: 'Razer TriForce Titanium 50mm' },
      { label: 'Microphone', value: 'Razer HyperClear Super Wideband Detachable (32 kHz sampling)' },
      { label: 'Battery', value: 'Up to 70 hours (15 min charge gives 6 hours)' },
      { label: 'Wireless', value: '2.4 GHz HyperSpeed Wireless + Bluetooth 5.2' },
      { label: 'Weight', value: '320 grams' },
      { label: 'Ear Cushions', value: 'Ultra-soft memory foam with breathable weave' },
    ],
    advantages: [
      'Arguably the cleanest, most natural sounding wireless microphone on any gaming headset',
      'Massive 70-hour battery life eliminates mid-tournament recharging anxiety',
      'Plush, breathable ear cushions prevent sweat buildup during marathon gaming sessions',
      'Pre-tuned on-board audio profiles developed with top competitive CS2 and Valorant pros'
    ],
    disadvantages: [
      'No active noise cancellation (passive isolation only)',
      'Design retains visible exposed pilot-style adjustment wires'
    ],
    scores: {
      design: 9.1,
      performance: 9.7,
      battery: 9.8,
      value: 9.3,
      overall: 9.5,
    },
    verdict: 'If microphone clarity, spatial directional audio for competitive shooters, and mammoth battery life are your priorities, the BlackShark V2 Pro is unrivaled.',
    badge: 'Esports Champion'
  }
];

export const BUYING_GUIDES: BuyingGuide[] = [
  {
    id: 'how-to-choose-wireless-earbuds',
    slug: 'how-to-choose-wireless-earbuds',
    title: 'How to Choose Wireless Earbuds in 2025: Sound Quality, ANC & Fit',
    category: 'Headphones',
    date: 'April 25, 2025',
    readTime: '6 min read',
    summary: 'Everything you need to evaluate before purchasing true wireless earbuds, from active noise cancellation codecs to ear-tip ergonomics and real-world battery endurance.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Audio Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    sections: [
      {
        heading: '1. Active Noise Cancellation (ANC) vs. Passive Isolation',
        content: 'Active Noise Cancellation uses outward and inward-facing microphones to invert external sounds. Modern dual-chip designs attenuate low hums (airplane cabins, AC units) and conversational mid-frequencies. Ensure the model supports transparency or ambient mode with natural voice passthrough for situational awareness.',
        tips: [
          'Look for adaptive ANC that automatically adjusts intensity based on atmospheric pressure and ambient decibels.',
          'Always test multiple silicon/foam tip sizes; an airtight acoustic seal accounts for 60% of perceived bass and noise rejection.'
        ]
      },
      {
        heading: '2. High Resolution Audio Codecs: LDAC, aptX Adaptive, AAC',
        content: 'While iPhones rely on optimized AAC, Android smartphones can unlock significantly higher bitrates through LDAC (up to 990 kbps) or Qualcomm aptX Lossless. If you stream Hi-Res lossless tracks from Apple Music or Tidal, ensure matching codec compatibility between your phone and earbuds.',
      },
      {
        heading: '3. Real Battery Life Expectations',
        content: 'Manufacturers frequently cite total battery life including the charging case. Focus on single-charge earbud playtime with ANC enabled: 6 to 8 hours is considered excellent, while 4 to 5 hours is average. Wireless charging cases and quick 5-minute boost charging provide immense everyday peace of mind.',
      }
    ],
    checklist: [
      'Acoustic seal verification with bundled multi-size ear tips',
      'IPX4 water-resistance rating or higher for sweat and rain protection',
      'Bluetooth Multipoint for dual connection (laptop + phone)',
      'Custom EQ controls in companion mobile app',
      'Transparency / awareness mode clarity'
    ],
    recommendedProductIds: ['sony-wh-1000xm5']
  },
  {
    id: 'what-to-look-for-when-buying-a-laptop',
    slug: 'what-to-look-for-when-buying-a-laptop',
    title: 'What to Look for When Buying a Laptop for Remote Work & College',
    category: 'Laptops',
    date: 'April 22, 2025',
    readTime: '8 min read',
    summary: 'A comprehensive buyer’s breakdown comparing Intel Core Ultra, Apple M3, and AMD Ryzen processors, display technology, and battery efficiency for modern multitaskers.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Elena Rostova',
      role: 'Hardware Analyst & Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
    sections: [
      {
        heading: '1. Silicon Architecture: ARM vs. x86 Efficiency',
        content: 'The era of loud fans and 3-hour battery life is over. Apple M3 series processors on ARM deliver unbelievable power efficiency with silent or near-silent operation. Meanwhile, Intel Core Ultra (Meteor Lake) and AMD Ryzen chips introduce dedicated NPUs for local AI acceleration and battery longevity on Windows machines.',
        tips: [
          'For 90% of students and office workers, 16GB of unified RAM is the recommended sweet spot in 2025.',
          'Avoid 8GB configurations if you plan to keep your machine for more than 3 years with modern browser tabs and AI extensions.'
        ]
      },
      {
        heading: '2. Display Quality and Aspect Ratios',
        content: 'Prioritize 16:10 or 3:2 aspect ratio screens over traditional 16:9 widescreen formats. The extra vertical canvas significantly reduces scrolling when drafting documents, programming, or managing spreadsheets. Look for IPS or OLED panels with at least 400 nits of brightness.',
      }
    ],
    checklist: [
      'Minimum 16GB RAM for multitasking headroom',
      'Fast NVMe PCIe SSD storage (512GB minimum recommended)',
      '16:10 aspect ratio screen with ≥ 400 nits brightness',
      'Thunderbolt 4 or USB-C Power Delivery charging',
      'Tactile keyboard key travel ≥ 1.3mm'
    ],
    recommendedProductIds: ['macbook-air-m3', 'asus-vivobook-15', 'dell-xps-13']
  },
  {
    id: 'essential-accessories-for-a-new-smartphone',
    slug: 'essential-accessories-for-a-new-smartphone',
    title: 'Essential Accessories for a New Smartphone: Cases, Chargers & MagSafe',
    category: 'Smartphones',
    date: 'April 18, 2025',
    readTime: '5 min read',
    summary: 'Maximize your device’s lifespan, charging speed, and ergonomics with our curated list of battle-tested smartphone accessories.',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Devon Reed',
      role: 'Mobile Peripherals Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    sections: [
      {
        heading: '1. GaN (Gallium Nitride) Fast Chargers',
        content: 'Modern flagships like the iPhone 16 and Galaxy S24 ship without wall bricks. Upgrade to a compact 45W or 65W GaN charger with dual USB-C ports to fast-charge both your phone and laptop simultaneously from a plug smaller than a mint tin.',
      },
      {
        heading: '2. MagSafe and Magnetic Ecosystem for Android and iOS',
        content: 'Magnetic ring cases allow Android users to enjoy the vast MagSafe ecosystem: snap-on car mounts, kickstand wallets, and battery packs. It transforms how you mount your device on desks and dashboards.',
      }
    ],
    checklist: [
      'Compact GaN 45W+ multi-port charger',
      'Braided 240W USB-C cable for high durability',
      '9H hardness tempered glass screen protector with alignment tray',
      'MagSafe / Qi2 magnetic wireless desk charging stand'
    ],
    recommendedProductIds: ['iphone-16', 'samsung-galaxy-s24']
  },
  {
    id: 'how-to-choose-a-gaming-headset',
    slug: 'how-to-choose-a-gaming-headset',
    title: 'How to Choose a Gaming Headset: Comfort, Spatial Sound & Mic Clarity',
    category: 'Gaming',
    date: 'April 15, 2025',
    readTime: '7 min read',
    summary: 'A tactical buying guide breaking down wireless latency, acoustic soundstage separation, and broadcast-grade microphone tech for competitive gamers.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Audio Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    sections: [
      {
        heading: '1. 2.4GHz Wireless vs. Bluetooth for Gaming',
        content: 'Standard Bluetooth introduces 100ms to 200ms of audio delay—enough to make enemy footsteps sound delayed after they peak. Dedicated 2.4GHz wireless dongles compress transmission latency down to sub-15ms, ensuring instantaneous acoustic feedback.',
      },
      {
        heading: '2. Clamping Force and Breathable Memory Foam',
        content: 'A headset can have stellar audio, but if it exerts excessive temporal pressure or causes ear sweat within 45 minutes, it will stay in its box. Look for hybrid fabric ear cups and lightweight suspended headbands.',
      }
    ],
    checklist: [
      '2.4GHz low-latency wireless connection dongle',
      'Memory foam ear cushions with breathable athletic fabric',
      'Detachable or flip-to-mute microphone with clear sidetone',
      'On-ear volume wheel and game/chat balance dial',
      'Battery life exceeding 40 hours'
    ],
    recommendedProductIds: ['razer-blackshark-v2-pro', 'xbox-wireless-controller']
  }
];

const getProd = (id: string, fallbackIdx = 0): Product => 
  PRODUCTS.find((p) => p.id === id) || PRODUCTS[fallbackIdx];

export const COMPARISONS: Comparison[] = [
  {
    id: 'iphone-16-vs-samsung-galaxy-s24',
    title: 'iPhone 16 vs Samsung Galaxy S24',
    subtitle: 'Battle of the Compact Flagships',
    category: 'smartphones',
    product1: getProd('iphone-16', 0),
    product2: getProd('samsung-galaxy-s24', 1),
    summary: 'Two ultra-refined smartphones under 6.2 inches. Apple leads in sheer CPU silicon performance and tactile Camera Control, while Samsung pulls ahead with its 120Hz display, dedicated 3x telephoto camera, and 7-year update guarantee.',
    verdict: 'Choose the iPhone 16 if you are deeply invested in Apple’s ecosystem, prioritize videography, and desire the raw horsepower of the A18 chip. Choose the Galaxy S24 if you want a buttery-smooth 120Hz display, optical 3x zoom flexibility, and comprehensive Galaxy AI functionality.',
    features: [
      { name: 'Display Refresh Rate', p1Value: '60 Hz Super Retina', p2Value: '1-120 Hz Dynamic AMOLED 2X', winner: 'p2' },
      { name: 'Processor Silicon', p1Value: 'Apple A18 Bionic (3nm)', p2Value: 'Snapdragon 8 Gen 3 (4nm)', winner: 'p1' },
      { name: 'Telephoto Lens', p1Value: '2x sensor crop (Digital)', p2Value: 'Dedicated 3x Optical Lens (10MP)', winner: 'p2' },
      { name: 'Dedicated Hardware Button', p1Value: 'Action Button + Camera Control', p2Value: 'Standard Volume & Power Keys', winner: 'p1' },
      { name: 'Software Update Policy', p1Value: 'Approx 5-6 Years iOS Support', p2Value: 'Guaranteed 7 Years OS & Security', winner: 'p2' },
      { name: 'Weight & Ergonomics', p1Value: '170g (Aerospace Aluminum)', p2Value: '167g (Armor Aluminum)', winner: 'tie' },
    ]
  },
  {
    id: 'macbook-air-m3-vs-dell-xps-13',
    title: 'MacBook Air vs Dell XPS 13',
    subtitle: 'The Ultimate Ultraportable Showdown',
    category: 'laptops',
    product1: getProd('macbook-air-m3', 0),
    product2: getProd('dell-xps-13', 1),
    summary: 'The two premier premium 13-inch ultraportables. Apple’s MacBook Air offers silent fanless operation and class-leading battery life, while Dell’s XPS 13 counters with an optional 3K OLED touch display and futuristic zero-lattice aesthetics.',
    verdict: 'The MacBook Air M3 remains the undisputed endurance king, easily surpassing 15 hours of battery life with zero fan noise. The Dell XPS 13 is the machine for Windows loyalists wanting an ultra-modern aesthetic and the inky contrast of OLED.',
    features: [
      { name: 'Thermal Design', p1Value: '100% Fanless Silent Architecture', p2Value: 'Dual High-RPM Fans', winner: 'p1' },
      { name: 'Display Technology', p1Value: '13.6" Liquid Retina IPS (500 nits)', p2Value: '13.4" 3K+ OLED Touch Panel', winner: 'p2' },
      { name: 'Battery Endurance', p1Value: 'Up to 18 Hours Real-World', p2Value: 'Up to 10-12 Hours Real-World', winner: 'p1' },
      { name: 'Trackpad & Navigation', p1Value: 'Industry-standard Force Touch Glass', p2Value: 'Seamless Invisible Haptic Trackpad', winner: 'p1' },
      { name: 'Operating System', p1Value: 'macOS Sequoia with Apple Intelligence', p2Value: 'Windows 11 with Copilot+ AI', winner: 'tie' },
      { name: 'Form Factor Weight', p1Value: '1.24 kg (2.73 lbs)', p2Value: '1.19 kg (2.60 lbs)', winner: 'p2' },
    ]
  },
  {
    id: 'iphone-16-pro-max-vs-samsung-galaxy-s24-ultra',
    title: 'iPhone 16 Pro Max vs Samsung Galaxy S24 Ultra',
    subtitle: 'The Titanium Heavyweight Flagship Clash',
    category: 'smartphones',
    product1: getProd('iphone-16-pro-max', 0),
    product2: getProd('samsung-galaxy-s24-ultra', 1),
    summary: 'The ultimate titans of iOS and Android. Apple brings the A18 Pro silicon, 4K 120fps Dolby Vision, and tactile Camera Control, while Samsung delivers the 200MP Quad Tele camera, integrated S-Pen stylus, and anti-reflective Gorilla Armor glass.',
    verdict: 'The iPhone 16 Pro Max offers unprecedented video capture and battery longevity, making it the supreme choice for video creators and iOS loyalists. The Galaxy S24 Ultra is the ultimate Swiss Army knife with its anti-glare display, S Pen, and unparalleled 100x zoom flexibility.',
    features: [
      { name: 'Display Size & Glass', p1Value: '6.9" Ceramic Shield (Glossy)', p2Value: '6.8" Gorilla Armor (Anti-Reflective)', winner: 'p2' },
      { name: 'Compute Performance', p1Value: 'Apple A18 Pro (Benchmark Leader)', p2Value: 'Snapdragon 8 Gen 3 for Galaxy', winner: 'p1' },
      { name: 'Zoom Versatility', p1Value: '5x Optical Telephoto (12MP)', p2Value: '3x + 5x Optical Periscope (200MP Main)', winner: 'p2' },
      { name: 'Video Recording', p1Value: '4K 120fps Dolby Vision + ProRes', p2Value: '8K 30fps / 4K 120fps standard', winner: 'p1' },
      { name: 'Stylus Support', p1Value: 'No Stylus', p2Value: 'Built-in Bluetooth S Pen', winner: 'p2' },
      { name: 'Battery Endurance', p1Value: 'Up to 33 Hours Video', p2Value: 'Up to 30 Hours Video', winner: 'p1' },
    ]
  }
];
