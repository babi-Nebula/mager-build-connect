
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { DollarSign, CreditCard, Calendar, Download, AlertCircle, CheckCircle, Clock, FileText } from 'lucide-react';

const PaymentsBilling = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const paymentSchedule = [
    {
      id: 1,
      milestone: 'Contract Signing',
      amount: 50000,
      dueDate: '2024-01-15',
      status: 'Paid',
      paidDate: '2024-01-14',
      description: 'Initial contract payment - 10% of total project cost'
    },
    {
      id: 2,
      milestone: 'Foundation Complete',
      amount: 100000,
      dueDate: '2024-02-01',
      status: 'Due',
      paidDate: null,
      description: 'Payment upon completion of foundation work - 20% of total project cost'
    },
    {
      id: 3,
      milestone: 'Structure Frame Complete',
      amount: 150000,
      dueDate: '2024-03-15',
      status: 'Pending',
      paidDate: null,
      description: 'Payment upon completion of structural framing - 30% of total project cost'
    },
    {
      id: 4,
      milestone: 'MEP Rough-In Complete',
      amount: 100000,
      dueDate: '2024-05-01',
      status: 'Pending',
      paidDate: null,
      description: 'Payment upon completion of MEP rough-in work - 20% of total project cost'
    },
    {
      id: 5,
      milestone: 'Project Completion',
      amount: 100000,
      dueDate: '2024-07-15',
      status: 'Pending',
      paidDate: null,
      description: 'Final payment upon project completion and final inspection - 20% of total project cost'
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      amount: 50000,
      issueDate: '2024-01-10',
      dueDate: '2024-01-15',
      status: 'Paid',
      paidDate: '2024-01-14',
      description: 'Contract Signing Milestone'
    },
    {
      id: 'INV-2024-002',
      amount: 100000,
      issueDate: '2024-01-25',
      dueDate: '2024-02-01',
      status: 'Outstanding',
      paidDate: null,
      description: 'Foundation Complete Milestone'
    },
    {
      id: 'EXP-2024-001',
      amount: 2500,
      issueDate: '2024-01-20',
      dueDate: '2024-01-25',
      status: 'Pending Approval',
      paidDate: null,
      description: 'Additional excavation work - Change Order #001'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-500/20 text-green-400';
      case 'Due': return 'bg-red-500/20 text-red-400';
      case 'Outstanding': return 'bg-red-500/20 text-red-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Pending Approval': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'Due': return <AlertCircle className="h-4 w-4 text-red-400" />;
      case 'Outstanding': return <AlertCircle className="h-4 w-4 text-red-400" />;
      case 'Pending': return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'Pending Approval': return <Clock className="h-4 w-4 text-blue-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const totalProject = 500000;
  const totalPaid = 50000;
  const progressPercentage = (totalPaid / totalProject) * 100;

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Payments & Billing</h2>
            <p className="text-muted-foreground">Track project payments, invoices, and billing information</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Statements
            </Button>
            <Button>
              <CreditCard className="h-4 w-4 mr-2" />
              Make Payment
            </Button>
          </div>
        </div>

        {/* Payment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Project Value</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${totalProject.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${totalPaid.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${(100000).toLocaleString()}</div>
              <p className="text-xs text-red-400">Due Feb 1, 2024</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Progress</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{progressPercentage.toFixed(1)}%</div>
              <Progress value={progressPercentage} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Payment Details */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Payment Schedule</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-4">
                  {paymentSchedule.map((payment) => (
                    <Card key={payment.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              {getStatusIcon(payment.status)}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{payment.milestone}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{payment.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Due: {payment.dueDate}
                                </span>
                                {payment.paidDate && (
                                  <span className="flex items-center text-green-400">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Paid: {payment.paidDate}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-foreground">
                              ${payment.amount.toLocaleString()}
                            </div>
                            <Badge className={getStatusColor(payment.status)}>
                              {payment.status}
                            </Badge>
                            {payment.status === 'Due' && (
                              <div className="mt-2">
                                <Button size="sm">Pay Now</Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="invoices" className="space-y-4">
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <Card key={invoice.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{invoice.id}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{invoice.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                                <span>Issued: {invoice.issueDate}</span>
                                <span>•</span>
                                <span>Due: {invoice.dueDate}</span>
                                {invoice.paidDate && (
                                  <>
                                    <span>•</span>
                                    <span className="text-green-400">Paid: {invoice.paidDate}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-foreground">
                              ${invoice.amount.toLocaleString()}
                            </div>
                            <Badge className={getStatusColor(invoice.status)}>
                              {invoice.status}
                            </Badge>
                            <div className="mt-2 space-x-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                              {invoice.status === 'Outstanding' && (
                                <Button size="sm">Pay Now</Button>
                              )}
                            </div>
                          </div>
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
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PaymentsBilling;
