import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Download, Calendar, DollarSign, Clock, Users, TrendingUp, AlertTriangle } from 'lucide-react';

const ContractorReports = () => {
  const [selectedTab, setSelectedTab] = useState('project');

  const projectData = [
    { name: 'Phase 1 - Foundation', progress: 85, budget: 450000, spent: 382500, deadline: '2024-03-15' },
    { name: 'Phase 2 - Structure', progress: 45, budget: 650000, spent: 292500, deadline: '2024-06-30' },
    { name: 'Phase 3 - Finishing', progress: 0, budget: 380000, spent: 0, deadline: '2024-09-15' }
  ];

  const laborCosts = [
    { category: 'General Labor', budgeted: 125000, actual: 118500, variance: -6500 },
    { category: 'Skilled Trades', budgeted: 95000, actual: 102000, variance: 7000 },
    { category: 'Equipment Operators', budgeted: 85000, actual: 83200, variance: -1800 },
    { category: 'Supervisors', budgeted: 45000, actual: 47500, variance: 2500 }
  ];

  const materialCosts = [
    { category: 'Concrete', budgeted: 125000, actual: 115000, variance: -10000 },
    { category: 'Steel/Rebar', budgeted: 85000, actual: 92000, variance: 7000 },
    { category: 'Aggregate', budgeted: 45000, actual: 43500, variance: -1500 },
    { category: 'Equipment Rental', budgeted: 75000, actual: 78500, variance: 3500 }
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
    <DashboardLayout role="contractor" userName="Contractor Smith">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
            <p className="text-muted-foreground">Track project performance, costs, and safety metrics</p>
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
              <p className="text-xs text-muted-foreground">$675k of $865k</p>
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
              <TabsContent value="project" className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
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
                              <div className="font-semibold text-foreground">${project.budget.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Spent</div>
                              <div className="font-semibold text-foreground">${project.spent.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Remaining</div>
                              <div className="font-semibold text-foreground">${(project.budget - project.spent).toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

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
                                Budget: ${item.budgeted.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">${item.actual.toLocaleString()}</div>
                              <div className={`text-sm ${getVarianceColor(item.variance)}`}>
                                {item.variance > 0 ? '+' : ''}${item.variance.toLocaleString()}
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
                                Budget: ${item.budgeted.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">${item.actual.toLocaleString()}</div>
                              <div className={`text-sm ${getVarianceColor(item.variance)}`}>
                                {item.variance > 0 ? '+' : ''}${item.variance.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

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

                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Equipment Utilization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Excavators</span>
                            <span className="text-foreground">85% utilized</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Concrete Mixers</span>
                            <span className="text-foreground">92% utilized</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Cranes</span>
                            <span className="text-foreground">68% utilized</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Bulldozers</span>
                            <span className="text-foreground">74% utilized</span>
                          </div>
                          <Progress value={74} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Recent Safety Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-background/50 border-l-4 border-yellow-500">
                          <div className="font-medium text-foreground">Minor Injury - Hand Cut</div>
                          <div className="text-sm text-muted-foreground">Employee: John Martinez</div>
                          <div className="text-sm text-muted-foreground">Date: Jan 18, 2024</div>
                          <div className="text-sm text-muted-foreground">Status: Investigated</div>
                        </div>
                        <div className="p-3 rounded-lg bg-background/50 border-l-4 border-red-500">
                          <div className="font-medium text-foreground">Near Miss - Equipment</div>
                          <div className="text-sm text-muted-foreground">Location: Phase 2 Site</div>
                          <div className="text-sm text-muted-foreground">Date: Jan 15, 2024</div>
                          <div className="text-sm text-muted-foreground">Status: Under Review</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContractorReports;
