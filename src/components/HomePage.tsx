
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, User, Mail } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to EduManage</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A comprehensive school management system that connects students, parents, teachers, and administrators 
            in one unified platform for educational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/login')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Student Portal
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Teacher Portal
            </Button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide innovative educational technology solutions that enhance learning experiences, 
            streamline administrative processes, and foster better communication between all stakeholders 
            in the educational community. We believe in empowering schools with modern tools to achieve 
            academic excellence and administrative efficiency.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <User className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Student Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Comprehensive student profiles, attendance tracking, and grade management
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Teacher Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Class management, assignment posting, and parent communication tools
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Event scheduling, exam dates, and important academic milestones
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Instant notifications, announcements, and messaging between stakeholders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent News & Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Annual Science Fair 2024</CardTitle>
                <p className="text-sm text-gray-500">March 15, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Students showcase innovative projects in our annual science fair. 
                  Registration opens next week.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spring Break Holiday</CardTitle>
                <p className="text-sm text-gray-500">March 25-29, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  School will be closed for spring break. Classes resume on April 1st.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Parent-Teacher Conference</CardTitle>
                <p className="text-sm text-gray-500">April 10, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Schedule your meeting with teachers to discuss student progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-2">📧 info@edumanage.edu</p>
              <p className="text-gray-300 mb-2">📞 (555) 123-4567</p>
              <p className="text-gray-300">📍 123 Education St, Learning City, LC 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">School Hours</h3>
              <p className="text-gray-300 mb-2">Monday - Friday: 8:00 AM - 3:30 PM</p>
              <p className="text-gray-300 mb-2">Office Hours: 7:30 AM - 4:00 PM</p>
              <p className="text-gray-300">Weekend: Closed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Button 
                  variant="link" 
                  className="text-gray-300 hover:text-white p-0 h-auto"
                  onClick={() => navigate('/academics')}
                >
                  Academic Calendar
                </Button>
                <br />
                <Button 
                  variant="link" 
                  className="text-gray-300 hover:text-white p-0 h-auto"
                  onClick={() => navigate('/login')}
                >
                  Student Portal
                </Button>
                <br />
                <Button 
                  variant="link" 
                  className="text-gray-300 hover:text-white p-0 h-auto"
                  onClick={() => navigate('/login')}
                >
                  Parent Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
