import { Product } from '../types.ts';

export const SMARTPHONE_PRODUCTS: Product[] = [
  // ================= APPLE =================
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Latest smartphone with powerful performance, Camera Control, and Apple Intelligence.',
    fullDesc: 'The iPhone 16 features Apple Intelligence, the state-of-the-art A18 processor built on second-generation 3nm technology, Camera Control for rapid capture, and upgraded 48MP Fusion camera with 2x optical-quality telephoto.',
    image: '/assets/products/iphone16.jpg',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 1420,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B008PSl7D',
    bulletSpecs: ['A18 Bionic chip (3nm)', 'Dedicated Camera Control', 'Up to 22h Battery'],
    specs: [
      { label: 'Processor', value: 'Apple A18 Bionic (3nm, 6-core CPU, 5-core GPU)' },
      { label: 'Display', value: '6.1" Super Retina XDR OLED (2000 nits peak)' },
      { label: 'Rear Cameras', value: '48MP Fusion + 12MP Ultra Wide with Macro' },
      { label: 'Battery', value: 'Up to 22 hours video playback' },
      { label: 'Weight', value: '170 grams' },
      { label: 'Port', value: 'USB-C with USB 2 speeds' },
      { label: 'Durability', value: 'Latest Ceramic Shield front, IP68 water resistance' },
    ],
    advantages: [
      'Industry-leading A18 processor provides instantaneous app loading and console-tier gaming',
      'Dedicated Camera Control capacitive slider enables tactile exposure and depth adjustment',
      'Substantial battery efficiency boost over previous generation',
      'Action button customization provides quick access to frequently used shortcuts'
    ],
    disadvantages: [
      'Display refresh rate is still 60Hz instead of 120Hz ProMotion',
      'USB-C transfer speeds remain limited to USB 2.0 standards'
    ],
    scores: {
      design: 9.3,
      performance: 9.8,
      battery: 9.1,
      value: 8.7,
      overall: 9.2,
    },
    verdict: 'The iPhone 16 is Apple’s most compelling non-Pro smartphone in years, bringing pro-grade thermal architecture, physical Camera Control, and cutting-edge A18 silicon to mainstream tech enthusiasts.',
    badge: 'Staff Pick'
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Titanium powerhouse with Apple’s largest 6.9" ProMotion display and A18 Pro.',
    fullDesc: 'Crafted in Grade 5 Titanium with micro-blasted borders, Apple’s largest 6.9-inch Super Retina XDR display, cutting-edge A18 Pro silicon with 6-core GPU, 5x telephoto optical zoom, and 4K 120fps Dolby Vision video recording.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.9,
    reviewCount: 2840,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B0cMcUqME',
    bulletSpecs: ['A18 Pro (3nm)', '6.9" 120Hz ProMotion', '5x Telephoto & 4K 120fps'],
    specs: [
      { label: 'Processor', value: 'Apple A18 Pro (3nm, 6-core GPU with hardware ray tracing)' },
      { label: 'Display', value: '6.9" Super Retina XDR OLED 1-120Hz ProMotion (2000 nits peak)' },
      { label: 'Rear Cameras', value: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Tetraprism Telephoto' },
      { label: 'Battery', value: 'Up to 33 hours video playback (Class benchmark)' },
      { label: 'Weight', value: '227 grams' },
      { label: 'Port', value: 'USB-C (USB 3 up to 10Gbps)' },
      { label: 'Build', value: 'Grade 5 Titanium with graphite-coated aluminum thermal frame' },
    ],
    advantages: [
      'Class-leading 33-hour battery endurance outperforms nearly all competing flagships',
      'Cinema-grade 4K 120fps ProRes & Dolby Vision video capture with studio 4-mic array',
      'Tactile capacitive Camera Control slider with two-stage shutter feel',
      'ProMotion 120Hz refresh rate combined with ultra-thin bezels'
    ],
    disadvantages: [
      'Massive 6.9-inch dimensions demand two-handed operation',
      'High price point starting at 256GB'
    ],
    scores: {
      design: 9.7,
      performance: 9.9,
      battery: 9.8,
      value: 8.9,
      overall: 9.6,
    },
    verdict: 'The definitive luxury smartphone for mobile videographers, photographers, and power users who want the longest-lasting battery and largest screen in the iOS ecosystem.',
    badge: 'Flagship King'
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Compact Pro power with 6.3" ProMotion, A18 Pro, and full 5x optical telephoto.',
    fullDesc: 'Packaged in a lightweight titanium enclosure, the iPhone 16 Pro brings all the camera power of the Pro Max—including the 5x tetraprism telephoto and 48MP ultrawide—into a comfortable 6.3-inch form factor.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1950,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B03nAwZ5H',
    bulletSpecs: ['A18 Pro Silicon', '6.3" 120Hz ProMotion', '5x Optical Telephoto'],
    specs: [
      { label: 'Processor', value: 'Apple A18 Pro (3nm)' },
      { label: 'Display', value: '6.3" Super Retina XDR OLED ProMotion (2000 nits)' },
      { label: 'Rear Cameras', value: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto' },
      { label: 'Battery', value: 'Up to 27 hours video playback' },
      { label: 'Weight', value: '199 grams' },
      { label: 'Port', value: 'USB-C (USB 3 speeds up to 10Gbps)' },
    ],
    advantages: [
      'Full parity with Pro Max camera hardware including 5x optical zoom',
      'Comfortable 6.3-inch single-handed ergonomics with narrow bezels',
      'A18 Pro delivers elite gaming frame rates and on-device intelligence',
      'Studio-quality 4-mic array with Audio Mix voice isolation'
    ],
    disadvantages: [
      'Battery life while great is noticeably shorter than 16 Pro Max',
      'Charging speeds top out around 27W'
    ],
    scores: {
      design: 9.6,
      performance: 9.9,
      battery: 9.0,
      value: 9.0,
      overall: 9.4,
    },
    verdict: 'The sweet spot in Apple’s premium lineup. You get uncompromised Pro cameras and 120Hz ProMotion in a phone that comfortably slips into any pocket.',
    badge: 'Pro Compact'
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    brand: 'Apple',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Expansive 6.7-inch Super Retina display with exceptional all-day battery life.',
    fullDesc: 'The iPhone 16 Plus delivers the big-screen iPhone experience with a generous 6.7-inch Super Retina XDR display, A18 silicon, physical Camera Control, and legendary multi-day endurance.',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 940,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B08joL8ov',
    bulletSpecs: ['A18 Processor', '6.7" OLED Screen', 'Up to 27h Battery'],
    specs: [
      { label: 'Processor', value: 'Apple A18 Bionic (3nm)' },
      { label: 'Display', value: '6.7" Super Retina XDR OLED (2000 nits peak)' },
      { label: 'Rear Cameras', value: '48MP Fusion + 12MP Ultra Wide with Macro' },
      { label: 'Battery', value: 'Up to 27 hours video playback' },
      { label: 'Weight', value: '199 grams' },
    ],
    advantages: [
      'Huge 6.7-inch display at a significantly lower cost than the Pro Max',
      'Outstanding battery life easily lasting 1.5 to 2 full days',
      'A18 processor runs demanding 3D games with smooth stability',
      'Vibrant color-infused back glass finishes'
    ],
    disadvantages: [
      'Locked to 60Hz refresh rate',
      'No dedicated telephoto lens'
    ],
    scores: {
      design: 9.1,
      performance: 9.6,
      battery: 9.7,
      value: 8.9,
      overall: 9.1,
    },
    verdict: 'If you want a gigantic iPhone display and marathon battery endurance without paying the four-figure Pro Max price tag, the 16 Plus is a powerhouse.',
    badge: 'Battery Champ'
  },

  // ================= SAMSUNG =================
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Titanium powerhouse with 200MP Quad Tele camera, built-in S-Pen, and Galaxy AI.',
    fullDesc: 'Samsung’s ultimate flagship features a flat 6.8-inch Dynamic AMOLED 2X display with anti-reflective Corning Gorilla Armor, Snapdragon 8 Gen 3 for Galaxy, titanium frame, integrated Bluetooth S Pen stylus, and 200MP camera system with 5x 50MP optical zoom and 100x Space Zoom.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.9,
    reviewCount: 4210,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B0fhRkRQU',
    bulletSpecs: ['Snapdragon 8 Gen 3', '200MP Quad Tele System', 'Anti-Reflective Armor Glass'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)' },
      { label: 'Display', value: '6.8" QHD+ Flat Dynamic AMOLED 2X 1-120Hz (2600 nits peak)' },
      { label: 'Rear Cameras', value: '200MP Main + 50MP 5x Periscope + 10MP 3x Tele + 12MP Ultrawide' },
      { label: 'Battery', value: '5,000 mAh with 45W wired and 15W wireless charging' },
      { label: 'Stylus', value: 'Integrated Bluetooth S Pen with Air Actions' },
      { label: 'Glass', value: 'Corning Gorilla Armor (reduces reflections by 75%)' },
      { label: 'Updates', value: '7 Generations of Android OS & 7 Years of Security' },
    ],
    advantages: [
      'Corning Gorilla Armor drastically cuts ambient screen glare like no other phone display',
      'Unmatched zoom versatility with dual dedicated telephoto lenses and 100x Space Zoom',
      'Built-in S Pen stylus provides precision sketching, document signing, and remote camera triggering',
      'Guaranteed 7 full years of Android OS and security upgrades'
    ],
    disadvantages: [
      'Angular boxy corners can feel sharp in smaller hands during prolonged holding',
      '45W wired charging is slower than 100W competitors'
    ],
    scores: {
      design: 9.6,
      performance: 9.9,
      battery: 9.5,
      value: 9.2,
      overall: 9.7,
    },
    verdict: 'The indisputable king of Android flagships. The anti-reflective glass, versatile 200MP quad-camera, embedded S Pen, and 7 years of support make the S24 Ultra a complete powerhouse.',
    badge: 'Ultimate Android'
  },
  {
    id: 'samsung-galaxy-s24-plus',
    name: 'Samsung Galaxy S24+',
    brand: 'Samsung',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: '6.7-inch QHD+ 120Hz display, 4900mAh battery, and full Galaxy AI suite.',
    fullDesc: 'The Galaxy S24+ steps up with a sharp QHD+ 6.7-inch panel, 12GB RAM standard, 4,900mAh battery, 45W fast charging, and the full power of Snapdragon 8 Gen 3.',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1620,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B0dg1nieS',
    bulletSpecs: ['Snapdragon 8 Gen 3', '6.7" QHD+ 120Hz', '4,900 mAh Battery'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Display', value: '6.7" QHD+ Dynamic AMOLED 2X, 1-120Hz (2600 nits)' },
      { label: 'Rear Cameras', value: '50MP Main + 10MP 3x Telephoto + 12MP Ultrawide' },
      { label: 'Battery', value: '4,900 mAh with 45W wired fast charge' },
      { label: 'RAM', value: '12GB standard' },
    ],
    advantages: [
      'Upgraded to razor-sharp QHD+ resolution matching the Ultra',
      'Substantial 4,900mAh battery matches nearly two full days of typical usage',
      'Faster 45W charging support over the standard S24',
      'Smooth curved aluminum armor frame fits comfortably in hand'
    ],
    disadvantages: [
      'Lacks the anti-reflective Gorilla Armor glass of the S24 Ultra',
      'No 5x periscope telephoto'
    ],
    scores: {
      design: 9.4,
      performance: 9.7,
      battery: 9.4,
      value: 9.3,
      overall: 9.4,
    },
    verdict: 'The pragmatic flagship. You get 90% of the S24 Ultra experience—including 12GB RAM, 45W charging, and QHD+ display—in a lighter, more ergonomic design.',
    badge: 'Sweet Spot Flagship'
  },
  {
    id: 'samsung-galaxy-s24',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Compact AI flagship with brilliant 120Hz display and 3x optical telephoto.',
    fullDesc: 'Samsung’s pocketable powerhouse boasts a 6.2-inch 120Hz Dynamic AMOLED 2X panel hitting 2,600 nits, the Snapdragon 8 Gen 3 for Galaxy, and full suite of Galaxy AI tools including Circle to Search and Live Translate.',
    image: '/assets/products/samsung_s24.jpg',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 980,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B05FDw1jF',
    bulletSpecs: ['Galaxy AI suite', '120Hz Dynamic AMOLED', '7 Years of OS Updates'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Display', value: '6.2" FHD+ Dynamic AMOLED 2X, 1-120Hz (2600 nits)' },
      { label: 'Rear Cameras', value: '50MP Main + 12MP Ultra-wide + 10MP 3x Telephoto' },
      { label: 'Battery', value: '4,000 mAh with 25W fast charging' },
      { label: 'Weight', value: '167 grams' },
    ],
    advantages: [
      'Smooth 120Hz adaptive refresh rate that easily outperforms standard 60Hz panels',
      'True 3x dedicated optical telephoto camera lens in a compact chassis',
      'Samsung guarantees 7 full years of Android OS and security upgrades',
      'Peak brightness of 2600 nits ensures effortless outdoor readability under harsh sunlight'
    ],
    disadvantages: [
      'Base model is equipped with 128GB UFS 3.1 storage rather than faster UFS 4.0',
      'Charging speed is limited to 25W'
    ],
    scores: {
      design: 9.1,
      performance: 9.5,
      battery: 8.8,
      value: 9.0,
      overall: 9.1,
    },
    verdict: 'The best compact Android phone on the market today. Its 120Hz display, dedicated 3x telephoto zoom, and 7-year update guarantee make it the premier alternative to the iPhone 16.',
    badge: 'Top Android Pick'
  },
  {
    id: 'samsung-galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Thinner, lighter foldable powerhouse with dual 120Hz displays and IP48 rating.',
    fullDesc: 'Redesigned with sharper symmetrical edges, enhanced Armor Aluminum hinge, and a brighter 7.6-inch main screen hitting 2,600 nits. Boasts enhanced AI productivity features like Note Assist with transcriptions and dual-screen Interpreter mode.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1150,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B0cWKvL4s',
    bulletSpecs: ['7.6" Inner AMOLED 120Hz', 'Snapdragon 8 Gen 3', 'IP48 Water/Dust Resistant'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Inner Display', value: '7.6" QXGA+ Dynamic AMOLED 2X (1-120Hz, 2600 nits)' },
      { label: 'Cover Display', value: '6.3" HD+ Dynamic AMOLED 2X (1-120Hz, wider 22:9 aspect)' },
      { label: 'Cameras', value: '50MP Main OIS + 10MP 3x Tele + 12MP Ultrawide' },
      { label: 'Battery', value: '4,400 mAh dual-cell' },
      { label: 'Weight', value: '239 grams (14g lighter than Fold 5)' },
    ],
    advantages: [
      'Unsurpassed folding software multitasking with three-app split screen and floating pop-ups',
      'Significantly lighter and more comfortable folded grip with wider cover screen',
      'IP48 water and particle resistance with reinforced folding layer',
      'S Pen Fold Edition support for digital note-taking on the 7.6-inch canvas'
    ],
    disadvantages: [
      'High price tag represents an ultra-premium investment',
      'Battery capacity remains at 4,400 mAh'
    ],
    scores: {
      design: 9.7,
      performance: 9.8,
      battery: 8.7,
      value: 8.5,
      overall: 9.3,
    },
    verdict: 'The ultimate foldable for multitasking professionals. The Fold 6 delivers a tablet in your pocket, supported by the most mature folding software ecosystem in the world.',
    badge: 'Next-Gen Foldable'
  },
  {
    id: 'samsung-galaxy-z-flip-6',
    name: 'Samsung Galaxy Z Flip 6',
    brand: 'Samsung',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Pocket-sized clamshell foldable with upgraded 50MP camera and 4,000mAh battery.',
    fullDesc: 'Samsung’s chic clamshell foldable gets serious upgrades: a flagship 50MP main camera sensor, larger 4,000mAh battery, first-ever vapor chamber cooling in a Flip, and customizable FlexWindow widgets with generative wallpapers.',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 1380,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.samsung.com/galaxy-z-flip6/',
    bulletSpecs: ['50MP Pro Camera', '4,000 mAh Battery', 'Vapor Chamber Cooling'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Main Display', value: '6.7" FHD+ Dynamic AMOLED 2X 1-120Hz' },
      { label: 'Cover Display', value: '3.4" Super AMOLED FlexWindow (60Hz, 1600 nits)' },
      { label: 'Cameras', value: '50MP Main OIS + 12MP Ultrawide' },
      { label: 'Battery', value: '4,000 mAh with 25W fast charge' },
      { label: 'RAM', value: '12GB RAM standard' },
    ],
    advantages: [
      'Upgraded 50MP camera matches the regular S24 in photo clarity and low-light fidelity',
      '4,000mAh battery combined with Snapdragon 8 Gen 3 yields reliable full-day endurance',
      'Integrated vapor chamber keeps thermal throttling at bay during heavy tasks',
      'Ultra-compact folded footprint slips into any pocket or handbag'
    ],
    disadvantages: [
      'Cover display refresh rate is 60Hz',
      'No dedicated telephoto lens'
    ],
    scores: {
      design: 9.6,
      performance: 9.4,
      battery: 8.6,
      value: 8.8,
      overall: 9.1,
    },
    verdict: 'The most refined flip phone on the market. With 12GB RAM, 50MP camera, and enhanced 4,000mAh battery, the Flip 6 leaves behind earlier compromises.',
    badge: 'Style & Portability'
  },

  // ================= GOOGLE =================
  {
    id: 'google-pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Google’s premier AI flagship with 6.8" Super Actua display and Gemini Nano.',
    fullDesc: 'Engineered with the Tensor G4 processor paired with 16GB RAM for on-device Gemini AI models. Features Google’s iconic camera visor, Super Actua display reaching an astounding 3,000 nits, and computational photography with Add Me, Reimagine, and Video Boost.',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 2150,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://link.amazon/B07kWhw0J',
    bulletSpecs: ['Tensor G4 with 16GB RAM', '3,000 Nits Super Actua', '50MP Triple Pro Cameras'],
    specs: [
      { label: 'Processor', value: 'Google Tensor G4 with Titan M2 security coprocessor' },
      { label: 'Display', value: '6.8" LTPO Super Actua OLED (1-120Hz, 3000 nits peak)' },
      { label: 'Rear Cameras', value: '50MP Octa PD Main + 48MP Ultrawide Macro + 48MP 5x Telephoto' },
      { label: 'Front Camera', value: '42MP Dual PD Selfie with Autofocus' },
      { label: 'Battery', value: '5,060 mAh with 37W fast charge (70% in 30 mins)' },
      { label: 'Software Updates', value: '7 years of OS, security, and Pixel Feature Drops' },
    ],
    advantages: [
      'Supreme still photography fidelity and natural skin tone reproduction via Real Tone',
      'Dazzling 3,000 nits peak display offers unbeatable sunlight visibility',
      'Innovative AI features like "Add Me" group photo blending and Pixel Studio generator',
      'Guarantees 7 full years of immediate monthly Android updates and feature drops'
    ],
    disadvantages: [
      'Tensor G4 raw peak 3D graphics benchmarks lag behind Snapdragon 8 Gen 3',
      'Charging speed tops out around 37W'
    ],
    scores: {
      design: 9.6,
      performance: 9.3,
      battery: 9.3,
      value: 9.1,
      overall: 9.5,
    },
    verdict: 'The best Android phone for photography and smart everyday AI assistance. Google’s design maturity and 3,000-nit display give it true flagship nobility.',
    badge: 'AI Camera King'
  },
  {
    id: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro',
    brand: 'Google',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'All Pro camera lenses and 16GB RAM in a comfortable 6.3-inch form factor.',
    fullDesc: 'Google answered enthusiast prayers by packing every single camera sensor, 16GB RAM, and 3,000-nit Super Actua display from the XL into a pocket-friendly 6.3-inch chassis.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1840,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://store.google.com/product/pixel_9_pro',
    bulletSpecs: ['Tensor G4 + 16GB RAM', '6.3" 3000-Nit OLED', '5x Optical Zoom'],
    specs: [
      { label: 'Processor', value: 'Google Tensor G4 (4nm)' },
      { label: 'Display', value: '6.3" LTPO Super Actua OLED (1-120Hz, 3000 nits)' },
      { label: 'Cameras', value: '50MP Main + 48MP Ultrawide + 48MP 5x Telephoto + 42MP Selfie' },
      { label: 'Battery', value: '4,700 mAh with 27W fast charging' },
      { label: 'RAM', value: '16GB standard' },
    ],
    advantages: [
      'Zero feature compromises compared to the larger XL model',
      'Superb one-handed ergonomics with flat polished metal rails and matte glass back',
      'Sensational 42MP front selfie camera with autofocus',
      'Dedicated 5x periscope telephoto lens in a compact frame'
    ],
    disadvantages: [
      'Slightly slower 27W wired charging compared to 37W on the XL',
      'Tensor G4 runs slightly warm under sustained AAA gaming'
    ],
    scores: {
      design: 9.7,
      performance: 9.3,
      battery: 9.0,
      value: 9.2,
      overall: 9.4,
    },
    verdict: 'The compact Android phone enthusiasts have been demanding for years. Pro cameras, gorgeous display, and 16GB RAM in a size that fits comfortably anywhere.',
    badge: 'Compact AI Pro'
  },
  {
    id: 'google-pixel-9',
    name: 'Google Pixel 9',
    brand: 'Google',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Fresh satin design with upgraded 48MP ultrawide and Gemini AI built in.',
    fullDesc: 'The standard Pixel 9 features the same striking redesign as the Pro models, with an upgraded 48MP ultrawide camera, 12GB RAM, 2,700-nit Actua OLED screen, and Google Tensor G4.',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 1420,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://store.google.com/product/pixel_9',
    bulletSpecs: ['Tensor G4 + 12GB RAM', '6.3" 120Hz Actua Display', 'Upgraded 48MP Ultrawide'],
    specs: [
      { label: 'Processor', value: 'Google Tensor G4' },
      { label: 'Display', value: '6.3" Actua OLED 60-120Hz (2700 nits peak)' },
      { label: 'Cameras', value: '50MP Main + 48MP Ultrawide with Macro Focus' },
      { label: 'Battery', value: '4,700 mAh (20% battery life boost)' },
      { label: 'RAM', value: '12GB' },
    ],
    advantages: [
      'Substantial build quality leap with satin metal frame and Gorilla Glass Victus 2',
      'Upgraded 48MP ultrawide brings Macro Focus to the base Pixel lineup',
      'Up to 12GB RAM keeps background apps and Gemini models cached effortlessly',
      '7 full years of Android OS and feature updates'
    ],
    disadvantages: [
      'No dedicated telephoto zoom camera',
      'Display is 60-120Hz rather than 1-120Hz LTPO'
    ],
    scores: {
      design: 9.3,
      performance: 9.1,
      battery: 9.0,
      value: 9.2,
      overall: 9.1,
    },
    verdict: 'A polished, reliable everyday Android flagship with exceptional camera consistency, clean software, and guaranteed support until 2031.',
    badge: 'Best Base Flagship'
  },
  {
    id: 'google-pixel-9-pro-fold',
    name: 'Google Pixel 9 Pro Fold',
    brand: 'Google',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Ultra-thin foldable with massive 8.0" Super Actua Flex inner screen.',
    fullDesc: 'Google’s second-generation foldable has been completely reinvented. At just 10.5mm folded, it features a fluid 6.3-inch outer display with normal phone proportions and an expansive 8.0-inch square inner screen hitting 2,700 nits.',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 790,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://store.google.com/product/pixel_9_pro_fold',
    bulletSpecs: ['8.0" Super Actua Flex', '10.5mm Ultra-Thin', 'Tensor G4 with 16GB RAM'],
    specs: [
      { label: 'Processor', value: 'Google Tensor G4' },
      { label: 'Inner Display', value: '8.0" Super Actua Flex OLED (1-120Hz, 2700 nits)' },
      { label: 'Cover Display', value: '6.3" Actua OLED 60-120Hz (20:9 standard ratio)' },
      { label: 'Cameras', value: '48MP Main + 10.5MP Ultrawide + 10.8MP 5x Telephoto' },
      { label: 'Battery', value: '4,650 mAh' },
      { label: 'Thickness', value: '10.5 mm folded / 5.1 mm unfolded' },
    ],
    advantages: [
      'Huge 8.0-inch inner display is the largest foldable canvas available in North America',
      'Normal 20:9 outer screen feels exactly like using a standard smartphone when closed',
      'Remarkably thin 10.5mm profile slips smoothly into pants pockets',
      'Opens completely 180° flat with new fluid multi-gear hinge'
    ],
    disadvantages: [
      'Camera sensors are slightly stepped down compared to Pixel 9 Pro candybar models',
      '21W wired charging is slow for a 4650mAh dual-battery'
    ],
    scores: {
      design: 9.6,
      performance: 9.2,
      battery: 8.7,
      value: 8.6,
      overall: 9.2,
    },
    verdict: 'Google fixed every shortcoming of the first Fold. The 9 Pro Fold is wonderfully thin, has normal outer screen ergonomics, and unfolds into a massive, bright 8-inch workspace.',
    badge: 'Thinnest Foldable'
  },

  // ================= ONEPLUS =================
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Snapdragon 8 Gen 3 monster with 5400mAh battery and 4th Gen Hasselblad camera.',
    fullDesc: 'A return to peak form for OnePlus. Packing a hyper-curved 2K 120Hz ProXDR display hitting 4,500 nits, revolutionary dual-cryo-velocity vapor chamber cooling, 5,400mAh dual-cell battery, 80W/100W SUPERVOOC charging, and Hasselblad 64MP 3x periscope zoom.',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 2650,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.oneplus.com/oneplus-12',
    bulletSpecs: ['Snapdragon 8 Gen 3', '5,400 mAh + 100W Charge', '4th Gen Hasselblad Cameras'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 (4nm)' },
      { label: 'Display', value: '6.82" 2K 120Hz ProXDR LTPO 4.0 (4500 nits peak)' },
      { label: 'Cameras', value: '50MP Sony LYT-808 + 64MP 3x Periscope Tele + 48MP Ultrawide' },
      { label: 'Battery', value: '5,400 mAh with 100W SUPERVOOC (80W US) + 50W AIRVOOC' },
      { label: 'Cooling', value: 'Dual Cryo-velocity VC (9,140 mm²)' },
      { label: 'Water Touch', value: 'Aqua Touch technology for reliable wet-finger touch' },
    ],
    advantages: [
      'Blistering fast 100W charging fills 100% in under 26 minutes with charger included in box',
      'Incredible 4,500 nits peak HDR brightness and Aqua Touch screen works with wet fingers',
      'Versatile Hasselblad periscope zoom captures gorgeous 3x and 6x portrait crops',
      'Unbeatable price-to-performance against $1,200 rivals'
    ],
    disadvantages: [
      'IP65 water resistance rating rather than submersible IP68',
      'Curved display edges may not appeal to flat-screen purists'
    ],
    scores: {
      design: 9.3,
      performance: 9.8,
      battery: 9.8,
      value: 9.7,
      overall: 9.6,
    },
    verdict: 'The ultimate flagship killer. Delivering battery endurance, charging speeds, display brightness, and camera performance that competes with devices hundreds of dollars more expensive.',
    badge: 'Flagship Killer'
  },
  {
    id: 'oneplus-open',
    name: 'OnePlus Open',
    brand: 'OnePlus',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Near-crease-free 7.82" Flexi-fluid AMOLED with Open Canvas multitasking.',
    fullDesc: 'Celebrated for having the most subtle display crease on any book-style foldable. Features dual 2,800-nit 120Hz screens, Hasselblad triple camera array with 64MP telephoto, lightweight titanium-alloy hinge, and the revolutionary Open Canvas window management system.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1220,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.oneplus.com/open',
    bulletSpecs: ['Open Canvas Multitasking', 'Subtle Hinge Crease', '67W Fast Charging'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 2' },
      { label: 'Inner Display', value: '7.82" 2K Flexi-fluid LTPO 3.0 AMOLED (1-120Hz, 2800 nits)' },
      { label: 'Cover Display', value: '6.31" 2K LTPO 3.0 AMOLED (10-120Hz, 2800 nits)' },
      { label: 'Cameras', value: '48MP LYT-T808 + 64MP 3x Periscope + 48MP Ultrawide' },
      { label: 'Battery', value: '4,805 mAh with 67W SUPERVOOC' },
      { label: 'Weight', value: '239 grams' },
    ],
    advantages: [
      'Open Canvas multitasking allows sliding between three full-sized apps seamlessly',
      'The inner crease is virtually invisible and imperceptible under finger swipes',
      'Hasselblad periscope zoom captures best-in-class foldable portraits',
      'Lightweight titanium and carbon fiber architecture feels like a regular phone when closed'
    ],
    disadvantages: [
      'No wireless charging support',
      'IPX4 splash resistance only'
    ],
    scores: {
      design: 9.7,
      performance: 9.5,
      battery: 9.2,
      value: 9.1,
      overall: 9.5,
    },
    verdict: 'A masterclass in foldable ergonomics. The Open Canvas software experience and invisible crease make it a favorite among tech enthusiasts worldwide.',
    badge: 'Best Foldable UX'
  },
  {
    id: 'oneplus-12r',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Snapdragon 8 Gen 2, giant 5500mAh battery, and 1.5K 120Hz screen under $500.',
    fullDesc: 'The champion of value performance. Features a monstrous 5,500mAh battery (the largest in any modern OnePlus phone), 80W fast charging, 4th generation LTPO display, and Snapdragon 8 Gen 2 processing.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 1980,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.oneplus.com/oneplus-12r',
    bulletSpecs: ['Snapdragon 8 Gen 2', '5,500 mAh Monster Battery', '80W Fast Charge'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 2' },
      { label: 'Display', value: '6.78" 1.5K AMOLED 1-120Hz LTPO 4.0 (4500 nits peak)' },
      { label: 'Cameras', value: '50MP Sony IMX890 OIS + 8MP Ultrawide + 2MP Macro' },
      { label: 'Battery', value: '5,500 mAh with 80W/100W SUPERVOOC' },
      { label: 'Frame', value: 'Matte aluminum alloy' },
    ],
    advantages: [
      'Extraordinary two-day battery life powered by 5,500mAh capacity',
      'Top-tier 4th gen LTPO display with 4,500 nits peak brightness and Aqua Touch',
      'Flagship-tier Snapdragon 8 Gen 2 gaming performance at sub-$500 pricing',
      'Rapid 80W charging reaches 100% in around 30 minutes'
    ],
    disadvantages: [
      'Secondary 8MP ultrawide and 2MP macro cameras are basic',
      'No wireless charging or official IP68 rating'
    ],
    scores: {
      design: 9.1,
      performance: 9.4,
      battery: 9.9,
      value: 9.8,
      overall: 9.4,
    },
    verdict: 'The greatest sub-$500 smartphone you can buy. Battery endurance and display quality embarrasses phones that cost double.',
    badge: 'Best Value Champ'
  },

  // ================= XIAOMI =================
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'The pinnacle of mobile photography with 1-inch LYT-900 sensor and quad 50MP Leica lenses.',
    fullDesc: 'Designed for true photography enthusiasts. Features an authentic stepless variable aperture (f/1.63 - f/4.0) on the 1-inch Sony LYT-900 main sensor, four 50MP Leica optical focal lengths (12mm, 23mm, 75mm, 120mm), Snapdragon 8 Gen 3, and Xiaomi Shield Glass.',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.9,
    reviewCount: 1890,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.mi.com/global/product/xiaomi-14-ultra/',
    bulletSpecs: ['1-Inch Sony LYT-900 Sensor', 'Quad 50MP Leica Optics', '90W Wired + 80W Wireless'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 (4nm)' },
      { label: 'Display', value: '6.73" WQHD+ AMOLED (1-120Hz, 3000 nits, Dolby Vision)' },
      { label: 'Main Camera', value: '50MP 1-inch LYT-900 with stepless variable aperture f/1.63 - f/4.0' },
      { label: 'Telephoto Cameras', value: '50MP 3.2x Leica Floating Tele + 50MP 5x Leica Periscope' },
      { label: 'Battery', value: '5,000 mAh (90W wired, 80W wireless)' },
      { label: 'Durability', value: 'IP68 water resistance with high-strength aluminum unibody' },
    ],
    advantages: [
      'Authentic optical bokeh and physical aperture depth-of-field control rivaling mirrorless cameras',
      'Leica Authentic and Vibrant color profiles yield rich filmic textures without over-sharpening',
      'Exceptional sustained thermal performance with dual-channel IceLoop cooling',
      '80W wireless charging tops up the battery in just 46 minutes'
    ],
    disadvantages: [
      'Large circular camera dial creates noticeable top-heaviness',
      'Global availability and localized carrier band support varies'
    ],
    scores: {
      design: 9.5,
      performance: 9.8,
      battery: 9.3,
      value: 8.9,
      overall: 9.6,
    },
    verdict: 'The closest a smartphone has ever come to replacing a dedicated mirrorless camera. The 1-inch Sony sensor with physical variable aperture is breathtaking.',
    badge: 'Camera Benchmark'
  },
  {
    id: 'xiaomi-14',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Pocket-friendly 6.36" flagship with Leica Summilux lens and 90W fast charging.',
    fullDesc: 'A compact flagship packed with premium features: ultra-thin 1.61mm bezels, 6.36-inch 120Hz LTPO display hitting 3,000 nits, Leica triple 50MP camera setup with floating telephoto lens, and Snapdragon 8 Gen 3.',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 1450,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.mi.com/global/product/xiaomi-14/',
    bulletSpecs: ['Snapdragon 8 Gen 3', 'Compact 6.36" 120Hz', 'Leica Summilux f/1.6'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
      { label: 'Display', value: '6.36" 1.5K LTPO OLED 1-120Hz (3000 nits)' },
      { label: 'Cameras', value: '50MP Light Hunter 900 + 50MP 75mm Floating Tele + 50MP Ultrawide' },
      { label: 'Battery', value: '4,610 mAh with 90W HyperCharge & 50W wireless' },
      { label: 'Weight', value: '193 grams' },
    ],
    advantages: [
      'Extremely compact footprint with narrow, symmetrical four-sided bezels',
      'Blazing fast 90W wired and 50W wireless charging speeds',
      'Leica 75mm floating telephoto doubles as an incredible macro camera',
      'Full IP68 dust and water resistance'
    ],
    disadvantages: [
      'HyperOS software features occasional bloatware out of the box',
      'Selfie camera quality is average compared to rear lenses'
    ],
    scores: {
      design: 9.3,
      performance: 9.7,
      battery: 9.1,
      value: 9.2,
      overall: 9.3,
    },
    verdict: 'One of the finest compact flagships of the year, combining high-speed charging, Leica optics, and Snapdragon 8 Gen 3 in a pocketable chassis.',
    badge: 'Compact Speedster'
  },

  // ================= NOTHING =================
  {
    id: 'nothing-phone-2',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Transparent back with customizable Glyph LED interface and clean Nothing OS.',
    fullDesc: 'Carving its own path in smartphone design. Features 33 addressable Glyph LED zones providing visual countdowns, volume timers, and contact-specific notifications without glancing at the screen. Powered by Nothing OS 2.6 with monochrome aesthetic widgets and dual 50MP cameras.',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 2100,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://nothing.tech/products/phone-2',
    bulletSpecs: ['Glyph Interface LEDs', 'Nothing OS 2.6 Monochrome', 'Snapdragon 8+ Gen 1'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8+ Gen 1 (4nm)' },
      { label: 'Display', value: '6.7" LTPO OLED (1-120Hz, 1600 nits peak)' },
      { label: 'Rear Cameras', value: '50MP Sony IMX890 OIS + 50MP Samsung JN1 Ultrawide' },
      { label: 'Battery', value: '4,700 mAh with 45W wired and 15W wireless charging' },
      { label: 'Glyph LEDs', value: '33 individually addressable light zones with Glyph Composer' },
      { label: 'Software', value: 'Nothing OS (Zero bloatware, custom dot-matrix design)' },
    ],
    advantages: [
      'Glyph Interface delivers meaningful notification triage without mindless screen checking',
      'Bloatware-free, lightning-fast Nothing OS software experience with cohesive widgets',
      'Premium transparent glass back aesthetics that turn heads everywhere',
      'Fluid 1-120Hz LTPO display with excellent battery optimization'
    ],
    disadvantages: [
      'IP54 splash resistance rating rather than submersible IP68',
      'Zoom past 2x relies purely on digital sensor crop'
    ],
    scores: {
      design: 9.7,
      performance: 9.1,
      battery: 9.0,
      value: 9.3,
      overall: 9.2,
    },
    verdict: 'A breath of fresh air in a sea of homogenous black slabs. The Glyph interface is surprisingly functional, and Nothing OS is one of the cleanest Android skins ever made.',
    badge: 'Design Icon'
  },
  {
    id: 'nothing-phone-2a-plus',
    name: 'Nothing Phone (2a) Plus',
    brand: 'Nothing',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'MediaTek Dimensity 7350 Pro, upgraded 50MP selfie, and striking metallic glyph back.',
    fullDesc: 'Upgrading the beloved Phone (2a) formula with an exclusive MediaTek Dimensity 7350 Pro 5G processor, dual 50MP rear cameras plus upgraded 50MP 4K selfie camera, 50W fast charging, and metallic circuit aesthetics.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.6,
    reviewCount: 1320,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://nothing.tech/products/phone-2a-plus',
    bulletSpecs: ['Dimensity 7350 Pro', '50MP 4K Selfie', '5,000 mAh + 50W Fast Charge'],
    specs: [
      { label: 'Processor', value: 'MediaTek Dimensity 7350 Pro (4nm, up to 3.0 GHz)' },
      { label: 'Display', value: '6.7" Flexible AMOLED (30-120Hz, 1300 nits)' },
      { label: 'Cameras', value: '50MP Main OIS + 50MP Ultrawide + 50MP Selfie' },
      { label: 'Battery', value: '5,000 mAh with 50W fast charge' },
      { label: 'Glyph', value: '3-part Glyph Interface with timer support' },
    ],
    advantages: [
      'Triple 50MP cameras (Main, Ultrawide, and Selfie) all support 4K recording',
      '5,000mAh battery delivers effortless two-day battery life for moderate users',
      'Unique metallic industrial design stands out in the budget-flagship category',
      'Distinctive Nothing OS widgets without annoying pre-installed sponsor apps'
    ],
    disadvantages: [
      'No wireless charging',
      'Plastic composite frame instead of aluminum'
    ],
    scores: {
      design: 9.2,
      performance: 8.8,
      battery: 9.5,
      value: 9.4,
      overall: 9.0,
    },
    verdict: 'A brilliant option for students and creators who want clean software, striking visual character, and all-50MP cameras without spending flagship money.',
    badge: 'Affordable Innovator'
  },

  // ================= MOTOROLA =================
  {
    id: 'motorola-razr-plus-2024',
    name: 'Motorola Razr+ (2024)',
    brand: 'Motorola',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Massive 4.0" external cover screen, 165Hz internal display, and IPX8 water resistance.',
    fullDesc: 'Motorola reclaims the flip phone crown with the largest, most versatile 4.0-inch external cover screen in the industry capable of running full Android apps. Paired with a stunning 6.9-inch 165Hz internal LTPO display, vegan leather back, and dual 50MP cameras.',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1470,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.motorola.com/us/smartphones-razr-plus-gen-2/p',
    bulletSpecs: ['4.0" External pOLED', '165Hz Internal Screen', 'Snapdragon 8s Gen 3'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8s Gen 3' },
      { label: 'Main Display', value: '6.9" FHD+ pOLED LTPO 165Hz (3000 nits peak)' },
      { label: 'Cover Display', value: '4.0" pOLED LTPO 165Hz (2400 nits peak, runs any app)' },
      { label: 'Cameras', value: '50MP Main OIS + 50MP 2x Telephoto + 32MP Internal' },
      { label: 'Battery', value: '4,000 mAh with 45W TurboPower & 15W wireless' },
      { label: 'Build', value: 'IPX8 underwater submersible with vegan leather backing' },
    ],
    advantages: [
      'Huge 4-inch outer cover screen runs virtually any app without flipping open the phone',
      'Ultra-fluid 165Hz refresh rate on both screens offers buttery animations',
      'Premium vegan leather finish provides tactile grip and resists fingerprints',
      'Nearly imperceptible folding display hinge crease'
    ],
    disadvantages: [
      '2x telephoto camera replaced the ultrawide lens of the predecessor',
      'Battery life under heavy outer-screen gaming requires an evening charge'
    ],
    scores: {
      design: 9.8,
      performance: 9.4,
      battery: 8.6,
      value: 9.0,
      overall: 9.3,
    },
    verdict: 'The most fun flip phone on Earth. You can do 90% of your daily tasks—answering messages, watching YouTube, using Google Maps—right on the glorious 4-inch outer screen.',
    badge: 'Best Flip Phone'
  },
  {
    id: 'motorola-edge-50-ultra',
    name: 'Motorola Edge 50 Ultra',
    brand: 'Motorola',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Nordic Wood finish, Pantone validated color display, and 125W TurboPower charging.',
    fullDesc: 'A design triumph featuring real FSC-certified Nordic wood or vegan leather backs, 144Hz Super HD pOLED screen, Snapdragon 8s Gen 3, triple 50MP camera setup with 3x periscope zoom, and hyper-fast 125W wired charging.',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 890,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.motorola.com/we/smartphones-motorola-edge-50-ultra/p',
    bulletSpecs: ['Real Nordic Wood Finish', '125W TurboPower', '50MP 3x Periscope'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8s Gen 3' },
      { label: 'Display', value: '6.7" Super HD (1220p) 144Hz pOLED (Pantone Validated)' },
      { label: 'Cameras', value: '50MP Main OIS + 64MP 3x Periscope + 50MP Ultrawide Macro' },
      { label: 'Battery', value: '4,500 mAh with 125W wired and 50W wireless charging' },
      { label: 'Waterproof', value: 'IP68 water and dust underwater rating' },
    ],
    advantages: [
      'Genuinely unique and warm tactile feel from authentic real Nordic wood rear panel',
      'Phenomenal 125W charging delivers a full day of battery in under 7 minutes',
      'Pantone Validated display and camera color tuning captures true skin tones',
      'Clean Hello UI based on Android 14 with Moto Gestures (chop for flashlight)'
    ],
    disadvantages: [
      '4,500mAh battery is slightly smaller than competitor 5,000mAh cells',
      'Curved display edges may trigger accidental palm touches without a case'
    ],
    scores: {
      design: 9.7,
      performance: 9.3,
      battery: 8.8,
      value: 9.1,
      overall: 9.2,
    },
    verdict: 'A breath of fresh artistic design. The real wood back, 125W charging, and Pantone-tuned cameras make this Motorola’s most compelling flagship in years.',
    badge: 'Artisan Flagship'
  },

  // ================= SONY =================
  {
    id: 'sony-xperia-1-vi',
    name: 'Sony Xperia 1 VI',
    brand: 'Sony',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Continuous 85-170mm true optical zoom, BRAVIA OLED, and dedicated 3.5mm hi-res jack.',
    fullDesc: 'Built for serious creators, photographers, and high-fidelity audio purists. Features Sony’s continuous optical zoom module moving smoothly between 85mm and 170mm without digital crop, dedicated physical two-stage shutter button, MicroSD card expansion, 3.5mm audiophile jack with Cirrus Logic DAC, and up to 2-day battery endurance.',
    image: 'https://images.unsplash.com/photo-1533228896884-2195f2a1b9b2?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1120,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://electronics.sony.com/mobile/smartphone/all-smartphones/p/xperia1m6',
    bulletSpecs: ['Continuous 85-170mm Optical Zoom', '3.5mm Audiophile Headphone Jack', 'MicroSD Card Expansion'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 (4nm)' },
      { label: 'Display', value: '6.5" FHD+ LTPO OLED 1-120Hz Powered by BRAVIA (19.5:9 ratio)' },
      { label: 'Cameras', value: '48MP Exmor T 24mm + 12MP 85-170mm Continuous Optical Zoom + 12MP Ultrawide' },
      { label: 'Battery', value: '5,000 mAh with rated 2-day battery endurance' },
      { label: 'Audio Ports', value: '3.5mm headphone jack with High-Res LDAC and 360 Reality Audio' },
      { label: 'Expansion', value: 'MicroSDXC card slot up to 1.5TB (tool-free tray)' },
    ],
    advantages: [
      'Rare gold standard for audio purists with dedicated 3.5mm headphone jack and Hi-Res LDAC',
      'Genuine continuous optical zoom lens from 3.5x to 7.1x optical magnification without digital degradation',
      'MicroSD card slot allows expanding storage up to an extra 1.5TB without expensive cloud storage',
      'Exceptional 2-day battery endurance with thermal heat-pipe upgrades'
    ],
    disadvantages: [
      'Display resolution shifted from classic 4K to standard FHD+ (though battery gains are immense)',
      'High price tag tailored primarily for niche creators and audio enthusiasts'
    ],
    scores: {
      design: 9.5,
      performance: 9.7,
      battery: 9.8,
      value: 8.6,
      overall: 9.4,
    },
    verdict: 'The uncompromising enthusiast phone. If you value a 3.5mm headphone jack, physical shutter key, MicroSD storage, and continuous optical zoom, Sony stands alone.',
    badge: 'Creator Masterpiece'
  },

  // ================= ASUS =================
  {
    id: 'asus-rog-phone-8-pro',
    name: 'ASUS ROG Phone 8 Pro',
    brand: 'ASUS',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Unrivaled gaming supremacy with Snapdragon 8 Gen 3, AniMe Vision LEDs, and 165Hz AMOLED.',
    fullDesc: 'Redesigned from the ground up to be both an uncompromising mobile gaming machine and a slim daily flagship. Features programmable ultrasonic AirTrigger shoulder touch sensors, AniMe Vision programmable back matrix LEDs, 6-axis gimbal camera stabilization, IP68 water resistance, and GameCool 8 vapor chamber.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.9,
    reviewCount: 1760,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://rog.asus.com/phones/rog-phone-8-pro/',
    bulletSpecs: ['Snapdragon 8 Gen 3 + 24GB RAM', '165Hz Samsung AMOLED', 'Ultrasonic AirTriggers'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Gen 3 with up to 24GB LPDDR5X RAM' },
      { label: 'Display', value: '6.78" FHD+ Samsung Flexible AMOLED 1-165Hz (2500 nits peak)' },
      { label: 'Cameras', value: '50MP Sony IMX890 with 6-Axis Hybrid Gimbal 3.0 + 32MP 3x Tele + 13MP Ultrawide' },
      { label: 'Battery', value: '5,500 mAh dual-cell with 65W HyperCharge & Qi wireless' },
      { label: 'Ports', value: 'Dual USB-C ports (bottom and side for charging while playing)' },
      { label: 'Back Matrix', value: 'AniMe Vision 341 mini-LED programmable display' },
    ],
    advantages: [
      'Programmable ultrasonic shoulder triggers provide console gamepad-level aiming and shooting in shooter titles',
      'Dedicated side-mounted USB-C charging port keeps cables out of hand during intense horizontal gaming',
      'Industry-best sustained frame rates with optional AeroActive Cooler X attachment',
      'Built-in 3.5mm headphone jack with Dirac Virtuo spatial audio'
    ],
    disadvantages: [
      'Gamer styling with back LED matrix may not suit strictly conservative business settings',
      '165Hz uncapped gaming mode consumes battery rapidly when pushed hard'
    ],
    scores: {
      design: 9.5,
      performance: 10.0,
      battery: 9.4,
      value: 8.8,
      overall: 9.6,
    },
    verdict: 'The absolute pinnacle of mobile gaming performance. With up to 24GB RAM, ultrasonic shoulder triggers, side USB-C charging, and 6-axis gimbal camera, it reigns supreme.',
    badge: 'Ultimate Gaming Phone'
  },
  {
    id: 'asus-zenfone-11-ultra',
    name: 'ASUS Zenfone 11 Ultra',
    brand: 'ASUS',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    shortDesc: 'Snapdragon 8 Gen 3, 6-Axis Gimbal Stabilizer, massive 5500mAh battery, and AI noise cancellation.',
    fullDesc: 'Expanding the Zenfone series into large-screen luxury. Features a 6.78-inch 144Hz LTPO AMOLED display, Snapdragon 8 Gen 3, 6-Axis Hybrid Gimbal Stabilizer 3.0, 5,500mAh battery, and AI-powered transcriptions and live call translation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=85',
    isFeatured: false,
    rating: 4.7,
    reviewCount: 930,
    releaseYear: '2024-2025',
    affiliateUrl: 'https://www.asus.com/mobile-handhelds/phones/zenfone/zenfone-11-ultra/',
    bulletSpecs: ['Snapdragon 8 Gen 3', '5,500 mAh Battery', '6-Axis Gimbal 3.0'],
    specs: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
      { label: 'Display', value: '6.78" FHD+ Samsung AMOLED 1-144Hz LTPO (2500 nits)' },
      { label: 'Cameras', value: '50MP Sony IMX890 Gimbal OIS + 32MP 3x Tele + 13MP Ultrawide' },
      { label: 'Battery', value: '5,500 mAh with 65W HyperCharge and 15W Qi wireless' },
      { label: 'Audio', value: '3.5mm audio jack with Hi-Res Dirac HD Sound' },
    ],
    advantages: [
      'Huge 5,500mAh battery lasts easily over 26 hours of continuous web browsing',
      'Hardware 6-Axis Gimbal Stabilizer 3.0 records buttery-smooth walking video without accessories',
      'Retains the beloved 3.5mm headphone jack with Dirac spatial audio tuning',
      'Subtle, understated aluminum design with frosted glass finish'
    ],
    disadvantages: [
      'Departed from the compact 5.9-inch format of earlier Zenfones',
      'Software updates promised for only 2 OS upgrades (4 years security)'
    ],
    scores: {
      design: 9.2,
      performance: 9.6,
      battery: 9.8,
      value: 9.2,
      overall: 9.3,
    },
    verdict: 'A multimedia powerhouse featuring exceptional battery life, 6-axis gimbal video stabilization, and a 3.5mm headphone jack in a clean, sophisticated design.',
    badge: 'Endurance King'
  }
];
