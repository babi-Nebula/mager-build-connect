import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Search, MapPin, Clock, Users, AlertTriangle } from 'lucide-react';

const ProjectManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('active');

  const projects = [
    {
      id: 1,
      name: 'Downtown Office Complex',
      client: 'Metro Development Corp',
      location: '1234 Main St, Downtown',
      startDate: '2024-01-15',
      endDate: '2024-12-15',
      progress: 65,
      budget: 2500000,
      spent: 1625000,
      status: 'Active',
      priority: 'High',
      team: ['John Martinez', 'Miguel Rodriguez', 'David Thompson'],
      nextMilestone: 'Phase 2 Completion',
      milestoneDate: '2024-02-28'
    },
    {
      id: 2,
      name: 'Residential Community Phase 1',
      client: 'Green Valley Homes',
      location: 'Suburb Heights, North Side',
      startDate: '2024-02-01',
      endDate: '2024-08-30',
      progress: 25,
      budget: 1800000,
      spent: 450000,
      status: 'Active',
      priority: 'Medium',
      team: ['Robert Wilson', 'Sarah Davis'],
      nextMilestone: 'Foundation Completion',
      milestoneDate: '2024-03-15'
    },
    {
      id: 3,
      name: 'Industrial Warehouse',
      client: 'LogiCorp Industries',
      location: 'Industrial Park, East End',
      startDate: '2023-10-01',
      endDate: '2024-01-31',
      progress: 95,
      budget: 950000,
      spent: 902500,
      status: 'Completion',
      priority: 'High',
      team: ['Mike Johnson', 'Carlos Rivera'],
      nextMilestone: 'Final Inspection',
      milestoneDate: '2024-01-28'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Pour foundation concrete - Section A',
      project: 'Downtown Office Complex',
      assignee: 'Miguel Rodriguez',
      dueDate: '2024-01-25',
      priority: 'High',
      status: 'In Progress',
      progress: 75
    },
    {
      id: 2,
      title: 'Install electrical conduits - Floor 2',
      project: 'Downtown Office Complex',
      assignee: 'Robert Wilson',
      dueDate: '2024-01-28',
      priority: 'Medium',
      status: 'Pending',
      progress: 0
    },
    {
      id: 3,
      title: 'Structural steel inspection',
      project: 'Residential Community Phase 1',
      assignee: 'John Martinez',
      dueDate: '2024-01-26',
      priority: 'High',
      status: 'Overdue',
      progress: 50
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400';
      case 'Completion': return 'bg-blue-500/20 text-blue-400';
      case 'On Hold': return 'bg-yellow-500/20 text-yellow-400';
      case 'Delayed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Overdue': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="contractor" userName="Contractor Smith">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Project Management</h2>
            <p className="text-muted-foreground">Oversee all projects, tasks, and deadlines</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overdue Tasks</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Team Members</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">32</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">On Schedule</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">87%</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Projects and Tasks */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">Active Projects</TabsTrigger>
                <TabsTrigger value="tasks">Tasks & Milestones</TabsTrigger>
                <TabsTrigger value="calendar">Project Calendar</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="active" className="space-y-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            Client: {project.client}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <Badge className={getPriorityColor(project.priority)}>
                            {project.priority} Priority
                          </Badge>
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Budget</div>
                            <div className="font-semibold text-foreground">ETB {project.budget.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Spent</div>
                            <div className="font-semibold text-foreground">ETB {project.spent.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Start Date</div>
                            <div className="font-semibold text-foreground">{project.startDate}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">End Date</div>
                            <div className="font-semibold text-foreground">{project.endDate}</div>
                          </div>
                        </div>

                        <div className="bg-background/50 p-3 rounded-lg">
                          <div className="text-sm text-muted-foreground">Next Milestone</div>
                          <div className="font-medium text-foreground">{project.nextMilestone}</div>
                          <div className="text-sm text-muted-foreground">Due: {project.milestoneDate}</div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Team: </span>
                            <span className="text-foreground">{project.team.join(', ')}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tasks" className="space-y-6">
                {tasks.map((task) => (
                  <Card key={task.id} className="bg-muted/20 border border-border">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{task.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">Project: {task.project}</p>
                          <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getTaskStatusColor(task.status)}>
                            {task.status}
                          </Badge>
                          <Badge className={getPriorityColor(task.priority)}>
                            {task.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-2" />
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Due: </span>
                            <span className="text-foreground">{task.dueDate}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Update</Button>
                            <Button variant="outline" size="sm">Complete</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="calendar" className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Project calendar view coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProjectManagement;
