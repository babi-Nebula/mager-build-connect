import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, Users, Package, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ContractorDashboard = () => {
  const phases = [
    {
      id: 1,
      name: 'Phase 1 - Foundation (Addis Ababa Housing)',
      year: 'Year 1',
      progress: 85,
      budget: 'ETB 15,000,000',
      spent: 'ETB 12,750,000',
      status: 'In Progress',
      timeline: '8 months'
    },
    {
      id: 2,
      name: 'Phase 2 - Structure (Bole Office Tower)',
      year: 'Year 1-2',
      progress: 45,
      budget: 'ETB 21,500,000',
      spent: 'ETB 9,675,000',
      status: 'In Progress',
      timeline: '12 months'
    },
    {
      id: 3,
      name: 'Phase 3 - Finishing (Mekelle Commercial Center)',
      year: 'Year 2',
      progress: 0,
      budget: 'ETB 12,500,000',
      spent: 'ETB 0',
      status: 'Pending',
      timeline: '6 months'
    }
  ];

  const quickStats = [
    { title: 'Total Revenue', value: 'ETB 49,000,000', icon: DollarSign, color: 'text-secondary' },
    { title: 'Active Employees', value: '32', icon: Users, color: 'text-primary' },
    { title: 'Materials in Stock', value: '156', icon: Package, color: 'text-yellow-500' },
    { title: 'Days to Deadline', value: '45', icon: Clock, color: 'text-red-400' },
  ];

  return (
    <DashboardLayout role="contractor" userName="Alemayehu Construction">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
          <p className="text-muted-foreground">Manage your Ethiopian construction phases and track progress</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat) => (
            <Card key={stat.title} className="bg-slate-800/50 backdrop-blur-lg border border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Phases */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Active Project Phases
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Track progress and manage costs for each Ethiopian construction phase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {phases.map((phase) => (
                <div key={phase.id} className="p-4 rounded-lg border border-border bg-muted/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{phase.name}</h3>
                      <p className="text-sm text-muted-foreground">{phase.year} • {phase.timeline}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'In Progress' 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {phase.status}
                      </span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { item: 'Concrete Materials', amount: 'ETB 625,000', date: '2 days ago' },
                  { item: 'Equipment Rental', amount: 'ETB 445,000', date: '3 days ago' },
                  { item: 'Labor Costs', amount: 'ETB 760,000', date: '5 days ago' },
                ].map((expense, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium text-foreground">{expense.item}</p>
                      <p className="text-sm text-muted-foreground">{expense.date}</p>
                    </div>
                    <span className="font-semibold text-red-400">{expense.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Team Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { update: 'Foundation team completed sector 3', time: '2 hours ago' },
                  { update: 'New safety equipment delivered', time: '4 hours ago' },
                  { update: 'Weather delay reported for tomorrow', time: '6 hours ago' },
                ].map((update, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/20">
                    <p className="font-medium text-foreground">{update.update}</p>
                    <p className="text-sm text-muted-foreground">{update.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContractorDashboard;
