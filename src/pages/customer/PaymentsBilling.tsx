import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, DollarSign, Calendar, Download, AlertCircle, CheckCircle } from 'lucide-react';

const PaymentsBilling = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Sample invoices
  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      amount: 45000,
      status: 'Paid',
      dueDate: '2024-01-30',
      description: 'Foundation & Site Preparation',
      milestone: 'Phase 1 Completion'
    },
    {
      id: 'INV-2024-002',
      date: '2024-01-22',
      amount: 38500,
      status: 'Pending',
      dueDate: '2024-02-05',
      description: 'Structural Framework',
      milestone: 'Phase 2 Progress Payment'
    },
    {
      id: 'INV-2024-003',
      date: '2024-01-25',
      amount: 22000,
      status: 'Overdue',
      dueDate: '2024-01-28',
      description: 'Material Delivery - Steel',
      milestone: 'Material Payment'
    }
  ];

  // Helper to get badge color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-500/20 text-green-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Overdue': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  // Format currency as Ethiopian Birr
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Payments & Billing</h2>
            <p className="text-muted-foreground">Manage invoices, payments, and billing information</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Statement
          </Button>
        </div>

        {/* Payment Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Project Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatCurrency(485000)}</div>
              <p className="text-xs text-muted-foreground">Contract value</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatCurrency(105500)}</div>
              <p className="text-xs text-muted-foreground">21.8% of total</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatCurrency(60500)}</div>
              <p className="text-xs text-muted-foreground">Due this month</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Next Payment</CardTitle>
              <Calendar className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Feb 5</div>
              <p className="text-xs text-muted-foreground">{formatCurrency(38500)} due</p>
            </CardContent>
          </Card>
        </div>

        {/* Billing Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Invoice Overview</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
                <TabsTrigger value="methods">Payment Methods</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <Card key={invoice.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{invoice.id}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{invoice.description}</p>
                            <div className="text-sm text-muted-foreground mt-1">
                              Milestone: {invoice.milestone}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-foreground">
                              {formatCurrency(invoice.amount)}
                            </div>
                            <Badge className={getStatusColor(invoice.status)}>
                              {invoice.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Invoice Date</div>
                            <div className="font-semibold text-foreground">{invoice.date}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Due Date</div>
                            <div className="font-semibold text-foreground">{invoice.dueDate}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Status</div>
                            <div className="font-semibold text-foreground">{invoice.status}</div>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Download PDF</Button>
                          {invoice.status === 'Pending' && (
                            <Button size="sm">Pay Now</Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Payment history will be displayed here...</p>
                </div>
              </TabsContent>

              <TabsContent value="methods" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Payment methods management coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PaymentsBilling;
