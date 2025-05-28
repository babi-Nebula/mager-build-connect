import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Shield, Bell, Mail, Database, Key } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    newsletter: true
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    registrationOpen: true,
    autoApproval: false,
    backupEnabled: true
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Settings</h2>
              <p className="text-muted-foreground">Manage your system preferences and configurations</p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="backup">Backup</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                    <CardDescription>Update your company details and branding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" defaultValue="Mager Construction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://mager.construction" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Contact Email</Label>
                        <Input id="email" type="email" defaultValue="contact@mager.construction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address</Label>
                      <Textarea id="address" defaultValue="123 Construction Ave, Builder City, BC 12345" />
                    </div>
                    
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional Settings</CardTitle>
                    <CardDescription>Configure timezone, currency, and localization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="est">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="est">Eastern (EST)</SelectItem>
                            <SelectItem value="cst">Central (CST)</SelectItem>
                            <SelectItem value="mst">Mountain (MST)</SelectItem>
                            <SelectItem value="pst">Pacific (PST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="cad">CAD (C$)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>Manage password policies and authentication settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                        </div>
                        <Switch id="two-factor" defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="password-expiry">Password Expiry</Label>
                          <p className="text-sm text-muted-foreground">Force password changes every 90 days</p>
                        </div>
                        <Switch id="password-expiry" defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="login-attempts">Limit Login Attempts</Label>
                          <p className="text-sm text-muted-foreground">Lock accounts after 5 failed attempts</p>
                        </div>
                        <Switch id="login-attempts" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                      <Input id="session-timeout" type="number" defaultValue="30" className="w-32" />
                    </div>
                    
                    <Button>Update Security Settings</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Keys</CardTitle>
                    <CardDescription>Manage API keys for third-party integrations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Google Maps API</div>
                          <div className="text-sm text-muted-foreground">For location services</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500/20 text-green-600">Active</Badge>
                          <Button variant="outline" size="sm">
                            <Key className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Payment Gateway</div>
                          <div className="text-sm text-muted-foreground">For processing payments</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500/20 text-green-600">Active</Badge>
                          <Button variant="outline" size="sm">
                            <Key className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Email Service</div>
                          <div className="text-sm text-muted-foreground">For sending notifications</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-500/20 text-yellow-600">Inactive</Badge>
                          <Button variant="outline" size="sm">
                            <Key className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>Choose how you want to receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch 
                          id="email-notifications" 
                          checked={notifications.email}
                          onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive urgent alerts via SMS</p>
                        </div>
                        <Switch 
                          id="sms-notifications" 
                          checked={notifications.sms}
                          onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Browser push notifications</p>
                        </div>
                        <Switch 
                          id="push-notifications" 
                          checked={notifications.push}
                          onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="newsletter">Newsletter</Label>
                          <p className="text-sm text-muted-foreground">Monthly newsletter with updates</p>
                        </div>
                        <Switch 
                          id="newsletter" 
                          checked={notifications.newsletter}
                          onCheckedChange={(checked) => setNotifications({...notifications, newsletter: checked})}
                        />
                      </div>
                    </div>
                    
                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="system" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <SettingsIcon className="h-5 w-5" />
                      System Configuration
                    </CardTitle>
                    <CardDescription>Manage system-wide settings and maintenance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                          <p className="text-sm text-muted-foreground">Put the system in maintenance mode</p>
                        </div>
                        <Switch 
                          id="maintenance-mode" 
                          checked={systemSettings.maintenanceMode}
                          onCheckedChange={(checked) => setSystemSettings({...systemSettings, maintenanceMode: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="registration-open">Open Registration</Label>
                          <p className="text-sm text-muted-foreground">Allow new user registrations</p>
                        </div>
                        <Switch 
                          id="registration-open" 
                          checked={systemSettings.registrationOpen}
                          onCheckedChange={(checked) => setSystemSettings({...systemSettings, registrationOpen: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-approval">Auto-approve Contractors</Label>
                          <p className="text-sm text-muted-foreground">Automatically approve contractor applications</p>
                        </div>
                        <Switch 
                          id="auto-approval" 
                          checked={systemSettings.autoApproval}
                          onCheckedChange={(checked) => setSystemSettings({...systemSettings, autoApproval: checked})}
                        />
                      </div>
                    </div>
                    
                    <Button>Update System Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="backup" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Backup & Restore
                    </CardTitle>
                    <CardDescription>Manage data backups and system restore points</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-backup">Automatic Backups</Label>
                          <p className="text-sm text-muted-foreground">Enable scheduled backups</p>
                        </div>
                        <Switch 
                          id="auto-backup" 
                          checked={systemSettings.backupEnabled}
                          onCheckedChange={(checked) => setSystemSettings({...systemSettings, backupEnabled: checked})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="backup-frequency">Backup Frequency</Label>
                        <Select defaultValue="daily">
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Recent Backups</h4>
                      <div className="space-y-2">
                        {[
                          { date: '2024-01-15 02:00', size: '2.3 GB', status: 'Complete' },
                          { date: '2024-01-14 02:00', size: '2.2 GB', status: 'Complete' },
                          { date: '2024-01-13 02:00', size: '2.1 GB', status: 'Complete' },
                        ].map((backup, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <div className="font-medium">{backup.date}</div>
                              <div className="text-sm text-muted-foreground">{backup.size}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-500/20 text-green-600">{backup.status}</Badge>
                              <Button variant="outline" size="sm">Download</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button>Create Backup Now</Button>
                      <Button variant="outline">Restore from Backup</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
