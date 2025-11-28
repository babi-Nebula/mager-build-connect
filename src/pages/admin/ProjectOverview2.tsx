import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Gauge, 
  CalendarCheck, 
  AlertTriangle 
} from 'lucide-react';

function ProjectOverview2() {
  const kpis = [
    { name: "Schedule Variance (SV)", value: "-8%", status: "Behind Schedule" },
    { name: "Cost Variance (CV)", value: "+3%", status: "Under Budget" },
    { name: "Earned Value (EV)", value: "ETB 12.4M", status: "Progressing" },
  ];

  const milestones = [
    { title: "Foundation Completed", date: "Oct 20, 2025", status: "Completed" },
    { title: "Structure 50%", date: "Nov 15, 2025", status: "Upcoming" },
    { title: "Roof Slab", date: "Dec 10, 2025", status: "Pending" },
  ];

  const risks = [
    { level: "High", count: 3, color: "text-red-500" },
    { level: "Medium", count: 7, color: "text-yellow-500" },
    { level: "Low", count: 12, color: "text-green-500" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            
            {/* Page Header */}
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Project Overview & Health
              </h2>
              <p className="text-muted-foreground">
                High-level summary of project performance, milestones, and risks
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kpis.map((kpi) => (
                <Card key={kpi.name} className="bg-slate-800/50 backdrop-blur-lg border border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">
                      {kpi.name}
                    </CardTitle>
                    <Gauge className="h-4 w-4 text-secondary" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                    <p className="text-xs text-muted-foreground">{kpi.status}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Milestones & Risk Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Milestones */}
              <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Milestone Tracking</CardTitle>
                  <CardDescription>
                    Upcoming and completed project milestones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {milestones.map((m, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/20"
                    >
                      <div>
                        <p className="font-medium text-foreground">{m.title}</p>
                        <p className="text-sm text-muted-foreground">Deadline: {m.date}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          m.status === "Completed"
                            ? "bg-green-500/20 text-green-500"
                            : m.status === "Upcoming"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Risk Summary */}
              <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Risk Log Summary</CardTitle>
                  <CardDescription>
                    Overview of open, high-priority, and closed risks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {risks.map((risk, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/20"
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`h-4 w-4 ${risk.color}`} />
                        <p className="font-medium text-foreground">{risk.level} Risks</p>
                      </div>
                      <p className={`font-semibold ${risk.color}`}>{risk.count}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

            </div>

          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default ProjectOverview2;
