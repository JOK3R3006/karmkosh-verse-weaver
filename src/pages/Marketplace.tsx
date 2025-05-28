
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Play,
  Clock,
  Users,
  SlidersHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const products = [
    {
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
      level: "Beginner",
      category: "Programming",
      bestseller: true,
      updated: "2024-01-15"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery Course",
      creator: "Priya Singh",
      price: 1999,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 892,
      students: 8965,
      duration: "28 hours",
      lessons: 95,
      level: "Intermediate",
      category: "Marketing",
      bestseller: false,
      updated: "2024-01-12"
    },
    {
      id: 3,
      title: "UI/UX Design Complete Guide",
      creator: "Anjali Gupta",
      price: 2499,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 654,
      students: 6543,
      duration: "35 hours",
      lessons: 120,
      level: "Beginner",
      category: "Design",
      bestseller: true,
      updated: "2024-01-10"
    },
    {
      id: 4,
      title: "Python for Data Science",
      creator: "Vikash Kumar",
      price: 2799,
      originalPrice: 4299,
      rating: 4.6,
      reviews: 432,
      students: 4321,
      duration: "40 hours",
      lessons: 140,
      level: "Intermediate",
      category: "Programming",
      bestseller: false,
      updated: "2024-01-08"
    },
    {
      id: 5,
      title: "Stock Market Trading Masterclass",
      creator: "Arjun Patel",
      price: 3499,
      originalPrice: 5999,
      rating: 4.5,
      reviews: 876,
      students: 12340,
      duration: "30 hours",
      lessons: 85,
      level: "Advanced",
      category: "Finance",
      bestseller: true,
      updated: "2024-01-06"
    },
    {
      id: 6,
      title: "Photography Fundamentals",
      creator: "Sneha Reddy",
      price: 1799,
      originalPrice: 2999,
      rating: 4.8,
      reviews: 345,
      students: 2876,
      duration: "25 hours",
      lessons: 75,
      level: "Beginner",
      category: "Photography",
      bestseller: false,
      updated: "2024-01-05"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "photography", label: "Photography" },
    { value: "business", label: "Business" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           product.category.toLowerCase() === selectedCategory;
    const matchesPrice = priceFilter === "all" ||
                        (priceFilter === "free" && product.price === 0) ||
                        (priceFilter === "under-2000" && product.price < 2000) ||
                        (priceFilter === "2000-5000" && product.price >= 2000 && product.price <= 5000) ||
                        (priceFilter === "above-5000" && product.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Courses</h1>
          <p className="text-gray-600">Learn from India's best creators and experts</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search courses, creators, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="under-2000">Under ₹2,000</SelectItem>
                <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                <SelectItem value="above-5000">Above ₹5,000</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} courses
          </p>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-500" />
                  </div>
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      Bestseller
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 h-14">{product.title}</CardTitle>
                  <CardDescription>by {product.creator}</CardDescription>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-500">({product.reviews})</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500">{product.students.toLocaleString()}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{product.duration}</span>
                    </div>
                    <span>{product.lessons} lessons</span>
                    <Badge variant="outline" className="text-xs">
                      {product.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <Badge variant="destructive" className="text-xs">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
