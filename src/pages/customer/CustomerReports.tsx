import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, DollarSign, Calendar as CalendarIcon, TrendingUp, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

const CustomerReports = () => {
  const [selectedTab, setSelectedTab] = useState('financial');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [date, setDate] = useState<Date>();

  const financialData = [
    { month: 'Jan', budgeted: 180000, actual: 175000, variance: -5000 },
    { month: 'Feb', budgeted: 220000, actual: 235000, variance: 15000 },
    { month: 'Mar', budgeted: 250000, actual: 245000, variance: -5000 },
    { month: 'Apr', budgeted: 280000, actual: 290000, variance: 10000 },
    { month: 'May', budgeted: 200000, actual: 185000, variance: -15000 },
    { month: 'Jun', budgeted: 180000, actual: 195000, variance: 15000 }
  ];

  const progressData = [
    { month: 'Jan', planned: 15, actual: 18 },
    { month: 'Feb', planned: 25, actual: 23 },
    { month: 'Mar', planned: 35, actual: 38 },
    { month: 'Apr', planned: 50, actual: 48 },
    { month: 'May', planned: 60, actual: 58 },
    { month: 'Jun', planned: 65, actual: 65 }
  ];

  const budgetBreakdown = [
    { name: 'Labor', value: 1200000, color: '#8884d8' },
    { name: 'Materials', value: 1800000, color: '#82ca9d' },
    { name: 'Equipment', value: 600000, color: '#ffc658' },
    { name: 'Permits', value: 150000, color: '#ff7300' },
    { name: 'Contingency', value: 450000, color: '#8dd1e1' }
  ];

  const reports = [
    {
      id: 1,
      name: 'Monthly Progress Report - June 2024',
      type: 'Progress',
      date: '2024-06-30',
      status: 'Available',
      size: '2.4 MB',
      description: 'Detailed progress report with photos and milestone updates'
    },
    {
      id: 2,
      name: 'Financial Summary Q2 2024',
      type: 'Financial',
      date: '2024-06-30',
      status: 'Available',
      size: '1.8 MB',
      description: 'Quarterly financial summary and budget analysis'
    },
    {
      id: 3,
      name: 'Quality Inspection Report - Steel Framework',
      type: 'Quality',
      date: '2024-06-25',
      status: 'Available',
      size: '3.2 MB',
      description: 'Comprehensive quality inspection results and certifications'
    },
    {
      id: 4,
      name: 'Change Order Summary Report',
      type: 'Change Orders',
      date: '2024-06-20',
      status: 'Available',
      size: '1.1 MB',
      description: 'Summary of all approved change orders and budget impacts'
    },
    {
      id: 5,
      name: 'Safety Compliance Report',
      type: 'Safety',
      date: '2024-06-15',
      status: 'Available',
      size: '0.9 MB',
      description: 'Monthly safety compliance and incident report'
    }
  ];

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case 'Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Financial': return 'bg-green-500/20 text-green-400';
      case 'Quality': return 'bg-purple-500/20 text-purple-400';
      case 'Change Orders': return 'bg-yellow-500/20 text-yellow-400';
      case 'Safety': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Project Reports</h2>
            <p className="text-muted-foreground">Financial reports, progress tracking, and project documentation</p>
          </div>
          <div className="flex space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date range"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Report Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">24</div>
              <p className="text-xs text-muted-foreground">Available for download</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Variance</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">+2.3%</div>
              <p className="text-xs text-muted-foreground">Over budget this period</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Schedule Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">98.5%</div>
              <p className="text-xs text-muted-foreground">On schedule performance</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">Requiring attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="financial" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Budget vs Actual Spending</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={financialData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="month" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1F2937', 
                              border: '1px solid #374151',
                              borderRadius: '8px'
                            }}
                          />
                          <Bar dataKey="budgeted" fill="#3B82F6" name="Budgeted" />
                          <Bar dataKey="actual" fill="#10B981" name="Actual" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/20 border border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Budget Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={budgetBreakdown}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {budgetBreakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <Card className="bg-muted/20 border border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Progress Timeline</CardTitle>
                    <CardDescription>Planned vs actual progress over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px'
                          }}
                        />
                        <Line type="monotone" dataKey="planned" stroke="#3B82F6" strokeWidth={2} name="Planned" />
                        <Line type="monotone" dataKey="actual" stroke="#10B981" strokeWidth={2} name="Actual" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="bg-muted/20 border border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground">{report.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {report.description}
                          </CardDescription>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <span>Date: {report.date}</span>
                            <span>Size: {report.size}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getReportTypeColor(report.type)}>
                            {report.type}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Advanced analytics dashboard coming soon...</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CustomerReports;
