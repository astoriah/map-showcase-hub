import MapOption from "@/components/MapOption";
import ImageMapOption from "@/components/ImageMapOption";
import GoogleMapOption from "@/components/GoogleMapOption";
import IframeMapOption from "@/components/IframeMapOption";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Map Interface Options
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare different map integration methods for your project
          </p>
        </header>

        <div className="space-y-12 max-w-7xl mx-auto">
          <MapOption title="Option 1: Image Map">
            <ImageMapOption />
          </MapOption>

          <MapOption title="Option 2: Google Maps API">
            <GoogleMapOption />
          </MapOption>

          <MapOption title="Option 3: Embedded Map">
            <IframeMapOption />
          </MapOption>
        </div>
      </div>
    </div>
  );
};

export default Index;
