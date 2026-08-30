/* =========================================
   MACHINERY SHOP
   FINAL PRODUCT DATABASE
   ========================================= */

const products = [

    /* =========================
       MACHINERY
    ========================= */

    {
        id: "machinery-001",
        name: "Manual Cup Sealing Machine",
        bnName: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cup Sealing Machine",

        price: 0,
        oldPrice: 0,

        image: "images/cup-sealing-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "BEST SELLER",

        description: "জুস, শরবত ও ফাস্টফুড ব্যবসার জন্য কাপ সিলিং মেশিন।",

        keywords: [
            "cup sealer",
            "cup sealing machine",
            "কাপ সিলার",
            "কাপ সিলিং মেশিন",
            "কাপ সেলার"
        ],

        specifications: {
            type: "Manual",
            use: "Juice / Fast Food Business"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-001"
    },

    {
        id: "machinery-002",
        name: "Cotton Candy Machine",
        bnName: "কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cotton Candy Machine",

        price: 0,
        oldPrice: 0,

        image: "images/cotton-candy-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "POPULAR",

        description: "কটন ক্যান্ডি ব্যবসা ও ইভেন্টের জন্য উপযোগী মেশিন।",

        keywords: [
            "cotton candy",
            "cotton candy machine",
            "candy floss machine",
            "কটন ক্যান্ডি",
            "কটন ক্যান্ডি মেশিন"
        ],

        specifications: {
            type: "Commercial",
            use: "Business / Event"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-002"
    },

    {
        id: "machinery-003",
        name: "Sugarcane Juice Machine",
        bnName: "আখের জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Sugarcane Machine",

        price: 0,
        oldPrice: 0,

        image: "images/sugarcane-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "BEST SELLER",

        description: "আখের জুস ব্যবসার জন্য AC & DC সহ বাণিজ্যিক মেশিন।",

        keywords: [
            "sugarcane machine",
            "sugar cane juice machine",
            "আখের মেশিন",
            "আখের জুস মেশিন",
            "আখ মেশিন"
        ],

        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-003"
    },

    {
        id: "machinery-004",
        name: "Commercial Juice Machine",
        bnName: "কমার্শিয়াল জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Juice Machine",

        price: 0,
        oldPrice: 0,

        image: "images/juice-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "POPULAR",

        description: "জুস শপ, রেস্টুরেন্ট ও ব্যবসার জন্য কমার্শিয়াল জুস মেশিন।",

        keywords: [
            "juice machine",
            "commercial juice machine",
            "জুস মেশিন",
            "জুস মেশিনারি",
            "জুস বানানোর মেশিন"
        ],

        specifications: {
            type: "Commercial",
            use: "Juice Shop / Restaurant"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-004"
    },

    {
        id: "machinery-005",
        name: "Commercial Popcorn Machine",
        bnName: "পপকর্ন মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Popcorn Machine",

        price: 0,
        oldPrice: 0,

        image: "images/popcorn-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "POPULAR",

        description: "ফাস্টফুড, সিনেমা ও স্ন্যাকস ব্যবসার জন্য পপকর্ন মেশিন।",

        keywords: [
            "popcorn machine",
            "pop corn machine",
            "পপকর্ন মেশিন",
            "পপকর্ন"
        ],

        specifications: {
            type: "Commercial",
            use: "Fast Food / Snack Business"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-005"
    },

    /* =========================
       FOOD & RESTAURANT
    ========================= */

    {
        id: "food-001",
        name: "Commercial Waffle Maker",
        bnName: "ওয়াফল মেকার",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Waffle Maker",

        price: 0,
        oldPrice: 0,

        image: "images/waffle-maker.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "OFFER",

        description: "ক্যাফে ও ফাস্টফুড ব্যবসার জন্য কমার্শিয়াল ওয়াফল মেকার।",

        keywords: [
            "waffle maker",
            "waffle machine",
            "ওয়াফল মেকার",
            "ওয়াফল মেশিন"
        ],

        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=food-001"
    },

    {
        id: "food-002",
        name: "Commercial Deep Fryer",
        bnName: "ডিপ ফ্রায়ার",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Deep Fryer",

        price: 0,
        oldPrice: 0,

        image: "images/deep-fryer.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "POPULAR",

        description: "রেস্টুরেন্ট ও ফাস্টফুড ব্যবসার জন্য কমার্শিয়াল ডিপ ফ্রায়ার।",

        keywords: [
            "deep fryer",
            "fryer machine",
            "ডিপ ফ্রায়ার",
            "ফ্রায়ার মেশিন"
        ],

        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=food-002"
    },

    /* =========================
       HOME
    ========================= */

    {
        id: "home-001",
        name: "Mini Vacuum Cleaner",
        bnName: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home",
        subCategory: "Cleaning",

        price: 0,
        oldPrice: 0,

        image: "images/mini-vacuum.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "NEW",

        description: "বাড়ি ও অফিস পরিষ্কারের জন্য ছোট ও সহজে ব্যবহারযোগ্য ভ্যাকুয়াম ক্লিনার।",

        keywords: [
            "vacuum cleaner",
            "mini vacuum",
            "ভ্যাকুয়াম ক্লিনার",
            "ক্লিনার"
        ],

        specifications: {
            type: "Portable",
            use: "Home / Office"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=home-001"
    },

    /* =========================
       DAILY NEED
    ========================= */

    {
        id: "daily-001",
        name: "Daily Use Product",
        bnName: "দৈনন্দিন প্রয়োজনীয় পণ্য",
        category: "daily",
        categoryName: "Daily Need",
        subCategory: "Daily Products",

        price: 0,
        oldPrice: 0,

        image: "images/daily-product.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "NEW",

        description: "দৈনন্দিন জীবনে প্রয়োজনীয় পণ্য।",

        keywords: [
            "daily need",
            "daily product",
            "দৈনন্দিন পণ্য",
            "প্রয়োজনীয় পণ্য"
        ],

        specifications: {
            type: "Daily Use",
            use: "Home / Personal"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=daily-001"
    },

    /* =========================
       FASHION
    ========================= */

    {
        id: "fashion-001",
        name: "Fashion Product",
        bnName: "ফ্যাশন পণ্য",
        category: "fashion",
        categoryName: "Fashion",
        subCategory: "Fashion",

        price: 0,
        oldPrice: 0,

        image: "images/fashion-product.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "NEW",

        description: "পুরুষ ও নারীদের জন্য নির্বাচিত ফ্যাশন পণ্য।",

        keywords: [
            "fashion",
            "fashion item",
            "ফ্যাশন",
            "ফ্যাশন আইটেম"
        ],

        specifications: {
            type: "Fashion",
            use: "Personal"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=fashion-001"
    },

    /* =========================
       HEALTH & CARE
    ========================= */

    {
        id: "health-001",
        name: "Health & Care Product",
        bnName: "হেলথ ও কেয়ার পণ্য",
        category: "health",
        categoryName: "Health & Care",
        subCategory: "Health Care",

        price: 0,
        oldPrice: 0,

        image: "images/health-product.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "NEW",

        description: "দৈনন্দিন স্বাস্থ্য ও ব্যক্তিগত যত্নের প্রয়োজনীয় পণ্য।",

        keywords: [
            "health",
            "health care",
            "care product",
            "হেলথ",
            "কেয়ার",
            "স্বাস্থ্য পণ্য"
        ],

        specifications: {
            type: "Care",
            use: "Personal"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=health-001"
    },

    /* =========================
       TOOLS & OTHERS
    ========================= */

    {
        id: "tools-001",
        name: "Electric Drill Machine",
        bnName: "ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryName: "Tools & Others",
        subCategory: "Power Tools",

        price: 0,
        oldPrice: 0,

        image: "images/drill-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 0,

        badge: "POPULAR",

        description: "বাড়ি, ওয়ার্কশপ ও বিভিন্ন কাজের জন্য ইলেকট্রিক ড্রিল মেশিন।",

        keywords: [
            "drill machine",
            "electric drill",
            "ড্রিল মেশিন",
            "ইলেকট্রিক ড্রিল"
        ],

        specifications: {
            type: "Electric",
            use: "Home / Workshop"
        },

        stock: 0,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",

        page: "product.html?id=tools-001"
    }

];
