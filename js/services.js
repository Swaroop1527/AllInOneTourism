export function initializeServices() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.dataset.service;
            scrollToBooking(serviceType);
        });
    });
}

function scrollToBooking(serviceType) {
    const bookingSection = document.getElementById('booking');
    const serviceSelect = document.getElementById('service-type');
    
    serviceSelect.value = serviceType;
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}