import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => navigate(-1)}
      className="mb-4"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {t("back")}
    </Button>
  );
};

export default BackButton;
