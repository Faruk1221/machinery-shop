/* =========================================
   MACHINERY SHOP
   PRODUCT DATABASE / CATALOG
   DEMO DATA — FINAL PRICE LATER
   ========================================= */

const products = [

    {
        id: "scale-001",
        name: "Digital Weighing Scale",
        category: "scale",
        categoryName: "Scale",
        subCategory: "Digital Scale",
        price: 3500,
        oldPrice: 4000,
        image: "⚖️",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        description: "Business and shop use digital weighing scale.",
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

    {
        id: "juice-001",
        name: "Commercial Juice Machine",
        category: "juice",
        categoryName: "Juice",
        subCategory: "Juice Machine",
        price: 22000,
        oldPrice: 25000,
        image: "🥤",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "SALE",
        description: "Commercial juice machine for juice shop and business.",
        specifications: {
            type: "Commercial",
            use: "Juice Shop / Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "juice-machine.html"
    },

    {
        id: "popcorn-001",
        name: "Commercial Popcorn Machine",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Popcorn Machine",
        price: 14500,
        oldPrice: 17000,
        image: "🍿",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial popcorn machine for fast food and snack business.",
        specifications: {
            type: "Commercial",
            use: "Fast Food Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "popcorn-machine.html"
    },

    {
        id: "cotton-001",
        name: "Cotton Candy Machine",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Candy Floss",
        price: 12500,
        oldPrice: 15000,
        image: "🍭",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Cotton candy machine for small business and events.",
        specifications: {
            type: "Commercial",
            use: "Small Business / Event"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "cup-sealer-001",
        name: "Manual Cup Sealing Machine",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Cup Sealer",
        price: 7500,
        oldPrice: 8500,
        image: "🥤",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",
        description: "Manual cup sealing machine for juice and fast food business.",
        specifications: {
            type: "Manual",
            capacity: "150-200 cups/hour",
            use: "Juice / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "waffle-001",
        name: "Commercial Waffle Maker",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Waffle Maker",
        price: 7500,
        oldPrice: 9000,
        image: "🧇",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial waffle maker for cafe and fast food business.",
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
        id: "crepe-001",
        name: "Commercial Crepe Maker",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Crepe Maker",
        price: 6500,
        oldPrice: 8000,
        image: "🥞",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "NEW",
        description: "Electric crepe maker for cafe and street food business.",
        specifications: {
            type: "Electric",
            use: "Cafe / Street Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "donut-001",
        name: "Donut Making Machine",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "Donut Maker",
        price: 8500,
        oldPrice: 10000,
        image: "🍩",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Donut making machine for small food business.",
        specifications: {
            type: "Commercial",
            use: "Food Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "french-fry-001",
        name: "French Fry Cutting Machine",
        category: "food",
        categoryName: "Food Machine",
        subCategory: "French Fry",
        price: 4500,
        oldPrice: 5500,
        image: "🍟",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "French fry cutting machine for restaurant and fast food shops.",
        specifications: {
            type: "Manual",
            use: "Restaurant / Fast Food"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "blender-001",
        name: "2L Commercial Blender",
        category: "juice",
        categoryName: "Juice",
        subCategory: "Commercial Blender",
        price: 6500,
        oldPrice: 7500,
        image: "🥤",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "BEST SELLER",
        description: "Commercial blender for juice shop, restaurant and cafe.",
        specifications: {
            capacity: "2 Liter",
            use: "Restaurant / Cafe"
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
        category: "restaurant",
        categoryName: "Restaurant",
        subCategory: "Pizza Oven",
        price: 22000,
        oldPrice: 26000,
        image: "🍕",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "HOT",
        description: "Commercial pizza oven for restaurant and fast food business.",
        specifications: {
            type: "Electric",
            use: "Restaurant / Pizza Shop"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "fryer-001",
        name: "Commercial Deep Fryer",
        category: "restaurant",
        categoryName: "Restaurant",
        subCategory: "Deep Fryer",
        price: 8500,
        oldPrice: 10000,
        image: "🍗",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "OFFER",
        description: "Commercial deep fryer for restaurant and fast food business.",
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
        id: "shawarma-001",
        name: "Commercial Shawarma Machine",
        category: "restaurant",
        categoryName: "Restaurant",
        subCategory: "Shawarma Machine",
        price: 42000,
        oldPrice: 48000,
        image: "🌯",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "POPULAR",
        description: "Commercial shawarma machine for restaurant and fast food business.",
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
        id: "ice-crusher-001",
        name: "Electric Ice Crusher Machine",
        category: "ice",
        categoryName: "Ice",
        subCategory: "Ice Crusher",
        price: 4500,
        oldPrice: 5500,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "OFFER",
        description: "Electric ice crusher for juice shop, restaurant and beverage business.",
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

    {
        id: "ice-cube-001",
        name: "Commercial Ice Cube Machine",
        category: "ice",
        categoryName: "Ice",
        subCategory: "Ice Making Machine",
        price: 35000,
        oldPrice: 40000,
        image: "🧊",
        gallery: [],
        rating: 4.8,
        reviews: 0,
        badge: "SALE",
        description: "Commercial ice cube making machine for restaurant and business.",
        specifications: {
            type: "Commercial",
            use: "Restaurant / Business"
        },
        stock: 10,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "ice-machine.html"
    },

    {
        id: "sugarcane-001",
        name: "AC & DC Sugarcane Juice Machine",
        category: "juice",
        categoryName: "Juice",
        subCategory: "Sugarcane Machine",
        price: 60000,
        oldPrice: 68000,
        image: "🌱",
        gallery: [],
        rating: 4.9,
        reviews: 0,
        badge: "BEST SELLER",
        description: "AC and DC sugarcane juice machine for roadside and commercial business.",
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
        id: "dispenser-001",
        name: "Commercial Juice Dispenser",
        category: "juice",
        categoryName: "Juice",
        subCategory: "Juice Dispenser",
        price: 28000,
        oldPrice: 32000,
        image: "🥤",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "NEW",
        description: "Commercial juice dispenser for restaurant, cafe and juice shop.",
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
        id: "vacuum-001",
        name: "Mini Vacuum Cleaner",
        category: "home",
        categoryName: "Home",
        subCategory: "Home Gadget",
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
        stock: 20,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    },

    {
        id: "drill-001",
        name: "Mini Electric Drill Machine",
        category: "tools",
        categoryName: "Tools",
        subCategory: "Power Tools",
        price: 2800,
        oldPrice: 3500,
        image: "🔧",
        gallery: [],
        rating: 4.7,
        reviews: 0,
        badge: "POPULAR",
        description: "Mini electric drill machine for home repair and workshop use.",
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
        category: "tools",
        categoryName: "Tools",
        subCategory: "Power Tools",
        price: 2200,
        oldPrice: 2800,
        image: "🪛",
        gallery: [],
        rating: 4.6,
        reviews: 0,
        badge: "OFFER",
        description: "Rechargeable electric screwdriver for home and workshop use.",
        specifications: {
            type: "Rechargeable",
            use: "Home / Workshop"
        },
        stock: 15,
        status: "available",
        delivery: "All Bangladesh",
        seller: "Machinery Shop",
        page: "product.html"
    }

];
