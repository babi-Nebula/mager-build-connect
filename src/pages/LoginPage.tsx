
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock credentials for testing
  const mockCredentials = {
    admin: { email: 'admin@demo.com', password: 'admin123' },
    contractor: { email: 'contractor@demo.com', password: 'contractor123' },
    customer: { email: 'customer@demo.com', password: 'customer123' }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const roleCredentials = mockCredentials[role as keyof typeof mockCredentials];
      
      if (roleCredentials && email === roleCredentials.email && password === roleCredentials.password) {
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', email);
        
        toast({
          title: "Login Successful",
          description: `Welcome back! Redirecting to ${role} dashboard...`,
        });

        // Redirect based on role
        switch (role) {
          case 'admin':
            navigate('/admin/dashboard');
            break;
          case 'contractor':
            navigate('/contractor/dashboard');
            break;
          case 'customer':
            navigate('/customer/dashboard');
            break;
          default:
            navigate('/');
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-primary mb-4">
            <Building size={32} />
            <span>Mager Construction</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">Login</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2 font-medium">Demo Credentials:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong>Admin:</strong> admin@demo.com / admin123</p>
                <p><strong>Contractor:</strong> contractor@demo.com / contractor123</p>
                <p><strong>Customer:</strong> customer@demo.com / customer123</p>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
