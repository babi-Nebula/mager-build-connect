import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const FinancialProgress = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Sample financial data
  const financialData = [
    { month: 'Meskerem', revenue: 4800000, expenses: 3550000, profit: 1250000 },
    { month: 'Tikimt', revenue: 5200000, expenses: 3900000, profit: 1300000 },
    { month: 'Hidar', revenue: 6100000, expenses: 4300000, profit: 1800000 },
    { month: 'Tahsas', revenue: 5700000, expenses: 4100000, profit: 1600000 },
    { month: 'Tir', revenue: 6300000, expenses: 4500000, profit: 1800000 },
    { month: 'Yekatit', revenue: 6500000, expenses: 4800000, profit: 1700000 }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Financial & Progress Visualization</h2>
                <p className="text-muted-foreground">
                  Overview of contractor financials, budget burn rate, and progress
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Key Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">Br 36.8M</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+14% from last period</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Total Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Br 10.4M</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+9% from last period</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Budget Burn Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">72%</div>
                  <Progress value={72} className="h-2 mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-orange-600">Avg Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">86%</div>
                  <Progress value={86} className="h-2 mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Financial Table */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Financial Overview</CardTitle>
                <CardDescription>Revenue, Expenses, and Profit per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {financialData.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-muted/5">
                    <div className="font-medium">{month.month}</div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">Br {(month.revenue / 1000).toFixed(0)}K</div>
                        <div className="text-muted-foreground">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-red-600">Br {(month.expenses / 1000).toFixed(0)}K</div>
                        <div className="text-muted-foreground">Expenses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600">Br {(month.profit / 1000).toFixed(0)}K</div>
                        <div className="text-muted-foreground">Profit</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default FinancialProgress;
