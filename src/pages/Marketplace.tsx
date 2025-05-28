
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Play,
  Download,
  IndianRupee,
  TrendingUp,
  Crown,
  Zap
} from "lucide-react";

// Mock data - replace with real API calls
const mockProducts = [
  {
    id: "1",
    title: "Complete Stock Trading Masterclass",
    description: "Learn professional stock trading strategies used by top traders in India",
    price: 4999,
    originalPrice: 9999,
    rating: 4.9,
    reviews: 1284,
    students: 5420,
    category: "Trading",
    type: "course",
    image: "/placeholder.svg",
    creator: "Raj Sharma",
    isPopular: true,
    tags: ["Beginner Friendly", "Hindi", "Lifetime Access"]
  },
  {
    id: "2",
    title: "SaaS Startup Builder Kit",
    description: "Complete toolkit with templates, code, and strategies to build your SaaS",
    price: 2999,
    rating: 4.8,
    reviews: 542,
    students: 1240,
    category: "Business",
    type: "template",
    image: "/placeholder.svg",
    creator: "Priya Patel",
    isPopular: false,
    tags: ["React", "Node.js", "Templates"]
  },
  {
    id: "3",
    title: "AI Tools & Prompts Library",
    description: "1000+ AI prompts and tools for content creation, marketing & productivity",
    price: 1499,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 892,
    students: 3120,
    category: "AI & Tech",
    type: "digital",
    image: "/placeholder.svg",
    creator: "Arjun Mehta",
    isPopular: true,
    tags: ["ChatGPT", "Productivity", "Templates"]
  },
  {
    id: "4",
    title: "Exclusive Trading Discord",
    description: "Join our premium trading community with daily signals and market analysis",
    price: 999,
    rating: 4.6,
    reviews: 234,
    students: 890,
    category: "Community",
    type: "membership",
    image: "/placeholder.svg",
    creator: "Trading Pro",
    isPopular: false,
    tags: ["Monthly", "Discord", "Live Signals"]
  },
  {
    id: "5",
    title: "YouTube Automation Software",
    description: "Automate your YouTube channel with AI-powered content creation tools",
    price: 7999,
    rating: 4.5,
    reviews: 156,
    students: 420,
    category: "Software",
    type: "software",
    image: "/placeholder.svg",
    creator: "Tech Innovator",
    isPopular: false,
    tags: ["Automation", "YouTube", "AI"]
  },
  {
    id: "6",
    title: "Digital Marketing Blueprint",
    description: "Complete guide to digital marketing in India with case studies and templates",
    price: 3499,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 678,
    students: 2340,
    category: "Marketing",
    type: "course",
    image: "/placeholder.svg",
    creator: "Marketing Guru",
    isPopular: true,
    tags: ["SEO", "Social Media", "PPC"]
  }
];

const categories = ["All", "Trading", "Business", "AI & Tech", "Community", "Software", "Marketing"];
const sortOptions = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Rating"];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  const [products] = useState(mockProducts);

  const getProductIcon = (type: string) => {
    switch (type) {
      case "course": return <Play className="w-4 h-4" />;
      case "software": return <Zap className="w-4 h-4" />;
      case "membership": return <Crown className="w-4 h-4" />;
      case "template": return <Download className="w-4 h-4" />;
      default: return <Download className="w-4 h-4" />;
    }
  };

  const filteredProducts = products
    .filter(product => 
      selectedCategory === "All" || product.category === selectedCategory
    )
    .filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Digital Marketplace</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium digital products, courses, and tools created by top Indian creators
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for courses, tools, templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="lg:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="lg:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredProducts.length} Products Found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg bg-gradient-to-r from-purple-100 to-blue-100"
                    />
                    {product.isPopular && (
                      <Badge className="absolute top-3 left-3 bg-orange-500">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive" className="absolute top-3 right-3">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getProductIcon(product.type)}
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </CardDescription>

                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{product.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-sm text-gray-500 mb-3">
                    by <span className="font-medium text-gray-700">{product.creator}</span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-2xl font-bold">
                      <IndianRupee className="w-5 h-5" />
                      {product.price.toLocaleString()}
                    </div>
                    {product.originalPrice && (
                      <div className="flex items-center text-sm text-gray-500 line-through">
                        <IndianRupee className="w-3 h-3" />
                        {product.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <Button asChild>
                    <Link to={`/product/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No products found</p>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
