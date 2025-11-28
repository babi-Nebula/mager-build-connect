import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const TechnicalData = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Sample data for demonstration
  const submittals = [
    { name: 'Concrete Mix Design', status: 'Approved' },
    { name: 'Steel Rebar Drawings', status: 'Under Review' },
    { name: 'Electrical Layout', status: 'Rejected' },
    { name: 'Plumbing Schematics', status: 'Submitted' }
  ];

  const qcTests = [
    { name: 'Concrete Strength', result: 92 },
    { name: 'Soil Compaction', result: 85 },
    { name: 'Beam Load Test', result: 78 },
    { name: 'Masonry Alignment', result: 88 }
  ];

  const changeRequests = [
    { name: 'Change Door Type', status: 'Approved' },
    { name: 'Window Size Adjustment', status: 'Pending' },
    { name: 'Add Balcony', status: 'Rejected' }
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
                <h2 className="text-3xl font-bold text-foreground">Technical Data & Quality Control</h2>
                <p className="text-muted-foreground">
                  Overview of submittals, testing results, and deviation/change requests
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

            {/* Submittal Status */}
            <Card>
              <CardHeader>
                <CardTitle>Submittal Status</CardTitle>
                <CardDescription>Status of all technical submittals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {submittals.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg bg-muted/5">
                    <span>{item.name}</span>
                    <Badge
                      className={`${
                        item.status === 'Approved' ? 'bg-green-500/20 text-green-600' :
                        item.status === 'Under Review' ? 'bg-yellow-500/20 text-yellow-600' :
                        item.status === 'Rejected' ? 'bg-red-500/20 text-red-600' :
                        'bg-blue-500/20 text-blue-600'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* QC Testing Results */}
            <Card>
              <CardHeader>
                <CardTitle>Testing & Inspection Results</CardTitle>
                <CardDescription>Quality Control Test Outcomes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {qcTests.map((test, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{test.name}</span>
                      <span className="font-semibold text-primary">{test.result}%</span>
                    </div>
                    <Progress value={test.result} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Change Requests / Deviations */}
            <Card>
              <CardHeader>
                <CardTitle>Deviation / Change Requests</CardTitle>
                <CardDescription>Status of change requests or deviations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {changeRequests.map((req, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg bg-muted/5">
                    <span>{req.name}</span>
                    <Badge
                      className={`${
                        req.status === 'Approved' ? 'bg-green-500/20 text-green-600' :
                        req.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-600' :
                        'bg-red-500/20 text-red-600'
                      }`}
                    >
                      {req.status}
                    </Badge>
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

export default TechnicalData;
