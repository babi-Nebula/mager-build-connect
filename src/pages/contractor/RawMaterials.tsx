import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Package, Plus, Search, AlertTriangle, TrendingDown, ShoppingCart } from 'lucide-react';

const RawMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('inventory');

  const materials = [
    {
      id: 1,
      name: 'Portland Cement',
      category: 'Concrete',
      supplier: 'CementCorp Ltd',
      currentStock: 450,
      minStock: 200,
      maxStock: 800,
      unit: 'bags',
      unitPrice: 12.50,
      totalValue: 5625,
      lastOrdered: '2024-01-15',
      status: 'In Stock',
      location: 'Warehouse A-1'
    },
    {
      id: 2,
      name: 'Rebar #4',
      category: 'Steel',
      supplier: 'Steel Solutions Inc',
      currentStock: 85,
      minStock: 100,
      maxStock: 500,
      unit: 'pieces',
      unitPrice: 25.00,
      totalValue: 2125,
      lastOrdered: '2024-01-10',
      status: 'Low Stock',
      location: 'Yard B-2'
    },
    {
      id: 3,
      name: 'Concrete Blocks',
      category: 'Masonry',
      supplier: 'Block Masters',
      currentStock: 1200,
      minStock: 500,
      maxStock: 2000,
      unit: 'pieces',
      unitPrice: 3.75,
      totalValue: 4500,
      lastOrdered: '2024-01-12',
      status: 'In Stock',
      location: 'Yard C-1'
    },
    {
      id: 4,
      name: 'Aggregate Sand',
      category: 'Aggregate',
      supplier: 'Sandy Supplies',
      currentStock: 15,
      minStock: 20,
      maxStock: 100,
      unit: 'tons',
      unitPrice: 45.00,
      totalValue: 675,
      lastOrdered: '2024-01-08',
      status: 'Critical',
      location: 'Stockpile A'
    }
  ];

  const orders = [
    {
      id: 1,
      orderNumber: 'PO-2024-001',
      supplier: 'CementCorp Ltd',
      items: 'Portland Cement (200 bags)',
      orderDate: '2024-01-20',
      expectedDelivery: '2024-01-25',
      totalAmount: 2500,
      status: 'Pending'
    },
    {
      id: 2,
      orderNumber: 'PO-2024-002',
      supplier: 'Steel Solutions Inc',
      items: 'Rebar #4 (150 pieces)',
      orderDate: '2024-01-18',
      expectedDelivery: '2024-01-23',
      totalAmount: 3750,
      status: 'Shipped'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-500/20 text-green-400';
      case 'Low Stock': return 'bg-yellow-500/20 text-yellow-400';
      case 'Critical': return 'bg-red-500/20 text-red-400';
      case 'Out of Stock': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-500/20 text-green-400';
      case 'Shipped': return 'bg-blue-500/20 text-blue-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const filteredMaterials = materials.filter(material =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="contractor" userName="Contractor Smith">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Raw Materials</h2>
            <p className="text-muted-foreground">Manage inventory, orders, and material tracking</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              New Order
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Materials</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">156</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
              <TrendingDown className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Critical Items</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
              <Package className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$125,450</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="inventory" className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Material</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Stock Level</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMaterials.map((material) => (
                      <TableRow key={material.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div className="text-foreground">{material.name}</div>
                            <div className="text-sm text-muted-foreground">{material.supplier}</div>
                          </div>
                        </TableCell>
                        <TableCell>{material.category}</TableCell>
                        <TableCell>
                          <div className="space-y-2">
                            <div className="text-sm">
                              {material.currentStock} / {material.maxStock} {material.unit}
                            </div>
                            <Progress 
                              value={getStockPercentage(material.currentStock, material.maxStock)} 
                              className="h-2"
                            />
                          </div>
                        </TableCell>
                        <TableCell>{material.location}</TableCell>
                        <TableCell>${material.unitPrice}</TableCell>
                        <TableCell>${material.totalValue.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(material.status)}>
                            {material.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Order</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Order Date</TableHead>
                      <TableHead>Expected Delivery</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.orderNumber}</TableCell>
                        <TableCell>{order.supplier}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>{order.expectedDelivery}</TableCell>
                        <TableCell>${order.totalAmount.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getOrderStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Track</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="suppliers" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Supplier management coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RawMaterials;
