import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import testImage from "@/assets/test_image.jpg";

const ImageMapOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="w-[100px] cursor-pointer group relative overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={testImage} 
          alt="Map view" 
          className=""
        />
        <div className="">
          <div className="">
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
