import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, AlertCircle, Plus, Search, Camera, FileText } from 'lucide-react';

const QualityControl = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('inspections');

  const inspections = [
    {
      id: 1,
      type: 'Foundation Inspection',
      project: 'Downtown Office Complex',
      inspector: 'John Martinez',
      date: '2024-01-22',
      status: 'Passed',
      score: 95,
      issues: 1,
      nextInspection: '2024-02-05',
      phase: 'Foundation'
    },
    {
      id: 2,
      type: 'Structural Steel Inspection',
      project: 'Residential Community Phase 1',
      inspector: 'David Thompson',
      date: '2024-01-20',
      status: 'Failed',
      score: 72,
      issues: 5,
      nextInspection: '2024-01-27',
      phase: 'Structure'
    },
    {
      id: 3,
      type: 'Electrical Rough-In',
      project: 'Downtown Office Complex',
      inspector: 'Robert Wilson',
      date: '2024-01-18',
      status: 'Conditional',
      score: 88,
      issues: 2,
      nextInspection: '2024-01-30',
      phase: 'MEP'
    }
  ];

  const qualityIssues = [
    {
      id: 1,
      title: 'Concrete Pour - Surface Finish',
      project: 'Downtown Office Complex',
      severity: 'Medium',
      reportedBy: 'Miguel Rodriguez',
      date: '2024-01-21',
      status: 'Open',
      description: 'Surface finish does not meet specifications in section B-3',
      assignedTo: 'Quality Team',
      dueDate: '2024-01-25'
    },
    {
      id: 2,
      title: 'Rebar Spacing - Non-Compliant',
      project: 'Residential Community Phase 1',
      severity: 'High',
      reportedBy: 'John Martinez',
      date: '2024-01-20',
      status: 'In Progress',
      description: 'Rebar spacing exceeds tolerance in foundation wall section',
      assignedTo: 'Structural Team',
      dueDate: '2024-01-24'
    },
    {
      id: 3,
      title: 'Material Delivery - Wrong Grade',
      project: 'Industrial Warehouse',
      severity: 'Low',
      reportedBy: 'Sarah Davis',
      date: '2024-01-19',
      status: 'Resolved',
      description: 'Steel delivered was Grade 40 instead of Grade 60',
      assignedTo: 'Procurement',
      dueDate: '2024-01-22'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed': return 'bg-green-500/20 text-green-400';
      case 'Failed': return 'bg-red-500/20 text-red-400';
      case 'Conditional': return 'bg-yellow-500/20 text-yellow-400';
      case 'Pending': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-500/20 text-red-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getIssueStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Open': return 'bg-yellow-500/20 text-yellow-400';
      case 'Overdue': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const filteredInspections = inspections.filter(inspection =>
    inspection.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inspection.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inspection.inspector.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="contractor" userName="Contractor Smith">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Quality Control</h2>
            <p className="text-muted-foreground">Monitor inspections, quality issues, and compliance</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Take Photos
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              New Inspection
            </Button>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pass Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">87%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">Across all projects</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Critical Issues</CardTitle>
              <XCircle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">Requires immediate attention</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Quality Score</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">85</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search inspections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Quality Control Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inspections">Inspections</TabsTrigger>
                <TabsTrigger value="issues">Quality Issues</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="inspections" className="space-y-6">
                {filteredInspections.map((inspection) => (
                  <Card key={inspection.id} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground">{inspection.type}</CardTitle>
                          <CardDescription className="mt-1">
                            Project: {inspection.project} • Phase: {inspection.phase}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            Inspector: {inspection.inspector} • Date: {inspection.date}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getStatusColor(inspection.status)}>
                            {inspection.status}
                          </Badge>
                          <div className={`text-lg font-bold ${getScoreColor(inspection.score)}`}>
                            {inspection.score}%
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Quality Score</span>
                            <span className="text-foreground">{inspection.score}%</span>
                          </div>
                          <Progress value={inspection.score} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Issues Found</div>
                            <div className={`font-semibold ${inspection.issues > 0 ? 'text-red-400' : 'text-green-400'}`}>
                              {inspection.issues}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Next Inspection</div>
                            <div className="font-semibold text-foreground">{inspection.nextInspection}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Status</div>
                            <div className="font-semibold text-foreground">{inspection.status}</div>
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">View Report</Button>
                          <Button variant="outline" size="sm">Add Photos</Button>
                          <Button variant="outline" size="sm">Re-inspect</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="issues" className="space-y-6">
                {qualityIssues.map((issue) => (
                  <Card key={issue.id} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground">{issue.title}</CardTitle>
                          <CardDescription className="mt-1">
                            Project: {issue.project}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            Reported by: {issue.reportedBy} • Date: {issue.date}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getSeverityColor(issue.severity)}>
                            {issue.severity}
                          </Badge>
                          <Badge className={getIssueStatusColor(issue.status)}>
                            {issue.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-background/50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-foreground">Description</div>
                          <div className="text-sm text-muted-foreground mt-1">{issue.description}</div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Assigned To</div>
                            <div className="font-semibold text-foreground">{issue.assignedTo}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Due Date</div>
                            <div className="font-semibold text-foreground">{issue.dueDate}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Severity</div>
                            <div className="font-semibold text-foreground">{issue.severity}</div>
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">Update Status</Button>
                          <Button variant="outline" size="sm">Add Comment</Button>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Quality control reports coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default QualityControl;
