// Stayora - Enhanced Script with Multiple Property Types

// Mock Data for Properties
const properties = [
    {
        id: 1,
        type: 'flat',
        title: '3 BHK Luxury Apartment',
        price: 35000,
        priceType: 'rent',
        bhk: 3,
        floor: '5th Floor',
        totalFloors: 12,
        area: 1450,
        location: 'Sector 62, Noida',
        city: 'Noida',
        furnished: 'Fully Furnished',
        parking: true,
        landmarks: ['Metro 0.5 km', 'School 2 km', 'Mall 1 km'],
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        rating: 4.5,
        reviews: 24,
        lat: 28.6139,
        lng: 77.2090
    },
    {
        id: 2,
        type: 'flat',
        title: '2 BHK Modern Flat',
        price: 4500000,
        priceType: 'buy',
        bhk: 2,
        floor: '3rd Floor',
        totalFloors: 8,
        area: 1100,
        location: 'Koramangala, Bangalore',
        city: 'Bangalore',
        furnished: 'Semi-Furnished',
        parking: true,
        landmarks: ['Metro 1 km', 'School 0.8 km', 'Hospital 2 km'],
        img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        rating: 4.2,
        reviews: 18,
        lat: 12.9352,
        lng: 77.6245
    },
    {
        id: 3,
        type: 'pg',
        title: 'Premium PG for Boys',
        price: 12000,
        priceType: 'rent',
        gender: 'Boys',
        occupancy: 'Double Sharing',
        food: true,
        ac: true,
        location: 'Laxmi Nagar, Delhi',
        city: 'Delhi',
        landmarks: ['Metro 0.3 km', 'College 1.5 km'],
        img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
        rating: 4.7,
        reviews: 32,
        lat: 28.6304,
        lng: 77.2799
    },
    {
        id: 4,
        type: 'office',
        title: 'Commercial Office Space',
        price: 85000,
        priceType: 'rent',
        area: 2500,
        floor: '7th Floor',
        totalFloors: 15,
        parking: 10,
        location: 'Cyber City, Gurgaon',
        city: 'Gurgaon',
        furnished: 'Furnished',
        landmarks: ['Metro 0.2 km', 'Restaurants nearby'],
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        rating: 4.1,
        reviews: 12,
        lat: 28.4942,
        lng: 77.1064
    },
    {
        id: 5,
        type: 'shop',
        title: 'Retail Shop on Main Road',
        price: 3500000,
        priceType: 'buy',
        area: 450,
        floor: 'Ground Floor',
        mainRoad: true,
        location: 'Connaught Place, Delhi',
        city: 'Delhi',
        landmarks: ['Metro 0.1 km', 'Bus Stand nearby'],
        img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        rating: 3.9,
        reviews: 8,
        lat: 28.6315,
        lng: 77.2167
    },
    {
        id: 6,
        type: 'plot',
        title: 'Residential Plot',
        price: 8500000,
        priceType: 'buy',
        area: 2400,
        dimensions: '40x60',
        corner: true,
        location: 'Whitefield, Bangalore',
        city: 'Bangalore',
        landmarks: ['School 1 km', 'Hospital 2 km'],
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        rating: 4.0,
        reviews: 6,
        lat: 12.9698,
        lng: 77.7499
    },
    {
        id: 7,
        type: 'flat',
        title: '1 BHK Cozy Apartment',
        price: 18000,
        priceType: 'rent',
        bhk: 1,
        floor: '2nd Floor',
        totalFloors: 4,
        area: 650,
        location: 'Bandra West, Mumbai',
        city: 'Mumbai',
        furnished: 'Furnished',
        parking: false,
        landmarks: ['Metro 0.7 km', 'Market nearby'],
        img: 'https://images.unsplash.com/photo-1502005229766-939760a7cb0d?w=800',
        rating: 4.3,
        reviews: 15,
        lat: 19.0596,
        lng: 72.8295
    },
    {
        id: 8,
        type: 'pg',
        title: 'Girls PG with Food',
        price: 10000,
        priceType: 'rent',
        gender: 'Girls',
        occupancy: 'Triple Sharing',
        food: true,
        ac: false,
        location: 'HSR Layout, Bangalore',
        city: 'Bangalore',
        landmarks: ['Metro 1.2 km', 'College 0.5 km'],
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        rating: 4.6,
        reviews: 28,
        lat: 12.9121,
        lng: 77.6446
    }
];

