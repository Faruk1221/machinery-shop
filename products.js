/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE
   STEP 1 — SMART PRODUCT SYSTEM
   ========================================= */

const products = [

    {
        id: "machinery-cup-sealer-001",
        name: "Manual Cup Sealing Machine",
        nameBn: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "cup-sealing",
        keywords: [
            "cup sealer",
            "cup sealing machine",
            "cup seller",
            "কাপ সিলার",
            "কাপ সেলার",
            "কাপ সিলিং মেশিন"
        ],
        price: 7500,
        oldPrice: 8500,
        image: "🥤",
        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 10,
        status: "available",
        description: "Manual cup sealing machine for juice, tea, coffee and fast food businesses.",
        specifications: {
            type: "Manual",
            capacity: "150-200 cups/hour",
            use: "Juice / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-cotton-candy-001",
        name: "Cotton Candy Machine",
        nameBn: "কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "food-machine",
        keywords: [
            "cotton candy",
            "candy floss",
            "কটন ক্যান্ডি",
            "কটন ক্যান্ডি মেশিন"
        ],
        price: 12500,
        oldPrice: 15000,
        image: "🍭",
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        stock: 10,
        status: "available",
        description: "Commercial cotton candy machine for small businesses, shops and events.",
        specifications: {
            type: "Commercial",
            use: "Business / Event"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-popcorn-001",
        name: "Commercial Popcorn Machine",
        nameBn: "কমার্শিয়াল পপকর্ন মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "food-machine",
        keywords: [
            "popcorn machine",
            "pop corn",
            "পপকর্ন",
            "পপকর্ন মেশিন"
        ],
        price: 14500,
        oldPrice: 17000,
        image: "🍿",
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        stock: 10,
        status: "available",
        description: "Commercial popcorn machine for fast food shops, events and snack businesses.",
        specifications: {
            type: "Commercial",
            use: "Fast Food / Snack Business"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-sugarcane-001",
        name: "AC & DC Sugarcane Juice Machine",
        nameBn: "এসি ও ডিসি আখের জুস মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "juice-machine",
        keywords: [
            "sugarcane machine",
            "sugar cane juice machine",
            "আখ মেশিন",
            "আখের জুস মেশিন",
            "জুস মেশিন"
        ],
        price: 60000,
        oldPrice: 68000,
        image: "🌱",
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 5,
        status: "available",
        description: "AC and DC sugarcane juice machine for roadside and commercial juice businesses.",
        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-juice-001",
        name: "Commercial Juice Machine",
        nameBn: "কমার্শিয়াল জুস মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "juice-machine",
        keywords: [
            "juice machine",
            "commercial juice machine",
            "জুস মেশিন",
            "জুস বানানোর মেশিন"
        ],
        price: 22000,
        oldPrice: 25000,
        image: "🥤",
        rating: 4.9,
        reviews: 0,
        badge: "SALE",
        stock: 10,
        status: "available",
        description: "Commercial juice machine for juice shops, restaurants and beverage businesses.",
        specifications: {
            type: "Commercial",
            use: "Juice Shop / Business"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-blender-001",
        name: "2L Commercial Blender",
        nameBn: "২ লিটার কমার্শিয়াল ব্লেন্ডার",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "blender",
        keywords: [
            "blender",
            "commercial blender",
            "juice blender",
            "ব্লেন্ডার",
            "জুস ব্লেন্ডার"
        ],
        price: 6500,
        oldPrice: 7500,
        image: "🥤",
        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",
        stock: 10,
        status: "available",
        description: "Commercial blender for juice shops, restaurants and cafes.",
        specifications: {
            capacity: "2 Liter",
            use: "Restaurant / Cafe"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-ice-crusher-001",
        name: "Electric Ice Crusher Machine",
        nameBn: "ইলেকট্রিক আইস ক্রাশার মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "ice-machine",
        keywords: [
            "ice crusher",
            "ice crushing machine",
            "আইস ক্রাশার",
            "বরফ ভাঙার মেশিন"
        ],
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
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-ice-cube-001",
        name: "Commercial Ice Cube Machine",
        nameBn: "কমার্শিয়াল আইস কিউব মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "ice-machine",
        keywords: [
            "ice cube machine",
            "ice maker",
            "আইস কিউব মেশিন",
            "বরফ তৈরির মেশিন"
        ],
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
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-waffle-001",
        name: "Commercial Waffle Maker",
        nameBn: "কমার্শিয়াল ওয়াফল মেকার",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "fast-food-machine",
        keywords: [
            "waffle maker",
            "waffle machine",
            "ওয়াফল মেশিন",
            "ওয়াফল মেকার"
        ],
        price: 7500,
        oldPrice: 9000,
        image: "🧇",
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Commercial waffle maker for cafes and fast food businesses.",
        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-crepe-001",
        name: "Commercial Crepe Maker",
        nameBn: "কমার্শিয়াল ক্রেপ মেকার",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "fast-food-machine",
        keywords: [
            "crepe maker",
            "crepe machine",
            "ক্রেপ মেকার",
            "ক্রেপ মেশিন"
        ],
        price: 6500,
        oldPrice: 8000,
        image: "🥞",
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        stock: 10,
        status: "available",
        description: "Electric crepe maker for cafes and street food businesses.",
        specifications: {
            type: "Electric",
            use: "Cafe / Street Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-donut-001",
        name: "Donut Making Machine",
        nameBn: "ডোনাট মেকিং মেশিন",
        category: "machinery",
        categoryBn: "মেশিনারি",
        subCategory: "fast-food-machine",
        keywords: [
            "donut machine",
            "donut maker",
            "ডোনাট মেশিন",
            "ডোনাট মেকার"
        ],
        price: 8500,
        oldPrice: 10000,
        image: "🍩",
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Donut making machine for small food and snack businesses.",
        specifications: {
            type: "Commercial",
            use: "Food Business"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-french-fry-001",
        name: "French Fry Cutting Machine",
        nameBn: "ফ্রেঞ্চ ফ্রাই কাটিং মেশিন",
        category: "restaurant",
        categoryBn: "রেস্টুরেন্ট ও ফাস্ট ফুড",
        subCategory: "food-preparation",
        keywords: [
            "french fry cutter",
            "french fry machine",
            "ফ্রেঞ্চ ফ্রাই",
            "আলু কাটার মেশিন"
        ],
        price: 4500,
        oldPrice: 5500,
        image: "🍟",
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        stock: 10,
        status: "available",
        description: "French fry cutting machine for restaurants and fast food shops.",
        specifications: {
            type: "Manual",
            use: "Restaurant / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-pizza-001",
        name: "Commercial Pizza Oven",
        nameBn: "কমার্শিয়াল পিজ্জা ওভেন",
        category: "restaurant",
        categoryBn: "রেস্টুরেন্ট ও ফাস্ট ফুড",
        subCategory: "oven",
        keywords: [
            "pizza oven",
            "commercial oven",
            "পিজ্জা ওভেন",
            "ওভেন"
        ],
        price: 22000,
        oldPrice: 26000,
        image: "🍕",
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        stock: 10,
        status: "available",
        description: "Commercial pizza oven for restaurants and fast food businesses.",
        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-fryer-001",
        name: "Commercial Deep Fryer",
        nameBn: "কমার্শিয়াল ডিপ ফ্রায়ার",
        category: "restaurant",
        categoryBn: "রেস্টুরেন্ট ও ফাস্ট ফুড",
        subCategory: "fryer",
        keywords: [
            "deep fryer",
            "commercial fryer",
            "ডিপ ফ্রায়ার",
            "ফ্রায়ার"
        ],
        price: 8500,
        oldPrice: 10000,
        image: "🍗",
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Commercial deep fryer for restaurants and fast food businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "machinery-shawarma-001",
        name: "Commercial Shawarma Machine",
        nameBn: "কমার্শিয়াল শাওয়ারমা মেশিন",
        category: "restaurant",
        categoryBn: "রেস্টুরেন্ট ও ফাস্ট ফুড",
        subCategory: "shawarma",
        keywords: [
            "shawarma machine",
            "shawarma maker",
            "শাওয়ারমা মেশিন"
        ],
        price: 42000,
        oldPrice: 48000,
        image: "🌯",
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        stock: 5,
        status: "available",
        description: "Commercial shawarma machine for restaurants and fast food businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "tools-drill-001",
        name: "Mini Electric Drill Machine",
        nameBn: "মিনি ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryBn: "টুলস ও হার্ডওয়্যার",
        subCategory: "power-tools",
        keywords: [
            "drill",
            "drill machine",
            "electric drill",
            "ড্রিল",
            "ড্রিল মেশিন"
        ],
        price: 2800,
        oldPrice: 3500,
        image: "🔧",
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        stock: 15,
        status: "available",
        description: "Mini electric drill machine for home repair and workshop use.",
        specifications: {
            type: "Electric",
            use: "Home / Workshop"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "tools-screwdriver-001",
        name: "Rechargeable Electric Screwdriver",
        nameBn: "রিচার্জেবল ইলেকট্রিক স্ক্রু ড্রাইভার",
        category: "tools",
        categoryBn: "টুলস ও হার্ডওয়্যার",
        subCategory: "power-tools",
        keywords: [
            "screwdriver",
            "electric screwdriver",
            "স্ক্রু ড্রাইভার",
            "ইলেকট্রিক স্ক্রু ড্রাইভার"
        ],
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
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "home-vacuum-001",
        name: "Mini Vacuum Cleaner",
        nameBn: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryBn: "হোম ও কিচেন",
        subCategory: "cleaning",
        keywords: [
            "vacuum cleaner",
            "mini vacuum",
            "ভ্যাকুয়াম ক্লিনার",
            "ক্লিনার"
        ],
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
        seller: "World's Best Machinery BD",
        page: "product.html"
    },

    {
        id: "home-scale-001",
        name: "Digital Weighing Scale",
        nameBn: "ডিজিটাল ওজন মাপার স্কেল",
        category: "home",
        categoryBn: "হোম ও কিচেন",
        subCategory: "weighing-scale",
        keywords: [
            "digital scale",
            "weighing scale",
            "weight machine",
            "ডিজিটাল স্কেল",
            "ওজন মাপার মেশিন"
        ],
        price: 3500,
        oldPrice: 4000,
        image: "⚖️",
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        stock: 10,
        status: "available",
        description: "Digital weighing scale suitable for shops and business use.",
        specifications: {
            type: "Digital",
            use: "Shop / Business"
        },
        delivery: "All Bangladesh",
        seller: "World's Best Machinery BD",
        page: "product.html"
    }

];


/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getRelatedProducts(productId, limit = 6) {
    const product = getProductById(productId);

    if (!product) return [];

    return products
        .filter(item =>
            item.id !== productId &&
            item.category === product.category
        )
        .slice(0, limit);
}

function calculateDiscount(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;

    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function isProductAvailable(product) {
    return product &&
           product.status === "available" &&
           product.stock > 0;
}


/* =========================================
   SMART SEARCH
   বাংলা + English
