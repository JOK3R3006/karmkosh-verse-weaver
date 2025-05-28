
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Users, 
  Clock, 
  Download, 
  Play, 
  CheckCircle,
  Globe,
  Shield,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  
  const [product] = useState({
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    creator: "Rohit Sharma",
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 1247,
    students: 15420,
    duration: "42 hours",
    lessons: 156,
    language: "Hindi & English",
    level: "Beginner to Advanced",
    image: "/placeholder.svg",
    description: "Master modern web development with this comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more. Build 10+ real-world projects and get job-ready skills.",
    whatYouLearn: [
      "Build responsive websites with HTML5 & CSS3",
      "Master JavaScript ES6+ features",
      "Create dynamic UIs with React.js",
      "Build backend APIs with Node.js & Express",
      "Work with databases (MongoDB, MySQL)",
      "Deploy applications to production",
      "Implement authentication & security",
      "Use Git & GitHub for version control"
    ],
    requirements: [
      "Basic computer skills",
      "No prior coding experience needed",
      "Computer with internet connection",
      "Willingness to learn and practice"
    ],
    curriculum: [
      {
        section: "HTML & CSS Fundamentals",
        lessons: 24,
        duration: "6 hours"
      },
      {
        section: "JavaScript Mastery",
        lessons: 32,
        duration: "8 hours"
      },
      {
        section: "React Development",
        lessons: 28,
        duration: "7 hours"
      },
      {
        section: "Backend with Node.js",
        lessons: 26,
        duration: "6.5 hours"
      },
      {
        section: "Database Integration",
        lessons: 18,
        duration: "4.5 hours"
      },
      {
        section: "Deployment & DevOps",
        lessons: 16,
        duration: "4 hours"
      },
      {
        section: "Real-world Projects",
        lessons: 12,
        duration: "6 hours"
      }
    ]
  });

  const handlePurchase = () => {
    toast({
      title: "Redirecting to Payment",
      description: "You'll be redirected to secure payment gateway...",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="mb-2">Bestseller</Badge>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{product.description}</p>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-300">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{product.students.toLocaleString()} students</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{product.duration} total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>{product.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{product.language}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mt-4">Created by <span className="text-white font-semibold">{product.creator}</span></p>
            </div>
            
            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">₹{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                    <Badge variant="destructive">40% OFF</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handlePurchase} className="w-full text-lg py-6">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Cart
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600">
                    <Shield className="w-4 h-4 inline mr-1" />
                    30-day money-back guarantee
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">This course includes:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Access on mobile and desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Downloadable resources</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What you'll learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="curriculum">
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>
                  {product.lessons} lectures • {product.duration} total length
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.curriculum.map((section, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{section.section}</h3>
                        <span className="text-sm text-gray-600">
                          {section.lessons} lessons • {section.duration}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Learn the fundamentals and advanced concepts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Reviews section would display student feedback here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.creator}</h3>
                    <p className="text-gray-600 mb-4">
                      Full-stack developer with 8+ years of experience. Passionate about teaching and helping others learn to code.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Students:</span> 45,230
                      </div>
                      <div>
                        <span className="font-semibold">Courses:</span> 12
                      </div>
                      <div>
                        <span className="font-semibold">Reviews:</span> 8,945
                      </div>
                      <div>
                        <span className="font-semibold">Rating:</span> 4.7/5
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
