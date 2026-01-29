// Stayora - Enhanced Script with Multiple Property Types

// Mock Data for Properties
const properties = [
    // Flats (Rent)
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
        lat: 28.6280,
        lng: 77.3649
    },
    {
        id: 2,
        type: 'flat',
        title: '2 BHK Independent Floor',
        price: 22000,
        priceType: 'rent',
        bhk: 2,
        floor: '1st Floor',
        totalFloors: 3,
        area: 1100,
        location: 'Indiranagar, Bangalore',
        city: 'Bangalore',
        furnished: 'Semi-Furnished',
        parking: true,
        landmarks: ['Park nearby', 'Metro 1 km'],
        img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        rating: 4.3,
        reviews: 15,
        lat: 12.9716,
        lng: 77.6412
    },
    {
        id: 3,
        type: 'flat',
        title: '1 BHK Studio Apartment',
        price: 18000,
        priceType: 'rent',
        bhk: 1,
        floor: '8th Floor',
        totalFloors: 15,
        area: 600,
        location: 'Powai, Mumbai',
        city: 'Mumbai',
        furnished: 'Fully Furnished',
        parking: false,
        landmarks: ['Lake View', 'IIT Bombay 2 km'],
        img: 'https://images.unsplash.com/photo-1502005229766-939760a7cb0d?w=800',
        rating: 4.6,
        reviews: 30,
        lat: 19.1171,
        lng: 72.9056
    },
    {
        id: 4,
        type: 'flat',
        title: '4 BHK Penthouse',
        price: 85000,
        priceType: 'rent',
        bhk: 4,
        floor: 'Top Floor',
        totalFloors: 25,
        area: 3200,
        location: 'DLF Phase 5, Gurgaon',
        city: 'Gurgaon',
        furnished: 'Luxury Furnishing',
        parking: true,
        landmarks: ['Golf Course nearby', 'Cyber Hub 2 km'],
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        rating: 4.9,
        reviews: 12,
        lat: 28.4595,
        lng: 77.0266
    },

    // Flats (Buy)
    {
        id: 5,
        type: 'flat',
        title: '3 BHK Premium Flat',
        price: 12500000,
        priceType: 'buy',
        bhk: 3,
        floor: '12th Floor',
        totalFloors: 20,
        area: 1650,
        location: 'Whitefield, Bangalore',
        city: 'Bangalore',
        furnished: 'Unfurnished',
        parking: true,
        landmarks: ['IT Park nearby', 'Mall 1 km'],
        img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        rating: 4.4,
        reviews: 8,
        lat: 12.9698,
        lng: 77.7500
    },
    {
        id: 6,
        type: 'flat',
        title: '2 BHK Affordable Home',
        price: 4500000,
        priceType: 'buy',
        bhk: 2,
        floor: '4th Floor',
        totalFloors: 10,
        area: 950,
        location: 'Dwarka Mor, Delhi',
        city: 'Delhi',
        furnished: 'Unfurnished',
        parking: false,
        landmarks: ['Metro 0.2 km', 'Market nearby'],
        img: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=800',
        rating: 4.0,
        reviews: 22,
        lat: 28.6190,
        lng: 77.0345
    },

    // PG (Rent)
    {
        id: 7,
        type: 'pg',
        title: 'Luxury PG for Boys',
        price: 15000,
        priceType: 'rent',
        gender: 'Boys',
        occupancy: 'Single Room',
        food: true,
        ac: true,
        location: 'Koramangala, Bangalore',
        city: 'Bangalore',
        landmarks: ['Sony Signal', 'Gym nearby'],
        img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
        rating: 4.8,
        reviews: 45,
        lat: 12.9345,
        lng: 77.6256
    },
    {
        id: 8,
        type: 'pg',
        title: 'Affordable Girls PG',
        price: 8000,
        priceType: 'rent',
        gender: 'Girls',
        occupancy: 'Triple Sharing',
        food: true,
        ac: false,
        location: 'Laxmi Nagar, Delhi',
        city: 'Delhi',
        landmarks: ['Metro 0.1 km', 'Coaching Center nearby'],
        img: 'https://images.unsplash.com/photo-1522771753035-4850d32d5d2d?w=800',
        rating: 4.2,
        reviews: 50,
        lat: 28.6320,
        lng: 77.2785
    },
    {
        id: 9,
        type: 'pg',
        title: 'Co-living Space',
        price: 20000,
        priceType: 'rent',
        gender: 'Unisex',
        occupancy: 'Private Studio',
        food: false,
        ac: true,
        location: 'Hitech City, Hyderabad',
        city: 'Hyderabad',
        landmarks: ['IT Hub', 'IKEA 2 km'],
        img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800',
        rating: 4.7,
        reviews: 35,
        lat: 17.4435,
        lng: 78.3772
    },

    // Offices (Rent & Buy)
    {
        id: 10,
        type: 'office',
        title: 'Furnished Office Space',
        price: 45000,
        priceType: 'rent',
        area: 800,
        floor: '2nd Floor',
        location: 'Sector 18, Noida',
        city: 'Noida',
        furnished: 'Fully Furnished',
        parking: true,
        landmarks: ['Metro nearby', 'Mall of India'],
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        rating: 4.5,
        reviews: 10,
        lat: 28.5700,
        lng: 77.3180
    },
    {
        id: 11,
        type: 'office',
        title: 'Corporate Office Level',
        price: 250000,
        priceType: 'rent',
        area: 5000,
        floor: '10th Floor',
        location: 'BKC, Mumbai',
        city: 'Mumbai',
        furnished: 'Bare Shell',
        parking: true,
        landmarks: ['Business Hub', 'Airport 5 km'],
        img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800',
        rating: 4.9,
        reviews: 5,
        lat: 19.0660,
        lng: 72.8700
    },
    {
        id: 12,
        type: 'office',
        title: 'Small Office Cabin',
        price: 15000,
        priceType: 'rent',
        area: 150,
        floor: 'Ground Floor',
        location: 'Lajpat Nagar, Delhi',
        city: 'Delhi',
        furnished: 'Furnished',
        parking: false,
        landmarks: ['Market nearby', 'Metro 0.5 km'],
        img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800',
        rating: 4.0,
        reviews: 18,
        lat: 28.5692,
        lng: 77.2458
    },

    // Shops (Buy & Rent)
    {
        id: 13,
        type: 'shop',
        title: 'Prime Retail Shop',
        price: 5000000,
        priceType: 'buy',
        area: 300,
        floor: 'Ground Floor',
        mainRoad: true,
        location: 'Rajouri Garden, Delhi',
        city: 'Delhi',
        landmarks: ['Main Market', 'Metro nearby'],
        img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        rating: 4.3,
        reviews: 12,
        lat: 28.6496,
        lng: 77.1212
    },
    {
        id: 14,
        type: 'shop',
        title: 'Showroom Space',
        price: 150000,
        priceType: 'rent',
        area: 1200,
        floor: 'Ground + 1',
        mainRoad: true,
        location: 'Brigade Road, Bangalore',
        city: 'Bangalore',
        landmarks: ['High Footfall', 'Metro 0.3 km'],
        img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
        rating: 4.6,
        reviews: 20,
        lat: 12.9733,
        lng: 77.6074
    },

    // Plots (Buy)
    {
        id: 15,
        type: 'plot',
        title: 'Corner Residential Plot',
        price: 6500000,
        priceType: 'buy',
        area: 1800,
        dimensions: '30x60',
        corner: true,
        location: 'Greater Noida West',
        city: 'Noida',
        landmarks: ['Proposed Metro', 'School nearby'],
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        rating: 4.1,
        reviews: 4,
        lat: 28.5630,
        lng: 77.4470
    },
    {
        id: 16,
        type: 'plot',
        title: 'Agricultural Land',
        price: 2500000,
        priceType: 'buy',
        area: 10000,
        dimensions: 'Irregular',
        corner: false,
        location: 'Outskirts, Pune',
        city: 'Pune',
        landmarks: ['Highway 2 km', 'River nearby'],
        img: 'https://images.unsplash.com/photo-1627845348896-1215b22295ce?w=800',
        rating: 3.8,
        reviews: 2,
        lat: 18.5204,
        lng: 73.8567
    },

    // Rooms (Rent)
    {
        id: 17,
        type: 'room',
        title: 'Single Room with Bath',
        price: 8000,
        priceType: 'rent',
        bhk: 1,
        floor: 'Terrace',
        totalFloors: 3,
        area: 200,
        location: 'Mukherjee Nagar, Delhi',
        city: 'Delhi',
        furnished: 'Semi-Furnished',
        parking: true,
        landmarks: ['Student Area', 'Metro 1.5 km'],
        img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
        rating: 3.9,
        reviews: 40,
        lat: 28.7061,
        lng: 77.2140
    },
    {
        id: 18,
        type: 'room',
        title: 'Serviced Room',
        price: 25000,
        priceType: 'rent',
        bhk: 1,
        floor: '2nd Floor',
        totalFloors: 5,
        area: 350,
        location: 'Kalyan Nagar, Bangalore',
        city: 'Bangalore',
        furnished: 'Fully Furnished',
        parking: true,
        landmarks: ['Park View', 'Main Road 0.5 km'],
        img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
        rating: 4.7,
        reviews: 14,
        lat: 13.0230,
        lng: 77.6410
    },

    // More Flats
    {
        id: 19,
        type: 'flat',
        title: '3 BHK High Rise',
        price: 55000,
        priceType: 'rent',
        bhk: 3,
        floor: '18th Floor',
        totalFloors: 30,
        area: 1900,
        location: 'Gachibowli, Hyderabad',
        city: 'Hyderabad',
        furnished: 'Fully Furnished',
        parking: true,
        landmarks: ['Financial District', 'ORR nearby'],
        img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
        rating: 4.8,
        reviews: 32,
        lat: 17.4400,
        lng: 78.3480
    },
    {
        id: 20,
        type: 'flat',
        title: '2 BHK Garden Facing',
        price: 28000,
        priceType: 'rent',
        bhk: 2,
        floor: 'Ground Floor',
        totalFloors: 4,
        area: 1200,
        location: 'Vasant Kunj, Delhi',
        city: 'Delhi',
        furnished: 'Semi-Furnished',
        parking: true,
        landmarks: ['Mall nearby', 'Airport 5 km'],
        img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800',
        rating: 4.4,
        reviews: 19,
        lat: 28.5410,
        lng: 77.1550
    },
    {
        id: 21,
        type: 'flat',
        title: 'Studio Apartment',
        price: 4500000,
        priceType: 'buy',
        bhk: 1,
        floor: '5th Floor',
        totalFloors: 12,
        area: 550,
        location: 'Baner, Pune',
        city: 'Pune',
        furnished: 'Fully Furnished',
        parking: true,
        landmarks: ['Highway nearby', 'IT Park 3 km'],
        img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        rating: 4.2,
        reviews: 9,
        lat: 18.5600,
        lng: 73.7800
    },

    // More Offices
    {
        id: 22,
        type: 'office',
        title: 'Coworking Desk',
        price: 8000,
        priceType: 'rent',
        area: 50,
        floor: '1st Floor',
        location: 'HSR Layout, Bangalore',
        city: 'Bangalore',
        furnished: 'Furnished',
        parking: true,
        landmarks: ['Startups nearby', 'Cafe nearby'],
        img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
        rating: 4.6,
        reviews: 60,
        lat: 12.9110,
        lng: 77.6350
    },

    // More Shops
    {
        id: 23,
        type: 'shop',
        title: 'Food Court Stall',
        price: 40000,
        priceType: 'rent',
        area: 200,
        floor: '3rd Floor',
        mainRoad: false,
        location: 'Saket Select Citywalk, Delhi',
        city: 'Delhi',
        landmarks: ['Mall Crowd', 'Cinema nearby'],
        img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
        rating: 4.8,
        reviews: 25,
        lat: 28.5290,
        lng: 77.2190
    },

    // More PGs
    {
        id: 24,
        type: 'pg',
        title: 'Premium PG for Working Professionals',
        price: 18000,
        priceType: 'rent',
        gender: 'Unisex',
        occupancy: 'Single Room',
        food: true,
        ac: true,
        location: 'Cyber City, Gurgaon',
        city: 'Gurgaon',
        landmarks: ['Office nearby', 'Metro 0.5 km'],
        img: 'https://images.unsplash.com/photo-1621570773096-7c0b021703db?w=800',
        rating: 4.5,
        reviews: 22,
        lat: 28.4950,
        lng: 77.0890
    },
    {
        id: 25,
        type: 'pg',
        title: 'Budget PG for Students',
        price: 6000,
        priceType: 'rent',
        gender: 'Boys',
        occupancy: 'Four Sharing',
        food: true,
        ac: false,
        location: 'North Campus, Delhi',
        city: 'Delhi',
        landmarks: ['DU College', 'Metro 1 km'],
        img: 'https://images.unsplash.com/photo-1505672675380-60a6ae59f131?w=800',
        rating: 4.0,
        reviews: 65,
        lat: 28.6900,
        lng: 77.2100
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
