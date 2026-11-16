import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Clock, Users, SlidersHorizontal, ArrowUpRight, SearchX, PlayCircle } from "lucide-react";
import { ProductCover } from "@/components/brand/ProductCover";
import { EmptyState } from "@/components/brand/EmptyState";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "programming", label: "Programming" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "photography", label: "Photography" },
  { value: "business", label: "Business" },
  { value: "health", label: "Health" },
];

export default function Marketplace() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categories.some((category) => category.value === initialCategory) ? initialCategory : "all",
  );
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
      url: "https://preview--balance-boost-blueprint.lovable.app/",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory;
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && product.price === 0) ||
      (priceFilter === "under-2000" && product.price < 2000) ||
      (priceFilter === "2000-5000" && product.price >= 2000 && product.price <= 5000) ||
      (priceFilter === "above-5000" && product.price > 5000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceFilter("all");
  };

  return (
    <div className="pb-24 pt-12 md:pt-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">Marketplace</p>
          <h1 className="display text-5xl text-foreground md:text-6xl">
            Discover <span className="text-gradient italic">Courses</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Learn from India's best creators and experts
          </p>
        </div>

        {/* Search and filters */}
        <div className="surface mb-8 p-3">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                aria-label="Search courses"
                placeholder="Search courses, creators, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48" aria-label="Category">
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

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full lg:w-44" aria-label="Price">
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48" aria-label="Sort by">
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
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{" "}
            {products.length} courses
          </p>
          <Button variant="outline" size="sm">
            <SlidersHorizontal />
            More Filters
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="surface surface-hover group flex h-full flex-col p-3">
              <div className="relative">
                <ProductCover title={product.title} category={product.category} />
                {product.bestseller && <Badge className="absolute right-3 top-3">Bestseller</Badge>}
                <PlayCircle
                  aria-hidden
                  strokeWidth={1.25}
                  className="absolute bottom-4 right-4 h-9 w-9 text-white/70 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <h2 className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {product.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">by {product.creator}</p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                    <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>({product.reviews})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {product.students}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {product.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="outline">{product.level}</Badge>
                  <Badge variant="outline">
                    {product.lessons} {product.lessons === 1 ? "lesson" : "lessons"}
                  </Badge>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="tabular text-2xl font-semibold tracking-tight text-foreground">
                      {product.price === 0 ? "Free" : `₹${product.price.toLocaleString("en-IN")}`}
                    </span>
                    {product.originalPrice > product.price && (
                      <>
                        <span className="tabular text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <Badge>{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</Badge>
                      </>
                    )}
                  </div>
                  <Button size="sm" onClick={() => window.open(product.url, "_blank", "noopener,noreferrer")}>
                    {product.price === 0 ? "Access Free" : "View Product"}
                    <ArrowUpRight />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <EmptyState
            icon={SearchX}
            title="No products found"
            description="Try adjusting your search criteria or browse all categories"
            action={<Button onClick={clearFilters}>Clear Filters</Button>}
          />
        )}

        {/* Load more */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
