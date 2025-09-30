import { useEffect, useRef } from "react";

const GoogleMapOption = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const position = { lat: 47.6553, lng: -122.3035 }; // University of Washington

      try {
        // @ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        // @ts-ignore
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        const map = new Map(mapRef.current, {
          zoom: 12,
          center: position,
          mapId: "DEMO_MAP_ID",
        });

        new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "University of Washington",
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default GoogleMapOption;
