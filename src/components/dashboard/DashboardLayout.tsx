import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { 
  Building, 
  Home, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  BarChart3,
  Briefcase,
  DollarSign,
  Bell,
  Package,
  ClipboardCheck,
  Calendar,
  FolderOpen,
  CreditCard,
  MessageSquare,
  HelpCircle,
  Camera,
  Shield
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'contractor' | 'customer';
  userName?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role, userName }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const getNavigationItems = () => {
    const baseItems = [
      { name: 'Dashboard', href: `/${role}/dashboard`, icon: Home },
    ];

    switch (role) {
      case 'admin':
        return [
          ...baseItems,
          { name: 'User Management', href: `/${role}/users`, icon: Users },
          { name: 'Reports', href: `/${role}/reports`, icon: BarChart3 },
          { name: 'News Management', href: `/${role}/news`, icon: FileText },
          { name: 'Settings', href: `/${role}/settings`, icon: Settings },
        ];
      case 'contractor':
        return [
          ...baseItems,
          { name: 'Project Management', href: `/${role}/projects`, icon: Calendar },
          { name: 'Employee Management', href: `/${role}/employees`, icon: Users },
          { name: 'Raw Materials', href: `/${role}/materials`, icon: Package },
          { name: 'Quality Control', href: `/${role}/quality`, icon: ClipboardCheck },
          { name: 'Reports', href: `/${role}/reports`, icon: BarChart3 },
        ];
      case 'customer':
        return [
          ...baseItems,
          { name: 'Project Overview', href: `/${role}/projects`, icon: Briefcase },
          { name: 'Reports', href: `/${role}/reports`, icon: FileText },
          { name: 'Notifications', href: `/${role}/notifications`, icon: Bell },
          { name: 'Document Library', href: `/${role}/documents`, icon: FolderOpen },
          { name: 'Payments & Billing', href: `/${role}/payments`, icon: CreditCard },
          { name: 'Change Orders', href: `/${role}/change-orders`, icon: MessageSquare },
          { name: 'Site Photos', href: `/${role}/photos`, icon: Camera },
          { name: 'Safety & Compliance', href: `/${role}/safety`, icon: Shield },
          { name: 'Support', href: `/${role}/support`, icon: HelpCircle },
        ];
      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-background dark:bg-slate-900 flex w-full">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 
        bg-white dark:bg-slate-900/95 backdrop-blur-lg border-r border-border
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        
        <div className="flex items-center justify-between h-16 px-6 border-b border-border dark:border-slate-700">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary dark:text-primary-foreground">
            <Building size={24} />
            <span>Mager</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-foreground dark:text-gray-200 hover:text-primary"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white hover:bg-muted/50 dark:hover:bg-slate-700/50'
                    }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border dark:border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground dark:text-gray-200">Theme</span>
              <ThemeToggle />
            </div>

            <div>
              <p className="text-sm font-medium text-foreground dark:text-gray-200">{userName || 'User'}</p>
              <p className="text-xs text-muted-foreground dark:text-gray-400 capitalize">{role}</p>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-800/50 backdrop-blur-lg border-b border-border dark:border-slate-700 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-foreground dark:text-gray-200 hover:text-primary"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-foreground dark:text-gray-200 capitalize">{role} Dashboard</h1>
            {/* Theme toggle in header as well */}
            <ThemeToggle />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
