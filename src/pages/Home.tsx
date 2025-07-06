
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Star, 
  TrendingUp, 
  Users, 
  Globe,
  Shield,
  Zap,
  BookOpen,
  Code,
  Palette,
  Briefcase,
  Camera,
  Music
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      creator: "Rohit Sharma",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      students: 15420,
      image: "/placeholder.svg",
      category: "Programming",
      bestseller: true
    },
    {
      id: 2,
      title: "Digital Marketing Mastery Course",
      creator: "Priya Singh",
      price: 1999,
      originalPrice: 3499,
      rating: 4.7,
      students: 8965,
      image: "/placeholder.svg",
      category: "Marketing",
      bestseller: false
    },
    {
      id: 3,
      title: "UI/UX Design Complete Guide",
      creator: "Anjali Gupta",
      price: 2499,
      originalPrice: 3999,
      rating: 4.9,
      students: 6543,
      image: "/placeholder.svg",
      category: "Design",
      bestseller: true
    }
  ];

  const categories = [
    { icon: Code, name: "Programming", courses: 1250, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
    { icon: Palette, name: "Design", courses: 890, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
    { icon: Briefcase, name: "Business", courses: 750, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
    { icon: Camera, name: "Photography", courses: 420, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
    { icon: Music, name: "Music", courses: 380, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
    { icon: BookOpen, name: "Academic", courses: 650, color: "bg-pink-500/20 text-pink-200 border-pink-500/30" }
  ];

  const stats = [
    { value: "50,000+", label: "Students Learning" },
    { value: "5,000+", label: "Expert Instructors" },
    { value: "15,000+", label: "Courses Available" },
    { value: "₹100Cr+", label: "Paid to Creators" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-950">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Learn From India's 
            <span className="text-pink-400"> Best Creators</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Access thousands of courses, ebooks, and digital products from verified experts. 
            Start learning today and advance your career.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Link to="/marketplace">
              <Button size="lg" className="px-8 py-4 text-lg bg-pink-600 hover:bg-pink-700 text-white">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/creators">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-pink-500/50 text-pink-200 hover:bg-pink-500/20 hover:text-white hover:border-pink-400">
                <Play className="w-5 h-5 mr-2" />
                Become a Creator
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-pink-400">{stat.value}</div>
                <div className="text-sm lg:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Featured Courses</h2>
            <p className="text-xl text-gray-300">Handpicked courses from top creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm cursor-pointer">
                  <div className="relative">
                    <div className="aspect-video bg-gray-800 rounded-t-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-gray-400" />
                    </div>
                    {product.bestseller && (
                      <Badge className="absolute top-2 left-2 bg-pink-600 text-white hover:bg-pink-700">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-2 text-white">{product.title}</CardTitle>
                        <CardDescription className="text-gray-400">by {product.creator}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-200">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">({product.students.toLocaleString()})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">₹{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 border-pink-500/30">{product.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/marketplace">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Popular Categories</h2>
            <p className="text-xl text-gray-300">Find courses in your area of interest</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/marketplace?category=${category.name.toLowerCase()}`}>
                <Card className="text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 border`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.courses} courses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KarmKosh */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose KarmKosh?</h2>
            <p className="text-xl text-gray-300">The best platform for learning and teaching in India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <CardTitle className="text-white">Learn Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Access your courses on any device, anytime, anywhere. Download for offline learning.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-pink-400" />
                </div>
                <CardTitle className="text-white">Verified Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">All our instructors are verified experts with proven track records in their fields.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-pink-400" />
                </div>
                <CardTitle className="text-white">Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Engage with quizzes, assignments, and community discussions for better learning outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600/80 to-purple-600/80 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Creator Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Share your knowledge with millions of learners and earn 90% of every sale
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/creators">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-pink-600 hover:bg-gray-100">
                Start Teaching
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg text-white border-white hover:bg-white hover:text-pink-600">
                View Creator Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