// Global State
let currentFilters = {
    transactionType: 'rent',
    propertyType: 'all',
    city: 'all',
    bhk: 'all'
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Stayora Enhanced Loaded');

    // ==================== LOGIN FORM ====================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('roleSelect').value;
            localStorage.setItem('userRole', role);

            if (role === 'landlord') {
                window.location.href = 'landlord.html';
            } else {
                window.location.href = 'client.html';
            }
        });
    }

    // ==================== CLIENT PAGE ====================
    const listingsContainer = document.getElementById('listingsContainer');

    if (listingsContainer) {
        renderListings();

        // Transaction Type Toggle
        const toggleOptions = document.querySelectorAll('.toggle-option');
        toggleOptions.forEach(option => {
            option.addEventListener('click', () => {
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                currentFilters.transactionType = option.dataset.type;
                renderListings();
            });
        });

        // Property Type Filter
        const propertyTypeSelect = document.getElementById('propertyTypeFilter');
        if (propertyTypeSelect) {
            propertyTypeSelect.addEventListener('change', (e) => {
                currentFilters.propertyType = e.target.value;
                renderListings();
            });
        }

        // BHK Filter
        const bhkFilter = document.getElementById('bhkFilter');
        if (bhkFilter) {
            bhkFilter.addEventListener('change', (e) => {
                currentFilters.bhk = e.target.value;
                renderListings();
            });
        }

        // City Filter
        const cityFilter = document.getElementById('cityFilter');
        if (cityFilter) {
            cityFilter.addEventListener('change', (e) => {
                currentFilters.city = e.target.value;
                renderListings();
            });
        }
    }

    // ==================== LANDLORD PAGE ====================
    const propertyTypeInput = document.getElementById('propertyType');
    const bhkSection = document.getElementById('bhkSection');
    const floorSection = document.getElementById('floorSection');
    const pgSection = document.getElementById('pgSection');

    if (propertyTypeInput) {
        propertyTypeInput.addEventListener('change', (e) => {
            const type = e.target.value;

            // Show/hide conditional fields
            if (bhkSection) bhkSection.style.display = (type === 'flat') ? 'block' : 'none';
            if (floorSection) floorSection.style.display = ['flat', 'office', 'shop'].includes(type) ? 'block' : 'none';
            if (pgSection) pgSection.style.display = (type === 'pg') ? 'block' : 'none';
        });
    }

    // ==================== MOBILE NAVBAR LOGIC ====================
    if (window.innerWidth <= 768) {
        const navItems = document.querySelectorAll('.nav-item > a');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const parent = item.parentElement;

                // If it has a dropdown, toggle it
                if (parent.querySelector('.dropdown')) {
                    e.preventDefault();

                    // Close other dropdowns
                    document.querySelectorAll('.nav-item').forEach(nav => {
                        if (nav !== parent) nav.classList.remove('active');
                    });

                    parent.classList.toggle('active');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item')) {
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
            }
        });
    }
});

// ==================== RENDER LISTINGS ====================
function renderListings() {
    const container = document.getElementById('listingsContainer');
    if (!container) return;

    // Filter properties
    let filtered = properties.filter(property => {
        // Transaction type filter
        if (property.priceType !== currentFilters.transactionType) return false;

        // Property type filter
        if (currentFilters.propertyType !== 'all' && property.type !== currentFilters.propertyType) return false;

        // BHK filter (only for flats)
        if (currentFilters.bhk !== 'all' && property.bhk && property.bhk !== parseInt(currentFilters.bhk)) return false;

        // City filter
        if (currentFilters.city !== 'all' && property.city !== currentFilters.city) return false;

        return true;
    });

    // Clear container
    container.innerHTML = '';

    // Render filtered properties
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No properties found matching your criteria.</p>';
        return;
    }

    filtered.forEach(property => {
        const card = createPropertyCard(property);
        container.appendChild(card);
    });
}

