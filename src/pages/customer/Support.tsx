
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HelpCircle, MessageSquare, Search, Clock, CheckCircle, AlertCircle, Phone, Mail, FileText, Plus } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('tickets');

  const supportTickets = [
    {
      id: 'TKT-2024-001',
      title: 'Request for Additional Project Updates',
      description: 'Would like more frequent progress updates via email',
      category: 'General Inquiry',
      priority: 'Low',
      status: 'Open',
      createdDate: '2024-01-22',
      lastUpdate: '2024-01-22',
      assignedTo: 'Customer Success Team',
      response: null
    },
    {
      id: 'TKT-2024-002',
      title: 'Invoice Clarification Needed',
      description: 'Need clarification on line items in Invoice #INV-2024-002',
      category: 'Billing',
      priority: 'Medium',
      status: 'In Progress',
      createdDate: '2024-01-20',
      lastUpdate: '2024-01-21',
      assignedTo: 'Billing Department',
      response: 'We are reviewing your invoice and will provide clarification within 24 hours.'
    },
    {
      id: 'TKT-2024-003',
      title: 'Access to Document Library Issue',
      description: 'Unable to download recent blueprints from the document library',
      category: 'Technical Issue',
      priority: 'High',
      status: 'Resolved',
      createdDate: '2024-01-18',
      lastUpdate: '2024-01-19',
      assignedTo: 'IT Support',
      response: 'Issue resolved. Document access permissions have been updated.'
    }
  ];

  const faqItems = [
    {
      id: 1,
      question: 'How often will I receive project updates?',
      answer: 'You will receive weekly progress reports every Friday, plus immediate notifications for any significant milestones or issues that require your attention.',
      category: 'Project Updates'
    },
    {
      id: 2,
      question: 'How can I request changes to the project?',
      answer: 'Changes can be requested through the Change Orders section of your dashboard. Each request will be reviewed by our project team and you will receive a response within 2-3 business days.',
      category: 'Change Management'
    },
    {
      id: 3,
      question: 'What happens if there are weather delays?',
      answer: 'Weather delays are communicated immediately through your notification system. We will provide updated timeline estimates and any necessary schedule adjustments.',
      category: 'Project Timeline'
    },
    {
      id: 4,
      question: 'How do I make milestone payments?',
      answer: 'Milestone payments can be made through the Payments & Billing section. You will receive invoices 5 days before each payment is due, with multiple payment options available.',
      category: 'Billing'
    },
    {
      id: 5,
      question: 'Can I visit the construction site?',
      answer: 'Site visits can be arranged with 24-hour advance notice. For safety reasons, all visitors must be accompanied by our site safety officer and wear appropriate PPE.',
      category: 'Site Access'
    }
  ];

  const contactInfo = [
    {
      department: 'Project Management',
      name: 'Sarah Johnson',
      title: 'Senior Project Manager',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@company.com',
      hours: 'Mon-Fri 8:00 AM - 6:00 PM'
    },
    {
      department: 'Customer Success',
      name: 'Mike Chen',
      title: 'Customer Success Manager',
      phone: '(555) 123-4568',
      email: 'mike.chen@company.com',
      hours: 'Mon-Fri 9:00 AM - 5:00 PM'
    },
    {
      department: 'Emergency Contact',
      name: '24/7 Emergency Line',
      title: 'For urgent site issues',
      phone: '(555) 911-SITE',
      email: 'emergency@company.com',
      hours: '24/7 Available'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-500/20 text-blue-400';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400';
      case 'Resolved': return 'bg-green-500/20 text-green-400';
      case 'Closed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <Clock className="h-4 w-4 text-blue-400" />;
      case 'In Progress': return <AlertCircle className="h-4 w-4 text-yellow-400" />;
      case 'Resolved': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'Closed': return <CheckCircle className="h-4 w-4 text-gray-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const filteredTickets = supportTickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Support Center</h2>
            <p className="text-muted-foreground">Get help with your project, submit tickets, and find answers</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <HelpCircle className="h-4 w-4 mr-2" />
              Knowledge Base
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>

        {/* Support Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open Tickets</CardTitle>
              <MessageSquare className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {supportTickets.filter(t => t.status === 'Open').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4.2</div>
              <p className="text-xs text-muted-foreground">hours</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Resolved This Month</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Satisfaction Score</CardTitle>
              <HelpCircle className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4.8</div>
              <p className="text-xs text-muted-foreground">out of 5</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search support tickets and FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Support Tabs */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="contact">Contact Info</TabsTrigger>
                <TabsTrigger value="new-ticket">New Ticket</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="tickets" className="space-y-4">
                <div className="space-y-4">
                  {filteredTickets.map((ticket) => (
                    <Card key={ticket.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                {getStatusIcon(ticket.status)}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground">{ticket.id} - {ticket.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{ticket.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              <Badge className={getStatusColor(ticket.status)}>
                                {ticket.status}
                              </Badge>
                              <Badge className={getPriorityColor(ticket.priority)}>
                                {ticket.priority}
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Category</div>
                              <div className="font-semibold text-foreground">{ticket.category}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Created</div>
                              <div className="font-semibold text-foreground">{ticket.createdDate}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Last Update</div>
                              <div className="font-semibold text-foreground">{ticket.lastUpdate}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Assigned To</div>
                              <div className="font-semibold text-foreground">{ticket.assignedTo}</div>
                            </div>
                          </div>

                          {ticket.response && (
                            <div className="bg-background/50 p-3 rounded-lg">
                              <div className="text-sm font-medium text-foreground">Latest Response</div>
                              <div className="text-sm text-muted-foreground mt-1">{ticket.response}</div>
                            </div>
                          )}

                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Add Comment</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-4">
                <div className="space-y-4">
                  {filteredFAQ.map((item) => (
                    <Card key={item.id} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-foreground">{item.question}</h3>
                            <Badge variant="outline" className="ml-4">
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.answer}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="bg-muted/20 border border-border">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-foreground">{contact.department}</h3>
                            <p className="text-sm text-muted-foreground">{contact.name}</p>
                            <p className="text-xs text-muted-foreground">{contact.title}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <span className="text-sm text-foreground">{contact.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <span className="text-sm text-foreground">{contact.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-sm text-foreground">{contact.hours}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new-ticket" className="space-y-4">
                <Card className="bg-muted/20 border border-border">
                  <CardHeader>
                    <CardTitle>Submit New Support Ticket</CardTitle>
                    <CardDescription>Describe your issue and we'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Category</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="billing">Billing</SelectItem>
                            <SelectItem value="project">Project Question</SelectItem>
                            <SelectItem value="urgent">Urgent Issue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Priority</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <Input placeholder="Brief description of your issue" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Description</label>
                      <Textarea 
                        placeholder="Please provide detailed information about your issue or question..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button>Submit Ticket</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Support;
