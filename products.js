/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE
   STEP 2 — NEW CATEGORY STRUCTURE
   ========================================= */

const products = [

    /* =========================
       MACHINERY — MAIN
    ========================= */

    {
        id: "machinery-001",
        name: "Mini Electric Drill Machine",
        nameBn: "মিনি ইলেকট্রিক ড্রিল মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Power Tools",
        price: 2800,
        oldPrice: 3500,
        image: "🔧",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        description: "Home, shop and workshop use electric drill machine.",
        descriptionBn: "বাড়ি, দোকান ও ওয়ার্কশপের কাজে ব্যবহারযোগ্য ড্রিল মেশিন।",
        specifications: {
            type: "Electric",
            use: "Home / Shop / Workshop"
        },
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "drill",
            "drill machine",
            "ড্রিল",
            "ড্রিল মেশিন",
            "মেশিন",
            "টুলস"
        ]
    },


    {
        id: "machinery-002",
        name: "Manual Cup Sealing Machine",
        nameBn: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cup Sealer",
        price: 7500,
        oldPrice: 8500,
        image: "🥤",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        description: "Manual cup sealing machine for juice and fast food business.",
        descriptionBn: "জুস, চা, কফি ও ফাস্টফুড ব্যবসার জন্য কাপ সিলিং মেশিন।",
        specifications: {
            type: "Manual",
            capacity: "150-200 cups/hour",
            use: "Juice / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "cup sealer",
            "cup sealing machine",
            "কাপ সিলার",
            "কাপ সিলিং মেশিন",
            "কাপ সিল",
            "জুস মেশিন"
        ]
    },


    {
        id: "machinery-003",
        name: "Cotton Candy Machine",
        nameBn: "কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Candy Floss",
        price: 12500,
        oldPrice: 15000,
        image: "🍭",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Commercial cotton candy machine for business and events.",
        descriptionBn: "ব্যবসা, মেলা ও ইভেন্টের জন্য কটন ক্যান্ডি মেশিন।",
        specifications: {
            type: "Commercial",
            use: "Business / Event"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "cotton candy",
            "candy floss",
            "কটন ক্যান্ডি",
            "কটন ক্যান্ডি মেশিন",
            "ক্যান্ডি মেশিন"
        ]
    },


    {
        id: "machinery-004",
        name: "AC & DC Sugarcane Juice Machine",
        nameBn: "এসি ও ডিসি আখের জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Sugarcane Machine",
        price: 60000,
        oldPrice: 68000,
        image: "🌱",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        description: "AC and DC sugarcane juice machine for commercial business.",
        descriptionBn: "আখের জুস ব্যবসার জন্য AC ও DC চালিত কমার্শিয়াল মেশিন।",
        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },
        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "sugarcane",
            "sugar cane machine",
            "আখ",
            "আখের জুস",
            "আখের মেশিন",
            "জুস মেশিন"
        ]
    },


    {
        id: "machinery-005",
        name: "Commercial Juice Machine",
        nameBn: "কমার্শিয়াল জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Juice Machine",
        price: 22000,
        oldPrice: 25000,
        image: "🥤",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "SALE",
        description: "Commercial juice machine for juice shops and businesses.",
        descriptionBn: "জুসের দোকান ও ব্যবসার জন্য কমার্শিয়াল জুস মেশিন।",
        specifications: {
            type: "Commercial",
            use: "Juice Shop / Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "juice machine",
            "commercial juice",
            "জুস মেশিন",
            "জুস",
            "কমার্শিয়াল জুস"
        ]
    },


    {
        id: "machinery-006",
        name: "Commercial Popcorn Machine",
        nameBn: "কমার্শিয়াল পপকর্ন মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Popcorn Machine",
        price: 14500,
        oldPrice: 17000,
        image: "🍿",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        description: "Commercial popcorn machine for fast food and snack business.",
        descriptionBn: "ফাস্টফুড ও স্ন্যাকস ব্যবসার জন্য কমার্শিয়াল পপকর্ন মেশিন।",
        specifications: {
            type: "Commercial",
            use: "Fast Food / Snack Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "popcorn",
            "popcorn machine",
            "পপকর্ন",
            "পপকর্ন মেশিন"
        ]
    },


    {
        id: "machinery-007",
        name: "Commercial Waffle Maker",
        nameBn: "কমার্শিয়াল ওয়াফল মেকার",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Waffle Maker",
        price: 7500,
        oldPrice: 9000,
        image: "🧇",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial waffle maker for cafe and fast food business.",
        descriptionBn: "ক্যাফে ও ফাস্টফুড ব্যবসার জন্য ওয়াফল মেকার।",
        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "waffle",
            "waffle maker",
            "ওয়াফল",
            "ওয়াফল মেকার"
        ]
    },


    {
        id: "machinery-008",
        name: "Commercial Crepe Maker",
        nameBn: "কমার্শিয়াল ক্রেপ মেকার",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Crepe Maker",
        price: 6500,
        oldPrice: 8000,
        image: "🥞",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "NEW",
        description: "Electric crepe maker for cafe and street food business.",
        descriptionBn: "ক্যাফে ও স্ট্রিট ফুড ব্যবসার জন্য ইলেকট্রিক ক্রেপ মেকার।",
        specifications: {
            type: "Electric",
            use: "Cafe / Street Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "crepe",
            "crepe maker",
            "ক্রেপ",
            "ক্রেপ মেকার"
        ]
    },


    {
        id: "machinery-009",
        name: "Donut Making Machine",
        nameBn: "ডোনাট মেকিং মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Donut Maker",
        price: 8500,
        oldPrice: 10000,
        image: "🍩",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Donut making machine for small food business.",
        descriptionBn: "ছোট খাবারের ব্যবসার জন্য ডোনাট মেকিং মেশিন।",
        specifications: {
            type: "Commercial",
            use: "Food Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "donut",
            "donut machine",
            "ডোনাট",
            "ডোনাট মেশিন"
        ]
    },


    {
        id: "machinery-010",
        name: "Electric Ice Crusher Machine",
        nameBn: "ইলেকট্রিক আইস ক্রাশার মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Ice Crusher",
        price: 4500,
        oldPrice: 5500,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        description: "Electric ice crusher for juice shops and beverage businesses.",
        descriptionBn: "জুসের দোকান ও পানীয় ব্যবসার জন্য ইলেকট্রিক আইস ক্রাশার।",
        specifications: {
            type: "Electric",
            use: "Juice Shop / Beverage"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "ice crusher",
            "ice machine",
            "আইস ক্রাশার",
            "বরফ ভাঙার মেশিন",
            "বরফ মেশিন"
        ]
    },


    {
        id: "machinery-011",
        name: "Commercial Ice Cube Machine",
        nameBn: "কমার্শিয়াল আইস কিউব মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Ice Machine",
        price: 35000,
        oldPrice: 40000,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "SALE",
        description: "Commercial ice cube machine for restaurants and businesses.",
        descriptionBn: "রেস্টুরেন্ট, ক্যাফে ও ব্যবসার জন্য কমার্শিয়াল আইস কিউব মেশিন।",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Business"
        },
        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "ice-machine.html",
        keywords: [
            "ice cube",
            "ice cube machine",
            "আইস কিউব",
            "বরফের মেশিন",
            "আইস মেশিন"
        ]
    },


    /* =========================
       FOOD & RESTAURANT
       ========================= */

    {
        id: "food-001",
        name: "Commercial Deep Fryer",
        nameBn: "কমার্শিয়াল ডিপ ফ্রায়ার",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Fryer",
        price: 8500,
        oldPrice: 10000,
        image: "🍗",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial fryer for restaurant and fast food business.",
        descriptionBn: "রেস্টুরেন্ট ও ফাস্টফুড ব্যবসার জন্য কমার্শিয়াল ফ্রায়ার।",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "fryer",
            "deep fryer",
            "ফ্রায়ার",
            "ডিপ ফ্রায়ার",
            "তেলে ভাজার মেশিন"
        ]
    },


    {
        id: "food-002",
        name: "Commercial Pizza Oven",
        nameBn: "কমার্শিয়াল পিজ্জা ওভেন",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Pizza Oven",
        price: 22000,
        oldPrice: 26000,
        image: "🍕",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Commercial pizza oven for restaurant and pizza shop.",
        descriptionBn: "রেস্টুরেন্ট ও পিজ্জা শপের জন্য কমার্শিয়াল পিজ্জা ওভেন।",
        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "pizza oven",
            "pizza",
            "পিজ্জা ওভেন",
            "পিজ্জা"
        ]
    },


    {
        id: "food-003",
        name: "French Fry Cutting Machine",
        nameBn: "ফ্রেঞ্চ ফ্রাই কাটিং মেশিন",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "French Fry",
        price: 4500,
        oldPrice: 5500,
        image: "🍟",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "French fry cutter for restaurant and fast food shops.",
        descriptionBn: "রেস্টুরেন্ট ও ফাস্টফুড দোকানের জন্য ফ্রেঞ্চ ফ্রাই কাটার।",
        specifications: {
            type: "Manual",
            use: "Restaurant / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "french fry",
            "fry cutter",
            "ফ্রেঞ্চ ফ্রাই",
            "আলু কাটার মেশিন"
        ]
    },


    /* =========================
       HOME
       ========================= */

    {
        id: "home-001",
        name: "Mini Vacuum Cleaner",
        nameBn: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home",
        subCategory: "Cleaning",
        price: 1800,
        oldPrice: 2200,
        image: "🧹",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        description: "Compact vacuum cleaner for home and office cleaning.",
        descriptionBn: "বাড়ি ও অফিস পরিষ্কারের জন্য ছোট ভ্যাকুয়াম ক্লিনার।",
        specifications: {
            type: "Portable",
            use: "Home / Office"
        },
        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "vacuum",
            "vacuum cleaner",
            "ভ্যাকুয়াম",
            "ভ্যাকুয়াম ক্লিনার"
        ]
    },


    /* =========================
       TOOLS & OTHERS
       ========================= */

    {
        id: "tools-001",
        name: "Rechargeable Electric Screwdriver",
        nameBn: "রিচার্জেবল ইলেকট্রিক স্ক্রু ড্রাইভার",
        category: "tools",
        categoryName: "Tools & Others",
        subCategory: "Power Tools",
        price: 2200,
        oldPrice: 2800,
        image: "🪛",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "OFFER",
        description: "Rechargeable screwdriver for home and workshop use.",
        descriptionBn: "বাড়ি ও ওয়ার্কশপের কাজের জন্য রিচার্জেবল স্ক্রু ড্রাইভার।",
        specifications: {
            type: "Rechargeable",
            use: "Home / Workshop"
        },
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html",
        keywords: [
            "screwdriver",
            "electric screwdriver",
            "স্ক্রু ড্রাইভার",
            "ইলেকট্রিক স্ক্রু ড্রাইভার"
        ]
    }

];
