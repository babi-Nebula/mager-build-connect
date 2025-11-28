import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ContractorCommunication = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Sample Data
  const rfis = [
    { title: 'Clarify Column Dimensions', status: 'Open' },
    { title: 'Confirm Electrical Layout', status: 'Pending' },
    { title: 'Structural Load Calculations', status: 'Overdue' },
    { title: 'Plumbing Connection Details', status: 'Closed' },
  ];

  const pendingActions = [
    { action: 'Approve Submittal #23', responsible: 'Consultant' },
    { action: 'Respond to RFI #45', responsible: 'Consultant' },
    { action: 'Verify Payment Application', responsible: 'Consultant' },
    { action: 'Review Material Data', responsible: 'Consultant' },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Contractor Communication & Feedback Loop</h2>
                <p className="text-muted-foreground">
                  Overview of RFIs and pending actions for consultant review
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* RFIs */}
            <Card>
              <CardHeader>
                <CardTitle>Information Requests (RFIs)</CardTitle>
                <CardDescription>Summary of all RFIs submitted by the contractor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rfis.map((rfi, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg bg-muted/5">
                    <span>{rfi.title}</span>
                    <Badge
                      className={`${
                        rfi.status === 'Open' ? 'bg-blue-500/20 text-blue-600' :
                        rfi.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-600' :
                        rfi.status === 'Overdue' ? 'bg-red-500/20 text-red-600' :
                        'bg-green-500/20 text-green-600'
                      }`}
                    >
                      {rfi.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pending Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Actions</CardTitle>
                <CardDescription>Actions requiring immediate consultant attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingActions.map((action, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg bg-muted/5">
                    <span>{action.action}</span>
                    <Badge className="bg-purple-500/20 text-purple-600">{action.responsible}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ContractorCommunication;
