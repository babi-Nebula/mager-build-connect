
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, FileText, DollarSign, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const ChangeOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('active');
  const [filterStatus, setFilterStatus] = useState('all');

  const changeOrders = [
    {
      id: 'CO-2024-001',
      title: 'Additional Electrical Outlets',
      description: 'Add 8 additional electrical outlets in the main conference room and 4 in the break room as requested.',
      requestedBy: 'ABC Corporation',
      requestDate: '2024-01-19',
      status: 'Pending Approval',
      priority: 'Medium',
      estimatedCost: 2500,
      estimatedDays: 2,
      approvedBy: null,
      approvalDate: null,
      reason: 'Client requested additional power outlets for equipment',
      contractor: 'ElectriCorp Services',
      category: 'Electrical'
    },
    {
      id: 'CO-2024-002',
      title: 'Upgrade HVAC System',
      description: 'Upgrade to more efficient HVAC system with smart controls and enhanced filtration.',
      requestedBy: 'Engineering Team',
      requestDate: '2024-01-15',
      status: 'Approved',
      priority: 'High',
      estimatedCost: 15000,
      estimatedDays: 5,
      approvedBy: 'Project Manager',
      approvalDate: '2024-01-17',
      reason: 'Energy efficiency requirements updated',
      contractor: 'HVAC Solutions Inc',
      category: 'HVAC'
    },
    {
      id: 'CO-2024-003',
      title: 'Flooring Material Change',
      description: 'Change from standard carpet to luxury vinyl plank flooring in office areas.',
      requestedBy: 'ABC Corporation',
      requestDate: '2024-01-12',
      status: 'Rejected',
      priority: 'Low',
      estimatedCost: 8500,
      estimatedDays: 3,
      approvedBy: 'Budget Committee',
      approvalDate: '2024-01-14',
      reason: 'Better durability and maintenance',
      contractor: 'Premium Floors Ltd',
      category: 'Flooring'
    },
    {
      id: 'CO-2024-004',
      title: 'Security System Enhancement',
      description: 'Add biometric access control and upgrade security cameras to 4K resolution.',
      requestedBy: 'Security Department',
      requestDate: '2024-01-20',
      status: 'Under Review',
      priority: 'High',
      estimatedCost: 12000,
      estimatedDays: 4,
      approvedBy: null,
      approvalDate: null,
      reason: 'Enhanced security requirements',
      contractor: 'SecureTech Systems',
      category: 'Security'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-500/20 text-green-400';
      case 'Pending Approval': return 'bg-yellow-500/20 text-yellow-400';
      case 'Under Review': return 'bg-blue-500/20 text-blue-400';
      case 'Rejected': return 'bg-red-500/20 text-red-400';
      case 'In Progress': return 'bg-purple-500/20 text-purple-400';
      case 'Completed': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'Pending Approval': return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'Under Review': return <AlertCircle className="h-4 w-4 text-blue-400" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-400" />;
      case 'In Progress': return <Clock className="h-4 w-4 text-purple-400" />;
      case 'Completed': return <CheckCircle className="h-4 w-4 text-green-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
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

  const filteredChangeOrders = changeOrders.filter(order => {
    const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const totalCost = changeOrders.reduce((sum, order) => 
    order.status === 'Approved' ? sum + order.estimatedCost : sum, 0
  );

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Change Orders</h2>
            <p className="text-muted-foreground">Manage project modifications and additional work requests</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Change Order
            </Button>
          </div>
        </div>

        {/* Change Order Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Change Orders</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{changeOrders.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {changeOrders.filter(order => order.status === 'Pending Approval').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Approved Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${totalCost.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Response Time</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2.5</div>
              <p className="text-xs text-muted-foreground">days</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search change orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Change Orders */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle>Change Orders</CardTitle>
            <CardDescription>All modification requests for your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredChangeOrders.map((order) => (
                <Card key={order.id} className="bg-muted/20 border border-border">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {getStatusIcon(order.status)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{order.id} - {order.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{order.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <Badge className={getPriorityColor(order.priority)}>
                            {order.priority} Priority
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Estimated Cost</div>
                          <div className="font-semibold text-foreground text-lg">
                            ${order.estimatedCost.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Timeline</div>
                          <div className="font-semibold text-foreground">{order.estimatedDays} days</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Category</div>
                          <div className="font-semibold text-foreground">{order.category}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Contractor</div>
                          <div className="font-semibold text-foreground">{order.contractor}</div>
                        </div>
                      </div>

                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Requested By</div>
                            <div className="text-foreground">{order.requestedBy}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Request Date</div>
                            <div className="text-foreground">{order.requestDate}</div>
                          </div>
                          {order.approvedBy && (
                            <>
                              <div>
                                <div className="text-muted-foreground">Approved By</div>
                                <div className="text-foreground">{order.approvedBy}</div>
                              </div>
                              <div>
                                <div className="text-muted-foreground">Approval Date</div>
                                <div className="text-foreground">{order.approvalDate}</div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="mt-3">
                          <div className="text-muted-foreground text-sm">Reason</div>
                          <div className="text-foreground">{order.reason}</div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Download PDF</Button>
                        {order.status === 'Pending Approval' && (
                          <>
                            <Button variant="outline" size="sm">Approve</Button>
                            <Button variant="outline" size="sm">Reject</Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ChangeOrders;
