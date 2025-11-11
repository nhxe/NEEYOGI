import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "kn" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Landing Page
    appTitle: "Smart Crop Predictor",
    appSubtitle: "Know what to grow, when to grow, and how to grow smarter.",
    startButton: "Predict My Crop",
    
    // Language Selector
    selectLanguage: "Select Language",
    
    // Farmer Details
    farmerDetailsTitle: "Tell Us About Your Farm",
    farmerDetailsSubtitle: "Help us understand your farming conditions",
    regionLabel: "Which region are you from?",
    regionPlaceholder: "Enter your region (e.g., North Karnataka)",
    soilTypeLabel: "What type of soil do you have?",
    soilTypePlaceholder: "Enter soil type (e.g., Clayey, Loamy, Sandy)",
    landSizeLabel: "What is your land size (in aceres) ?",
    landSizePlaceholder: "Enter land size",
    continueButton: "Continue to Crop Analysis",
    
    // Crop Status
    cropStatusTitle: "Crop Status Check",
    cropStatusSubtitle: "Let's see what's growing on your farm",
    hasCropQuestion: "Do you currently have crops growing?",
    yesHaveCrops: "Yes, I have crops",
    noCropsYet: "No crops yet",
    currentCropLabel: "What crop are you currently growing?",
    currentCropPlaceholder: "e.g., Paddy, Wheat, Maize, Cotton",
    getCropAnalysis: "Get Crop Analysis",
    
    // Crop Suggestions
    cropRecommendationsTitle: "Top Crop Recommendations",
    cropRecommendationsSubtitle: "Based on your soil type, region, and current market trends",
    recommended: "Recommended",
    demand: "Demand",
    price: "Price",
    additionalTips: "Additional Tips",
    tip1: "Consider crop rotation to maintain soil health",
    tip2: "Check local government schemes for subsidies",
    tip3: "Monitor weather patterns before planting",
    tip4: "Consult with local agricultural officers for region-specific advice",
    viewDetailedInsights: "View Detailed Insights",
    
    // Crop Feedback
    cropFeedbackTitle: "How is Your Crop Performing?",
    cropFeedbackSubtitle: "Let us know about your crop's health",
    performingWell: "Performing Well",
    needsImprovement: "Needs Improvement",
    notPerformingWell: "Not Performing Well",
    marketAnalysis: "Market Analysis",
    perfectChoice: "Perfect choice! Your crop is in high demand this season.",
    currentPrice: "Current market price",
    demandStatus: "Demand status",
    alternativeSuggestions: "Alternative Crop Suggestions",
    alternativeSuggestionsDesc: "Based on current market trends, consider these alternatives for better profit:",
    viewFullReport: "View Full Report",
    
    // Insights
    insightsTitle: "Your Farm Insights Summary",
    insightsSubtitle: "Complete analysis and recommendations",
    farmDetails: "Farm Details",
    region: "Region",
    soilType: "Soil Type",
    landSize: "Land Size",
    currentCrop: "Current Crop",
    notSpecified: "Not specified",
    acres: "acres",
    marketCondition: "Market Condition",
    marketConditionText: "Current market analysis for your region shows moderate to high demand for alternative crops like:",
    keyRecommendations: "Key Recommendations",
    recommendation1: "Consider diversifying with Ragi or Millets for better market prices",
    recommendation2: "Your soil type is suitable for pulses which have high profit margins",
    recommendation3: "Monitor rainfall patterns as your region has good monsoon coverage",
    recommendation4: "Check with local Krishi Vigyan Kendra for region-specific best practices",
    technologyUsed: "Technology Used",
    technologyUsedText: "This analysis uses Hyperspectral Imaging (HSI), satellite data, and AI to provide crop health insights, yield predictions, and market trend analysis specific to your district and soil type.",
    downloadReport: "Download Report (PDF)",
    shareWithAdvisor: "Share with Advisor",
    startNewAnalysis: "Start New Analysis",
    
    // Common
    back: "Back",
  },
  kn: {
    // Landing Page
    appTitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಮುನ್ಸೂಚಕ",
    appSubtitle: "ಏನನ್ನು ಬೆಳೆಯಬೇಕು, ಯಾವಾಗ ಬೆಳೆಯಬೇಕು ಮತ್ತು ಹೇಗೆ ಚುರುಕಾಗಿ ಬೆಳೆಯಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.",
    startButton: "ನನ್ನ ಬೆಳೆಯನ್ನು ಮುನ್ಸೂಚಿಸಿ",
    
    // Language Selector
    selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    
    // Farmer Details
    farmerDetailsTitle: "ನಿಮ್ಮ ಜಮೀನಿನ ಬಗ್ಗೆ ತಿಳಿಸಿ",
    farmerDetailsSubtitle: "ನಿಮ್ಮ ಕೃಷಿ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ",
    regionLabel: "ನೀವು ಯಾವ ಪ್ರದೇಶದವರು?",
    regionPlaceholder: "ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ನಮೂದಿಸಿ (ಉದಾ: ಉತ್ತರ ಕರ್ನಾಟಕ)",
    soilTypeLabel: "ನೀವು ಯಾವ ರೀತಿಯ ಮಣ್ಣನ್ನು ಹೊಂದಿದ್ದೀರಿ?",
    soilTypePlaceholder: "ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ನಮೂದಿಸಿ (ಉದಾ: ಜೇಡಿಮಣ್ಣು, ಮೆಕ್ಕೆಮಣ್ಣು)",
    landSizeLabel: "ನಿಮ್ಮ ಜಮೀನಿನ ಗಾತ್ರ ಎಷ್ಟು?",
    landSizePlaceholder: "ಜಮೀನಿನ ಗಾತ್ರ ನಮೂದಿಸಿ",
    continueButton: "ಬೆಳೆ ವಿಶ್ಲೇಷಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    
    // Crop Status
    cropStatusTitle: "ಬೆಳೆ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ",
    cropStatusSubtitle: "ನಿಮ್ಮ ಜಮೀನಿನಲ್ಲಿ ಏನು ಬೆಳೆಯುತ್ತಿದೆ ಎಂದು ನೋಡೋಣ",
    hasCropQuestion: "ನೀವು ಪ್ರಸ್ತುತ ಬೆಳೆ ಬೆಳೆಯುತ್ತಿದ್ದೀರಾ?",
    yesHaveCrops: "ಹೌದು, ನನ್ನ ಬಳಿ ಬೆಳೆಗಳಿವೆ",
    noCropsYet: "ಇನ್ನೂ ಬೆಳೆಗಳಿಲ್ಲ",
    currentCropLabel: "ನೀವು ಪ್ರಸ್ತುತ ಯಾವ ಬೆಳೆ ಬೆಳೆಯುತ್ತಿದ್ದೀರಿ?",
    currentCropPlaceholder: "ಉದಾ: ಭತ್ತ, ಗೋಧಿ, ಜೋಳ, ಹತ್ತಿ",
    getCropAnalysis: "ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ",
    
    // Crop Suggestions
    cropRecommendationsTitle: "ಉನ್ನತ ಬೆಳೆ ಶಿಫಾರಸುಗಳು",
    cropRecommendationsSubtitle: "ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಪ್ರದೇಶ ಮತ್ತು ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದ ಮೇಲೆ",
    recommended: "ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ",
    demand: "ಬೇಡಿಕೆ",
    price: "ಬೆಲೆ",
    additionalTips: "ಹೆಚ್ಚುವರಿ ಸಲಹೆಗಳು",
    tip1: "ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಲು ಬೆಳೆ ಸರದಿಯನ್ನು ಪರಿಗಣಿಸಿ",
    tip2: "ಸಹಾಯಧನಕ್ಕಾಗಿ ಸ್ಥಳೀಯ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    tip3: "ನೆಟ್ಟ ಮೊದಲು ಹವಾಮಾನ ಮಾದರಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    tip4: "ಪ್ರದೇಶ-ನಿರ್ದಿಷ್ಟ ಸಲಹೆಗಾಗಿ ಸ್ಥಳೀಯ ಕೃಷಿ ಅಧಿಕಾರಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ",
    viewDetailedInsights: "ವಿವರವಾದ ಒಳನೋಟಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    
    // Crop Feedback
    cropFeedbackTitle: "ನಿಮ್ಮ ಬೆಳೆ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ?",
    cropFeedbackSubtitle: "ನಿಮ್ಮ ಬೆಳೆಯ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ತಿಳಿಸಿ",
    performingWell: "ಚೆನ್ನಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ",
    needsImprovement: "ಸುಧಾರಣೆ ಅಗತ್ಯವಿದೆ",
    notPerformingWell: "ಚೆನ್ನಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿಲ್ಲ",
    marketAnalysis: "ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ",
    perfectChoice: "ಪರಿಪೂರ್ಣ ಆಯ್ಕೆ! ಈ ಋತುವಿನಲ್ಲಿ ನಿಮ್ಮ ಬೆಳೆಗೆ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯಿದೆ.",
    currentPrice: "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
    demandStatus: "ಬೇಡಿಕೆ ಸ್ಥಿತಿ",
    alternativeSuggestions: "ಪರ್ಯಾಯ ಬೆಳೆ ಸಲಹೆಗಳು",
    alternativeSuggestionsDesc: "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದ ಮೇಲೆ, ಉತ್ತಮ ಲಾಭಕ್ಕಾಗಿ ಈ ಪರ್ಯಾಯಗಳನ್ನು ಪರಿಗಣಿಸಿ:",
    viewFullReport: "ಸಂಪೂರ್ಣ ವರದಿಯನ್ನು ವೀಕ್ಷಿಸಿ",
    
    // Insights
    insightsTitle: "ನಿಮ್ಮ ಜಮೀನು ಒಳನೋಟಗಳ ಸಾರಾಂಶ",
    insightsSubtitle: "ಸಂಪೂರ್ಣ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಶಿಫಾರಸುಗಳು",
    farmDetails: "ಜಮೀನು ವಿವರಗಳು",
    region: "ಪ್ರದೇಶ",
    soilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
    landSize: "ಜಮೀನಿನ ಗಾತ್ರ",
    currentCrop: "ಪ್ರಸ್ತುತ ಬೆಳೆ",
    notSpecified: "ನಿರ್ದಿಷ್ಟಪಡಿಸಿಲ್ಲ",
    acres: "ಎಕರೆಗಳು",
    marketCondition: "ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿ",
    marketConditionText: "ನಿಮ್ಮ ಪ್ರದೇಶದ ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆಯು ರಾಗಿ ಮತ್ತು ದಾಳಿಗಳಂತಹ ಪರ್ಯಾಯ ಬೆಳೆಗಳಿಗೆ ಮಧ್ಯಮದಿಂದ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯನ್ನು ತೋರಿಸುತ್ತದೆ.",
    keyRecommendations: "ಪ್ರಮುಖ ಶಿಫಾರಸುಗಳು",
    recommendation1: "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳಿಗಾಗಿ ರಾಗಿ ಅಥವಾ ಸಣ್ಣಧಾನ್ಯಗಳೊಂದಿಗೆ ವೈವಿಧ್ಯಗೊಳಿಸುವುದನ್ನು ಪರಿಗಣಿಸಿ",
    recommendation2: "ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರವು ಹೆಚ್ಚಿನ ಲಾಭದ ಅಂತರವನ್ನು ಹೊಂದಿರುವ ದಾಳಿಗಳಿಗೆ ಸೂಕ್ತವಾಗಿದೆ",
    recommendation3: "ನಿಮ್ಮ ಪ್ರದೇಶವು ಉತ್ತಮ ಮಾನ್ಸೂನ್ ವ್ಯಾಪ್ತಿಯನ್ನು ಹೊಂದಿರುವುದರಿಂದ ಮಳೆಯ ಮಾದರಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    recommendation4: "ಪ್ರದೇಶ-ನಿರ್ದಿಷ್ಟ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರದೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ",
    technologyUsed: "ಬಳಸಿದ ತಂತ್ರಜ್ಞಾನ",
    technologyUsedText: "ಈ ವಿಶ್ಲೇಷಣೆಯು ನಿಮ್ಮ ಜಿಲ್ಲೆ ಮತ್ತು ಮಣ್ಣಿನ ಪ್ರಕಾರಕ್ಕೆ ನಿರ್ದಿಷ್ಟವಾದ ಬೆಳೆ ಆರೋಗ್ಯ ಒಳನೋಟಗಳು, ಇಳುವರಿ ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಒದಗಿಸಲು ಹೈಪರ್‌ಸ್ಪೆಕ್ಟ್ರಲ್ ಇಮೇಜಿಂಗ್ (HSI), ಉಪಗ್ರಹ ಡೇಟಾ ಮತ್ತು AI ಅನ್ನು ಬಳಸುತ್ತದೆ.",
    downloadReport: "ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PDF)",
    shareWithAdvisor: "ಸಲಹೆಗಾರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ",
    startNewAnalysis: "ಹೊಸ ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
    
    // Common
    back: "ಹಿಂದೆ",
  },
  hi: {
    // Landing Page
    appTitle: "स्मार्ट फसल भविष्यवाणी",
    appSubtitle: "जानें क्या उगाना है, कब उगाना है और कैसे स्मार्ट तरीके से उगाना है।",
    startButton: "मेरी फसल की भविष्यवाणी करें",
    
    // Language Selector
    selectLanguage: "भाषा चुनें",
    
    // Farmer Details
    farmerDetailsTitle: "अपने खेत के बारे में बताएं",
    farmerDetailsSubtitle: "अपनी खेती की स्थितियों को समझने में हमारी मदद करें",
    regionLabel: "आप किस क्षेत्र से हैं?",
    regionPlaceholder: "अपना क्षेत्र दर्ज करें (उदा: उत्तर कर्नाटक)",
    soilTypeLabel: "आपके पास किस प्रकार की मिट्टी है?",
    soilTypePlaceholder: "मिट्टी का प्रकार दर्ज करें (उदा: चिकनी, दोमट, रेतीली)",
    landSizeLabel: "आपकी जमीन का आकार क्या है?",
    landSizePlaceholder: "जमीन का आकार दर्ज करें",
    continueButton: "फसल विश्लेषण के लिए जारी रखें",
    
    // Crop Status
    cropStatusTitle: "फसल स्थिति जांच",
    cropStatusSubtitle: "आइए देखें कि आपके खेत में क्या उग रहा है",
    hasCropQuestion: "क्या आपके पास वर्तमान में फसलें उग रही हैं?",
    yesHaveCrops: "हां, मेरे पास फसलें हैं",
    noCropsYet: "अभी तक फसलें नहीं",
    currentCropLabel: "आप वर्तमान में कौन सी फसल उगा रहे हैं?",
    currentCropPlaceholder: "उदा: धान, गेहूं, मक्का, कपास",
    getCropAnalysis: "फसल विश्लेषण प्राप्त करें",
    
    // Crop Suggestions
    cropRecommendationsTitle: "शीर्ष फसल सिफारिशें",
    cropRecommendationsSubtitle: "आपकी मिट्टी के प्रकार, क्षेत्र और वर्तमान बाजार रुझानों के आधार पर",
    recommended: "अनुशंसित",
    demand: "मांग",
    price: "कीमत",
    additionalTips: "अतिरिक्त सुझाव",
    tip1: "मिट्टी के स्वास्थ्य को बनाए रखने के लिए फसल चक्र पर विचार करें",
    tip2: "सब्सिडी के लिए स्थानीय सरकारी योजनाओं की जांच करें",
    tip3: "रोपण से पहले मौसम के पैटर्न की निगरानी करें",
    tip4: "क्षेत्र-विशिष्ट सलाह के लिए स्थानीय कृषि अधिकारियों से परामर्श करें",
    viewDetailedInsights: "विस्तृत अंतर्दृष्टि देखें",
    
    // Crop Feedback
    cropFeedbackTitle: "आपकी फसल कैसा प्रदर्शन कर रही है?",
    cropFeedbackSubtitle: "हमें अपनी फसल के स्वास्थ्य के बारे में बताएं",
    performingWell: "अच्छा प्रदर्शन कर रही है",
    needsImprovement: "सुधार की आवश्यकता है",
    notPerformingWell: "अच्छा प्रदर्शन नहीं कर रही",
    marketAnalysis: "बाजार विश्लेषण",
    perfectChoice: "बिल्कुल सही विकल्प! इस मौसम में आपकी फसल की अधिक मांग है।",
    currentPrice: "वर्तमान बाजार मूल्य",
    demandStatus: "मांग की स्थिति",
    alternativeSuggestions: "वैकल्पिक फसल सुझाव",
    alternativeSuggestionsDesc: "वर्तमान बाजार रुझानों के आधार पर, बेहतर लाभ के लिए इन विकल्पों पर विचार करें:",
    viewFullReport: "पूरी रिपोर्ट देखें",
    
    // Insights
    insightsTitle: "आपके खेत की अंतर्दृष्टि सारांश",
    insightsSubtitle: "संपूर्ण विश्लेषण और सिफारिशें",
    farmDetails: "खेत विवरण",
    region: "क्षेत्र",
    soilType: "मिट्टी का प्रकार",
    landSize: "जमीन का आकार",
    currentCrop: "वर्तमान फसल",
    notSpecified: "निर्दिष्ट नहीं",
    acres: "एकड़",
    marketCondition: "बाजार की स्थिति",
    marketConditionText: "आपके क्षेत्र के लिए वर्तमान बाजार विश्लेषण रागी और दालों जैसी वैकल्पिक फसलों की मध्यम से उच्च मांग दिखाता है।",
    keyRecommendations: "मुख्य सिफारिशें",
    recommendation1: "बेहतर बाजार कीमतों के लिए रागी या बाजरा के साथ विविधता लाने पर विचार करें",
    recommendation2: "आपकी मिट्टी का प्रकार दालों के लिए उपयुक्त है जिनमें उच्च लाभ मार्जिन है",
    recommendation3: "वर्षा के पैटर्न की निगरानी करें क्योंकि आपके क्षेत्र में अच्छी मानसून कवरेज है",
    recommendation4: "क्षेत्र-विशिष्ट सर्वोत्तम प्रथाओं के लिए स्थानीय कृषि विज्ञान केंद्र से संपर्क करें",
    technologyUsed: "उपयोग की गई तकनीक",
    technologyUsedText: "यह विश्लेषण आपके जिले और मिट्टी के प्रकार के लिए विशिष्ट फसल स्वास्थ्य अंतर्दृष्टि, उपज भविष्यवाणी और बाजार प्रवृत्ति विश्लेषण प्रदान करने के लिए हाइपरस्पेक्ट्रल इमेजिंग (HSI), उपग्रह डेटा और AI का उपयोग करता है।",
    downloadReport: "रिपोर्ट डाउनलोड करें (PDF)",
    shareWithAdvisor: "सलाहकार के साथ साझा करें",
    startNewAnalysis: "नया विश्लेषण शुरू करें",
    
    // Common
    back: "वापस",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
