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

// Google Maps integration
function initMap() {
    const mapElement = document.getElementById('googleMap');
    const loadingElement = document.getElementById('mapLoading');
    
    if (!mapElement) return;

    try {
        const uwCenter = { lat: 47.6553, lng: -122.3035 };

        const map = new google.maps.Map(mapElement, {
            center: uwCenter,
            zoom: 12,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
        });

        // Add marker for University of Washington
        new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: uwCenter,
            title: "University of Washington",
        });

        // Add 3-mile radius circle
        new google.maps.Circle({
            strokeColor: "#4F46E5",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#4F46E5",
            fillOpacity: 0.2,
            map: map,
            center: uwCenter,
            radius: 4828.03, // 3 miles in meters
        });

        // Hide loading indicator
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        
        showToast("Map loaded successfully", "success");
    } catch (error) {
        console.error('Error initializing map:', error);
        showToast("Failed to load Google Maps", "error");
        if (loadingElement) {
            loadingElement.innerHTML = '<p class="text-sm text-muted-foreground">Failed to load map</p>';
        }
    }
}

// Handle Google Maps API load errors
window.gm_authFailure = function() {
    console.error('Google Maps API authentication failed');
    showToast("Google Maps API authentication failed", "error");
    const loadingElement = document.getElementById('mapLoading');
    if (loadingElement) {
        loadingElement.innerHTML = '<p class="text-sm text-muted-foreground">API authentication failed</p>';
    }
};