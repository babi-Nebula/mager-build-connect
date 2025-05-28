
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, AlertTriangle, CheckCircle, XCircle, FileText, Calendar, Search, Download, Bell } from 'lucide-react';

const SafetyCompliance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [filterStatus, setFilterStatus] = useState('all');

  const safetyMetrics = {
    totalIncidents: 2,
    daysWithoutIncident: 45,
    complianceScore: 94,
    lastInspection: '2024-01-20',
    nextInspection: '2024-02-20'
  };

  const safetyReports = [
    {
      id: 'SR-2024-001',
      title: 'Monthly Safety Inspection Report',
      type: 'Inspection',
      date: '2024-01-20',
      inspector: 'Safety Inspector Johnson',
      status: 'Compliant',
      score: 96,
      issues: 1,
      description: 'Comprehensive monthly safety audit and compliance check',
      category: 'General Safety'
    },
    {
      id: 'SR-2024-002',
      title: 'PPE Compliance Check',
      type: 'Compliance',
      date: '2024-01-18',
      inspector: 'Site Safety Officer',
      status: 'Compliant',
      score: 98,
      issues: 0,
      description: 'Personal Protective Equipment usage verification',
      category: 'PPE'
    },
    {
      id: 'SR-2024-003',
      title: 'Equipment Safety Certification',
      type: 'Certification',
      date: '2024-01-15',
      inspector: 'Equipment Inspector',
      status: 'Pending',
      score: null,
      issues: 0,
      description: 'Heavy machinery safety certification review',
      category: 'Equipment'
    }
  ];

  const incidents = [
    {
      id: 'INC-2024-001',
      title: 'Minor Cut on Hand',
      date: '2024-01-10',
      severity: 'Minor',
      status: 'Resolved',
      reportedBy: 'John Smith',
      description: 'Worker sustained minor cut while handling materials',
      actionTaken: 'First aid administered, safety briefing conducted',
      category: 'Injury',
      location: 'Site Area B'
    },
    {
      id: 'INC-2024-002',
      title: 'Near Miss - Falling Object',
      date: '2024-01-05',
      severity: 'Medium',
      status: 'Investigated',
      reportedBy: 'Safety Officer',
      description: 'Tool nearly fell from scaffolding in work area',
      actionTaken: 'Additional safety nets installed, toolbox talk given',
      category: 'Near Miss',
      location: 'Site Area A'
    }
  ];

  const complianceChecks = [
    {
      id: 'CC-001',
      item: 'OSHA 30-Hour Training',
      status: 'Compliant',
      lastCheck: '2024-01-20',
      nextDue: '2025-01-20',
      responsible: 'HR Department'
    },
    {
      id: 'CC-002',
      item: 'Fall Protection Certification',
      status: 'Compliant',
      lastCheck: '2024-01-15',
      nextDue: '2024-07-15',
      responsible: 'Safety Department'
    },
    {
      id: 'CC-003',
      item: 'Fire Safety Plan Update',
      status: 'Due Soon',
      lastCheck: '2023-12-01',
      nextDue: '2024-02-01',
      responsible: 'Site Manager'
    },
    {
      id: 'CC-004',
      item: 'Emergency Response Drill',
      status: 'Overdue',
      lastCheck: '2023-11-15',
      nextDue: '2024-01-15',
      responsible: 'Safety Officer'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'bg-green-500/20 text-green-400';
      case 'Non-Compliant': return 'bg-red-500/20 text-red-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Due Soon': return 'bg-yellow-500/20 text-yellow-400';
      case 'Overdue': return 'bg-red-500/20 text-red-400';
      case 'Resolved': return 'bg-green-500/20 text-green-400';
      case 'Investigated': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/20 text-red-400';
      case 'High': return 'bg-orange-500/20 text-orange-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Minor': return 'bg-green-500/20 text-green-400';
      case 'Low': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Safety & Compliance</h2>
            <p className="text-muted-foreground">Monitor workplace safety, incidents, and regulatory compliance</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Safety Alerts
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        {/* Safety Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Safety Score</CardTitle>
              <Shield className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{safetyMetrics.complianceScore}%</div>
              <Progress value={safetyMetrics.complianceScore} className="mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Days Without Incident</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{safetyMetrics.daysWithoutIncident}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Incidents</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{safetyMetrics.totalIncidents}</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Last Inspection</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground">{safetyMetrics.lastInspection}</div>
              <p className="text-xs text-muted-foreground">Score: 96%</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Next Inspection</CardTitle>
              <Calendar className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground">{safetyMetrics.nextInspection}</div>
              <p className="text-xs text-muted-foreground">Monthly review</p>
            </CardContent>
          </Card>
        </div>

        {/* Safety Management Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Safety Reports</TabsTrigger>
                <TabsTrigger value="incidents">Incidents</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-4">
                  {safetyReports.map((report) => (
                    <Card key={report.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{report.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                              <span>{report.type}</span>
                              <span>•</span>
                              <span>{report.date}</span>
                              <span>•</span>
                              <span>{report.inspector}</span>
                              <span>•</span>
                              <span>{report.category}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                            {report.score && (
                              <div className="mt-2">
                                <div className="text-lg font-bold text-foreground">{report.score}%</div>
                                <div className="text-sm text-muted-foreground">
                                  {report.issues} issue{report.issues !== 1 ? 's' : ''}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline" size="sm">View Report</Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="incidents" className="space-y-4">
                <div className="space-y-4">
                  {incidents.map((incident) => (
                    <Card key={incident.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{incident.id} - {incident.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{incident.description}</p>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              <Badge className={getSeverityColor(incident.severity)}>
                                {incident.severity}
                              </Badge>
                              <Badge className={getStatusColor(incident.status)}>
                                {incident.status}
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Date</div>
                              <div className="font-semibold text-foreground">{incident.date}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Location</div>
                              <div className="font-semibold text-foreground">{incident.location}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Reported By</div>
                              <div className="font-semibold text-foreground">{incident.reportedBy}</div>
                            </div>
                          </div>

                          <div className="bg-background/50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-foreground">Action Taken</div>
                            <div className="text-sm text-muted-foreground mt-1">{incident.actionTaken}</div>
                          </div>

                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Download Report</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-4">
                <div className="space-y-4">
                  {complianceChecks.map((check) => (
                    <Card key={check.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{check.item}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                              <span>Last Check: {check.lastCheck}</span>
                              <span>•</span>
                              <span>Next Due: {check.nextDue}</span>
                              <span>•</span>
                              <span>Responsible: {check.responsible}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(check.status)}>
                              {check.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="training" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Safety training records coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SafetyCompliance;
