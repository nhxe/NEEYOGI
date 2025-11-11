import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case "en":
        return "English";
      case "kn":
        return "ಕನ್ನಡ";
      case "hi":
        return "हिंदी";
      default:
        return "Select Language";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-muted-foreground" />
          {getLanguageLabel(language)}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("kn")}>ಕನ್ನಡ</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hi")}>हिंदी</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
