* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f6f8;
    color: #333;
    padding-bottom: 70px; /* মোবাইলের নিচের নেভবারের জন্য */
}

/* Header */
.header {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #059669;
}

.logo-icon {
    font-size: 24px;
}

.header-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.cart-icon-btn {
    position: relative;
    font-size: 20px;
    cursor: pointer;
}

.cart-badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background: #e11d48;
    color: #fff;
    font-size: 11px;
    border-radius: 50%;
    padding: 2px 6px;
    font-weight: bold;
}

.menu-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

/* Search Container */
.search-container {
    display: flex;
    padding: 12px 16px;
    background: #fff;
}

.search-container input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 6px 0 0 6px;
    outline: none;
    font-size: 14px;
}

.search-btn {
    background: #059669;
    color: white;
    border: none;
    padding: 0 16px;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
}

/* Category Filter */
.category-scroll {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding: 10px 16px;
    white-space: nowrap;
    background: #fff;
    border-top: 1px solid #f3f4f6;
}

.category-scroll::-webkit-scrollbar {
    display: none;
}

.cat-btn {
    background: #f3f4f6;
    border: none;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
}

.cat-btn.active {
    background: #059669;
    color: white;
}

/* Hero Banner */
.hero-banner {
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
    padding: 24px 16px;
    margin: 12px 16px;
    border-radius: 12px;
}

.hero-banner h3 { font-size: 12px; opacity: 0.9; letter-spacing: 1px; }
.hero-banner h1 { font-size: 20px; margin: 6px 0; }
.hero-banner p { font-size: 12px; opacity: 0.8; margin-bottom: 12px; }
.shop-now-btn {
    background: #fff;
    color: #059669;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

/* Section Title */
.section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px 6px;
}

.section-title a {
    color: #059669;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 10px 16px;
}

/* 📌 PRODUCT CARD FIXES (যেখানে সমস্যাগুলো হচ্ছিল) */
.product-card {
    background: #fff;
    border-radius: 10px;
    padding: 12px;
    position: relative; /* ব্যাজ পজিশন সঠিক রাখার জন্য */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    border: 1px solid #e5e7eb;
}

.badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #e11d48;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 6px;
    border-radius: 4px;
    z-index: 2;
}

/* ছবির জায়গা ঠিক রাখার জন্য প্লেসহোল্ডার */
.product-image-box {
    width: 100%;
    height: 110px;
    background: #f8fafc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    overflow: hidden;
}

.product-image-box img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-title {
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
    margin-top: 18px; /* ব্যাজ থেকে দূরত্ব রাখার জন্য */
    line-height: 1.3;
    min-height: 36px; /* কার্ড যাতে সমান থাকে */
}

.rating {
    color: #f59e0b;
    font-size: 12px;
    margin: 4px 0;
}

.price-text {
    font-size: 12px;
    color: #4b5563;
    margin-bottom: 8px;
    font-weight: 500;
}

.card-buttons {
    display: flex;
    gap: 6px;
}

.btn-cart {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    flex: 1;
}

.btn-order {
    background: #059669;
    color: white;
    border: none;
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    flex: 1;
}

/* Mobile Bottom Nav */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
    z-index: 99;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6b7280;
    text-decoration: none;
    font-size: 11px;
    position: relative;
}

.nav-item i { font-size: 18px; margin-bottom: 2px; }
.nav-item.active { color: #059669; }

.nav-badge {
    position: absolute;
    top: -4px;
    right: 12px;
    background: #e11d48;
    color: white;
    font-size: 10px;
    border-radius: 50%;
    padding: 1px 5px;
}

/* Cart Drawer */
.cart-drawer-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
}

.cart-drawer {
    position: fixed;
    top: 0; right: -100%; width: 85%; max-width: 360px; height: 100%;
    background: white;
    z-index: 1001;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
}

.cart-drawer.open { right: 0; }

.cart-header {
    padding: 16px;
    background: #059669;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-cart { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }

.cart-items { flex: 1; overflow-y: auto; padding: 16px; }

.cart-footer {
    padding: 16px;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
}

.whatsapp-btn {
    width: 100%;
    background: #25d366;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

/* Footer */
.footer {
    background: #1f2937;
    color: #9ca3af;
    padding: 24px 16px;
    margin-top: 24px;
}

.footer h3 { color: white; margin-bottom: 8px; }
.footer p { font-size: 13px; line-height: 1.6; margin-bottom: 6px; }
.copyright { text-align: center; margin-top: 16px; font-size: 12px; border-top: 1px solid #374151; padding-top: 12px; }
