export const PACK_CATEGORIES = [
  { id: 'all', nameKey: 'catAll' },
  { id: 'oldmoney', nameKey: 'catOldMoney' },
  { id: 'riviera', nameKey: 'catRiviera' },
  { id: 'abstract', nameKey: 'catAbstract' },
  { id: 'nordic', nameKey: 'catNordic' },
  { id: 'architecture', nameKey: 'catArchitecture' },
  { id: 'cyberpunk', nameKey: 'catCyberpunk' },
  { id: 'motorsport', nameKey: 'catMotorsport' },
  { id: 'travel', nameKey: 'catTravel' },
];

export const PACKS = [
  {
    id: 'old-money-vibes',
    title: 'Old Money Vibes — Pack of 3',
    category: 'oldmoney',
    tagKey: 'tagDiscount70',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    currencySymbol: '₪',
    images: [
      '/wallpapers/old_money_porsche.jpg',
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/old_money_riva.jpg'
    ],
    coverType: 'grid',
    description: {
      he: 'חבילת "Old Money Vibes" הבלעדית (3 רקעים). כוללת את הפורשה פוזיטנו בשקיעה, הפנטהאוז היוקרתי עם כרזת Discipline, ומאחד ה-Riva הקלאסי מול חופי אמלפי. טקסטורת שמן 8K תלת-ממדית עוצרת נשימה.',
      en: 'The exclusive "Old Money Vibes" pack of 3 wallpapers. Features the Positano cliffside Porsche GT3, the penthouse interior with the Discipline poster, and the Riva mahogany yacht overlooking the Amalfi coast. Ultra HD 8K 3D impasto textures.'
    },
    count: '3 Wallpapers 8K',
    rating: 5.0,
    reviewsCount: 198,
    highlights: [
      'Positano Sunset Porsche GT3',
      'Penthouse Discipline Interior',
      'Amalfi Coast Riva Yacht'
    ]
  },
  {
    id: 'complete-collection',
    title: 'The Master Collection — Reka All-Access',
    category: 'all',
    tagKey: 'tagBestSeller',
    price: '₪ 79.99',
    numericPrice: 79.99,
    originalPrice: '₪ 239.99',
    currencySymbol: '₪',
    images: [
      '/wallpapers/old_money_porsche.jpg',
      '/wallpapers/old_money_riva.jpg',
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/monaco_dusk.png',
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/cyberpunk_tokyo.png'
    ],
    coverType: 'grid',
    description: {
      he: 'גישה מלאה לכל קולקציות RekaPaper Studio. כולל מעל 90 רקעי שמן ברזולוציית 8K ל-iPhone, iPad ו-Mac עם עדכונים חינם לכל החיים.',
      en: 'All-access pass to every RekaPaper collection. Includes 90+ ultra HD 8K oil painting wallpapers for iPhone, iPad & Mac with free lifetime updates.'
    },
    count: '90+ Wallpapers Ultra HD',
    rating: 4.98,
    reviewsCount: 342,
    highlights: ['Formats 4K iPhone & 8K Mac', 'OLED Retina Calibration', '300 DPI Physical Impasto Scans']
  },
  {
    id: 'monaco-riviera-vol1',
    title: 'Monaco & Riviera Sunset Vol. 1',
    category: 'riviera',
    tagKey: 'tagSpecial',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    images: [
      '/wallpapers/monaco_dusk.png',
      '/wallpapers/old_money_riva.jpg',
      '/wallpapers/old_money_porsche.jpg'
    ],
    coverType: 'strips',
    description: {
      he: 'אווירת הריביירה והסופריאכטס במונאקו בשקיעה. מים כחולים עמוקים, שקיעות מוזהבות וטקסטורות שמן עשירות.',
      en: 'The glamour of Monaco harbors & Mediterranean sunsets. Deep navy waters, golden dusk glows, and rich palette knife strokes.'
    },
    count: '16 Wallpapers 8K',
    rating: 5.0,
    reviewsCount: 64,
    highlights: ['Golden Dusk Lighting', 'Relief Wave Impasto', 'Mac & iPhone Formats']
  },
  {
    id: 'nordic-canvas-vol1',
    title: 'Nordic Canvas & Tactile Clay Vol. 1',
    category: 'nordic',
    tagKey: 'tagPopular',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    images: [
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/old_money_interior.jpg'
    ],
    coverType: 'strips',
    description: {
      he: 'הרמוניה של גווני מרווה, חול וחימר טבעי. משיכות מכחול רכות המשרות אווירה רגועה ואלגנטית.',
      en: 'A subtle harmony of sage, sand and terracotta clay tones. Soft textured comb strokes creating a serene, elegant screen vibe.'
    },
    count: '14 Wallpapers 8K',
    rating: 4.95,
    reviewsCount: 38,
    highlights: ['Calming Mineral Tones', 'Linen Canvas Finish', 'iOS 18 Depth Optimized']
  },
  {
    id: 'framed-perspectives-vol1',
    title: 'Framed Perspectives & Interiors Vol. 1',
    category: 'architecture',
    tagKey: 'tagLuxury',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    images: [
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/minimalist_nordic.png'
    ],
    coverType: 'strips',
    description: {
      he: 'מבטים לפנטהאוזים מודרניים, חלונות ענקיים וריהוט מעצבים המשולבים עם ציטוטים מעוררי השראה בטקסטורת שמן.',
      en: 'High-rise luxury penthouses, panoramic windows and designer interiors rendered with oil paint knife textures.'
    },
    count: '15 Wallpapers 8K',
    rating: 4.88,
    reviewsCount: 45,
    highlights: ['Architectural Lines', 'Brutalist & Minimal Inspos', 'OLED High Contrast']
  },
  {
    id: 'abstract-gold-vol1',
    title: 'Abstract Obsidian & Gold Leaf Vol. 1',
    category: 'abstract',
    tagKey: 'tagMustHave',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    images: [
      '/wallpapers/abstract_gold.png',
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/old_money_riva.jpg'
    ],
    coverType: 'strips',
    description: {
      he: 'ניגודיות מרהיבה בין אבני אובסידיאן שחורות לעלי זהב 24 קראט. יצירת מופת מופשטת למסכי Super Retina.',
      en: 'Striking contrast between black obsidian stone and 24K gold leaf flakes. Abstract masterpiece for OLED displays.'
    },
    count: '12 Wallpapers 8K',
    rating: 4.97,
    reviewsCount: 112,
    highlights: ['24K Gold Leaf Effect', 'Abyssal Black OLED', 'Modern Fine Art']
  },
  {
    id: 'cyberpunk-tokyo-vol1',
    title: 'Neon Rain & Tokyo Nights Vol. 1',
    category: 'cyberpunk',
    tagKey: 'tagLimited',
    price: '₪ 24.99',
    numericPrice: 24.99,
    originalPrice: '₪ 74.99',
    images: [
      '/wallpapers/cyberpunk_tokyo.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/old_money_interior.jpg'
    ],
    coverType: 'strips',
    description: {
      he: 'אורות ניאון המשתקפים בסמטאות הרטובות של טוקיו. אמנות סכין ססגונית ואווירת סייברפאנק מכשפת.',
      en: 'Neon lights reflecting on rain-soaked Shibuya streets. Vibrant palette knife art and futuristic cyberpunk vibes.'
    },
    count: '14 Wallpapers 8K',
    rating: 4.94,
    reviewsCount: 76,
    highlights: ['Vibrant Neons', 'Nocturne Cityscape', '8K Dynamic Range']
  }
];

