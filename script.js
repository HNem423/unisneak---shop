
// ===== SẢN PHẨM =====
const products = [
    {
        id: 1,
        name: "Urban Earthwork Sneaker",
        category: "Giày",
        price: 1850000,
        emoji: "👟",
        image: "images/shoe1.jpg",
        description: "Thiết kế layer đa sắc thái, phong cách Streetwear năng động và trẻ trung.",
        material: "Da tổng hợp + Đế Rubber",
        color: "Trắng/Nâu/Đen",
        sizes: "38 - 44",
        warranty: "06 tháng"
    },
    {
        id: 2,
        name: "Navy Stripe Essential",
        category: "Giày",
        price: 1790000,
        emoji: "🛹",
        image: "images/shoe2.jpg",
        description: "Mẫu giày casual basic phối màu Navy tinh tế, phù hợp cho cả đi học và đi làm.",
        material: "Microfiber Leather + Đế Phylon",
        color: "Trắng/Xám/Xanh Navy",
        sizes: "36 - 44",
        warranty: "06 tháng"
    },
    {
        id: 3,
        name: "Contrast Mono High-Sole",
        category: "Giày",
        price: 1920000,
        emoji: "🏁",
        image: "images/shoe3.jpg",
        description: "Phong cách tương phản mạnh mẽ với đế cao tôn dáng, giúp bạn nổi bật trong mọi khung hình.",
        material: "Da nhăn cao cấp + Đế Cao su đúc",
        color: "Đen/Trắng",
        sizes: "37 - 45",
        warranty: "12 tháng"
    },
    {
        id: 4,
        name: "Pure Cloud Platform",
        category: "Giày",
        price: 1880000,
        emoji: "☁️",
        image: "images/shoe4.jpg",
        description: "Thiết kế full trắng tối giản với đế platform 4cm, mang lại cảm giác êm ái như đi trên mây.",
        material: "Da PU cao cấp + Đệm EVA",
        color: "Trắng tinh khôi",
        sizes: "35 - 43",
        warranty: "06 tháng"
    },
    {
        id: 5,
        name: "Aero-Knit White Runner",
        category: "Giày",
        price: 2950000,
        emoji: "⚡",
        image: "images/shoe5.jpg",
        description: "Công nghệ dệt Aero-Knit thoáng khí tối đa, phù hợp cho các hoạt động thể thao và đi làm hàng ngày.",
        material: "Breathable Mesh + Phylon Sole",
        color: "Trắng tinh khôi",
        sizes: "36 - 44",
        warranty: "12 tháng"
    },
    {
        id: 6,
        name: "Sakura Gradient Walker",
        category: "Giày",
        price: 2890000,
        emoji: "🌸",
        image: "images/shoe6.jpg",
        description: "Sự kết hợp hoàn hảo giữa sắc hồng anh đào và trắng, đế đệm giảm chấn bảo vệ đôi chân linh hoạt.",
        material: "Textile + EVA Elastic",
        color: "Trắng/Hồng Pastel",
        sizes: "35 - 40",
        warranty: "06 tháng"
    },
    {
        id: 7,
        name: "Classic Khaki Backpack",
        category: "Phụ kiện",
        price: 450000,
        emoji: "🎒",
        image: "images/bag1.jpg",
        description: "Balo màu khaki basic với thiết kế nhiều ngăn tiện lợi cho học sinh, sinh viên.",
        material: "Canvas chống thấm nhẹ",
        color: "Khaki/Beige",
        sizes: "30x42 cm",
        warranty: "03 tháng"
    },
    {
        id: 8,
        name: "Midnight Simple Backpack",
        category: "Phụ kiện",
        price: 450000,
        emoji: "🖤",
        image: "images/bag2.jpg",
        description: "Mẫu balo đen tối giản, bền bỉ, phù hợp với mọi phong cách trang phục.",
        material: "Polyester 600D",
        color: "Đen",
        sizes: "30x42 cm",
        warranty: "03 tháng"
    },
    {
        id: 9,
        name: "Urban Explorer Crossbody",
        category: "Phụ kiện",
        price: 320000,
        emoji: "🚲",
        image: "images/bag3.jpg",
        description: "Mẫu balo xanh bền bỉ với thiết kế hiện đại, phù hợp cho phong cách cá tính năng động.",
        material: "Oxford kháng nước",
        color: "Đen",
        sizes: "18x22 cm",
        warranty: "03 tháng"
        },
    {
        id: 10,
        name: "Signature Canvas Tote",
        category: "Phụ kiện",
        price: 150000,
        emoji: "🛍️",
        image: "images/bag5.jpg",
        description: "Túi vải tote in chữ phong cách tối giản, phù hợp để đi chơi hoặc đi chợ nhẹ nhàng.",
        material: "Canvas dày dặn",
        color: "Kem/Trắng",
        sizes: "35x40 cm",
        warranty: "Không áp dụng"
        },
    {
        id: 11,
        name: "Sporty Drawstring Bag",
        category: "Phụ kiện",
        price: 180000,
        emoji: "🏀",
        image: "images/bag6.jpg",
        description: "Túi rút dây siêu nhẹ, in họa tiết thể thao trẻ trung, phù hợp đi tập gym hoặc dã ngoại.",
        material: "Dù 2 lớp",
        color: "Đen/Trắng",
        sizes: "33x45 cm",
        warranty: "Không áp dụng"
        },
    {
        id: 12,
        name: "Sergeant Pepper Street Cap",
        category: "Phụ kiện",
        price: 280000,
        emoji: "🎖️",
        image: "images/cap2.jpg",
        description: "Thiết kế thêu chữ nổi Sergeant Pepper phong cách retro, vành nón rách tua rua cực chất.",
        material: "Khaki thô cao cấp",
        color: "Đen Than",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    },
    {
    id: 13,
    name: "Pink Galaxy Star Cap",
    category: "Phụ kiện",
    price: 250000,
    emoji: "💖",
    image: "images/cap3.jpg",
    description: "Tone màu hồng pastel ngọt ngào kết hợp cùng form nón rách, tạo sự đối lập thú vị.",
    material: "Canvas mềm",
    color: "Hồng Sakura",
    sizes: "Free size (có khóa chỉnh)",
    warranty: "Không áp dụng"
    },
    {
    id: 14,
    name: "G.A.R.E Rusty Orange Cap",
    category: "Phụ kiện",
    price: 265000,
    emoji: "🔥",
    image: "images/cap4.jpg",
    description: "Màu cam đất thời thượng với chữ thêu G.A.R.E tối giản, phù hợp cho những chuyến đi phượt.",
    material: "Khaki dệt kim",
    color: "Cam Đất",
    sizes: "Free size (có khóa chỉnh)",
    warranty: "Không áp dụng"
    },  
    {
        id: 15,
        name: "Coffee Grunge Distressed Cap",
        category: "Phụ kiện",
        price: 270000,
        emoji: "☕",
        image: "images/cap5.jpg",
        description: "Hiệu ứng wash loang màu cà phê cổ điển, mang lại vẻ ngoài sành điệu và phong trần.",
        material: "Vải bố wash",
        color: "Nâu Cà Phê",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    },
    {
        id: 16,
        name: "Vintage Star Distressed Cap",
        category: "Phụ kiện",
        price: 250000,
        emoji: "⭐",
        image: "images/cap1.jpg",
        description: "Nón lưỡi trai chất liệu denim wash bụi bặm với điểm nhấn ngôi sao rách độc đáo.",
        material: "100% Cotton Denim",
        color: "Xám Wash",
        sizes: "Free size (có khóa chỉnh)",
        warranty: "Không áp dụng"
    }
];

