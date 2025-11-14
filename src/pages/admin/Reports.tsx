import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Download } from 'lucide-react';

const Reports = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  const performanceData = [
    { name: 'Bereket Hailemariam', company: 'EthioBuild Contractors', completed: 7, inProgress: 1, completion: 96, revenue: 'Br 1.3M' },
    { name: 'Eden Mulugeta', company: 'Addis Concrete Works', completed: 5, inProgress: 2, completion: 92, revenue: 'Br 980K' },
    { name: 'Dawit Alemu', company: 'Abay General Construction', completed: 4, inProgress: 3, completion: 81, revenue: 'Br 720K' },
    { name: 'Mihret Tadesse', company: 'Blue Nile Plumbing', completed: 3, inProgress: 1, completion: 87, revenue: 'Br 430K' },
    { name: 'Samuel Tesfaye', company: 'Hawassa Roofing & Works', completed: 1, inProgress: 2, completion: 54, revenue: 'Br 190K' }
  ];

  const financialData = [
    { month: 'Meskerem', revenue: 4800000, expenses: 3550000, profit: 1250000 },
    { month: 'Tikimt', revenue: 5200000, expenses: 3900000, profit: 1300000 },
    { month: 'Hidar', revenue: 6100000, expenses: 4300000, profit: 1800000 },
    { month: 'Tahsas', revenue: 5700000, expenses: 4100000, profit: 1600000 },
    { month: 'Tir', revenue: 6300000, expenses: 4500000, profit: 1800000 },
    { month: 'Yekatit', revenue: 6500000, expenses: 4800000, profit: 1700000 }
  ];

  const getCompletionColor = (completion) => {
    if (completion >= 90) return 'text-green-600';
    if (completion >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
                <p className="text-muted-foreground">Ethiopian localized construction performance & financial reports</p>
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">Br 18.4M</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+12.5% from last period</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Total Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Br 5.7M</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+8.3% from last period</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Projects Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">26</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+15% from last period</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-orange-600">Avg Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">89%</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+5.2% from last period</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="performance" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="performance">Contractor Performance</TabsTrigger>
                <TabsTrigger value="financial">Financial Reports</TabsTrigger>
                <TabsTrigger value="projects">Project Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contractor Performance Overview</CardTitle>
                    <CardDescription>Performance of Ethiopian contractors</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {performanceData.map((contractor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-muted/5">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contractor.name}</h4>
                          <p className="text-sm text-muted-foreground">{contractor.company}</p>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{contractor.completed}</div>
                            <div className="text-muted-foreground">Completed</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-blue-600">{contractor.inProgress}</div>
                            <div className="text-muted-foreground">In Progress</div>
                          </div>
                          <div className="text-center">
                            <div className={`font-semibold ${getCompletionColor(contractor.completion)}`}>{contractor.completion}%</div>
                            <div className="text-muted-foreground">Completion</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-primary">{contractor.revenue}</div>
                            <div className="text-muted-foreground">Revenue</div>
                          </div>
                        </div>
                        <div className="w-24">
                          <Progress value={contractor.completion} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financial" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Financial Overview</CardTitle>
                      <CardDescription>Ethiopian ETB Financial Data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {financialData.map((month, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="font-medium">{month.month}</div>
                          <div className="flex items-center gap-4 text-sm">
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

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Financial Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Profit Margin</span>
                          <span className="font-semibold text-green-600">24.8%</span>
                        </div>
                        <Progress value={24.8} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>ROI</span>
                          <span className="font-semibold text-blue-600">18.5%</span>
                        </div>
                        <Progress value={18.5} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Revenue Growth</span>
                          <span className="font-semibold text-purple-600">12.3%</span>
                        </div>
                        <Progress value={12.3} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Cost Efficiency</span>
                          <span className="font-semibold text-orange-600">82.1%</span>
                        </div>
                        <Progress value={82.1} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Project Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Completed</span>
                        <Badge className="bg-green-500/20 text-green-600">26</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>In Progress</span>
                        <Badge className="bg-blue-500/20 text-blue-600">14</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Planning</span>
                        <Badge className="bg-yellow-500/20 text-yellow-600">6</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>On Hold</span>
                        <Badge className="bg-red-500/20 text-red-600">3</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Project Types</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Residential</span>
                        <Badge variant="outline">48%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Commercial</span>
                        <Badge variant="outline">32%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Industrial</span>
                        <Badge variant="outline">12%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Government</span>
                        <Badge variant="outline">8%</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Timeline Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>On Time</span>
                          <span className="text-green-600">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Delayed</span>
                          <span className="text-yellow-600">11%</span>
                        </div>
                        <Progress value={11} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Ahead</span>
                          <span className="text-blue-600">7%</span>
                        </div>
                        <Progress value={7} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Reports;
