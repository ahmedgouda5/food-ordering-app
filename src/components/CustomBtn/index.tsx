import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";


const CustomBtn = () => {
  return (
    <div className="flex gap-4">
      <Button className="flex items-center gap-2 bg-orange-600 rounded-full hover:bg-orange-400">
        Order now <ArrowRight size={18} />
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 hover:bg-orange-500 rounded-full"
      >
        Learn more <ArrowRight size={18} />
      </Button>
    </div>
  );
};

export default CustomBtn;
