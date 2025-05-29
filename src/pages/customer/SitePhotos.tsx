import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera, Download, Search, Calendar, Image, Filter, Grid, List } from 'lucide-react';

const SitePhotos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTab, setSelectedTab] = useState('all');

  const photoGalleries = [
    {
      id: 1,
      title: 'Foundation Work - Week 1',
      category: 'Foundation',
      date: '2024-01-15',
      photographer: 'Site Manager',
      photoCount: 24,
      description: 'Excavation and foundation pouring progress',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      phase: 'Foundation',
      weather: 'Clear',
      tags: ['excavation', 'concrete', 'foundation']
    },
    {
      id: 2,
      title: 'Structural Steel Installation',
      category: 'Structure',
      date: '2024-01-20',
      photographer: 'Safety Officer',
      photoCount: 18,
      description: 'Steel beam installation and welding work',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      phase: 'Structure',
      weather: 'Partly Cloudy',
      tags: ['steel', 'welding', 'structure']
    },
    {
      id: 3,
      title: 'Site Safety Inspection',
      category: 'Safety',
      date: '2024-01-22',
      photographer: 'Safety Inspector',
      photoCount: 12,
      description: 'Weekly safety compliance documentation',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      phase: 'General',
      weather: 'Clear',
      tags: ['safety', 'inspection', 'compliance']
    },
    {
      id: 4,
      title: 'Progress Overview - Month 1',
      category: 'Progress',
      date: '2024-01-25',
      photographer: 'Project Manager',
      photoCount: 32,
      description: 'Overall project progress documentation',
      thumbnail: 'https://images.unsplash.com/photo-1590725175146-531924c5253b?w=400&h=300&fit=crop',
      phase: 'Multiple',
      weather: 'Clear',
      tags: ['progress', 'overview', 'milestone']
    },
    {
      id: 5,
      title: 'Electrical Rough-In Work',
      category: 'MEP',
      date: '2024-01-28',
      photographer: 'Electrical Foreman',
      photoCount: 15,
      description: 'Electrical conduit and rough-in installation',
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
      phase: 'MEP',
      weather: 'Overcast',
      tags: ['electrical', 'conduit', 'mep']
    },
    {
      id: 6,
      title: 'Quality Control Check',
      category: 'Quality',
      date: '2024-01-30',
      photographer: 'QC Inspector',
      photoCount: 8,
      description: 'Quality assurance documentation photos',
      thumbnail: 'https://images.unsplash.com/photo-1558618047-b12e3c2b51fb?w=400&h=300&fit=crop',
      phase: 'Quality',
      weather: 'Clear',
      tags: ['quality', 'inspection', 'documentation']
    },
    {
      id: 7,
      title: 'Concrete Pour - Level 3',
      category: 'Foundation',
      date: '2024-02-01',
      photographer: 'Site Supervisor',
      photoCount: 28,
      description: 'Third floor concrete slab pouring operation',
      thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      phase: 'Structure',
      weather: 'Clear',
      tags: ['concrete', 'slab', 'structure']
    },
    {
      id: 8,
      title: 'HVAC Installation Progress',
      category: 'MEP',
      date: '2024-02-03',
      photographer: 'MEP Coordinator',
      photoCount: 22,
      description: 'HVAC ductwork and equipment installation',
      thumbnail: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=400&h=300&fit=crop',
      phase: 'MEP',
      weather: 'Clear',
      tags: ['hvac', 'ductwork', 'mechanical']
    },
    {
      id: 9,
      title: 'Exterior Cladding Installation',
      category: 'Structure',
      date: '2024-02-05',
      photographer: 'Site Manager',
      photoCount: 35,
      description: 'Building envelope and exterior finishing work',
      thumbnail: 'https://images.unsplash.com/photo-1567461519105-b83d44a6d4fb?w=400&h=300&fit=crop',
      phase: 'Finishing',
      weather: 'Overcast',
      tags: ['cladding', 'exterior', 'envelope']
    },
    {
      id: 10,
      title: 'Interior Framing - Office Floors',
      category: 'Structure',
      date: '2024-02-08',
      photographer: 'Framing Foreman',
      photoCount: 19,
      description: 'Metal stud framing for office spaces',
      thumbnail: 'https://images.unsplash.com/photo-1493225655618-72e3cd67b0a0?w=400&h=300&fit=crop',
      phase: 'Interior',
      weather: 'Clear',
      tags: ['framing', 'interior', 'offices']
    },
    {
      id: 11,
      title: 'Weekly Safety Meeting',
      category: 'Safety',
      date: '2024-02-10',
      photographer: 'Safety Officer',
      photoCount: 6,
      description: 'Team safety briefing and equipment check',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      phase: 'General',
      weather: 'Clear',
      tags: ['safety', 'meeting', 'team']
    },
    {
      id: 12,
      title: 'Roofing Installation Complete',
      category: 'Progress',
      date: '2024-02-12',
      photographer: 'Project Manager',
      photoCount: 42,
      description: 'Roof membrane and weatherproofing completion',
      thumbnail: 'https://images.unsplash.com/photo-1574263867128-5e42bdd5f2b6?w=400&h=300&fit=crop',
      phase: 'Envelope',
      weather: 'Clear',
      tags: ['roofing', 'membrane', 'weatherproofing']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Foundation': return 'bg-brown-500/20 text-brown-400';
      case 'Structure': return 'bg-blue-500/20 text-blue-400';
      case 'Safety': return 'bg-red-500/20 text-red-400';
      case 'Progress': return 'bg-green-500/20 text-green-400';
      case 'MEP': return 'bg-yellow-500/20 text-yellow-400';
      case 'Quality': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredGalleries = photoGalleries.filter(gallery => {
    const matchesSearch = gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gallery.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gallery.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || gallery.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const totalPhotos = photoGalleries.reduce((sum, gallery) => sum + gallery.photoCount, 0);

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Site Photos</h2>
            <p className="text-muted-foreground">View construction progress and documentation photos</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
            <Button variant="outline" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
              {viewMode === 'grid' ? <List className="h-4 w-4 mr-2" /> : <Grid className="h-4 w-4 mr-2" />}
              {viewMode === 'grid' ? 'List View' : 'Grid View'}
            </Button>
            <Button>
              <Camera className="h-4 w-4 mr-2" />
              Request Photos
            </Button>
          </div>
        </div>

        {/* Photo Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Photos</CardTitle>
              <Image className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalPhotos}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Photo Galleries</CardTitle>
              <Camera className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{photoGalleries.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4</div>
              <p className="text-xs text-muted-foreground">New galleries</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
              <Filter className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">6</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Foundation">Foundation</SelectItem>
                <SelectItem value="Structure">Structure</SelectItem>
                <SelectItem value="Safety">Safety</SelectItem>
                <SelectItem value="Progress">Progress</SelectItem>
                <SelectItem value="MEP">MEP</SelectItem>
                <SelectItem value="Quality">Quality</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Photo Galleries */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle>Photo Galleries</CardTitle>
            <CardDescription>Construction progress and documentation photos organized by category</CardDescription>
          </CardHeader>
          <CardContent>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGalleries.map((gallery) => (
                  <Card key={gallery.id} className="bg-muted/20 border border-border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src={gallery.thumbnail}
                        alt={gallery.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={getCategoryColor(gallery.category)}>
                          {gallery.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                        {gallery.photoCount} photos
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{gallery.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{gallery.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span>{gallery.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Photographer:</span>
                          <span>{gallery.photographer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phase:</span>
                          <span>{gallery.phase}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weather:</span>
                          <span>{gallery.weather}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {gallery.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Gallery
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredGalleries.map((gallery) => (
                  <Card key={gallery.id} className="bg-muted/20 border border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-24 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={gallery.thumbnail}
                            alt={gallery.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground">{gallery.title}</h3>
                            <Badge className={getCategoryColor(gallery.category)}>
                              {gallery.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{gallery.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{gallery.photoCount} photos</span>
                            <span>•</span>
                            <span>{gallery.date}</span>
                            <span>•</span>
                            <span>{gallery.photographer}</span>
                            <span>•</span>
                            <span>{gallery.phase}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Gallery</Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SitePhotos;
