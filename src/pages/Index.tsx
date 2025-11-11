import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, TrendingUp, Cloud, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          
          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <img
      src="/logo.png"
      alt="Crop Compass Logo"
      className="w-24 h-24 md:w-28 md:h-28 relative rounded-full shadow-lg"
    />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t("appTitle")}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {t("appSubtitle")}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="h-16 px-8 text-lg md:text-xl gap-3 shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate("/farmer-details")}
          >
            <Sprout className="w-6 h-6" />
            {t("startButton")} 
          </Button>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
              
              <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get intelligent crop suggestions based on soil, climate, and market trends
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
              
              <h3 className="text-lg font-semibold mb-2">Satellite & HSI Data</h3>
              <p className="text-sm text-muted-foreground">
                Real-time analysis using hyperspectral imaging and weather data
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
              
              <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
              <p className="text-sm text-muted-foreground">
                Simple interface with multilingual support and voice guidance
              </p>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6">
            <p className="text-success font-semibold text-lg">
               Helping thousands of farmers make smarter crop decisions
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Join the farming revolution with AI-powered agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
