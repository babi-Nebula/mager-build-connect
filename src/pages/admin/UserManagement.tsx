// --- SAME IMPORTS ---

import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Edit, Trash2, Search, Filter } from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    phone: '',
    address: ''
  });

  // --- UPDATED CONTRACTORS (ETHIOPIA) ---
  const contractors = [
    { id: 1, name: 'Abebe Bekele', email: 'abebe@ethioconstruction.et', company: 'Abebe Construction', phone: '+251911223344', status: 'Active', projects: 4 },
    { id: 2, name: 'Saron Mulugeta', email: 'saron@mulugetabuilders.et', company: 'Mulugeta Builders', phone: '+251922334455', status: 'Pending', projects: 1 },
    { id: 3, name: 'Yared Tesfaye', email: 'yared@adhisroadworks.et', company: 'Adhis Roadworks', phone: '+251933445566', status: 'Active', projects: 6 },
    { id: 4, name: 'Hanna Gebru', email: 'hanna@bluehills.et', company: 'Blue Hills Engineering', phone: '+251944556677', status: 'Inactive', projects: 0 },
    { id: 5, name: 'Mekonnen Tadesse', email: 'mekonnen@habeshabuild.et', company: 'Habesha Build', phone: '+251955667788', status: 'Active', projects: 3 },
  ];

  // --- UPDATED CUSTOMERS (ETHIOPIA) ---
  const customers = [
    { id: 1, name: 'Addis Ababa City Administration', email: 'info@aac.gov.et', company: 'AAC Infrastructure', phone: '+251111234567', status: 'Active', projects: 2 },
    { id: 2, name: 'Ethiopian Roads Authority', email: 'contact@era.gov.et', company: 'ERA', phone: '+251112345678', status: 'Active', projects: 1 },
    { id: 3, name: 'Goh Real Estate', email: 'projects@goh.et', company: 'Goh Properties', phone: '+251913334455', status: 'Active', projects: 1 },
    { id: 4, name: 'Sunshine Investment Group', email: 'admin@sunshine.et', company: 'Sunshine Construction Group', phone: '+251922112233', status: 'Pending', projects: 0 },
    { id: 5, name: 'Ethiopian Airlines', email: 'hq@ethiopianairlines.et', company: 'EAL Properties', phone: '+251116656667', status: 'Active', projects: 3 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-500';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-500';
      case 'Inactive': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  // --- SAME TABLE COMPONENT ---
  const UserTable = ({ users, type }: { users: any[], type: 'contractor' | 'customer' }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Search ${type}s...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* ADD USER MODAL SAME */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <UserPlus className="h-4 w-4 mr-2" />
              Add {type === 'contractor' ? 'Contractor' : 'Customer'}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New {type === 'contractor' ? 'Contractor' : 'Customer'}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter address" />
              </div>
              <Button className="w-full">Create {type === 'contractor' ? 'Contractor' : 'Customer'}</Button>
            </div>

          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(user.status)}> {user.status} </Badge>
                </TableCell>
                <TableCell>{user.projects}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );

  // --- DASHBOARD SUMMARY + TABS (UNCHANGED) ---
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />

        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">User Management</h2>
              <p className="text-muted-foreground">Manage contractors and customers in Ethiopia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-blue-600">Total Contractors</CardTitle>
                  <CardDescription>Active construction professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{contractors.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-600">Total Customers</CardTitle>
                  <CardDescription>Registered project owners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{customers.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-600">Active Projects</CardTitle>
                  <CardDescription>Currently running projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">
                    {contractors.reduce((sum, c) => sum + c.projects, 0)}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="contractors" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="contractors">Contractors</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>

              <TabsContent value="contractors">
                <UserTable users={contractors} type="contractor" />
              </TabsContent>

              <TabsContent value="customers">
                <UserTable users={customers} type="customer" />
              </TabsContent>
            </Tabs>

          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default UserManagement;
