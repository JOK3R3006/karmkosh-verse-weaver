
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Plus,
  Edit,
  Eye,
  Download,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CreatorDashboard() {
  const [stats] = useState({
    totalEarnings: 0,
    totalSales: 0,
    activeProducts: 0,
    totalStudents: 0
  });

  const [products] = useState([
    // Empty array - new creators start with no products
  ]);

  const [recentSales] = useState([
    // Empty array - no sales yet for new creators
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Creator Dashboard</h1>
            <p className="text-gray-300">Welcome! Start by creating your first product to begin your journey.</p>
          </div>
          <Link to="/create-product">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Product
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₹{stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-gray-400">Start selling to earn revenue</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalSales}</div>
              <p className="text-xs text-gray-400">Create products to make sales</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Products</CardTitle>
              <TrendingUp className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeProducts}</div>
              <p className="text-xs text-gray-400">Ready to create your first one?</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Students</CardTitle>
              <Users className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalStudents}</div>
              <p className="text-xs text-gray-400">Build your audience</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-gray-800/50 border border-gray-700/50">
            <TabsTrigger value="products" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-300 text-gray-400">My Products</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-300 text-gray-400">Recent Sales</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-300 text-gray-400">Analytics</TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-300 text-gray-400">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Your Products</CardTitle>
                <CardDescription className="text-gray-400">Create and manage your courses and digital products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No Products Created Yet</h3>
                  <p className="text-gray-500 mb-6">Start your creator journey by creating your first digital product</p>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" asChild>
                    <Link to="/create-product">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Your First Product
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Sales</CardTitle>
                <CardDescription className="text-gray-400">Your transactions and commissions will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No Sales Yet</h3>
                  <p className="text-gray-500 mb-6">Once you create products and customers start buying, sales will appear here</p>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" asChild>
                    <Link to="/create-product">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Product to Start Selling
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p>Sales analytics will appear once you start making sales</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <DollarSign className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p>Revenue breakdown will show after your first sale</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payouts">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Payout History</CardTitle>
                <CardDescription className="text-gray-400">Track your earnings and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-700/30 border border-gray-600/30 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-300">Available for Payout</p>
                      <p className="text-sm text-gray-500">Ready to withdraw</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-400">₹0</p>
                      <Button size="sm" disabled className="opacity-50">
                        <Download className="w-3 h-3 mr-1" />
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center py-8 text-gray-500">
                    <Download className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p>Payout history will appear once you start earning</p>
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
