import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Droplets, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BackButton from "@/components/BackButton";
import LanguageSelector from "@/components/LanguageSelector";

const CropSuggestions = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const suggestions = [
    {
      name: "Sugercane",
      emoji: "",
      demand: "High",
      price: "Stable",
      reason: "High market demand with stable pricing throughout the year",
      pros: ["Good yield", "Multiple harvest seasons", "Strong market demand"],
      badge: "success",
    },
    {
      name: "Paddy (Rice)",
      emoji: "",
      demand: "Medium",
      price: "Moderate",
      reason: "Good rainfall fit with government support and moderate supply",
      pros: ["MSP support", "Traditional crop", "Water availability"],
      badge: "warning",
    },
    {
      name: "Pulses (Toor Dal)",
      emoji: "",
      demand: "High",
      price: "Rising",
      reason: "Low input cost with high profit margin and increasing demand",
      pros: ["Low water requirement", "Soil enrichment", "High profit"],
      badge: "success",
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
            {t("cropRecommendationsTitle")} 
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("cropRecommendationsSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {suggestions.map((crop, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="text-6xl">{crop.emoji}</div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-bold text-foreground">{crop.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      crop.badge === "success" 
                        ? "bg-success/10 text-success" 
                        : "bg-warning/10 text-warning"
                    }`}>
                      {t("recommended")}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{crop.reason}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-medium">{t("demand")}:</span> {crop.demand}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-medium">{t("price")}:</span> {crop.price}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {crop.pros.map((pro, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-primary" />
            {t("additionalTips")}
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• {t("tip1")}</li>
            <li>• {t("tip2")}</li>
            <li>• {t("tip3")}</li>
            <li>• {t("tip4")}</li>
          </ul>
        </Card>

        <Button
          onClick={() => navigate("/insights")}
          size="lg"
          className="w-full h-14 text-lg gap-2 mt-8"
        >
          {t("viewDetailedInsights")}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CropSuggestions;
