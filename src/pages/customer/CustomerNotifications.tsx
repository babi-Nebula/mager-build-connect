
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Search, Settings, AlertCircle, CheckCircle, Clock, MessageSquare, DollarSign, Calendar } from 'lucide-react';

const CustomerNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'progress',
      title: 'Phase 2 - Structural Framework 75% Complete',
      message: 'The structural framework phase has reached 75% completion. Steel installation is proceeding on schedule.',
      timestamp: '2 hours ago',
      date: '2024-01-22',
      priority: 'medium',
      read: false,
      category: 'Progress Update',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Milestone Payment Due - $200,000',
      message: 'Phase 2 milestone payment of $200,000 is now due. Please review the progress report and approve payment.',
      timestamp: '4 hours ago',
      date: '2024-01-22',
      priority: 'high',
      read: false,
      category: 'Payment',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 3,
      type: 'delay',
      title: 'Weather Delay Notice',
      message: 'Concrete pouring has been delayed by 2 days due to forecasted rain. New target date: January 25th.',
      timestamp: '1 day ago',
      date: '2024-01-21',
      priority: 'medium',
      read: true,
      category: 'Schedule',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 4,
      type: 'inspection',
      title: 'Quality Inspection Passed',
      message: 'Foundation inspection completed successfully with a score of 95/100. All requirements met.',
      timestamp: '2 days ago',
      date: '2024-01-20',
      priority: 'low',
      read: true,
      category: 'Quality',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 5,
      type: 'change_order',
      title: 'Change Order Request - Electrical Upgrade',
      message: 'Contractor has submitted a change order for electrical system upgrades. Additional cost: $15,000.',
      timestamp: '3 days ago',
      date: '2024-01-19',
      priority: 'high',
      read: false,
      category: 'Change Order',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 6,
      type: 'document',
      title: 'New Document Available - Safety Report',
      message: 'Monthly safety compliance report has been uploaded to the document library.',
      timestamp: '4 days ago',
      date: '2024-01-18',
      priority: 'low',
      read: true,
      category: 'Documentation',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 7,
      type: 'meeting',
      title: 'Project Meeting Scheduled',
      message: 'Monthly progress meeting scheduled for January 25th at 10:00 AM in the site office.',
      timestamp: '5 days ago',
      date: '2024-01-17',
      priority: 'medium',
      read: true,
      category: 'Meeting',
      project: 'Corporate Headquarters Building'
    },
    {
      id: 8,
      type: 'material',
      title: 'Material Delivery Confirmed',
      message: 'Steel beams delivery confirmed for January 23rd. Site access will be required from 8:00 AM.',
      timestamp: '6 days ago',
      date: '2024-01-16',
      priority: 'medium',
      read: true,
      category: 'Logistics',
      project: 'Corporate Headquarters Building'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'progress': return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'payment': return <DollarSign className="h-5 w-5 text-yellow-500" />;
      case 'delay': return <AlertCircle className="h-5 w-5 text-red-400" />;
      case 'inspection': return <CheckCircle className="h-5 w-5 text-blue-400" />;
      case 'change_order': return <MessageSquare className="h-5 w-5 text-purple-400" />;
      case 'document': return <Bell className="h-5 w-5 text-primary" />;
      case 'meeting': return <Calendar className="h-5 w-5 text-orange-400" />;
      case 'material': return <Clock className="h-5 w-5 text-teal-400" />;
      default: return <Bell className="h-5 w-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = selectedTab === 'all' || 
                      (selectedTab === 'unread' && !notification.read) ||
                      (selectedTab === 'read' && notification.read);
    
    const matchesType = filterType === 'all' || notification.type === filterType;
    
    return matchesSearch && matchesTab && matchesType;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Notifications</h2>
            <p className="text-muted-foreground">Stay updated with project progress and important alerts</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button>
              Mark All Read
            </Button>
          </div>
        </div>

        {/* Notification Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Notifications</CardTitle>
              <Bell className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{notifications.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unread</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{unreadCount}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {notifications.filter(n => n.priority === 'high').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {notifications.filter(n => n.timestamp.includes('day') || n.timestamp.includes('hour')).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="delay">Delays</SelectItem>
                <SelectItem value="inspection">Inspections</SelectItem>
                <SelectItem value="change_order">Change Orders</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
                <SelectItem value="meeting">Meetings</SelectItem>
                <SelectItem value="material">Materials</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notifications */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="read">Read ({notifications.length - unreadCount})</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value={selectedTab} className="space-y-4">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications found</p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <Card key={notification.id} className={`bg-muted/20 border border-border transition-all hover:bg-muted/30 ${
                      !notification.read ? 'border-l-4 border-l-primary' : ''
                    }`}>
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {notification.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {notification.message}
                                </p>
                              </div>
                              <div className="flex flex-col gap-2 items-end">
                                <Badge className={getPriorityColor(notification.priority)}>
                                  {notification.priority}
                                </Badge>
                                {!notification.read && (
                                  <Badge variant="secondary" className="text-xs">
                                    New
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                              <div className="flex space-x-4">
                                <span>{notification.category}</span>
                                <span>•</span>
                                <span>{notification.project}</span>
                              </div>
                              <span>{notification.timestamp}</span>
                            </div>
                            <div className="flex justify-end space-x-2">
                              {!notification.read && (
                                <Button variant="outline" size="sm">
                                  Mark as Read
                                </Button>
                              )}
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))
                )}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CustomerNotifications;
