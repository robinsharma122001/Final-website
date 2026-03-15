// Category Filter Function
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    products.forEach(product => {
        if (category === 'all') {
            product.classList.remove('hidden');
        } else {
            if (product.dataset.category === category) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        }
    });
}

// Newsletter Form Handler
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email) {
        alert('Thank you for subscribing! We\'ll keep you updated with fresh deals and products.');
        event.target.reset();
    }
}

// Smooth scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});
