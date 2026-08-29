/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE / CATALOG
   STEP 1.1 — A-to-Z READY PRODUCT SYSTEM
   ========================================= */

const products = [

    /* =========================================
       🥤 BEVERAGE & JUICE
       ========================================= */

    {
        id: "juice-001",
        name: "Commercial Juice Machine",
        nameBn: "কমার্শিয়াল জুস মেশিন",
        category: "juice",
        categoryName: "Beverage & Juice",
        subCategory: "Juice Machine",
        price: 22000,
        oldPrice: 25000,
        image: "🥤",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        description: "Commercial juice machine for juice shops, restaurants and beverage businesses.",
        specifications: {
            type: "Commercial",
            use: "Juice Shop / Restaurant / Business"
        },
        keywords: [
            "juice machine",
            "commercial juice machine",
            "জুস মেশিন",
            "জুস বানানোর মেশিন",
            "জুস করার মেশিন",
            "কমার্শিয়াল জুস মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "sugarcane-001",
        name: "AC & DC Sugarcane Juice Machine",
        nameBn: "এসি ও ডিসি আখের রসের মেশিন",
        category: "juice",
        categoryName: "Beverage & Juice",
        subCategory: "Sugarcane Machine",
        price: 60000,
        oldPrice: 68000,
        image: "🌱",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        description: "AC and DC sugarcane juice machine for commercial juice businesses.",
        specifications: {
            type: "AC / DC",
            use: "Juice Business"
        },
        keywords: [
            "sugarcane machine",
            "sugar cane juice machine",
            "আখের মেশিন",
            "আখের রসের মেশিন",
            "আখের জুস মেশিন",
            "আখ ভাঙার মেশিন"
        ],
        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "blender-001",
        name: "2L Commercial Blender",
        nameBn: "২ লিটার কমার্শিয়াল ব্লেন্ডার",
        category: "juice",
        categoryName: "Beverage & Juice",
        subCategory: "Commercial Blender",
        price: 6500,
        oldPrice: 7500,
        image: "🥤",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        description: "Commercial blender for juice shops, restaurants, cafes and food businesses.",
        specifications: {
            capacity: "2 Liter",
            use: "Restaurant / Cafe / Juice Shop"
        },
        keywords: [
            "blender",
            "commercial blender",
            "juice blender",
            "ব্লেন্ডার",
            "জুস ব্লেন্ডার",
            "জুস বানানোর ব্লেন্ডার"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "dispenser-001",
        name: "Commercial Juice Dispenser",
        nameBn: "কমার্শিয়াল জুস ডিসপেনসার",
        category: "juice",
        categoryName: "Beverage & Juice",
        subCategory: "Juice Dispenser",
        price: 28000,
        oldPrice: 32000,
        image: "🥤",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "NEW",
        description: "Commercial juice dispenser for restaurants, cafes and juice shops.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Cafe / Juice Shop"
        },
        keywords: [
            "juice dispenser",
            "commercial dispenser",
            "জুস ডিসপেনসার",
            "জুস রাখার মেশিন",
            "জুস পরিবেশনের মেশিন"
        ],
        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       🍔 FAST FOOD & RESTAURANT
       ========================================= */

    {
        id: "fryer-001",
        name: "Commercial Deep Fryer",
        nameBn: "কমার্শিয়াল ডিপ ফ্রায়ার",
        category: "restaurant",
        categoryName: "Fast Food & Restaurant",
        subCategory: "Deep Fryer",
        price: 8500,
        oldPrice: 10000,
        image: "🍗",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial deep fryer for restaurant and fast food businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        keywords: [
            "deep fryer",
            "commercial fryer",
            "ফ্রায়ার",
            "ডিপ ফ্রায়ার",
            "তেলে ভাজার মেশিন",
            "চিকেন ফ্রাই মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "shawarma-001",
        name: "Commercial Shawarma Machine",
        nameBn: "কমার্শিয়াল শাওয়ারমা মেশিন",
        category: "restaurant",
        categoryName: "Fast Food & Restaurant",
        subCategory: "Shawarma Machine",
        price: 42000,
        oldPrice: 48000,
        image: "🌯",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        description: "Commercial shawarma machine for restaurant and fast food businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Fast Food"
        },
        keywords: [
            "shawarma machine",
            "শাওয়ারমা মেশিন",
            "শর্মা মেশিন",
            "শাওয়ারমা করার মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "pizza-oven-001",
        name: "Commercial Pizza Oven",
        nameBn: "কমার্শিয়াল পিজ্জা ওভেন",
        category: "restaurant",
        categoryName: "Fast Food & Restaurant",
        subCategory: "Pizza Oven",
        price: 22000,
        oldPrice: 26000,
        image: "🍕",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Commercial pizza oven for pizza shops, restaurants and fast food businesses.",
        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },
        keywords: [
            "pizza oven",
            "commercial oven",
            "পিজ্জা ওভেন",
            "পিজ্জা বানানোর মেশিন",
            "পিজ্জা করার ওভেন"
        ],
        stock: 8,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "french-fry-001",
        name: "French Fry Cutting Machine",
        nameBn: "ফ্রেঞ্চ ফ্রাই কাটিং মেশিন",
        category: "restaurant",
        categoryName: "Fast Food & Restaurant",
        subCategory: "French Fry",
        price: 4500,
        oldPrice: 5500,
        image: "🍟",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "French fry cutting machine for restaurants and fast food shops.",
        specifications: {
            type: "Manual",
            use: "Restaurant / Fast Food"
        },
        keywords: [
            "french fry cutter",
            "french fry machine",
            "ফ্রেঞ্চ ফ্রাই মেশিন",
            "আলু কাটার মেশিন",
            "ফ্রাই কাটার"
        ],
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       🍿 SNACKS & DESSERT
       ========================================= */

    {
        id: "popcorn-001",
        name: "Commercial Popcorn Machine",
        nameBn: "কমার্শিয়াল পপকর্ন মেশিন",
        category: "food",
        categoryName: "Snacks & Dessert",
        subCategory: "Popcorn Machine",
        price: 14500,
        oldPrice: 17000,
        image: "🍿",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "Commercial popcorn machine for snack shops, events and fast food businesses.",
        specifications: {
            type: "Commercial",
            use: "Fast Food / Snack Business / Event"
        },
        keywords: [
            "popcorn machine",
            "পপকর্ন মেশিন",
            "পপকর্ন বানানোর মেশিন",
            "পপকর্ন করার মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "popcorn-machine.html"
    },

    {
        id: "cotton-001",
        name: "Cotton Candy Machine",
        nameBn: "কটন ক্যান্ডি মেশিন",
        category: "food",
        categoryName: "Snacks & Dessert",
        subCategory: "Cotton Candy",
        price: 12500,
        oldPrice: 15000,
        image: "🍭",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Cotton candy machine for small businesses, fairs and events.",
        specifications: {
            type: "Commercial",
            use: "Small Business / Event"
        },
        keywords: [
            "cotton candy machine",
            "candy floss machine",
            "কটন ক্যান্ডি মেশিন",
            "মিষ্টি তুলার মেশিন",
            "কটন ক্যান্ডি বানানোর মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "waffle-001",
        name: "Commercial Waffle Maker",
        nameBn: "কমার্শিয়াল ওয়াফল মেকার",
        category: "food",
        categoryName: "Snacks & Dessert",
        subCategory: "Waffle Maker",
        price: 7500,
        oldPrice: 9000,
        image: "🧇",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial waffle maker for cafes and fast food businesses.",
        specifications: {
            type: "Electric",
            use: "Cafe / Fast Food"
        },
        keywords: [
            "waffle maker",
            "waffle machine",
            "ওয়াফল মেশিন",
            "ওয়াফল বানানোর মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "crepe-001",
        name: "Commercial Crepe Maker",
        nameBn: "কমার্শিয়াল ক্রেপ মেকার",
        category: "food",
        categoryName: "Snacks & Dessert",
        subCategory: "Crepe Maker",
        price: 6500,
        oldPrice: 8000,
        image: "🥞",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        description: "Electric crepe maker for cafes and street food businesses.",
        specifications: {
            type: "Electric",
            use: "Cafe / Street Food"
        },
        keywords: [
            "crepe maker",
            "crepe machine",
            "ক্রেপ মেশিন",
            "ক্রেপ বানানোর মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "donut-001",
        name: "Donut Making Machine",
        nameBn: "ডোনাট মেকিং মেশিন",
        category: "food",
        categoryName: "Snacks & Dessert",
        subCategory: "Donut Maker",
        price: 8500,
        oldPrice: 10000,
        image: "🍩",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Donut making machine for small food businesses and snack shops.",
        specifications: {
            type: "Commercial",
            use: "Food Business"
        },
        keywords: [
            "donut machine",
            "donut maker",
            "ডোনাট মেশিন",
            "ডোনাট বানানোর মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       📦 PACKAGING & SEALING
       ========================================= */

    {
        id: "cup-sealer-001",
        name: "Manual Cup Sealing Machine",
        nameBn: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "packaging",
        categoryName: "Packaging & Sealing",
        subCategory: "Cup Sealer",
        price: 7500,
        oldPrice: 8500,
        image: "🥤",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",
        description: "Manual cup sealing machine for juice shops, cafes and fast food businesses.",
        specifications: {
            type: "Manual",
            capacity: "150-200 cups/hour",
            use: "Juice / Fast Food / Cafe"
        },
        keywords: [
            "cup sealer",
            "cup sealing machine",
            "cup sealing machine price",
            "কাপ সিলিং মেশিন",
            "কাপ সেলার মেশিন",
            "কাপ সিল করার মেশিন",
            "কাপ সিলার"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "cup-roll-001",
        name: "Cup Sealing Roll / Film",
        nameBn: "কাপ সিলিং রোল / ফিল্ম",
        category: "packaging",
        categoryName: "Packaging & Sealing",
        subCategory: "Sealing Roll",
        price: 450,
        oldPrice: 550,
        image: "📦",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "DAILY NEED",
        description: "Cup sealing roll for cup sealing machines. Suitable for juice, tea and beverage businesses.",
        specifications: {
            type: "Sealing Film",
            use: "Cup Sealing Machine"
        },
        keywords: [
            "cup sealing roll",
            "cup sealing film",
            "sealing roll",
            "কাপ সিলিং রোল",
            "কাপ সিলিং ফিল্ম",
            "কাপ সেলার রোল",
            "কাপ মেশিনের রোল"
        ],
        stock: 50,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       🧊 ICE
       ========================================= */

    {
        id: "ice-crusher-001",
        name: "Electric Ice Crusher Machine",
        nameBn: "ইলেকট্রিক আইস ক্রাশার মেশিন",
        category: "ice",
        categoryName: "Ice & Cooling",
        subCategory: "Ice Crusher",
        price: 4500,
        oldPrice: 5500,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        description: "Electric ice crusher for juice shops, restaurants and beverage businesses.",
        specifications: {
            type: "Electric",
            use: "Juice Shop / Restaurant"
        },
        keywords: [
            "ice crusher",
            "ice crushing machine",
            "আইস ক্রাশার",
            "বরফ ভাঙার মেশিন",
            "বরফ গুঁড়া করার মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "ice-cube-001",
        name: "Commercial Ice Cube Machine",
        nameBn: "কমার্শিয়াল আইস কিউব মেশিন",
        category: "ice",
        categoryName: "Ice & Cooling",
        subCategory: "Ice Making Machine",
        price: 35000,
        oldPrice: 40000,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "SALE",
        description: "Commercial ice cube making machine for restaurants, cafes and businesses.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Cafe / Business"
        },
        keywords: [
            "ice cube machine",
            "ice maker",
            "বরফের মেশিন",
            "আইস কিউব মেশিন",
            "বরফ বানানোর মেশিন"
        ],
        stock: 5,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "ice-machine.html"
    },


    /* =========================================
       ⚙️ TOOLS & HARDWARE
       ========================================= */

    {
        id: "drill-001",
        name: "Mini Electric Drill Machine",
        nameBn: "মিনি ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",
        price: 2800,
        oldPrice: 3500,
        image: "🔧",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "Electric drill machine for home repair, workshop and small business use.",
        specifications: {
            type: "Electric",
            use: "Home / Workshop / Business"
        },
        keywords: [
            "drill machine",
            "electric drill",
            "power drill",
            "ড্রিল মেশিন",
            "ড্রিল করার মেশিন",
            "গর্ত করার মেশিন"
        ],
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "screwdriver-001",
        name: "Rechargeable Electric Screwdriver",
        nameBn: "রিচার্জেবল ইলেকট্রিক স্ক্রু ড্রাইভার",
        category: "tools",
        categoryName: "Tools & Hardware",
        subCategory: "Power Tools",
        price: 2200,
        oldPrice: 2800,
        image: "🪛",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "OFFER",
        description: "Rechargeable electric screwdriver for home, workshop and business use.",
        specifications: {
            type: "Rechargeable",
            use: "Home / Workshop"
        },
        keywords: [
            "electric screwdriver",
            "rechargeable screwdriver",
            "ইলেকট্রিক স্ক্রু ড্রাইভার",
            "স্ক্রু খোলার মেশিন",
            "স্ক্রু লাগানোর মেশিন"
        ],
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       ⚖️ BUSINESS EQUIPMENT
       ========================================= */

    {
        id: "scale-001",
        name: "Digital Weighing Scale",
        nameBn: "ডিজিটাল ওজন মাপার মেশিন",
        category: "business",
        categoryName: "Business Equipment",
        subCategory: "Digital Scale",
        price: 3500,
        oldPrice: 4000,
        image: "⚖️",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "BUSINESS",
        description: "Digital weighing scale for shops, businesses, restaurants and commercial use.",
        specifications: {
            type: "Digital",
            use: "Business / Shop / Restaurant"
        },
        keywords: [
            "digital scale",
            "weighing scale",
            "weight machine",
            "ডিজিটাল স্কেল",
            "ওজন মাপার মেশিন",
            "ওজন মেশিন",
            "দোকানের ওজন মেশিন"
        ],
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       🏠 HOME & DAILY NEED
       ========================================= */

    {
        id: "vacuum-001",
        name: "Mini Vacuum Cleaner",
        nameBn: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home & Daily Need",
        subCategory: "Home Cleaning",
        price: 1800,
        oldPrice: 2200,
        image: "🧹",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        description: "Compact vacuum cleaner for home and office cleaning.",
        specifications: {
            type: "Portable",
            use: "Home / Office"
        },
        keywords: [
            "vacuum cleaner",
            "mini vacuum",
            "ভ্যাকুয়াম ক্লিনার",
            "ময়লা পরিষ্কারের মেশিন",
            "ঘর পরিষ্কারের মেশিন"
        ],
        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "multiplug-001",
        name: "Heavy Duty Multi Plug",
        nameBn: "হেভি ডিউটি মাল্টিপ্লাগ",
        category: "daily",
        categoryName: "Daily Need",
        subCategory: "Electrical",
        price: 650,
        oldPrice: 800,
        image: "🔌",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "DAILY NEED",
        description: "Heavy duty multi plug for home, office, shop and business use.",
        specifications: {
            type: "Heavy Duty",
            use: "Home / Office / Shop"
        },
        keywords: [
            "multi plug",
            "extension board",
            "মাল্টিপ্লাগ",
            "মাল্টি প্লাগ",
            "একসাথে অনেক প্লাগ",
            "ইলেকট্রিক মাল্টিপ্লাগ"
        ],
        stock: 30,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       👕 FASHION / PERSONAL USE
       ========================================= */

    {
        id: "tshirt-001",
        name: "Premium Basic T-Shirt",
        nameBn: "প্রিমিয়াম বেসিক টি-শার্ট",
        category: "fashion",
        categoryName: "Fashion",
        subCategory: "Men's Fashion",
        price: 550,
        oldPrice: 750,
        image: "👕",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        description: "Comfortable basic t-shirt for everyday use.",
        specifications: {
            type: "Casual",
            use: "Daily Wear"
        },
        keywords: [
            "t shirt",
            "tshirt",
            "টি শার্ট",
            "টি-শার্ট",
            "ছেলেদের টি শার্ট",
            "পুরুষদের টি শার্ট"
        ],
        stock: 25,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },


    /* =========================================
       🧴 PERSONAL / DAILY CARE
       ========================================= */

    {
        id: "trimmer-001",
        name: "Rechargeable Hair Trimmer",
        nameBn: "রিচার্জেবল হেয়ার ট্রিমার",
        category: "personal",
        categoryName: "Personal Care",
        subCategory: "Grooming",
        price: 950,
        oldPrice: 1250,
        image: "✂️",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "POPULAR",
        description: "Rechargeable trimmer for everyday personal grooming.",
        specifications: {
            type: "Rechargeable",
            use: "Personal Care"
        },
        keywords: [
            "hair trimmer",
            "beard trimmer",
            "ট্রিমার",
            "দাড়ি কাটার মেশিন",
            "চুল কাটার মেশিন",
            "দাড়ি ট্রিমার"
        ],
        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    }

];
