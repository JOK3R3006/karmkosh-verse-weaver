
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
      title: "Balance Boost Blueprint",
      creator: "KarmKosh Team",
      price: 0,
      originalPrice: 0,
      rating: 5.0,
      reviews: 0,
      students: 0,
      duration: "Self-paced",
      lessons: 1,
      level: "Beginner",
      category: "Health",
      bestseller: false,
      updated: "2024-01-15",
      url: "https://preview--balance-boost-blueprint.lovable.app/"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "photography", label: "Photography" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health" }
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-950 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">Discover Courses</h1>
          <p className="text-gray-300">Learn from India's best creators and experts</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search courses, creators, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-white hover:bg-gray-700">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Prices</SelectItem>
                <SelectItem value="free" className="text-white hover:bg-gray-700">Free</SelectItem>
                <SelectItem value="under-2000" className="text-white hover:bg-gray-700">Under ₹2,000</SelectItem>
                <SelectItem value="2000-5000" className="text-white hover:bg-gray-700">₹2,000 - ₹5,000</SelectItem>
                <SelectItem value="above-5000" className="text-white hover:bg-gray-700">Above ₹5,000</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="popular" className="text-white hover:bg-gray-700">Most Popular</SelectItem>
                <SelectItem value="newest" className="text-white hover:bg-gray-700">Newest</SelectItem>
                <SelectItem value="rating" className="text-white hover:bg-gray-700">Highest Rated</SelectItem>
                <SelectItem value="price-low" className="text-white hover:bg-gray-700">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-white hover:bg-gray-700">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            Showing {filteredProducts.length} of {products.length} courses
          </p>
          <Button variant="outline" size="sm" className="border-pink-500/50 text-pink-200 hover:bg-pink-500/20 hover:text-white hover:border-pink-400">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card className="hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:border-2 bg-gray-900/80 border-gray-700 backdrop-blur-sm cursor-pointer h-full">
                <div className="relative">
                  <div className="aspect-video bg-gray-800 rounded-t-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-400" />
                  </div>
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-pink-600 text-white hover:bg-pink-700">
                      Bestseller
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-pink-500/20 text-pink-200 border-pink-500/30" variant="secondary">
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 h-14 text-white">{product.title}</CardTitle>
                  <CardDescription className="text-gray-400">by {product.creator}</CardDescription>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-200">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">({product.reviews})</span>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{product.students}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{product.duration}</span>
                    </div>
                    <span>{product.lessons} lessons</span>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {product.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-white">
                        {product.price === 0 ? "Free" : `₹${product.price}`}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <Badge variant="destructive" className="text-xs bg-pink-600 text-white hover:bg-pink-700">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    onClick={() => window.open(product.url, '_blank')}
                  >
                    {product.price === 0 ? "Access Free" : "View Product"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-4 text-white">No products found</h3>
            <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all categories</p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setPriceFilter("all");
            }} className="bg-pink-600 hover:bg-pink-700 text-white">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-pink-500/50 text-pink-200 hover:bg-pink-500/20 hover:text-white hover:border-pink-400">
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
