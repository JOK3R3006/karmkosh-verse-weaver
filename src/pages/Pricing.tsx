
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Pricing() {
  const [showCreatorDialog, setShowCreatorDialog] = useState(false);
  const [showFreeDialog, setShowFreeDialog] = useState(false);
  const [showProDialog, setShowProDialog] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for getting started",
      features: [
        "Basic analytics",
        "Standard support",
        "File hosting up to 1GB",
        "Basic course builder",
        "Secure payment processing"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Creator",
      price: "₹999",
      period: "/month",
      description: "For serious creators",
      features: [
        "Advanced analytics",
        "Priority support",
        "File hosting up to 10GB",
        "Advanced course builder",
        "Custom landing pages",
        "Email marketing tools",
        "Premium support"
      ],
      cta: "Start Creating",
      popular: true
    },
    {
      name: "Pro",
      price: "₹2999",
      period: "/month",
      description: "For established businesses",
      features: [
        "Full analytics suite",
        "24/7 dedicated support",
        "Unlimited file hosting",
        "White-label options",
        "Advanced marketing tools",
        "API access",
        "Custom integrations",
        "Priority processing"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  const creatorPlanFeatures = [
    "Advanced analytics",
    "Priority support", 
    "File hosting up to 10GB",
    "Advanced course builder",
    "Custom landing pages",
    "Email marketing tools",
    "Premium support"
  ];

  const freePlanFeatures = [
    "Basic analytics",
    "Standard support",
    "File hosting up to 1GB",
    "Basic course builder",
    "Secure payment processing"
  ];

  const proPlanFeatures = [
    "Full analytics suite",
    "24/7 dedicated support",
    "Unlimited file hosting",
    "White-label options",
    "Advanced marketing tools",
    "API access",
    "Custom integrations",
    "Priority processing"
  ];

  const handlePlanClick = (planName: string) => {
    if (planName === "Creator") {
      setShowCreatorDialog(true);
    } else if (planName === "Free") {
      setShowFreeDialog(true);
    } else if (planName === "Pro") {
      setShowProDialog(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-950 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the plan that works best for your creator journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-pink-500 hover:border-2 hover:shadow-pink-500/20 bg-gray-900/80 border-gray-700 backdrop-blur-sm"
              onClick={() => handlePlanClick(plan.name)}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                </div>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">Click to see all features</p>
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                </div>
                <Button 
                  className="w-full border-pink-500/50 text-pink-200 hover:bg-pink-500/20 hover:text-white hover:border-pink-400"
                  variant="outline"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            All plans include secure payments, instant payouts, and our creator community
          </p>
          <p className="text-xs text-gray-500 opacity-75">
            * Small platform fee on successful sales. No hidden fees or setup costs.
          </p>
        </div>
      </div>

      {/* Creator Plan Dialog */}
      <Dialog open={showCreatorDialog} onOpenChange={setShowCreatorDialog}>
        <DialogContent className="max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Creator Plan Features</DialogTitle>
            <DialogDescription className="text-gray-300">
              Everything you need to grow your creator business
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              {plans[1].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-sm text-gray-300 mb-3">
                Monthly subscription: <span className="font-semibold text-white">₹999/month</span>
              </p>
              <p className="text-xs text-gray-500">
                Small platform fee on successful sales
              </p>
            </div>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              onClick={() => setShowCreatorDialog(false)}
            >
              Start Creating
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Free Plan Dialog */}
      <Dialog open={showFreeDialog} onOpenChange={setShowFreeDialog}>
        <DialogContent className="max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Free Plan Features</DialogTitle>
            <DialogDescription className="text-gray-300">
              Get started with essential creator tools
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              {plans[0].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-sm text-gray-300 mb-3">
                <span className="font-semibold text-white">Free forever</span>
              </p>
              <p className="text-xs text-gray-500">
                Small platform fee on successful sales
              </p>
            </div>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              onClick={() => setShowFreeDialog(false)}
            >
              Get Started Free
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pro Plan Dialog */}
      <Dialog open={showProDialog} onOpenChange={setShowProDialog}>
        <DialogContent className="max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Pro Plan Features</DialogTitle>
            <DialogDescription className="text-gray-300">
              Advanced tools for serious businesses
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              {plans[2].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-sm text-gray-300 mb-3">
                Monthly subscription: <span className="font-semibold text-white">₹2999/month</span>
              </p>
              <p className="text-xs text-gray-500">
                Small platform fee on successful sales
              </p>
            </div>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              onClick={() => setShowProDialog(false)}
            >
              Go Pro
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
