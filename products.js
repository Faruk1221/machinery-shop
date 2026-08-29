/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE / CATALOG
   STEP 1A — CORE 20 PRODUCTS

   NOTE:
   Prices are DEMO prices for development.
   Final Bangladesh market prices will be verified later.
   ========================================= */

const products = [

    /* ================================
       01 — MACHINERY & BUSINESS
       ================================ */

    {
        id: "cup-sealer-001",
        name: "Manual Cup Sealing Machine",
        bnName: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Cup Sealing Machine",

        keywords: [
            "cup sealer",
            "cup sealing machine",
            "manual cup sealer",
            "কাপ সিলার",
            "কাপ সিলিং মেশিন",
            "কাপ সিল মেশিন",
            "জুস কাপ সিলার"
        ],

        price: 7500,
        oldPrice: 8500,

        image: "🥤",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",

        description:
            "Manual cup sealing machine for juice shops, cafes, tea shops and fast food businesses.",

        specifications: {
            type: "Manual",
            use: "Juice / Fast Food",
            capacity: "150-200 cups/hour"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "cup-roll-001",
        name: "Cup Sealing Film Roll",
        bnName: "কাপ সিলিং রোল",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Cup Sealing Roll",

        keywords: [
            "cup sealing roll",
            "cup sealer roll",
            "cup sealing film",
            "cup film",
            "কাপ সিলিং রোল",
            "কাপ সিলার রোল",
            "কাপের রোল",
            "সিলিং পেপার"
        ],

        price: 450,
        oldPrice: 550,

        image: "🎞️",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",

        description:
            "Cup sealing film roll for compatible cup sealing machines.",

        specifications: {
            type: "Sealing Film",
            use: "Juice / Beverage Shop"
        },

        stock: 50,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "cotton-candy-001",
        name: "Commercial Cotton Candy Machine",
        bnName: "কমার্শিয়াল কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Cotton Candy Machine",

        keywords: [
            "cotton candy machine",
            "candy floss machine",
            "cotton candy",
            "কটন ক্যান্ডি মেশিন",
            "ক্যান্ডি ফ্লস মেশিন",
            "তুলার মিছরি মেশিন"
        ],

        price: 12500,
        oldPrice: 15000,

        image: "🍭",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "HOT",

        description:
            "Commercial cotton candy machine for small business, shops, fairs and events.",

        specifications: {
            type: "Commercial",
            use: "Business / Event"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "popcorn-001",
        name: "Commercial Popcorn Machine",
        bnName: "কমার্শিয়াল পপকর্ন মেশিন",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Popcorn Machine",

        keywords: [
            "popcorn machine",
            "commercial popcorn",
            "pop corn maker",
            "পপকর্ন মেশিন",
            "পপকর্ন মেকার"
        ],

        price: 14500,
        oldPrice: 17000,

        image: "🍿",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",

        description:
            "Commercial popcorn machine for fast food shops, events and snack businesses.",

        specifications: {
            type: "Commercial",
            use: "Fast Food / Event"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "sugarcane-001",
        name: "AC & DC Sugarcane Juice Machine",
        bnName: "এসি ও ডিসি আখের জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Sugarcane Machine",

        keywords: [
            "sugarcane machine",
            "sugar cane juice machine",
            "sugarcane juicer",
            "আখের মেশিন",
            "আখের জুস মেশিন",
            "আখ মেশিন",
            "সুগারকেন মেশিন"
        ],

        price: 60000,
        oldPrice: 68000,

        image: "🌱",
        gallery: [],

        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",

        description:
            "AC and DC sugarcane juice machine for roadside juice shops and commercial businesses.",

        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },

        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "blender-001",
        name: "Commercial High Speed Blender",
        bnName: "কমার্শিয়াল হাই স্পিড ব্লেন্ডার",
        category: "machinery",
        categoryName: "Machinery & Business",
        subCategory: "Commercial Blender",

        keywords: [
            "commercial blender",
            "high speed blender",
            "juice blender",
            "blender machine",
            "কমার্শিয়াল ব্লেন্ডার",
            "হাই স্পিড ব্লেন্ডার",
            "জুস ব্লেন্ডার"
        ],

        price: 6500,
        oldPrice: 7500,

        image: "🥤",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",

        description:
            "High speed commercial blender for juice shops, restaurants, cafes and beverage businesses.",

        specifications: {
            type: "Commercial",
            use: "Juice / Restaurant"
        },

        stock: 12,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    /* ================================
       07-12 — RESTAURANT & FAST FOOD
       ================================ */

    {
        id: "juice-dispenser-001",
        name: "Commercial Juice Dispenser",
        bnName: "কমার্শিয়াল জুস ডিসপেনসার",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Juice Dispenser",

        keywords: [
            "juice dispenser",
            "commercial juice dispenser",
            "juice machine",
            "জুস ডিসপেনসার",
            "জুস মেশিন",
            "কমার্শিয়াল জুস ডিসপেনসার"
        ],

        price: 28000,
        oldPrice: 32000,

        image: "🥤",
        gallery: [],

        rating: 4.7,
        reviews: 0,
        badge: "NEW",

        description:
            "Commercial juice dispenser for restaurants, cafes, juice shops and beverage businesses.",

        specifications: {
            type: "Commercial",
            use: "Restaurant / Cafe"
        },

        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "deep-fryer-001",
        name: "Commercial Deep Fryer",
        bnName: "কমার্শিয়াল ডিপ ফ্রায়ার",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Deep Fryer",

        keywords: [
            "deep fryer",
            "commercial fryer",
            "fryer machine",
            "ডিপ ফ্রায়ার",
            "ফ্রায়ার মেশিন",
            "ফাস্ট ফুড ফ্রায়ার"
        ],

        price: 8500,
        oldPrice: 10000,

        image: "🍗",
        gallery: [],

        rating: 4.7,
        reviews: 0,
        badge: "OFFER",

        description:
            "Commercial deep fryer for restaurants, fast food shops and snack businesses.",

        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "pizza-oven-001",
        name: "Commercial Pizza Oven",
        bnName: "কমার্শিয়াল পিজ্জা ওভেন",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Pizza Oven",

        keywords: [
            "pizza oven",
            "commercial oven",
            "pizza machine",
            "পিজ্জা ওভেন",
            "কমার্শিয়াল ওভেন",
            "পিজ্জা মেশিন"
        ],

        price: 22000,
        oldPrice: 26000,

        image: "🍕",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "HOT",

        description:
            "Commercial pizza oven for pizza shops, restaurants and fast food businesses.",

        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },

        stock: 6,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "shawarma-001",
        name: "Commercial Shawarma Machine",
        bnName: "কমার্শিয়াল শাওয়ারমা মেশিন",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Shawarma Machine",

        keywords: [
            "shawarma machine",
            "shawarma maker",
            "শাওয়ারমা মেশিন",
            "শর্মা মেশিন",
            "শাওয়ারমা মেকার"
        ],

        price: 42000,
        oldPrice: 48000,

        image: "🌯",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",

        description:
            "Commercial shawarma machine for restaurants, cafes and fast food businesses.",

        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },

        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "waffle-001",
        name: "Commercial Waffle Maker",
        bnName: "কমার্শিয়াল ওয়াফল মেকার",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Waffle Maker",

        keywords: [
            "waffle maker",
            "waffle machine",
            "commercial waffle",
            "ওয়াফল মেকার",
            "ওয়াফল মেশিন"
        ],

        price: 7500,
        oldPrice: 9000,

        image: "🧇",
        gallery: [],

        rating: 4.7,
        reviews: 0,
        badge: "OFFER",

        description:
            "Commercial waffle maker for cafes, dessert shops and fast food businesses.",

        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "ice-crusher-001",
        name: "Electric Ice Crusher Machine",
        bnName: "ইলেকট্রিক আইস ক্রাশার মেশিন",
        category: "restaurant",
        categoryName: "Restaurant & Fast Food",
        subCategory: "Ice Crusher",

        keywords: [
            "ice crusher",
            "ice crusher machine",
            "ice machine",
            "আইস ক্রাশার",
            "বরফ ভাঙার মেশিন",
            "আইস ক্রাশার মেশিন"
        ],

        price: 4500,
        oldPrice: 5500,

        image: "🧊",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",

        description:
            "Electric ice crusher for juice shops, restaurants and beverage businesses.",

        specifications: {
            type: "Electric",
            use: "Juice Shop / Restaurant"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    /* ================================
       13-15 — TOOLS & BUSINESS
       ================================ */

    {
        id: "drill-001",
        name: "Mini Electric Drill Machine",
        bnName: "মিনি ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",

        keywords: [
            "drill machine",
            "electric drill",
            "mini drill",
            "ড্রিল মেশিন",
            "ইলেকট্রিক ড্রিল",
            "ড্রিল মেশিন কিনুন"
        ],

        price: 2800,
        oldPrice: 3500,

        image: "🔧",
        gallery: [],

        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",

        description:
            "Mini electric drill machine for home repair, workshop and light-duty work.",

        specifications: {
            type: "Electric",
            use: "Home / Workshop"
        },

        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "screwdriver-001",
        name: "Rechargeable Electric Screwdriver",
        bnName: "রিচার্জেবল ইলেকট্রিক স্ক্রু ড্রাইভার",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",

        keywords: [
            "electric screwdriver",
            "rechargeable screwdriver",
            "screw driver",
            "স্ক্রু ড্রাইভার",
            "ইলেকট্রিক স্ক্রু ড্রাইভার",
            "রিচার্জেবল স্ক্রু ড্রাইভার"
        ],

        price: 2200,
        oldPrice: 2800,

        image: "🪛",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "OFFER",

        description:
            "Rechargeable electric screwdriver for home, furniture and workshop use.",

        specifications: {
            type: "Rechargeable",
            use: "Home / Workshop"
        },

        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "scale-001",
        name: "Digital Weighing Scale",
        bnName: "ডিজিটাল ওজন মাপার মেশিন",
        category: "business",
        categoryName: "Business Tools",
        subCategory: "Digital Scale",

        keywords: [
            "digital weighing scale",
            "digital scale",
            "weight machine",
            "weighing machine",
            "ডিজিটাল স্কেল",
            "ওজন মেশিন",
            "ওজন মাপার মেশিন"
        ],

        price: 3500,
        oldPrice: 4000,

        image: "⚖️",
        gallery: [],

        rating: 4.8,
        reviews: 0,
        badge: "BUSINESS",

        description:
            "Digital weighing scale for shops, businesses and general commercial use.",

        specifications: {
            type: "Digital",
            use: "Business / Shop"
        },

        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    /* ================================
       16-20 — FAST MOVING SUPPORT
       ================================ */

    {
        id: "led-torch-001",
        name: "Rechargeable LED Torch Light",
        bnName: "রিচার্জেবল LED টর্চ লাইট",
        category: "daily-needs",
        categoryName: "Daily Needs",
        subCategory: "Lighting",

        keywords: [
            "led torch",
            "rechargeable torch",
            "torch light",
            "টর্চ লাইট",
            "রিচার্জেবল টর্চ",
            "LED লাইট"
        ],

        price: 650,
        oldPrice: 850,

        image: "🔦",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "DAILY USE",

        description:
            "Rechargeable LED torch light for home, travel, shop and emergency use.",

        specifications: {
            type: "Rechargeable",
            use: "Home / Outdoor"
        },

        stock: 30,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "charger-001",
        name: "33W Fast Charger with Type-C Cable",
        bnName: "৩৩W ফাস্ট চার্জার ও Type-C কেবল",
        category: "gadgets",
        categoryName: "Gadgets & Electronics",
        subCategory: "Charger",

        keywords: [
            "fast charger",
            "33w charger",
            "type c charger",
            "type c cable",
            "ফাস্ট চার্জার",
            "চার্জার",
            "টাইপ সি চার্জার",
            "মোবাইল চার্জার"
        ],

        price: 850,
        oldPrice: 1100,

        image: "🔌",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "FAST MOVING",

        description:
            "33W fast charging adapter with Type-C cable for compatible smartphones and devices.",

        specifications: {
            type: "Fast Charger",
            power: "33W",
            port: "Type-C"
        },

        stock: 30,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "powerbank-001",
        name: "10000mAh Power Bank",
        bnName: "১০,০০০mAh পাওয়ার ব্যাংক",
        category: "gadgets",
        categoryName: "Gadgets & Electronics",
        subCategory: "Power Bank",

        keywords: [
            "power bank",
            "10000mah power bank",
            "portable charger",
            "পাওয়ার ব্যাংক",
            "পোর্টেবল চার্জার",
            "১০০০০ mAh পাওয়ার ব্যাংক"
        ],

        price: 1200,
        oldPrice: 1500,

        image: "🔋",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "POPULAR",

        description:
            "Portable 10000mAh power bank for smartphones and everyday travel use.",

        specifications: {
            capacity: "10000mAh",
            type: "Portable"
        },

        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "mini-fan-001",
        name: "Rechargeable Mini Folding Fan",
        bnName: "রিচার্জেবল মিনি ফোল্ডিং ফ্যান",
        category: "home",
        categoryName: "Home & Kitchen",
        subCategory: "Mini Fan",

        keywords: [
            "mini fan",
            "rechargeable fan",
            "folding fan",
            "portable fan",
            "মিনি ফ্যান",
            "রিচার্জেবল ফ্যান",
            "ফোল্ডিং ফ্যান",
            "পোর্টেবল ফ্যান"
        ],

        price: 650,
        oldPrice: 850,

        image: "🌀",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "DAILY USE",

        description:
            "Rechargeable portable folding fan for home, office, shop and travel.",

        specifications: {
            type: "Rechargeable",
            use: "Home / Office / Travel"
        },

        stock: 25,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "vacuum-001",
        name: "Portable Mini Vacuum Cleaner",
        bnName: "পোর্টেবল মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home & Kitchen",
        subCategory: "Cleaning",

        keywords: [
            "vacuum cleaner",
            "mini vacuum",
            "portable vacuum",
            "car vacuum",
            "ভ্যাকুয়াম ক্লিনার",
            "মিনি ভ্যাকুয়াম",
            "পোর্টেবল ভ্যাকুয়াম",
            "কার ভ্যাকুয়াম"
        ],

        price: 1800,
        oldPrice: 2200,

        image: "🧹",
        gallery: [],

        rating: 4.6,
        reviews: 0,
        badge: "NEW",

        description:
            "Compact portable vacuum cleaner for home, office and vehicle cleaning.",

        specifications: {
            type: "Portable",
            use: "Home / Office / Car"
        },

        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    }

];
