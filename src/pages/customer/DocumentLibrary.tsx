import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Search, Upload, Folder, File, Calendar, User } from 'lucide-react';

const DocumentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Project Plans - Phase 1.pdf', category: 'Plans', type: 'PDF', size: '15.2 MB', uploadedBy: 'Architect Team', uploadDate: '2024-01-20', lastModified: '2024-01-20', version: '1.0', status: 'Final', downloads: 12 },
    { id: 2, name: 'Building Permits.pdf', category: 'Permits', type: 'PDF', size: '2.1 MB', uploadedBy: 'Legal Department', uploadDate: '2024-01-18', lastModified: '2024-01-18', version: '1.0', status: 'Approved', downloads: 8 },
    { id: 3, name: 'Material Specifications.xlsx', category: 'Specifications', type: 'Excel', size: '890 KB', uploadedBy: 'Engineering Team', uploadDate: '2024-01-15', lastModified: '2024-01-22', version: '2.1', status: 'Updated', downloads: 15 },
    { id: 4, name: 'Safety Compliance Report.pdf', category: 'Safety', type: 'PDF', size: '5.7 MB', uploadedBy: 'Safety Officer', uploadDate: '2024-01-22', lastModified: '2024-01-22', version: '1.0', status: 'New', downloads: 3 },
    { id: 5, name: 'Progress Photos - Week 3.zip', category: 'Photos', type: 'ZIP', size: '45.3 MB', uploadedBy: 'Site Manager', uploadDate: '2024-01-21', lastModified: '2024-01-21', version: '1.0', status: 'Final', downloads: 7 },
    { id: 6, name: 'Change Order #001.pdf', category: 'Change Orders', type: 'PDF', size: '1.8 MB', uploadedBy: 'Project Manager', uploadDate: '2024-01-19', lastModified: '2024-01-19', version: '1.0', status: 'Pending Approval', downloads: 4 }
  ]);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-5 w-5 text-red-400" />;
      case 'Excel': return <FileText className="h-5 w-5 text-green-400" />;
      case 'ZIP': return <Folder className="h-5 w-5 text-yellow-400" />;
      default: return <File className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Final': return 'bg-green-500/20 text-green-400';
      case 'Approved': return 'bg-blue-500/20 text-blue-400';
      case 'Updated': return 'bg-yellow-500/20 text-yellow-400';
      case 'New': return 'bg-purple-500/20 text-purple-400';
      case 'Pending Approval': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalDownloads = documents.reduce((acc, doc) => acc + doc.downloads, 0);

  const downloadAll = () => {
    alert('Download all documents functionality is not implemented yet.');
  };

  const uploadDocument = () => {
    alert('Upload document functionality is not implemented yet.');
  };

  return (
    <DashboardLayout role="customer" userName="ABC Corporation">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Document Library</h2>
            <p className="text-muted-foreground">Access all project documents, plans, and reports</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={uploadDocument}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
            <Button onClick={downloadAll}>
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>

        {/* Document Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{documents.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
              <Folder className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{new Set(documents.map(d => d.category)).size}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New This Week</CardTitle>
              <Calendar className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{documents.filter(d => new Date(d.uploadDate) >= new Date(Date.now() - 7*24*60*60*1000)).length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalDownloads}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search documents..."
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
                {Array.from(new Set(documents.map(d => d.category))).map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Documents List */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle>Project Documents</CardTitle>
            <CardDescription>All documents related to your construction project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDocuments.map(doc => (
                <Card key={doc.id} className="bg-muted/20 border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">{getFileIcon(doc.type)}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{doc.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>{doc.category}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>v{doc.version}</span>
                            <span>•</span>
                            <span className="flex items-center"><User className="h-3 w-3 mr-1" />{doc.uploadedBy}</span>
                            <span>•</span>
                            <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{doc.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        <div className="text-sm text-muted-foreground">{doc.downloads} downloads</div>
                        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" />Download</Button>
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

export default DocumentLibrary;