// ===== GIỎ HÀNG - KHỞI TẠO =====
let cart = JSON.parse(localStorage.getItem('unisneak_cart')) || [];

// ===== DANH MỤC HIỆN TẠI - THEO DÕI FILTER =====
let currentCategory = 'all';

// ===== SẢN PHẨM ĐANG XEM CHI TIẾT =====
let currentProduct = null;

// ===== HÀM: HIỂN THỊ DANH SÁCH SẢN PHẨM =====
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // LỌC SẢN PHẨM THEO DANH MỤC
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(p => p.category === currentCategory);
    }

    // KIỂM TRA NẾU KHÔNG CÓ SẢN PHẨM NÀO
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #999; padding: 3rem;">Không có sản phẩm nào trong danh mục này</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const productImage = product.image ?
            `<img src="${product.image}" alt="${product.name}" class="product-img" />` :
            product.emoji;

        productCard.innerHTML = `
            <div class="product-image" onclick="openProductModal(${product.id})">${productImage}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name" onclick="openProductModal(${product.id})">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toLocaleString('vi-VN')}đ</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Thêm
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// ===== HÀM: THÊM SẢN PHẨM VÀO GIỎ =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Nếu có rồi thì tăng số lượng
        existingItem.quantity += 1;
    } else {
        // Nếu chưa có thì thêm vào
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }
    
    // Lưu vào localStorage
    saveCart();
    
    // Cập nhật giao diện
    updateCartUI();
    
    // Hiển thị thông báo
    showNotification(`Đã thêm ${product.name} vào giỏ hàng`);
}

// ===== HÀM: CẬP NHẬT GIỎ HÀNG =====
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const totalPrice = document.getElementById('total-price');
    
    // Cập nhật số lượng sản phẩm
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Cập nhật danh sách sản phẩm trong giỏ
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        emptyMsg.style.display = 'block';
    } else {
        emptyMsg.style.display = 'none';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}đ</div>
                    <div class="cart-item-qty">
                        <button onclick="decreaseQty(${item.id})" style="width:25px; cursor:pointer;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQty(${item.id})" style="width:25px; cursor:pointer;">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Cập nhật tổng tiền
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toLocaleString('vi-VN') + 'đ';
}

// ===== HÀM: TĂNG SỐ LƯỢNG SẢN PHẨM =====
function increaseQty(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// ===== HÀM: GIẢM SỐ LƯỢNG SẢN PHẨM =====
function decreaseQty(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCart();
        updateCartUI();
    }
}

// ===== HÀM: XÓA SẢN PHẨM KHỎI GIỎ =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
}

// ===== HÀM: LƯU GIỎ HÀNG VÀO LOCALSTORAGE =====
function saveCart() {
    localStorage.setItem('unisneak_cart', JSON.stringify(cart));
}

// ===== HÀM: MỞ/ĐÓNG GIỎ HÀNG SIDEBAR =====
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// ===== HÀM: THANH TOÁN =====
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Cảm ơn bạn đã mua sắm!\n\nTổng tiền: ${total.toLocaleString('vi-VN')}đ\n\nVui lòng hoàn tất thanh toán tại cửa hàng hoặc qua ngân hàng.`);
    
    // Xóa giỏ hàng sau khi thanh toán
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    
    showNotification('Đơn hàng của bạn đã được xác nhận!');
}

