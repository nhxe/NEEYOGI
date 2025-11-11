import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSelector from "@/components/LanguageSelector";

const CropStatus = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [hasCrop, setHasCrop] = useState<boolean | null>(null);
  const [currentCrop, setCurrentCrop] = useState("");

  const handleNoCrop = () => {
    navigate("/crop-suggestions");
  };

  const handleHasCrop = () => {
    if (!currentCrop.trim()) {
      return;
    }
    localStorage.setItem("currentCrop", currentCrop);
    navigate("/crop-feedback");
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
            {t("cropStatusTitle")} 
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("cropStatusSubtitle")}
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border space-y-6">
          <div className="space-y-4">
            <Label className="text-xl font-semibold">{t("hasCropQuestion")}</Label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant={hasCrop === true ? "default" : "outline"}
                size="lg"
                className="h-20 text-lg flex flex-col gap-2"
                onClick={() => setHasCrop(true)}
              >
                <CheckCircle2 className="w-8 h-8" />
                {t("yesHaveCrops")}
              </Button>
              
              <Button
                variant={hasCrop === false ? "default" : "outline"}
                size="lg"
                className="h-20 text-lg flex flex-col gap-2"
                onClick={() => {
                  setHasCrop(false);
                  handleNoCrop();
                }}
              >
                <XCircle className="w-8 h-8" />
                {t("noCropsYet")}
              </Button>
            </div>
          </div>

          {hasCrop === true && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <Label htmlFor="currentCrop" className="text-lg">
                {t("currentCropLabel")}
              </Label>
              <Input
                id="currentCrop"
                placeholder={t("currentCropPlaceholder")}
                className="h-12 text-base"
                value={currentCrop}
                onChange={(e) => setCurrentCrop(e.target.value)}
              />
              
              <Button
                onClick={handleHasCrop}
                disabled={!currentCrop.trim()}
                size="lg"
                className="w-full h-14 text-lg gap-2"
              >
                {t("getCropAnalysis")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropStatus;
