/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE
   STEP 1 — PRODUCT SYSTEM
   Bangla + English Search Ready
   ========================================= */

const products = [

    // =========================
    // 🏭 MACHINERY
    // =========================

    {
        id: "machinery-001",
        name: "Cup Sealing Machine",
        nameBn: "কাপ সিলিং মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cup Sealer",
        keywords: "cup sealing machine cup sealer cup seller কাপ সিলার কাপ সিলিং মেশিন",
        price: 12000,
        oldPrice: 14000,
        image: "🥤",
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 8,
        status: "available",
        description: "Commercial cup sealing machine for juice, beverage and fast food business.",
        specifications: {
            type: "Manual",
            use: "Juice Shop / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-002",
        name: "Cotton Candy Machine",
        nameBn: "কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cotton Candy",
        keywords: "cotton candy machine candy floss machine কটন ক্যান্ডি মেশিন বাতাসা মেশিন",
        price: 22500,
        oldPrice: 28000,
        image: "🍭",
        rating: 4.9,
        reviews: 0,
        badge: "HOT",
        stock: 10,
        status: "available",
        description: "Commercial cotton candy machine for business, events and shops.",
        specifications: {
            type: "Commercial",
            use: "Business / Event"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-003",
        name: "Popcorn Machine",
        nameBn: "পপকর্ন মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Popcorn",
        keywords: "popcorn machine popcorn maker পপকর্ন মেশিন পপকর্ন বানানোর মেশিন",
        price: 14500,
        oldPrice: 17000,
        image: "🍿",
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        stock: 10,
        status: "available",
        description: "Commercial popcorn machine for fast food, cinema and snack business.",
        specifications: {
            type: "Commercial",
            use: "Fast Food / Snack Business"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-004",
        name: "Sugarcane Juice Machine",
        nameBn: "আখের জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Sugarcane Machine",
        keywords: "sugarcane juice machine sugar cane machine আখ মেশিন আখের জুস মেশিন শরবত মেশিন",
        price: 60000,
        oldPrice: 68000,
        image: "🌱",
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 5,
        status: "available",
        description: "AC and DC sugarcane juice machine for commercial juice business.",
        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-005",
        name: "Commercial Juice Blender",
        nameBn: "কমার্শিয়াল জুস ব্লেন্ডার",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Blender",
        keywords: "juice blender commercial blender mixer জুস ব্লেন্ডার মিক্সার ব্লেন্ডার",
        price: 6500,
        oldPrice: 7500,
        image: "🥤",
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        stock: 10,
        status: "available",
        description: "High performance commercial blender for juice shop, restaurant and cafe.",
        specifications: {
            capacity: "2 Liter",
            use: "Juice Shop / Restaurant"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-006",
        name: "Commercial Ice Crusher Machine",
        nameBn: "আইস ক্রাশার মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Ice Crusher",
        keywords: "ice crusher ice crushing machine বরফ ভাঙার মেশিন আইস ক্রাশার",
        price: 4500,
        oldPrice: 5500,
        image: "🧊",
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Electric ice crusher for juice shops, restaurants and beverage businesses.",
        specifications: {
            type: "Electric",
            use: "Juice Shop / Restaurant"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "machinery-007",
        name: "Commercial Ice Cube Machine",
        nameBn: "আইস কিউব মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Ice Machine",
        keywords: "ice cube machine ice maker বরফ তৈরির মেশিন আইস কিউব মেশিন",
        price: 35000,
        oldPrice: 40000,
        image: "🧊",
        rating: 4.8,
        reviews: 0,
        badge: "SALE",
        stock: 5,
        status: "available",
        description: "Commercial ice cube making machine for restaurants and businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Business"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 🍔 RESTAURANT & FAST FOOD
    // =========================

    {
        id: "restaurant-001",
        name: "Commercial Waffle Maker",
        nameBn: "ওয়াফেল মেকার",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Waffle Maker",
        keywords: "waffle maker waffle machine ওয়াফেল মেশিন ওয়াফেল মেকার",
        price: 7500,
        oldPrice: 9000,
        image: "🧇",
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Commercial waffle maker for cafe and fast food business.",
        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "restaurant-002",
        name: "Commercial Deep Fryer",
        nameBn: "ডিপ ফ্রায়ার",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Fryer",
        keywords: "deep fryer fryer chicken fryer ডিপ ফ্রায়ার ফ্রায়ার ভাজার মেশিন",
        price: 8500,
        oldPrice: 10000,
        image: "🍗",
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        stock: 8,
        status: "available",
        description: "Commercial deep fryer for restaurant and fast food business.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "restaurant-003",
        name: "Commercial Shawarma Machine",
        nameBn: "শাওয়ারমা মেশিন",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Shawarma",
        keywords: "shawarma machine shawarma maker শাওয়ারমা মেশিন শর্মা মেশিন",
        price: 42000,
        oldPrice: 48000,
        image: "🌯",
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        stock: 5,
        status: "available",
        description: "Commercial shawarma machine for restaurant and fast food business.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "restaurant-004",
        name: "Commercial Pizza Oven",
        nameBn: "পিজ্জা ওভেন",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Pizza Oven",
        keywords: "pizza oven pizza machine পিজ্জা ওভেন পিজ্জা মেশিন",
        price: 22000,
        oldPrice: 26000,
        image: "🍕",
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        stock: 5,
        status: "available",
        description: "Commercial pizza oven for restaurant and pizza shop.",
        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 🔧 TOOLS & HARDWARE
    // =========================

    {
        id: "tools-001",
        name: "Electric Drill Machine",
        nameBn: "ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",
        keywords: "drill machine electric drill power drill ড্রিল মেশিন ড্রিল মেশিন ইলেকট্রিক",
        price: 2800,
        oldPrice: 3500,
        image: "🔧",
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        stock: 15,
        status: "available",
        description: "Electric drill machine for home repair, construction and workshop use.",
        specifications: {
            type: "Electric",
            use: "Home / Workshop"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "tools-002",
        name: "Rechargeable Electric Screwdriver",
        nameBn: "ইলেকট্রিক স্ক্রু ড্রাইভার",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",
        keywords: "electric screwdriver rechargeable screwdriver স্ক্রু ড্রাইভার ইলেকট্রিক স্ক্রু ড্রাইভার",
        price: 2200,
        oldPrice: 2800,
        image: "🪛",
        rating: 4.6,
        reviews: 0,
        badge: "OFFER",
        stock: 15,
        status: "available",
        description: "Rechargeable electric screwdriver for home and workshop use.",
        specifications: {
            type: "Rechargeable",
            use: "Home / Workshop"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 🏠 HOME & KITCHEN
    // =========================

    {
        id: "home-001",
        name: "Mini Vacuum Cleaner",
        nameBn: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home & Kitchen",
        subCategory: "Cleaning",
        keywords: "vacuum cleaner mini vacuum cleaner ভ্যাকুয়াম ক্লিনার ঘর পরিষ্কার",
        price: 1800,
        oldPrice: 2200,
        image: "🧹",
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        stock: 20,
        status: "available",
        description: "Compact vacuum cleaner for home and office cleaning.",
        specifications: {
            type: "Portable",
            use: "Home / Office"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "home-002",
        name: "Electric Kitchen Chopper",
        nameBn: "ইলেকট্রিক কিচেন চপার",
        category: "home",
        categoryName: "Home & Kitchen",
        subCategory: "Kitchen Appliance",
        keywords: "kitchen chopper electric chopper vegetable cutter চপার মেশিন সবজি কাটার মেশিন",
        price: 1800,
        oldPrice: 2300,
        image: "🔪",
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        stock: 20,
        status: "available",
        description: "Electric kitchen chopper for daily home cooking.",
        specifications: {
            type: "Electric",
            use: "Home Kitchen"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 🛒 DAILY NEEDS
    // =========================

    {
        id: "daily-001",
        name: "Digital Kitchen Scale",
        nameBn: "ডিজিটাল কিচেন স্কেল",
        category: "daily",
        categoryName: "Daily Needs",
        subCategory: "Kitchen Scale",
        keywords: "digital kitchen scale food scale ওজন মাপার মেশিন কিচেন স্কেল",
        price: 650,
        oldPrice: 900,
        image: "⚖️",
        rating: 4.7,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 30,
        status: "available",
        description: "Compact digital kitchen weighing scale for home and business use.",
        specifications: {
            type: "Digital",
            use: "Home / Kitchen"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "daily-002",
        name: "Rechargeable Emergency Light",
        nameBn: "রিচার্জেবল ইমার্জেন্সি লাইট",
        category: "daily",
        categoryName: "Daily Needs",
        subCategory: "Lighting",
        keywords: "emergency light rechargeable light ইমার্জেন্সি লাইট চার্জ লাইট বাতি",
        price: 850,
        oldPrice: 1200,
        image: "💡",
        rating: 4.6,
        reviews: 0,
        badge: "OFFER",
        stock: 25,
        status: "available",
        description: "Rechargeable emergency light for home, shop and outdoor use.",
        specifications: {
            type: "Rechargeable",
            use: "Home / Shop"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 📱 GADGETS & ELECTRONICS
    // =========================

    {
        id: "gadget-001",
        name: "K9 Wireless Microphone",
        nameBn: "K9 ওয়্যারলেস মাইক্রোফোন",
        category: "gadgets",
        categoryName: "Gadgets & Electronics",
        subCategory: "Microphone",
        keywords: "k9 microphone wireless mic মাইক্রোফোন ওয়্যারলেস মাইক",
        price: 1200,
        oldPrice: 1600,
        image: "🎤",
        rating: 4.7,
        reviews: 0,
        badge: "HOT",
        stock: 20,
        status: "available",
        description: "Compact wireless microphone for mobile video, live streaming and content creation.",
        specifications: {
            type: "Wireless",
            use: "Mobile / Video"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "gadget-002",
        name: "Smart Watch",
        nameBn: "স্মার্ট ওয়াচ",
        category: "gadgets",
        categoryName: "Gadgets & Electronics",
        subCategory: "Smart Watch",
        keywords: "smart watch smartwatch স্মার্ট ওয়াচ ঘড়ি",
        price: 1500,
        oldPrice: 2200,
        image: "⌚",
        rating: 4.5,
        reviews: 0,
        badge: "POPULAR",
        stock: 20,
        status: "available",
        description: "Smart watch with useful everyday features and modern design.",
        specifications: {
            type: "Smart Watch",
            use: "Daily Use"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 👕 FASHION
    // =========================

    {
        id: "fashion-001",
        name: "Premium Men's T-Shirt",
        nameBn: "প্রিমিয়াম ছেলেদের টি-শার্ট",
        category: "fashion",
        categoryName: "Fashion",
        subCategory: "Men's Clothing",
        keywords: "mens t shirt t-shirt boys shirt ছেলেদের টি শার্ট পুরুষের জামা",
        price: 550,
        oldPrice: 750,
        image: "👕",
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        stock: 25,
        status: "available",
        description: "Comfortable casual men's t-shirt for everyday use.",
        specifications: {
            type: "Casual",
            use: "Daily Wear"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    // =========================
    // 🧴 HEALTH & PERSONAL CARE
    // =========================

    {
        id: "care-001",
        name: "Electric Toothbrush",
        nameBn: "ইলেকট্রিক টুথব্রাশ",
        category: "care",
        categoryName: "Health & Personal Care",
        subCategory: "Personal Care",
        keywords: "electric toothbrush toothbrush টুথব্রাশ ইলেকট্রিক ব্রাশ দাঁত পরিষ্কার",
        price: 950,
        oldPrice: 1300,
        image: "🪥",
        rating: 4.6,
        reviews: 0,
        badge: "POPULAR",
        stock: 20,
        status: "available",
        description: "Electric toothbrush for convenient daily personal care.",
        specifications: {
            type: "Electric",
            use: "Personal Care"
        },
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    }

];


/* =========================================
   CATEGORY LIST
   ========================================= */

const categories = [
    {
        id: "machinery",
        name: "Machinery",
        nameBn: "মেশিনারি",
        icon: "🏭"
    },
    {
        id: "restaurant",
        name: "Restaurant & Fast Food",
        nameBn: "রেস্টুরেন্ট ও ফাস্ট ফুড",
        icon: "🍔"
    },
    {
        id: "home",
        name: "Home & Kitchen",
        nameBn: "হোম ও কিচেন",
        icon: "🏠"
    },
    {
        id: "daily",
        name: "Daily Needs",
        nameBn: "দৈনন্দিন প্রয়োজনীয়",
        icon: "🛒"
    },
    {
        id: "tools",
        name: "Tools & Hardware",
        nameBn: "টুলস ও হার্ডওয়্যার",
        icon: "🔧"
    },
    {
        id: "gadgets",
        name: "Gadgets & Electronics",
        nameBn: "গ্যাজেট ও ইলেকট্রনিক্স",
        icon: "📱"
    },
    {
        id: "fashion",
        name: "Fashion",
        nameBn: "ফ্যাশন",
        icon: "👕"
    },
    {
        id: "care",
        name: "Health & Personal Care",
        nameBn: "স্বাস্থ্য ও পার্সোনাল কেয়ার",
        icon: "🧴"
    }
];


/* =========================================
   SEARCH HELPER
   Bangla + English
   ========================================= */

function searchProducts(searchText) {

    const query = searchText
        .toLowerCase()
        .trim();

    if (!query) {
        return products;
    }

    return products.filter(product => {

        const searchableText = `
            ${product.name}
            ${product.nameBn}
            ${product.category}
            ${product.categoryName}
            ${product.subCategory}
            ${product.keywords}
            ${product.description}
        `.toLowerCase();

        return searchableText.includes(query);
    });
}
