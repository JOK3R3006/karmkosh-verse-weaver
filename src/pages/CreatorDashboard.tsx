
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
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CreatorDashboard() {
  const [stats] = useState({
    totalEarnings: 45250,
    totalSales: 127,
    activeProducts: 8,
    totalStudents: 1543
  });

  const [products] = useState([
    {
      id: 1,
      title: "Complete Web Development Course",
      price: 2999,
      sales: 45,
      earnings: 12157,
      status: "published"
    },
    {
      id: 2,
      title: "React Masterclass",
      price: 1999,
      sales: 32,
      earnings: 5757,
      status: "published"
    },
    {
      id: 3,
      title: "Digital Marketing Blueprint",
      price: 1499,
      sales: 28,
      earnings: 3777,
      status: "published"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      price: 2499,
      sales: 22,
      earnings: 4948,
      status: "draft"
    }
  ]);

  const [recentSales] = useState([
    { id: 1, product: "Complete Web Development Course", buyer: "Rahul S.", amount: 2999, date: "2024-01-15", commission: 300 },
    { id: 2, product: "React Masterclass", buyer: "Priya M.", amount: 1999, date: "2024-01-14", commission: 200 },
    { id: 3, product: "Digital Marketing Blueprint", buyer: "Amit K.", amount: 1499, date: "2024-01-14", commission: 150 },
    { id: 4, product: "Complete Web Development Course", buyer: "Sneha R.", amount: 2999, date: "2024-01-13", commission: 300 },
    { id: 5, product: "UI/UX Design Fundamentals", buyer: "Vikash T.", amount: 2499, date: "2024-01-12", commission: 250 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Creator Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your performance overview.</p>
          </div>
          <Link to="/create-product">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Product
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSales}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProducts}</div>
              <p className="text-xs text-muted-foreground">2 pending review</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="sales">Recent Sales</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your courses and digital products</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Earnings</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.title}</TableCell>
                        <TableCell>₹{product.price}</TableCell>
                        <TableCell>{product.sales}</TableCell>
                        <TableCell>₹{product.earnings}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === 'published' ? 'default' : 'secondary'}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Your latest transactions and commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Commission (10%)</TableHead>
                      <TableHead>Your Earnings</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.product}</TableCell>
                        <TableCell>{sale.buyer}</TableCell>
                        <TableCell>₹{sale.amount}</TableCell>
                        <TableCell className="text-red-600">-₹{sale.commission}</TableCell>
                        <TableCell className="text-green-600 font-medium">₹{sale.amount - sale.commission}</TableCell>
                        <TableCell>{sale.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    Sales chart would go here
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    Revenue chart would go here
                  </div>
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
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">Available for Payout</p>
                      <p className="text-sm text-gray-600">Ready to withdraw</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">₹8,450</p>
                      <Button size="sm">
                        <Download className="w-3 h-3 mr-1" />
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center py-8 text-gray-500">
                    Payout history table would go here
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
