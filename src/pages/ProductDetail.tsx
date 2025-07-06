
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-950">
      {/* Hero Section */}
      <div className="bg-gray-900/80 backdrop-blur-sm text-white py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="mb-2 bg-pink-600 text-white hover:bg-pink-700">Bestseller</Badge>
                <h1 className="text-4xl font-bold mb-4 text-white">{product.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{product.description}</p>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">{product.rating}</span>
                  <span className="text-gray-300">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">{product.students.toLocaleString()} students</span>
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
              <Card className="sticky top-4 bg-gray-900/80 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-white">₹{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                    <Badge variant="destructive" className="bg-pink-600 text-white hover:bg-pink-700">40% OFF</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handlePurchase} className="w-full text-lg py-6 bg-pink-600 hover:bg-pink-700 text-white">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="w-full border-pink-500/50 text-pink-200 hover:bg-pink-500/20 hover:text-white hover:border-pink-400">
                    Add to Cart
                  </Button>
                  
                  <div className="text-center text-sm text-gray-400">
                    <Shield className="w-4 h-4 inline mr-1" />
                    30-day money-back guarantee
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-gray-200">This course includes:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">Access on mobile and desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">Downloadable resources</span>
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
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/80 border-gray-700">
            <TabsTrigger value="overview" className="text-gray-300 data-[state=active]:bg-pink-600 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="curriculum" className="text-gray-300 data-[state=active]:bg-pink-600 data-[state=active]:text-white">Curriculum</TabsTrigger>
            <TabsTrigger value="reviews" className="text-gray-300 data-[state=active]:bg-pink-600 data-[state=active]:text-white">Reviews</TabsTrigger>
            <TabsTrigger value="instructor" className="text-gray-300 data-[state=active]:bg-pink-600 data-[state=active]:text-white">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">What you'll learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="curriculum">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Course Curriculum</CardTitle>
                <CardDescription className="text-gray-400">
                  {product.lessons} lectures • {product.duration} total length
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.curriculum.map((section, index) => (
                    <div key={index} className="border border-gray-700 bg-gray-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">{section.section}</h3>
                        <span className="text-sm text-gray-400">
                          {section.lessons} lessons • {section.duration}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Learn the fundamentals and advanced concepts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-400">
                  Reviews section would display student feedback here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{product.creator}</h3>
                    <p className="text-gray-300 mb-4">
                      Full-stack developer with 8+ years of experience. Passionate about teaching and helping others learn to code.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-200">Students:</span> <span className="text-gray-400">45,230</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-200">Courses:</span> <span className="text-gray-400">12</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-200">Reviews:</span> <span className="text-gray-400">8,945</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-200">Rating:</span> <span className="text-gray-400">4.7/5</span>
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