export const WALLPAPERS = [
  {
    id: 'old-money-porsche',
    title: 'Porsche GT3 — Positano Sunset',
    image: '/wallpapers/old_money_porsche.jpg',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'פורשה 911 GT3 לבנה המשקיפה על השקיעה הלהבתית מעל צוקי פוזיטנו.',
      en: 'A white Porsche 911 GT3 overlooking the golden sunset over Positano cliffs.'
    }
  },
  {
    id: 'old-money-interior',
    title: 'Penthouse View — Discipline & Freedom',
    image: '/wallpapers/old_money_interior.jpg',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'פנטהאוז יוקרתי עם ציטוט Discipline Today Freedom Tomorrow בטקסטורת שמן תלת-ממדית.',
      en: 'High-rise luxury penthouse interior featuring the Discipline Today Freedom Tomorrow painting.'
    }
  },
  {
    id: 'old-money-riva',
    title: 'Riva Mahogany — Amalfi Sunset',
    image: '/wallpapers/old_money_riva.jpg',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'סירת Riva מהגוני קלאסית עם וויסקי וספר Loro Piana מול חופי אמלפי בשקיעה.',
      en: 'Classic mahogany Riva boat with whiskey glasses and Loro Piana book on the Amalfi coast.'
    }
  },
  {
    id: 'monaco-dusk',
    title: 'Monaco Harbor — Superyacht Dusk',
    image: '/wallpapers/monaco_dusk.png',
    category: 'Riviera & Supercars',
    price: 24.99,
    description: {
      he: 'נמל מונאקו בשקיעה. סופריאכטס וזיקוקי זהב.',
      en: 'Monaco superyacht harbor at dusk with gold ambient reflections.'
    }
  },
  {
    id: 'nordic-minimal',
    title: 'Sable & Sauge — Peigne Minéral',
    image: '/wallpapers/minimalist_nordic.png',
    category: 'Minimalisme Nordique',
    price: 24.99,
    description: {
      he: 'טקסטורות מינרליות עדינות בגווני מרווה וחול.',
      en: 'Tactile mineral clay textures in sage green and sand.'
    }
  },
  {
    id: 'abstract-gold',
    title: 'Obsidian & 24K Gold Leaf',
    image: '/wallpapers/abstract_gold.png',
    category: 'Abstrait & Feuille d\'Or',
    price: 24.99,
    description: {
      he: 'אובסידיאן שחור עמוק מעוטר בזהב 24 קראט.',
      en: 'Deep black obsidian stone embellished with 24K gold leaf.'
    }
  },
  {
    id: 'old-money-golf',
    title: 'Putting Green — Manhattan Penthouse',
    image: '/wallpapers/old_money_golf.png',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'משרד פנטהאוז יוקרתי עם שולחן גולף פרטי מול קו הרקיע של מנהטן.',
      en: 'A private putting green inside a luxury Manhattan penthouse office overlooking the skyline.'
    }
  },
  {
    id: 'porsche-tennis-court',
    title: 'Porsche 356 — Riviera Clay Court',
    image: '/wallpapers/porsche_tennis_court.png',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'פורשה 356 קלאסית על מגרש טניס חימר בין פרחי הדרים בריביירה.',
      en: 'A classic Porsche 356 resting on a Riviera clay tennis court among blooming jasmine.'
    }
  },
  {
    id: 'riva-positano-helm',
    title: 'Riva Helm — Positano Golden Hour',
    image: '/wallpapers/riva_positano_helm.png',
    category: 'Riviera & Supercars',
    price: 24.99,
    description: {
      he: 'מבט מהגה סירת ה-Riva אל עבר כפר פוזיטנו הצבעוני בשעת הזהב.',
      en: 'A view from the helm of a mahogany Riva boat toward colorful Positano at golden hour.'
    }
  },
  {
    id: 'penthouse-discipline-skyline',
    title: 'Discipline Today, Freedom Tomorrow — Skyline',
    image: '/wallpapers/penthouse_discipline_skyline.png',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'סלון פנטהאוז יוקרתי עם ציטוט Discipline Today Freedom Tomorrow וקו רקיע עירוני בשקיעה.',
      en: 'A luxury penthouse lounge with the Discipline Today Freedom Tomorrow artwork overlooking a city skyline sunset.'
    }
  },
  {
    id: 'porsche-gt3-positano-terrace',
    title: 'Porsche GT3 — Positano Terrace',
    image: '/wallpapers/porsche_gt3_positano.png',
    category: 'Riviera & Supercars',
    price: 24.99,
    description: {
      he: 'פורשה GT3 לבנה על מרפסת אבן מול נוף פוזיטנו בשקיעה.',
      en: 'A white Porsche GT3 parked on a stone terrace overlooking Positano at sunset.'
    }
  },
  {
    id: 'jerusalem-kotel-sunset',
    title: 'Jerusalem Rooftop — Kotel Sunset',
    image: '/wallpapers/jerusalem_kotel_sunset.png',
    category: 'Travel & Sunsets',
    price: 24.99,
    description: {
      he: 'מרפסת גג ירושלמית מול הכותל המערבי וכיפת הסלע בשקיעה.',
      en: 'A Jerusalem rooftop terrace overlooking the Western Wall and the Dome of the Rock at sunset.'
    }
  },
  {
    id: 'rio-beach-sunset',
    title: 'Copacabana Sunset — Beach Football',
    image: '/wallpapers/rio_beach_sunset.png',
    category: 'Travel & Sunsets',
    price: 24.99,
    description: {
      he: 'משחק כדורגל חופים ריו דה ז\'נרו בשקיעה להבתית מול הררי סוגרלואף.',
      en: 'Friends playing beach football on Copacabana at a fiery sunset with Sugarloaf Mountain in view.'
    }
  },
  {
    id: 'rabbi-five-dollar',
    title: 'The Blessing — Five Dollar Bill',
    image: '/wallpapers/rabbi_five_dollar.png',
    category: 'Old Money Vibes',
    price: 24.99,
    description: {
      he: 'ידיים מעבירות שטר חמישה דולר עם דמות הרבי, לצד שעון יוקרה.',
      en: 'Hands exchanging a five dollar bill bearing the Rebbe\'s image, alongside a luxury watch.'
    }
  },
  {
    id: 'f1-some-drivers-never-leave',
    title: 'Some Drivers Never Leave',
    image: '/wallpapers/f1_some_drivers_never_leave.png',
    category: 'Formula 1 Legends',
    price: 24.99,
    description: {
      he: 'נהג פורמולה 1 צועד מרכב בוער בגשם, עם השלט "Some Drivers Never Leave".',
      en: 'An F1 driver walks away from a burning car in the rain, beneath the "Some Drivers Never Leave" sign.'
    }
  },
  {
    id: 'f1-pyramids-night',
    title: 'Night Grand Prix — Pyramids of Giza',
    image: '/wallpapers/f1_pyramids_night.png',
    category: 'Formula 1 Legends',
    price: 24.99,
    description: {
      he: 'רכב פורמולה 1 קלאסי דוהר בלילה מול הפירמידות של גיזה.',
      en: 'A classic Formula 1 car racing through the night with the Pyramids of Giza glowing behind it.'
    }
  },
  {
    id: 'bitcoin-trading-desk',
    title: 'The Trader\'s Desk — Bitcoin',
    image: '/wallpapers/bitcoin_trading_desk.png',
    category: 'Abstrait & Feuille d\'Or',
    price: 24.99,
    description: {
      he: 'יד אוחזת מטבע ביטקוין מול מסך גרף מסחר צבעוני.',
      en: 'A hand holding a Bitcoin coin in front of a vivid trading chart screen.'
    }
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'אלכסנדר ד.',
    role: 'מעצב מוצר | תל אביב',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content: {
      he: 'הפק של Old Money Vibes הדהים אותי! התמונה של הפורשה בפוזיטנו נראית פשוט מטורפת על ה-iPhone 16 Pro Max שלי. מרגישים את עומק משיכות המכחול!',
      en: 'The Old Money Vibes pack blew my mind! The Positano Porsche GT3 wallpaper looks unreal on my iPhone 16 Pro Max. You can literally feel the oil brush depth!'
    },
    rating: 5,
    pack: 'Old Money Vibes — Pack of 3'
  },
  {
    id: 2,
    name: 'רוני לוי',
    role: 'אדריכלית פנים',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    content: {
      he: 'תמונת הפנטהאוז עם הציטוט Discipline שדרגה לי את ה-Mac Studio לדרגה אחרת. שווה כל שקל!',
      en: 'The penthouse wallpaper with the Discipline poster upgraded my Mac Studio setup to another level. Absolutely worth every Shekel!'
    },
    rating: 5,
    pack: 'Old Money Vibes — Pack of 3'
  },
  {
    id: 3,
    name: 'יונתן כהן',
    role: 'יוצר תוכן & מעצב',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: {
      he: 'אין מה להשוות לרקעים גנריים של אינטרנט. כאן יש עומק, טקסטורת שמן אמיתית ורזולוציה 8K חדה ברמות.',
      en: 'No comparison to generic internet wallpapers. There is real depth, authentic oil impasto texture, and sharp 8K resolution.'
    },
    rating: 5,
    pack: 'The Master Collection'
  }
];

