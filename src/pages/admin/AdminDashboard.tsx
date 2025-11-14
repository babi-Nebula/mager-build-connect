import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, FileText, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Contractors', value: '9', icon: Users, change: '+6%' },
    { title: 'Total Customers', value: '52', icon: Building, change: '+4%' },
    { title: 'Active Projects', value: '7', icon: FileText, change: '+10%' },
    { title: 'Revenue This Month', value: 'ETB 3.2M', icon: TrendingUp, change: '+18%' },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Welcome Back, Admin</h2>
              <p className="text-muted-foreground">Overview of your ongoing construction projects in Ethiopia</p>
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
                    Newly registered contractors in Ethiopia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Abebe Kebede', email: 'abebe@ethioconstruction.com', status: 'Active' },
                      { name: 'Mekdes Tesfaye', email: 'mekdes@buildeth.com', status: 'Pending' },
                      { name: 'Yared Mengistu', email: 'yared@habeshabuilders.com', status: 'Active' },
                    ].map((contractor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                        <div>
                          <p className="font-medium text-foreground">{contractor.name}</p>
                          <p className="text-sm text-muted-foreground">{contractor.email}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            contractor.status === 'Active'
                              ? 'bg-secondary/20 text-secondary'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
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
                    New customer registrations in Ethiopia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Addis Ababa City Administration', project: 'Road Construction Project', value: 'ETB 28M' },
                      { name: 'Ethiopian Electric Power', project: 'Substation Renovation', value: 'ETB 14M' },
                      { name: 'Goh Real Estate', project: 'G+4 Apartment Project', value: 'ETB 32M' },
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
