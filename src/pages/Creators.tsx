
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Creators() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Keep 90% of Your Earnings",
      description: "We only take 10% commission. You keep the majority of what you earn."
    },
    {
      icon: Users,
      title: "Built-in Audience",
      description: "Tap into our growing community of learners and buyers."
    },
    {
      icon: Zap,
      title: "Easy Setup",
      description: "Get your course live in minutes with our intuitive creator tools."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "We handle all payments and provide secure file delivery."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sell to customers worldwide with multi-currency support."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track your performance with detailed analytics and reports."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your creator account in under 2 minutes"
    },
    {
      step: "2",
      title: "Upload Content",
      description: "Add your courses, ebooks, or digital products"
    },
    {
      step: "3",
      title: "Set Your Price",
      description: "You decide the pricing - we suggest what works"
    },
    {
      step: "4",
      title: "Start Earning",
      description: "Get paid weekly with our fast payout system"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Expert",
      earnings: "₹2.5L",
      quote: "KarmKosh helped me turn my marketing knowledge into a profitable online business."
    },
    {
      name: "Rahul Verma",
      role: "Web Developer",
      earnings: "₹4.2L",
      quote: "The platform is so easy to use. I uploaded my course and started earning within a week."
    },
    {
      name: "Anjali Gupta",
      role: "Yoga Instructor",
      earnings: "₹1.8L",
      quote: "Amazing community and support. KarmKosh made selling my yoga programs so simple."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Turn Your Knowledge Into 
            <span className="text-purple-600"> Income</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are monetizing their expertise on KarmKosh. 
            Create courses, sell digital products, and build your online business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth?mode=signup">
              <Button size="lg" className="px-8 py-4 text-lg">
                Start Creating Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10,000+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">₹50Cr+</div>
              <div className="text-gray-600">Creator Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2M+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose KarmKosh?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed as a creator</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 4 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how creators are building their businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{testimonial.earnings}</div>
                      <div className="text-sm text-gray-500">Total Earned</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Creator Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful creators already earning on KarmKosh
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth?mode=signup">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Create Free Account
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg text-white border-white hover:bg-white hover:text-purple-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