export const FAQS = [
  {
    question: {
      he: 'איך אקבל את הרקעים לאחר התשלום?',
      en: 'How will I receive my wallpapers after purchase?'
    },
    answer: {
      he: 'מיד לאחר השלמת התשלום ב-₪ 24.99, ייפתח חלון הורדה ישיר עם קבצי ה-8K המקוריים, ותקבלו גם קישור ישיר להורדה במייל.',
      en: 'Immediately after completing your purchase for ₪ 24.99, a direct download window with high-res 8K files will pop up, and a direct download link will be emailed to you.'
    }
  },
  {
    question: {
      he: 'מה כוללת חבילת Old Money Vibes (מארז של 3)?',
      en: 'What is included in the Old Money Vibes pack of 3?'
    },
    answer: {
      he: 'החבילה כוללת 3 רקעים בלעדיים: 1) הפורשה GT3 בפוזיטנו בשקיעה, 2) פנטהאוז יוקרתי עם תמונת Discipline, 3) סירת ה-Riva באמלפי. כל רקע מגיע בפורמט 4K ל-iPhone ובפורמט 8K ל-Mac.',
      en: 'The pack includes 3 exclusive wallpapers: 1) Porsche GT3 at Positano sunset, 2) Penthouse interior with Discipline poster, 3) Riva mahogany yacht in Amalfi. Each wallpaper comes in 4K for iPhone & 8K for Mac.'
    }
  },
  {
    question: {
      he: 'האם הרקעים מותאמים לאפקט העומק ב-iOS 18?',
      en: 'Are the wallpapers optimized for iOS 18 depth effect?'
    },
    answer: {
      he: 'כן! כל התמונות קוטרו וקובלו כך שהשעון של iOS 16/17/18 ייכנס בצורה עדינה מתחת לשכבות הצבע.',
      en: 'Yes! All vertical wallpapers are framed and balanced so that the iOS 18 clock widget slips subtly beneath the paint layers.'
    }
  },
  {
    question: {
      he: 'האם ניתן להתקין את הרקעים גם במכשירי Android או Windows?',
      en: 'Can I use these wallpapers on Android or Windows PC?'
    },
    answer: {
      he: 'בהחלט. הקבצים מגיעים בפורמטי PNG ו-JPG אוניברסליים ברזולוציה מקסימלית.',
      en: 'Absolutely. Files are provided in universal high-resolution PNG and JPG formats compatible with any device.'
    }
  }
];
