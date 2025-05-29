import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle, FileText, HardHat, Search } from 'lucide-react';

const SafetyCompliance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const safetyReports = [
    {
      id: 'SAF-2024-001',
      title: 'Weekly Safety Inspection',
      date: '2024-01-22',
      inspector: 'Safety Officer Mike',
      status: 'Completed',
      score: 95,
      incidents: 0,
      violations: 1,
      category: 'Weekly Inspection'
    },
    {
      id: 'SAF-2024-002',
      title: 'PPE Compliance Check',
      date: '2024-01-20',
      inspector: 'Safety Officer Sarah',
      status: 'Completed',
      score: 88,
      incidents: 0,
      violations: 3,
      category: 'Equipment Check'
    },
    {
      id: 'SAF-2024-003',
      title: 'Site Hazard Assessment',
      date: '2024-01-18',
      inspector: 'Safety Manager Tom',
      status: 'In Progress',
      score: 92,
      incidents: 1,
      violations: 2,
      category: 'Hazard Assessment'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400';
      case 'Failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const filteredReports = safetyReports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.inspector.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Safety & Compliance</h2>
            <p className="text-muted-foreground">Monitor safety reports, compliance status, and incident tracking</p>
          </div>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Safety Manual
          </Button>
        </div>

        {/* Safety Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Safety Score</CardTitle>
              <Shield className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">92%</div>
              <p className="text-xs text-muted-foreground">Current month average</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Days Without Incident</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">127</div>
              <p className="text-xs text-muted-foreground">Consecutive days</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Violations</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">6</div>
              <p className="text-xs text-muted-foreground">Being addressed</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Rate</CardTitle>
              <Hard Hat className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">97%</div>
              <p className="text-xs text-muted-foreground">OSHA standards</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search safety reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Safety Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Safety Reports</TabsTrigger>
                <TabsTrigger value="incidents">Incidents</TabsTrigger>
                <TabsTrigger value="training">Training Records</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <Card key={report.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{report.id} - {report.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">Category: {report.category}</p>
                              <div className="text-sm text-muted-foreground mt-1">
                                Inspector: {report.inspector} • Date: {report.date}
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                              <div className={`text-lg font-bold ${getScoreColor(report.score)}`}>
                                {report.score}%
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Safety Score</span>
                              <span className="text-foreground">{report.score}%</span>
                            </div>
                            <Progress value={report.score} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Incidents</div>
                              <div className={`font-semibold ${report.incidents > 0 ? 'text-red-400' : 'text-green-400'}`}>
                                {report.incidents}
                              </div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Violations</div>
                              <div className={`font-semibold ${report.violations > 0 ? 'text-yellow-400' : 'text-green-400'}`}>
                                {report.violations}
                              </div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Status</div>
                              <div className="font-semibold text-foreground">{report.status}</div>
                            </div>
                          </div>

                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">View Report</Button>
                            <Button variant="outline" size="sm">Download PDF</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="incidents" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No incidents reported this month. Keep up the great work!</p>
                </div>
              </TabsContent>

              <TabsContent value="training" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Training records and certifications coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SafetyCompliance;
