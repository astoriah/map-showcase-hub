// Toast notification system
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const imageMapOption = document.getElementById('imageMapOption');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    imageMapOption.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = 'src/assets/test_image.jpg';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// Google Maps integration using dynamic library loading
let map;
async function initMap() {
    const position = { lat: 47.6553, lng: -122.3035 }; // University of Washington
    
    try {
        // Request needed libraries
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
        // Create the map
        map = new Map(document.getElementById("googleMap"), {
            zoom: 12,
            center: position,
            mapId: "DEMO_MAP_ID",
        });
        
        // Add marker
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "University of Washington",
        });
    } catch (error) {
        console.error('Error initializing map:', error);
        showToast("Failed to load Google Maps", "error");
    }
}

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}