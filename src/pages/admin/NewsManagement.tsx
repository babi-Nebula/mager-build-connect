import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Image, Calendar, Eye } from 'lucide-react';

const NewsManagement = () => {
  const [newsArticles] = useState([
    {
      id: 1,
      title: 'New Addis Ababa Housing Project',
      description: 'Starting construction of a 300-unit residential complex in Bole area.',
      status: 'Published',
      date: '2025-02-01',
      image: '/placeholder.svg',
      timeline: '24 months',
      views: 1350
    },
    {
      id: 2,
      title: 'Eco-Friendly Building Initiative',
      description: 'Introducing sustainable construction materials in Ethiopian projects.',
      status: 'Draft',
      date: '2025-02-05',
      image: '/placeholder.svg',
      timeline: '18 months',
      views: 910
    },
    {
      id: 3,
      title: 'Commercial Tower Completion',
      description: 'Completed 25-story office tower ahead of schedule in Mekelle.',
      status: 'Published',
      date: '2025-01-20',
      image: '/placeholder.svg',
      timeline: 'Completed',
      views: 2200
    },
    {
      id: 4,
      title: 'Highway Expansion Project',
      description: 'Major highway expansion connecting Addis Ababa to Debre Berhan.',
      status: 'Published',
      date: '2025-01-30',
      image: '/placeholder.svg',
      timeline: '36 months',
      views: 1780
    },
    {
      id: 5,
      title: 'Smart City Integration',
      description: 'Implementing IoT and smart technologies in new Ethiopian urban areas.',
      status: 'Draft',
      date: '2025-02-10',
      image: '/placeholder.svg',
      timeline: '12 months',
      views: 620
    }
  ]);

  const getStatusColor = (status: string) => {
    return status === 'Published' ? 'bg-green-500/20 text-green-600' : 'bg-yellow-500/20 text-yellow-600';
  };

  const NewsForm = () => (
    <div className="space-y-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter news title" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Input id="timeline" placeholder="e.g., 18 months" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter detailed description" rows={4} />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Publication Date</Label>
          <Input id="date" type="date" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Project Image</Label>
        <div className="flex items-center gap-4">
          <Input id="image" type="file" accept="image/*" />
          <Button variant="outline" size="sm">
            <Image className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>
      
      <Button className="w-full">Create News Article</Button>
    </div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">News Management</h2>
                <p className="text-muted-foreground">Create and manage Ethiopian construction project news</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Create News
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Article</DialogTitle>
                  </DialogHeader>
                  <NewsForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Total Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{newsArticles.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Published</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {newsArticles.filter(article => article.status === 'Published').length}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-yellow-600">Drafts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">
                    {newsArticles.filter(article => article.status === 'Draft').length}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {newsArticles.reduce((sum, article) => sum + article.views, 0).toLocaleString()} ETB
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All News Articles</CardTitle>
                <CardDescription>Manage your Ethiopian construction project news and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Views (ETB)</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {newsArticles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium max-w-48">
                          <div className="truncate">{article.title}</div>
                        </TableCell>
                        <TableCell className="max-w-64">
                          <div className="truncate text-muted-foreground">{article.description}</div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(article.status)}>
                            {article.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{article.timeline}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Eye className="h-3 w-3" />
                            {article.views.toLocaleString()} ETB
                          </div>
                        </TableCell>
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
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default NewsManagement;
