
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Calendar, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CustomerDashboard = () => {
  const projectInfo = {
    name: 'Corporate Headquarters Building',
    contractor: 'Smith Construction Co.',
    startDate: 'January 15, 2024',
    expectedCompletion: 'December 2025',
    totalBudget: '$4.2M',
    overallProgress: 65
  };

  const phases = [
    { name: 'Foundation & Site Prep', progress: 100, status: 'Completed', budget: '$450K' },
    { name: 'Structure & Framework', progress: 85, status: 'In Progress', budget: '$650K' },
    { name: 'Electrical & Plumbing', progress: 45, status: 'In Progress', budget: '$380K' },
    { name: 'Interior Finishing', progress: 0, status: 'Pending', budget: '$320K' },
  ];

  const recentUpdates = [
    {
      title: 'Structural Steel Installation Complete',
      description: 'All steel framework has been installed and inspected.',
      date: '2 days ago',
      type: 'success'
    },
    {
      title: 'Weather Delay Notice',
      description: 'Concrete pouring delayed due to rain forecast.',
      date: '3 days ago',
      type: 'warning'
    },
    {
      title: 'Milestone Payment Due',
      description: 'Phase 2 milestone payment of $200K is due.',
      date: '1 week ago',
      type: 'info'
    }
  ];

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Project Dashboard</h2>
          <p className="text-muted-foreground">Monitor your construction project progress</p>
        </div>

        {/* Project Overview */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Building className="h-5 w-5" />
              {projectInfo.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Contractor: {projectInfo.contractor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-semibold text-foreground">{projectInfo.startDate}</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Expected Completion</p>
                <p className="font-semibold text-foreground">{projectInfo.expectedCompletion}</p>
              </div>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="font-semibold text-foreground">{projectInfo.totalBudget}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="font-semibold text-foreground">{projectInfo.overallProgress}%</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Project Completion</span>
                <span className="text-foreground">{projectInfo.overallProgress}%</span>
              </div>
              <Progress value={projectInfo.overallProgress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Phase Breakdown */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Construction Phases</CardTitle>
            <CardDescription className="text-muted-foreground">
              Detailed breakdown of project phases and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <div key={index} className="p-4 rounded-lg border border-border bg-muted/10">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{phase.name}</h3>
                      <p className="text-sm text-muted-foreground">Budget: {phase.budget}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'Completed' 
                        ? 'bg-secondary/20 text-secondary'
                        : phase.status === 'In Progress'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Updates</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest notifications and project updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/20">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                    update.type === 'success' 
                      ? 'bg-secondary'
                      : update.type === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-primary'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{update.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{update.description}</p>
                    <p className="text-xs text-muted-foreground">{update.date}</p>
                  </div>
                  {update.type === 'warning' && (
                    <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
