import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Sprout, Maximize2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSelector from "@/components/LanguageSelector";

const FarmerDetails = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    region: "",
    soilType: "",
    landSize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.region || !formData.soilType || !formData.landSize) {
      toast.error("Please fill in all fields");
      return;
    }

    localStorage.setItem("farmerDetails", JSON.stringify(formData));
    navigate("/crop-status");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <BackButton />
          <LanguageSelector />
        </div>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("farmerDetailsTitle")} 
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("farmerDetailsSubtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border">
          {/* Region */}
          <div className="space-y-3">
            <Label htmlFor="region" className="text-lg flex items-center gap-2">
              
              {t("regionLabel")}
            </Label>
            <Input
              id="region"
              type="text"
              placeholder={t("regionPlaceholder")}
              className="h-12 text-base"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            />
          </div>

          {/* Soil Type */}
          <div className="space-y-3">
            <Label htmlFor="soilType" className="text-lg flex items-center gap-2">
              
              {t("soilTypeLabel")}
            </Label>
            <Input
              id="soilType"
              type="text"
              placeholder={t("soilTypePlaceholder")}
              className="h-12 text-base"
              value={formData.soilType}
              onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
            />
          </div>

          {/* Land Size */}
          <div className="space-y-3">
            <Label htmlFor="landSize" className="text-lg flex items-center gap-2">
              
              {t("landSizeLabel")}
            </Label>
            <Input
              id="landSize"
              type="number"
              placeholder={t("landSizePlaceholder")}
              className="h-12 text-base"
              value={formData.landSize}
              onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2">
            {t("continueButton")}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FarmerDetails;
