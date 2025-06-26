
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Pricing() {
  const [showCreatorDialog, setShowCreatorDialog] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for getting started",
      features: [
        "10% commission on sales",
        "Basic analytics",
        "Standard support",
        "File hosting up to 1GB",
        "Basic course builder"
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
        "10% commission on sales",
        "Advanced analytics",
        "Priority support",
        "File hosting up to 10GB",
        "Advanced course builder",
        "Custom landing pages",
        "Email marketing tools"
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
        "10% commission on sales",
        "Full analytics suite",
        "24/7 dedicated support",
        "Unlimited file hosting",
        "White-label options",
        "Advanced marketing tools",
        "API access",
        "Custom integrations"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  const creatorPlanFeatures = [
    "10% commission on sales",
    "Advanced analytics",
    "Priority support", 
    "File hosting up to 10GB",
    "Advanced course builder",
    "Custom landing pages",
    "Email marketing tools"
  ];

  const handlePlanClick = (planName: string) => {
    if (planName === "Creator") {
      setShowCreatorDialog(true);
    } else {
      // Handle other plan selections
      console.log(`Selected plan: ${planName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that works best for your creator journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 border-2 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handlePlanClick(plan.name)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include secure payments, instant payouts, and our creator community
          </p>
          <p className="text-sm text-gray-500">
            * Commission rates apply to all sales. No hidden fees or setup costs.
          </p>
        </div>
      </div>

      <Dialog open={showCreatorDialog} onOpenChange={setShowCreatorDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Creator Plan Features</DialogTitle>
            <DialogDescription>
              Here's everything included in your Creator plan subscription.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              {creatorPlanFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-gray-600 mb-3">
                Monthly subscription: <span className="font-semibold">₹999/month</span>
              </p>
            </div>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => setShowCreatorDialog(false)}
            >
              Start Creating
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