// ==================== CREATE PROPERTY CARD ====================
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'listing-card card';

    // Property Type Badge
    const typeBadge = getPropertyTypeBadge(property.type);

    // Price formatting
    const priceText = property.priceType === 'rent'
        ? `₹${property.price.toLocaleString('en-IN')}/month`
        : `₹${(property.price / 100000).toFixed(2)} Lakh`;

    // Meta information
    let metaHTML = '';
    if (property.bhk) {
        metaHTML += `<div class="meta-item">${property.bhk} BHK</div>`;
    }
    if (property.area) {
        metaHTML += `<div class="meta-item">${property.area} sq.ft</div>`;
    }
    if (property.floor) {
        metaHTML += `<div class="meta-item">${property.floor}</div>`;
    }
    if (property.parking) {
        metaHTML += `<div class="meta-item">Parking</div>`;
    }
    if (property.furnished) {
        metaHTML += `<div class="meta-item">${property.furnished}</div>`;
    }
    if (property.gender) {
        metaHTML += `<div class="meta-item">${property.gender} Only</div>`;
    }
    if (property.food !== undefined) {
        metaHTML += `<div class="meta-item">${property.food ? 'Food Included' : 'No Food'}</div>`;
    }

    // Landmarks
    const landmarksHTML = property.landmarks.map(landmark =>
        `<span class="badge badge-success">${landmark}</span>`
    ).join('');

    // Rating stars
    const rating = property.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<span style="color: #fbbf24;">★</span>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<span style="color: #fbbf24;">★</span>'; // Simplified to full star for visual consistency or use half star char
        } else {
            starsHTML += '<span style="color: #e5e7eb;">★</span>';
        }
    }

    // Map Icon (SVG)
    const mapIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

    card.innerHTML = `
        <div class="listing-img" style="background-image: url('${property.img}')">
            <div class="listing-badge">${typeBadge}</div>
        </div>
        <div class="listing-content">
            <div class="listing-price">${priceText}</div>
            <h3 class="listing-title">${property.title}</h3>
            <p class="listing-location">📍 ${property.location}</p>
            ${property.rating ? `
                <div class="rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-text">${property.rating.toFixed(1)} (${property.reviews} reviews)</span>
                </div>
            ` : ''}
            <div class="listing-meta">
                ${metaHTML}
            </div>
            <div class="landmark-tags">
                ${landmarksHTML}
            </div>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
                <button class="btn btn-primary" style="flex: 1; font-size: 0.9rem;">View Details</button>
                <button class="btn btn-outline" style="padding: 12px; font-size: 0.9rem; display: flex; align-items: center; justify-content: center;" onclick="showOnMap(${property.lat}, ${property.lng})" title="View on Map">${mapIcon}</button>
            </div>
        </div>
    `;

    return card;
}

// ==================== HELPER FUNCTIONS ====================
function getPropertyTypeBadge(type) {
    const badges = {
        'flat': 'Flat',
        'plot': 'Plot',
        'room': 'Room',
        'office': 'Office',
        'shop': 'Shop',
        'pg': 'PG'
    };
    return badges[type] || type;
}

// ==================== MAP FUNCTIONS ====================
function showOnMap(lat, lng) {
    alert(`Opening map view for location:\nLatitude: ${lat}\nLongitude: ${lng}\n\n(In production, this would open an interactive map or scroll to the map section showing this property)`);
    // In production, this would:
    // 1. Scroll to map section
    // 2. Center map on these coordinates
    // 3. Show property popup
}
