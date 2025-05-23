
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Home } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardRoute = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'admin': return '/admin';
      case 'teacher': return '/teacher';
      case 'student': return '/student';
      case 'parent': return '/parent';
      default: return '/';
    }
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              EduManage
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/academics" className="text-gray-700 hover:text-blue-600 transition-colors">Academics</Link>
              {isAuthenticated && (
                <Link to={getDashboardRoute()} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white z-50">
                  <DropdownMenuItem onClick={() => navigate(getDashboardRoute())}>
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/login')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => navigate('/register')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
