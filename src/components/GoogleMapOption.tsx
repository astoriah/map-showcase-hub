import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const GoogleMapOption = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const apiKey = "AIzaSyB26LgiRz6G7mdmcbKfCVoNbfeUECRJcas";

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initializeMap();
      };
      script.onerror = () => {
        toast.error("Failed to load Google Maps");
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const uwCenter = { lat: 47.6553, lng: -122.3035 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: uwCenter,
        zoom: 12,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      new window.google.maps.Marker({
        position: uwCenter,
        map: map,
        title: "University of Washington",
      });

      new window.google.maps.Circle({
        strokeColor: "#4F46E5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#4F46E5",
        fillOpacity: 0.2,
        map: map,
        center: uwCenter,
        radius: 4828.03,
      });

      setMapLoaded(true);
      toast.success("Map loaded successfully");
    };

    loadGoogleMaps();
  }, [apiKey]);

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full min-h-[400px]" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      )}
    </div>
  );
};

declare global {
  interface Window {
    google: any;
  }
}

export default GoogleMapOption;
