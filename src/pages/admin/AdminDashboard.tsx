
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, FileText, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Contractors', value: '24', icon: Users, change: '+12%' },
    { title: 'Total Customers', value: '156', icon: Building, change: '+8%' },
    { title: 'Active Projects', value: '18', icon: FileText, change: '+15%' },
    { title: 'Revenue This Month', value: '$425K', icon: TrendingUp, change: '+22%' },
  ];

  return (
    <DashboardLayout role="admin" userName="Admin User">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Welcome Back, Admin</h2>
          <p className="text-muted-foreground">Here's an overview of your construction business</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-slate-800/50 backdrop-blur-lg border border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-secondary">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Contractors</CardTitle>
              <CardDescription className="text-muted-foreground">
                Newly registered contractors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'John Smith', email: 'john@construction.com', status: 'Active' },
                  { name: 'Mike Johnson', email: 'mike@builders.com', status: 'Pending' },
                  { name: 'Sarah Davis', email: 'sarah@concrete.com', status: 'Active' },
                ].map((contractor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium text-foreground">{contractor.name}</p>
                      <p className="text-sm text-muted-foreground">{contractor.email}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contractor.status === 'Active' 
                        ? 'bg-secondary/20 text-secondary' 
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {contractor.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Customers</CardTitle>
              <CardDescription className="text-muted-foreground">
                New customer registrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'ABC Corporation', project: 'Office Building', value: '$2.5M' },
                  { name: 'City Council', project: 'Public Library', value: '$1.8M' },
                  { name: 'Green Valley Inc', project: 'Residential Complex', value: '$3.2M' },
                ].map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium text-foreground">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">{customer.project}</p>
                    </div>
                    <span className="text-secondary font-semibold">{customer.value}</span>
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

export default AdminDashboard;
