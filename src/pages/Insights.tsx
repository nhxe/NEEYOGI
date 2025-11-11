import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Share2, MapPin, Sprout, Maximize2, TrendingUp, Home } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSelector from "@/components/LanguageSelector";

const Insights = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const farmerDetails = JSON.parse(localStorage.getItem("farmerDetails") || "{}");
  const currentCrop = localStorage.getItem("currentCrop") || t("notSpecified");

  const handleDownload = () => {
    toast.success("Report downloaded successfully!");
  };

  const handleShare = () => {
    toast.success("Report shared with your agricultural advisor!");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <BackButton />
          <LanguageSelector />
        </div>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("insightsTitle")} 
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("insightsSubtitle")}
          </p>
        </div>

        {/* Farm Details Card */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{t("farmDetails")}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">{t("region")}</p>
                <p className="font-semibold capitalize">
                  {farmerDetails.region?.replace(/-/g, " ") || t("notSpecified")}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Sprout className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">{t("soilType")}</p>
                <p className="font-semibold capitalize">
                  {farmerDetails.soilType || t("notSpecified")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Maximize2 className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">{t("landSize")}</p>
                <p className="font-semibold">{farmerDetails.landSize || "0"} {t("acres")}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sprout className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">{t("currentCrop")}</p>
                <p className="font-semibold">{currentCrop}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Market Condition */}
        <Card className="p-6 mb-6 bg-success/5 border-success/20">
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-success flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{t("marketCondition")}</h3>
              <p className="text-muted-foreground mb-3">
                {t("marketConditionText")}
              </p>
              <div className="space-y-1 text-sm">
                <p>• Ragi prices: ₹35-40 per kg (Rising trend)</p>
                <p>• Pulses: ₹80-95 per kg (Stable high demand)</p>
                <p>• Maize: ₹22-28 per kg (Steady market)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Recommendations */}
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4"> {t("keyRecommendations")}</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{t("recommendation1")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{t("recommendation2")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{t("recommendation3")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span>{t("recommendation4")}</span>
            </li>
          </ul>
        </Card>

        {/* HSI Data Note */}
        <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold mb-2"> {t("technologyUsed")}</h3>
          <p className="text-sm text-muted-foreground">
            {t("technologyUsedText")}
          </p>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Button
            variant="outline"
            size="lg"
            className="h-14 gap-2"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5" />
            {t("downloadReport")}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="h-14 gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
            {t("shareWithAdvisor")}
          </Button>
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg gap-2"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          <Home className="w-5 h-5" />
          {t("startNewAnalysis")}
        </Button>
      </div>
    </div>
  );
};

export default Insights;
