
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    // Student specific
    studentId: '',
    grade: '',
    dateOfBirth: '',
    gender: '',
    // Parent specific
    childStudentId: '',
    relationship: '',
    // Teacher specific
    employeeId: '',
    department: '',
    subjectsTaught: '',
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Registration Failed",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const userData = {
        ...formData,
        subjectsTaught: formData.subjectsTaught ? formData.subjectsTaught.split(',').map(s => s.trim()) : [],
      };
      delete userData.confirmPassword;

      const success = await register(userData);
      if (success) {
        toast({
          title: "Registration Successful",
          description: "Your account has been created. Please login to continue.",
        });
        navigate('/login');
      } else {
        toast({
          title: "Registration Failed",
          description: "An error occurred during registration",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderRoleSpecificFields = () => {
    switch (formData.role) {
      case 'student':
        return (
          <>
            <div>
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => handleInputChange('studentId', e.target.value)}
                required
                placeholder="Enter student ID"
              />
            </div>
            <div>
              <Label htmlFor="grade">Grade</Label>
              <Select onValueChange={(value) => handleInputChange('grade', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={`Grade ${i + 1}`}>
                      Grade {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => handleInputChange('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      
      case 'parent':
        return (
          <>
            <div>
              <Label htmlFor="childStudentId">Child's Student ID</Label>
              <Input
                id="childStudentId"
                value={formData.childStudentId}
                onChange={(e) => handleInputChange('childStudentId', e.target.value)}
                required
                placeholder="Enter child's student ID"
              />
            </div>
            <div>
              <Label htmlFor="relationship">Relationship to Child</Label>
              <Select onValueChange={(value) => handleInputChange('relationship', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="father">Father</SelectItem>
                  <SelectItem value="mother">Mother</SelectItem>
                  <SelectItem value="guardian">Guardian</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      
      case 'teacher':
        return (
          <>
            <div>
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                value={formData.employeeId}
                onChange={(e) => handleInputChange('employeeId', e.target.value)}
                required
                placeholder="Enter employee ID"
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Select onValueChange={(value) => handleInputChange('department', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="physical-education">Physical Education</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="subjectsTaught">Subjects Taught (comma-separated)</Label>
              <Input
                id="subjectsTaught"
                value={formData.subjectsTaught}
                onChange={(e) => handleInputChange('subjectsTaught', e.target.value)}
                placeholder="e.g., Algebra, Geometry, Calculus"
              />
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-600">Create Account</CardTitle>
          <p className="text-gray-600">Join the EduManage community</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  placeholder="Enter password"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={(value) => handleInputChange('role', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.role && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderRoleSpecificFields()}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
