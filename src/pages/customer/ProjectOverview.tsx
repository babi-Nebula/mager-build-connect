import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, MapPin, Clock, DollarSign, Users, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

const ProjectOverview = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const projectDetails = {
    name: 'Addis Ababa Corporate Tower',
    contractor: 'Habesha Construction PLC',
    startDate: 'January 15, 2024',
    expectedCompletion: 'December 2025',
    actualProgress: 65,
    budget: 'ETB 42,000,000',
    spent: 'ETB 27,300,000',
    location: 'Bole Business District, Addis Ababa',
    projectManager: 'Mekonnen Tesfaye',
    architect: 'Design Partners PLC'
  };

  const milestones = [
    {
      id: 1,
      name: 'Site Preparation Complete',
      date: '2024-02-15',
      status: 'Completed',
      description: 'Site clearing, excavation, and utility preparation'
    },
    {
      id: 2,
      name: 'Foundation Pour Complete',
      date: '2024-04-30',
      status: 'Completed',
      description: 'Foundation walls, footings, and basement structure'
    },
    {
      id: 3,
      name: 'Structural Framework Complete',
      date: '2024-07-15',
      status: 'In Progress',
      description: 'Steel framework and concrete structure completion'
    },
    {
      id: 4,
      name: 'Mechanical/Electrical Rough-In',
      date: '2024-09-30',
      status: 'Upcoming',
      description: 'HVAC, electrical, and plumbing rough installation'
    },
    {
      id: 5,
      name: 'Interior Finishing Start',
      date: '2024-11-15',
      status: 'Upcoming',
      description: 'Drywall, flooring, and interior finishes begin'
    }
  ];

  const phases = [
    {
      id: 1,
      name: 'Site Preparation & Foundation',
      startDate: '2024-01-15',
      endDate: '2024-04-30',
      progress: 100,
      budget: 'ETB 4,500,000',
      spent: 'ETB 4,450,000',
      status: 'Completed',
      description: 'Site clearing, excavation, foundation work'
    },
    {
      id: 2,
      name: 'Structural Framework',
      startDate: '2024-03-01',
      endDate: '2024-07-15',
      progress: 75,
      budget: 'ETB 8,500,000',
      spent: 'ETB 6,375,000',
      status: 'In Progress',
      description: 'Steel structure, concrete work, building envelope'
    },
    {
      id: 3,
      name: 'MEP Installation',
      startDate: '2024-06-01',
      endDate: '2024-09-30',
      progress: 25,
      budget: 'ETB 6,800,000',
      spent: 'ETB 1,700,000',
      status: 'In Progress',
      description: 'Mechanical, electrical, plumbing systems'
    },
    {
      id: 4,
      name: 'Interior Finishing',
      startDate: '2024-09-01',
      endDate: '2024-12-15',
      progress: 0,
      budget: 'ETB 9,200,000',
      spent: 'ETB 0',
      status: 'Pending',
      description: 'Drywall, flooring, fixtures, final finishes'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Upcoming': return 'bg-yellow-500/20 text-yellow-400';
      case 'Pending': return 'bg-gray-500/20 text-gray-400';
      case 'Delayed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-muted-foreground">Detailed view of your construction project</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Progress</CardTitle>
              <CheckCircle className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{projectDetails.actualProgress}%</div>
              <Progress value={projectDetails.actualProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Status</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{projectDetails.spent}</div>
              <p className="text-xs text-muted-foreground">of {projectDetails.budget} total</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Time Remaining</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8 months</div>
              <p className="text-xs text-muted-foreground">Expected completion</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Issues</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="phases">Phases</TabsTrigger>
                <TabsTrigger value="milestones">Milestones</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Project Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium text-foreground">{projectDetails.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Start Date</p>
                          <p className="font-medium text-foreground">{projectDetails.startDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Expected Completion</p>
                          <p className="font-medium text-foreground">{projectDetails.expectedCompletion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Key Contacts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">General Contractor</p>
                          <p className="font-medium text-foreground">{projectDetails.contractor}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Project Manager</p>
                          <p className="font-medium text-foreground">{projectDetails.projectManager}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Architect</p>
                          <p className="font-medium text-foreground">{projectDetails.architect}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Phases Tab */}
              <TabsContent value="phases" className="space-y-4">
                {phases.map((phase) => (
                  <Card key={phase.id} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-foreground">{phase.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {phase.startDate} - {phase.endDate}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                        </div>
                        <Badge className={getStatusColor(phase.status)}>
                          {phase.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Budget</p>
                            <p className="font-semibold text-foreground">{phase.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Spent</p>
                            <p className="font-semibold text-foreground">{phase.spent}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Progress</p>
                            <p className="font-semibold text-foreground">{phase.progress}%</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Completion</span>
                            <span className="text-foreground">{phase.progress}%</span>
                          </div>
                          <Progress value={phase.progress} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Milestones Tab */}
              <TabsContent value="milestones" className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/20 border border-border">
                    <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${
                      milestone.status === 'Completed' 
                        ? 'bg-green-400'
                        : milestone.status === 'In Progress'
                        ? 'bg-blue-400'
                        : 'bg-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-foreground">{milestone.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">Target: {milestone.date}</p>
                        </div>
                        <Badge className={getStatusColor(milestone.status)}>
                          {milestone.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Team Tab */}
              <TabsContent value="team" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Team directory coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProjectOverview;
