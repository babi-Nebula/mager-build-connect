import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Download, Clock, DollarSign, AlertTriangle } from 'lucide-react';

const ContractorReports = () => {
  const [selectedTab, setSelectedTab] = useState('project');

  // Ethiopian/Habesha-themed project data
  const projectData = [
    { name: 'Addis Ababa Office Complex - Phase 1', progress: 85, budget: 4500000, spent: 3825000, deadline: '2024-03-15' },
    { name: 'Bole Residential Area - Phase 2', progress: 45, budget: 6500000, spent: 2925000, deadline: '2024-06-30' },
    { name: 'Meskel Square Renovation - Phase 3', progress: 0, budget: 3800000, spent: 0, deadline: '2024-09-15' }
  ];

  const laborCosts = [
    { category: 'General Labor', budgeted: 1250000, actual: 1185000, variance: -65000 },
    { category: 'Skilled Trades', budgeted: 950000, actual: 1020000, variance: 70000 },
    { category: 'Equipment Operators', budgeted: 850000, actual: 832000, variance: -18000 },
    { category: 'Supervisors', budgeted: 450000, actual: 475000, variance: 25000 }
  ];

  const materialCosts = [
    { category: 'Concrete', budgeted: 1250000, actual: 1150000, variance: -100000 },
    { category: 'Steel/Rebar', budgeted: 850000, actual: 920000, variance: 70000 },
    { category: 'Aggregate', budgeted: 450000, actual: 435000, variance: -15000 },
    { category: 'Equipment Rental', budgeted: 750000, actual: 785000, variance: 35000 }
  ];

  const safetyMetrics = [
    { metric: 'Total Incidents', value: 2, target: 0, status: 'warning' },
    { metric: 'Days Without Incident', value: 12, target: 30, status: 'warning' },
    { metric: 'Safety Training Hours', value: 145, target: 120, status: 'good' },
    { metric: 'OSHA Compliance', value: 98, target: 100, status: 'good' }
  ];

  const getVarianceColor = (variance: number) => {
    if (variance < 0) return 'text-green-400';
    if (variance > 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <DashboardLayout role="contractor" userName="Habesha Contractor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
            <p className="text-muted-foreground">Track project performance, costs, and safety metrics in ETB</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Project Progress</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">65%</div>
              <p className="text-xs text-muted-foreground">Overall completion</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Utilization</CardTitle>
              <DollarSign className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">78%</div>
              <p className="text-xs text-muted-foreground">ETB 6,750,000 of ETB 8,650,000</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Schedule Performance</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">92%</div>
              <p className="text-xs text-muted-foreground">On-time completion</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Safety Score</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">85%</div>
              <p className="text-xs text-muted-foreground">2 incidents this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="project">Project Performance</TabsTrigger>
                <TabsTrigger value="financial">Financial Analysis</TabsTrigger>
                <TabsTrigger value="labor">Labor & Resources</TabsTrigger>
                <TabsTrigger value="safety">Safety & Compliance</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              {/* Project Performance */}
              <TabsContent value="project" className="space-y-6">
                {projectData.map((project, index) => (
                  <Card key={index} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                          <CardDescription>Deadline: {project.deadline}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Budget Utilization</div>
                          <div className="text-lg font-semibold text-foreground">
                            {((project.spent / project.budget) * 100).toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Budget</div>
                            <div className="font-semibold text-foreground">ETB {project.budget.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Spent</div>
                            <div className="font-semibold text-foreground">ETB {project.spent.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Remaining</div>
                            <div className="font-semibold text-foreground">ETB {(project.budget - project.spent).toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Financial Analysis */}
              <TabsContent value="financial" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Labor Costs Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {laborCosts.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                            <div>
                              <div className="font-medium text-foreground">{item.category}</div>
                              <div className="text-sm text-muted-foreground">
                                Budget: ETB {item.budgeted.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">ETB {item.actual.toLocaleString()}</div>
                              <div className={`text-sm ${getVarianceColor(item.variance)}`}>
                                {item.variance > 0 ? '+' : ''}ETB {item.variance.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Material Costs Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {materialCosts.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                            <div>
                              <div className="font-medium text-foreground">{item.category}</div>
                              <div className="text-sm text-muted-foreground">
                                Budget: ETB {item.budgeted.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">ETB {item.actual.toLocaleString()}</div>
                              <div className={`text-sm ${getVarianceColor(item.variance)}`}>
                                {item.variance > 0 ? '+' : ''}ETB {item.variance.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Labor & Resources */}
              <TabsContent value="labor" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Workforce Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                          <span className="text-foreground">Total Active Employees</span>
                          <span className="font-semibold text-foreground">32</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                          <span className="text-foreground">Average Hours/Week</span>
                          <span className="font-semibold text-foreground">42.5</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                          <span className="text-foreground">Overtime Hours This Month</span>
                          <span className="font-semibold text-foreground">156</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                          <span className="text-foreground">Average Productivity Score</span>
                          <span className="font-semibold text-foreground">87%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Safety & Compliance */}
              <TabsContent value="safety" className="space-y-6">
                <Card className="bg-muted/20 border border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Safety Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {safetyMetrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                          <div>
                            <div className="font-medium text-foreground">{metric.metric}</div>
                            <div className="text-sm text-muted-foreground">Target: {metric.target}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${getStatusColor(metric.status)}`}>
                              {metric.value}{metric.metric.includes('Compliance') ? '%' : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContractorReports;