// ===== HÀM: HIỂN THỊ THÔNG BÁO =====
function showNotification(message) {
    // Tạo element thông báo
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #00a651;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 300;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    // Thêm animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Xóa thông báo sau 3 giây
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== HÀM: CUỘN ĐẾN PHẦN SẢN PHẨM =====
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== HÀM: LỌC SẢN PHẨM THEO DANH MỤC =====
function filterProducts(category) {
    currentCategory = category;
    
    // CẬP NHẬT TRẠNG THÁI NÚT LỌC
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // HIỂN THỊ LẠI DANH SÁCH SẢN PHẨM
    renderProducts();
}

// ===== HÀM: MỞ MODAL CHI TIẾT SẢN PHẨM =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Cập nhật thông tin sản phẩm vào modal
    const detailEmoji = document.getElementById('detail-emoji');
    if (product.image) {
        detailEmoji.innerHTML = `<img src="${product.image}" alt="${product.name}" class="modal-detail-img" />`;
    } else {
        detailEmoji.textContent = product.emoji;
    }
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('detail-material').textContent = product.material;
    document.getElementById('detail-color').textContent = product.color;
    document.getElementById('detail-sizes').textContent = product.sizes;
    document.getElementById('detail-warranty').textContent = product.warranty;
    document.getElementById('detail-price').textContent = product.price.toLocaleString('vi-VN') + 'đ';
    
    // Hiển thị modal
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}

// ===== HÀM: ĐÓNG MODAL CHI TIẾT SẢN PHẨM =====
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    currentProduct = null;
}

// ===== HÀM: THÊM SẢN PHẨM VÀO GIỎ TỪ MODAL =====
function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
        closeProductModal();
    }
}

// ===== SỰ KIỆN: CLICK ICON GIỎ HÀNG =====
document.getElementById('cart-icon-btn').addEventListener('click', toggleCart);

// ===== SỰ KIỆN: CLICK NÚT ĐÓNG GIỎ HÀNG =====
document.getElementById('close-cart').addEventListener('click', toggleCart);

// ===== SỰ KIỆN: CLICK OVERLAY ĐỂ ĐÓNG GIỎ HÀNG =====
document.getElementById('cart-overlay').addEventListener('click', toggleCart);

// ===== KHỞI TẠO TRANG =====
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị danh sách sản phẩm
    renderProducts();
    
    // Cập nhật giao diện giỏ hàng
    updateCartUI();
    
    // Thêm hiệu ứng smooth scroll cho các link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Đóng menu nếu đang mở trên mobile
                if (window.innerWidth < 768) {
                    // Có thể thêm logic để đóng menu tại đây nếu cần
                }
            }
        });
    });
    
    console.log('UNISNEAK - Website khởi tạo thành công!');
});
