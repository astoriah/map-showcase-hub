import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import testImage from "@/assets/test_image.jpg";

const ImageMapOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="w-full h-full cursor-pointer group relative overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={testImage} 
          alt="Map view" 
          className="w-full h-full object-cover transition-[var(--transition-smooth)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-[var(--transition-smooth)] flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)] bg-background/90 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium">Click to enlarge</span>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-2">
          <img 
            src={testImage} 
            alt="Map view enlarged" 
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageMapOption;
