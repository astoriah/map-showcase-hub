import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const GoogleMapOption = () => {
  const [apiKey, setApiKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const loadMap = () => {
    if (!apiKey.trim()) {
      toast.error("Please enter a Google Maps API key");
      return;
    }
    setMapLoaded(true);
    toast.success("Map loaded successfully");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-muted p-6">
      {!mapLoaded ? (
        <div className="space-y-4 max-w-md w-full">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Google Maps API Integration</h3>
            <p className="text-sm text-muted-foreground">
              Enter your Google Maps API key to view the interactive map
            </p>
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter Google Maps API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={loadMap}
              className="w-full"
            >
              Load Map
            </Button>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Get your API key from{" "}
            <a 
              href="https://console.cloud.google.com/google/maps-apis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Cloud Console
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-background/50 flex items-center justify-center rounded-lg">
          <div className="text-center space-y-2">
            <div className="text-primary text-4xl">📍</div>
            <p className="text-sm text-muted-foreground">
              Google Maps would load here with API key: {apiKey.slice(0, 8)}...
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setMapLoaded(false)}
            >
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapOption;
