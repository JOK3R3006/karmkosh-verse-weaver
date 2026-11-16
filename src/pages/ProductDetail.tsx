
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
  Award,
  MessageSquare
} from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { ProductCover } from "@/components/brand/ProductCover";
import { EmptyState } from "@/components/brand/EmptyState";
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

  const includes = [
    "Lifetime access",
    "Certificate of completion",
    "Access on mobile and desktop",
    "Downloadable resources",
  ];

  const instructorStats = [
    { label: "Students", value: "45,230" },
    { label: "Courses", value: "12" },
    { label: "Reviews", value: "8,945" },
    { label: "Rating", value: "4.7/5" },
  ];

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="pb-24 pt-8 md:pt-12">
      <div className="container mx-auto px-4">
        <BackButton to="/marketplace" className="-ml-2 mb-6" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Main column */}
          <div className="lg:col-span-2">
            <Badge>Bestseller</Badge>
            <h1 className="display mt-5 text-5xl text-foreground md:text-6xl">{product.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {product.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="tabular font-semibold text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews.toLocaleString("en-IN")} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{product.students.toLocaleString("en-IN")} students</span>
              </div>
            </div>

            <dl className="surface mt-8 grid grid-cols-1 divide-y divide-white/[0.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { icon: Clock, label: "Duration", value: `${product.duration} total` },
                { icon: Play, label: "Lessons", value: `${product.lessons} lessons` },
                { icon: Globe, label: "Language", value: product.language },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-4">
                  <item.icon className="h-4 w-4 shrink-0 text-brand-rose" strokeWidth={1.75} />
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm text-muted-foreground">
              Created by <span className="font-semibold text-foreground">{product.creator}</span>
            </p>

            {/* Content tabs */}
            <Tabs defaultValue="overview" className="mt-12">
              <div className="-mx-4 overflow-x-auto px-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-5">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                      {product.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-rose" />
                          <span className="text-sm text-foreground/85">{item}</span>
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
                    <ul className="space-y-3">
                      {product.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                          <span className="text-sm text-foreground/85">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
                    <ol className="divide-y divide-white/[0.07]">
                      {product.curriculum.map((section, index) => (
                        <li key={index} className="flex items-center gap-5 py-4 first:pt-0 last:pb-0">
                          <span className="display text-gradient w-9 shrink-0 text-3xl">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground">{section.section}</h3>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              Learn the fundamentals and advanced concepts
                            </p>
                          </div>
                          <span className="tabular shrink-0 text-right text-xs text-muted-foreground">
                            {section.lessons} lessons
                            <br />
                            {section.duration}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <EmptyState
                      icon={MessageSquare}
                      title="Reviews"
                      description="Reviews section would display student feedback here"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardHeader>
                    <CardTitle>About the Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-5 sm:flex-row">
                      <div className="icon-tile h-16 w-16 rounded-full">
                        <Award className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="display text-3xl text-foreground">{product.creator}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Full-stack developer with 8+ years of experience. Passionate about teaching and helping
                          others learn to code.
                        </p>
                        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                          {instructorStats.map((stat) => (
                            <div key={stat.label}>
                              <dd className="tabular text-xl font-semibold text-foreground">{stat.value}</dd>
                              <dt className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                                {stat.label}
                              </dt>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Purchase card */}
          <div className="lg:col-span-1">
            <div className="gradient-frame p-5 lg:sticky lg:top-24">
              <ProductCover title={product.title} category="Course" />
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="tabular text-4xl font-semibold tracking-tight text-foreground">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="tabular text-base text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <Badge>{discount}% OFF</Badge>
              </div>

              <div className="mt-6 space-y-3">
                <Button onClick={handlePurchase} size="lg" className="w-full">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Add to Cart
                </Button>
              </div>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5" />
                30-day money-back guarantee
              </p>

              <div className="hairline my-6" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                This course includes
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/85">
                    <CheckCircle className="h-4 w-4 text-brand-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
