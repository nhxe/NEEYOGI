import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, TrendingDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSelector from "@/components/LanguageSelector";

const CropFeedback = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isPerformingWell, setIsPerformingWell] = useState<boolean | null>(null);
  const currentCrop = localStorage.getItem("currentCrop") || t("notSpecified");

  const alternatives = [
    {
      name: "Ragi (Finger Millet)",
      emoji: "",
      reason: "Better market demand and drought resistant",
      marketTrend: "Rising prices due to health food demand",
    },
    {
      name: "Millets",
      emoji: "",
      reason: "Low water requirement and high nutrition value",
      marketTrend: "Government push for millet production",
    },
    {
      name: "Groundnut",
      emoji: "",
      reason: "Good oil prices and suitable for your soil type",
      marketTrend: "Stable demand in oil industry",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <BackButton />
          <LanguageSelector />
        </div>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("cropFeedbackTitle")} 📊
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("currentCrop")}: <span className="font-semibold text-foreground">{currentCrop}</span>
          </p>
        </div>

        {/* Market Analysis */}
        <Card className="p-6 mb-6 bg-warning/5 border-warning/20">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{t("marketAnalysis")}</h3>
              <p className="text-muted-foreground mb-3">
                Based on HSI data and district-wise market trends, we've detected potential challenges:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-warning" />
                  <span>This crop's price may fall due to oversupply in your region</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-warning" />
                  <span>Market demand is moderate with increasing supply</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Crop Performance Question */}
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">{t("cropFeedbackSubtitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={isPerformingWell === true ? "default" : "outline"}
              size="lg"
              className="h-16 text-base"
              onClick={() => setIsPerformingWell(true)}
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              {t("performingWell")}
            </Button>
            <Button
              variant={isPerformingWell === false ? "default" : "outline"}
              size="lg"
              className="h-16 text-base"
              onClick={() => setIsPerformingWell(false)}
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              {t("notPerformingWell")}
            </Button>
          </div>
        </Card>

        {/* Performing Well Message */}
        {isPerformingWell === true && (
          <Card className="p-6 mb-6 bg-success/5 border-success/20 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-success flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-success mb-2">Great Choice!</h3>
                <p className="text-muted-foreground">
                  Your crop is showing good performance. However, keep monitoring market trends 
                  for future seasons. Consider the alternatives below for your next planting season 
                  to maximize profits.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Not Performing Well - Show Alternatives */}
        {isPerformingWell === false && (
          <div className="animate-in fade-in slide-in-from-top-4">
            <h2 className="text-2xl font-bold mb-4">Better Alternatives for Next Season 🌱</h2>
            <div className="grid gap-4 mb-6">
              {alternatives.map((alt, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="text-4xl">{alt.emoji}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{alt.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{alt.reason}</p>
                      <div className="flex items-center gap-2 text-xs text-success">
                        <TrendingDown className="w-4 h-4 rotate-180" />
                        {alt.marketTrend}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recommendation */}
        {isPerformingWell !== null && (
          <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
            <h3 className="text-lg font-semibold mb-3">💡 Expert Recommendation</h3>
            <p className="text-muted-foreground text-sm">
              Consider crop diversification to minimize risk. Try Ragi or Millets next season 
              for better profit margins and lower water requirements. These crops are increasingly 
              popular in health-conscious markets and have government support.
            </p>
          </Card>
        )}

        <Button
          onClick={() => navigate("/insights")}
          size="lg"
          className="w-full h-14 text-lg gap-2"
        >
          {t("viewFullReport")}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CropFeedback;
