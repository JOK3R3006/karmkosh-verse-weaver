import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, Users, ShoppingCart, TrendingUp, Plus, Download, Package, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/brand/StatCard";
import { EmptyState } from "@/components/brand/EmptyState";

export default function CreatorDashboard() {
  const [stats] = useState({
    totalEarnings: 0,
    totalSales: 0,
    activeProducts: 0,
    totalStudents: 0,
  });

  const createButton = (label: string) => (
    <Button asChild>
      <Link to="/create-product">
        <Plus />
        {label}
      </Link>
    </Button>
  );

  return (
    <div className="pb-24 pt-10 md:pt-14">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Creator studio</p>
            <h1 className="display text-5xl text-foreground md:text-6xl">Creator Dashboard</h1>
            <p className="mt-3 text-muted-foreground">
              Welcome! Start by creating your first product to begin your journey.
            </p>
          </div>
          {createButton("Create Your First Product")}
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Earnings"
            value={`₹${stats.totalEarnings.toLocaleString("en-IN")}`}
            hint="Start selling to earn revenue"
            icon={IndianRupee}
          />
          <StatCard
            label="Total Sales"
            value={String(stats.totalSales)}
            hint="Create products to make sales"
            icon={ShoppingCart}
          />
          <StatCard
            label="Active Products"
            value={String(stats.activeProducts)}
            hint="Ready to create your first one?"
            icon={TrendingUp}
          />
          <StatCard
            label="Total Students"
            value={String(stats.totalStudents)}
            hint="Build your audience"
            icon={Users}
          />
        </div>

        <Tabs defaultValue="products">
          <div className="-mx-4 overflow-x-auto px-4">
            <TabsList>
              <TabsTrigger value="products">My Products</TabsTrigger>
              <TabsTrigger value="sales">Recent Sales</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="payouts">Payouts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Create and manage your courses and digital products</CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState
                  icon={Package}
                  title="No Products Created Yet"
                  description="Start your creator journey by creating your first digital product"
                  action={createButton("Create Your First Product")}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Your transactions and commissions will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState
                  icon={ShoppingCart}
                  title="No Sales Yet"
                  description="Once you create products and customers start buying, sales will appear here"
                  action={createButton("Create Product to Start Selling")}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <EmptyState
                    icon={TrendingUp}
                    title="Nothing to chart yet"
                    description="Sales analytics will appear once you start making sales"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <EmptyState
                    icon={PieChart}
                    title="No revenue yet"
                    description="Revenue breakdown will show after your first sale"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payouts">
            <Card>
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
                <CardDescription>Track your earnings and payouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Available for Payout
                    </p>
                    <p className="tabular mt-2 text-4xl font-semibold tracking-tight text-foreground">₹0</p>
                    <p className="mt-1 text-xs text-muted-foreground">Ready to withdraw</p>
                  </div>
                  <Button variant="outline" disabled>
                    <Download />
                    Withdraw
                  </Button>
                </div>

                <EmptyState
                  icon={Download}
                  title="No payouts yet"
                  description="Payout history will appear once you start earning"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
