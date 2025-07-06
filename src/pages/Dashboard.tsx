
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  IndianRupee,
  BarChart3,
  Settings,
  Package,
  MessageSquare,
  Calendar
} from "lucide-react";

export default function Dashboard() {
  // Realistic starter data
  const stats = {
    totalRevenue: 0,
    totalSales: 0,
    totalCustomers: 0,
    conversionRate: 0,
    monthlyRevenue: 0,
    monthlyGrowth: 0
  };

  const recentProducts = [
    // Empty array for new users - they'll add products
  ];

  const recentOrders = [
    // Empty array for new users - no orders yet
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Creator Dashboard</h1>
            <p className="text-gray-300">Start your journey - create your first product to begin earning</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
              <Link to="/analytics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" asChild>
              <Link to="/create-product">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Product
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Revenue</CardTitle>
              <IndianRupee className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₹{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-gray-400">
                Start selling to see revenue growth
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Sales</CardTitle>
              <Package className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalSales}</div>
              <p className="text-xs text-gray-400">
                Create products to start making sales
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Customers</CardTitle>
              <Users className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalCustomers}</div>
              <p className="text-xs text-gray-400">
                Build your customer base
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.conversionRate}%</div>
              <p className="text-xs text-gray-400">
                Track performance as you grow
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Your Products</CardTitle>
                  <Button variant="outline" size="sm" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
                    <Link to="/create-product">Create First Product</Link>
                  </Button>
                </div>
                <CardDescription className="text-gray-400">
                  You haven't created any products yet. Start your journey!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No Products Yet</h3>
                  <p className="text-gray-500 mb-6">Create your first digital product to start earning</p>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" asChild>
                    <Link to="/create-product">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Product
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Recent Orders</CardTitle>
                  <Button variant="outline" size="sm" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10" disabled>
                    View All
                  </Button>
                </div>
                <CardDescription className="text-gray-400">
                  Your customer orders will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No Orders Yet</h3>
                  <p className="text-gray-500">Orders from customers will show up here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" asChild>
                  <Link to="/create-product">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Product
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
                  <Link to="/analytics">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
                  <Link to="/customers">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Customers
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start border-pink-500/50 text-pink-400 hover:bg-pink-500/10" asChild>
                  <Link to="/settings">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Goals Progress */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Getting Started Goals</CardTitle>
                <CardDescription className="text-gray-400">Complete these steps to launch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Create First Product</span>
                    <span className="text-gray-400">0 / 1</span>
                  </div>
                  <Progress value={0} className="h-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Get First Customer</span>
                    <span className="text-gray-400">0 / 1</span>
                  </div>
                  <Progress value={0} className="h-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Reach ₹1000 Revenue</span>
                    <span className="text-gray-400">₹0 / ₹1000</span>
                  </div>
                  <Progress value={0} className="h-2 bg-gray-700" />
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">💡 Getting Started Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                  <p className="font-medium text-pink-300">Start with what you know</p>
                  <p className="text-pink-200/80">Create content about your expertise or skills</p>
                </div>
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="font-medium text-purple-300">Keep it simple initially</p>
                  <p className="text-purple-200/80">Launch with one product and iterate based on feedback</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
