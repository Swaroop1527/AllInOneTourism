import { hotels, activities, transport } from './data/dummyData.js';

export function initializeBooking() {
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', handleBookingSearch);
}

function handleBookingSearch(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const serviceType = document.getElementById('service-type').value;

    if (!destination || !dates) {
        alert('Please fill in all required fields');
        return;
    }

    // Get relevant data based on service type
    let searchResults;
    switch(serviceType) {
        case 'hotel':
            searchResults = hotels;
            break;
        case 'activities':
            searchResults = activities;
            break;
        case 'transport':
            searchResults = transport;
            break;
        default:
            searchResults = [...hotels, ...activities, ...transport];
    }

    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    const resultsSection = document.querySelector('.search-results');
    const resultsGrid = document.querySelector('.results-grid');
    
    // Clear previous results
    resultsGrid.innerHTML = '';
    
    // Create result cards
    results.forEach(result => {
        const card = createResultCard(result);
        resultsGrid.appendChild(card);
    });
    
    // Show results section
    resultsSection.classList.add('active');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    card.innerHTML = `
        <img src="${result.image}" alt="${result.name}" class="result-image">
        <div class="result-content">
            <h3 class="result-title">${result.name}</h3>
            <div class="result-price">${result.price}</div>
            <div class="result-rating">
                ${'★'.repeat(Math.floor(result.rating))}${result.rating % 1 ? '½' : ''}
                <span class="rating-number">${result.rating}</span>
            </div>
            <p>${result.description}</p>
            <a href="#" class="book-now-btn">Book Now</a>
        </div>
    `;
    
    return card;
}