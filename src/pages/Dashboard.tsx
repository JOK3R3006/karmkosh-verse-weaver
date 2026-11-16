import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  TrendingUp,
  Users,
  IndianRupee,
  BarChart3,
  Settings,
  Package,
  MessageSquare,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { StatCard } from "@/components/brand/StatCard";
import { EmptyState } from "@/components/brand/EmptyState";

export default function Dashboard() {
  // Realistic starter data
  const stats = {
    totalRevenue: 0,
    totalSales: 0,
    totalCustomers: 0,
    conversionRate: 0,
    monthlyRevenue: 0,
    monthlyGrowth: 0,
  };

  const quickActions = [
    { label: "View Analytics", to: "/analytics", icon: BarChart3 },
    { label: "Manage Customers", to: "/customers", icon: Users },
    { label: "Account Settings", to: "/settings", icon: Settings },
  ];

  const goals = [
    { label: "Create First Product", progress: "0 / 1", value: 0 },
    { label: "Get First Customer", progress: "0 / 1", value: 0 },
    { label: "Reach ₹1000 Revenue", progress: "₹0 / ₹1000", value: 0 },
  ];

  const tips = [
    { title: "Start with what you know", body: "Create content about your expertise or skills" },
    { title: "Keep it simple initially", body: "Launch with one product and iterate based on feedback" },
  ];

  return (
    <div className="pb-24 pt-10 md:pt-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Overview</p>
            <h1 className="display text-5xl text-foreground md:text-6xl">Creator Dashboard</h1>
            <p className="mt-3 text-muted-foreground">
              Start your journey - create your first product to begin earning
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link to="/analytics">
                <BarChart3 />
                Analytics
              </Link>
            </Button>
            <Button asChild>
              <Link to="/create-product">
                <Plus />
                Create Your First Product
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Revenue"
            value={`₹${stats.totalRevenue.toLocaleString("en-IN")}`}
            hint="Start selling to see revenue growth"
            icon={IndianRupee}
          />
          <StatCard
            label="Total Sales"
            value={String(stats.totalSales)}
            hint="Create products to start making sales"
            icon={Package}
          />
          <StatCard
            label="Customers"
            value={String(stats.totalCustomers)}
            hint="Build your customer base"
            icon={Users}
          />
          <StatCard
            label="Conversion Rate"
            value={`${stats.conversionRate}%`}
            hint="Track performance as you grow"
            icon={TrendingUp}
          />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle>Your Products</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/create-product">Create First Product</Link>
                  </Button>
                </div>
                <CardDescription>You haven't created any products yet. Start your journey!</CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState
                  icon={Package}
                  title="No Products Yet"
                  description="Create your first digital product to start earning"
                  action={
                    <Button asChild>
                      <Link to="/create-product">
                        <Plus />
                        Create Product
                      </Link>
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" size="sm" disabled>
                    View All
                  </Button>
                </div>
                <CardDescription>Your customer orders will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState
                  icon={MessageSquare}
                  title="No Orders Yet"
                  description="Orders from customers will show up here"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" asChild>
                  <Link to="/create-product">
                    <Plus />
                    Create New Product
                  </Link>
                </Button>
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    to={action.to}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:border-white/[0.08] hover:bg-white/[0.04] hover:text-foreground"
                  >
                    <action.icon className="h-4 w-4 text-brand-rose" strokeWidth={1.75} />
                    {action.label}
                    <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started Goals</CardTitle>
                <CardDescription>Complete these steps to launch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {goals.map((goal) => (
                  <div key={goal.label}>
                    <div className="mb-2.5 flex justify-between text-sm">
                      <span className="text-foreground/85">{goal.label}</span>
                      <span className="tabular text-muted-foreground">{goal.progress}</span>
                    </div>
                    <Progress value={goal.value} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-brand-gold" />
                  Getting Started Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {tips.map((tip) => (
                  <div key={tip.title} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                    <p className="font-medium text-foreground">{tip.title}</p>
                    <p className="mt-1 text-muted-foreground">{tip.body}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
