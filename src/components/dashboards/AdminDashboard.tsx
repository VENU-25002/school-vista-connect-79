
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, GraduationCap, UserCheck, BookOpen } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  grade: string;
  dateOfBirth: string;
  gender: string;
}

const AdminDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    studentId: '',
    grade: '',
    dateOfBirth: '',
    gender: '',
  });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
    const studentUsers = users.filter((user: any) => user.role === 'student');
    setStudents(studentUsers);
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.studentId) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
    const studentData = {
      id: Date.now().toString(),
      ...newStudent,
      role: 'student',
      password: 'defaultPassword123', // In real app, generate secure password
    };

    users.push(studentData);
    localStorage.setItem('schoolUsers', JSON.stringify(users));
    
    setNewStudent({
      name: '',
      email: '',
      studentId: '',
      grade: '',
      dateOfBirth: '',
      gender: '',
    });
    
    loadStudents();
    toast({
      title: "Success",
      description: "Student added successfully",
    });
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = () => {
    if (!editingStudent) return;

    const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
    const updatedUsers = users.map((user: any) => 
      user.id === editingStudent.id ? editingStudent : user
    );
    
    localStorage.setItem('schoolUsers', JSON.stringify(updatedUsers));
    setEditingStudent(null);
    loadStudents();
    
    toast({
      title: "Success",
      description: "Student updated successfully",
    });
  };

  const handleDeleteStudent = (studentId: string) => {
    const users = JSON.parse(localStorage.getItem('schoolUsers') || '[]');
    const updatedUsers = users.filter((user: any) => user.id !== studentId);
    localStorage.setItem('schoolUsers', JSON.stringify(updatedUsers));
    loadStudents();
    
    toast({
      title: "Success",
      description: "Student deleted successfully",
    });
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Teachers",
      value: "24",
      icon: GraduationCap,
      color: "text-green-600",
    },
    {
      title: "Present Today",
      value: "89%",
      icon: UserCheck,
      color: "text-yellow-600",
    },
    {
      title: "Total Courses",
      value: "48",
      icon: BookOpen,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your school's operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Add Student Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Student</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  placeholder="Student name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  placeholder="Student email"
                />
              </div>
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  value={newStudent.studentId}
                  onChange={(e) => setNewStudent({...newStudent, studentId: e.target.value})}
                  placeholder="Student ID"
                />
              </div>
              <div>
                <Label htmlFor="grade">Grade</Label>
                <Input
                  id="grade"
                  value={newStudent.grade}
                  onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
                  placeholder="Grade"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={newStudent.dateOfBirth}
                  onChange={(e) => setNewStudent({...newStudent, dateOfBirth: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Input
                  id="gender"
                  value={newStudent.gender}
                  onChange={(e) => setNewStudent({...newStudent, gender: e.target.value})}
                  placeholder="Gender"
                />
              </div>
              <Button onClick={handleAddStudent} className="w-full">
                Add Student
              </Button>
            </CardContent>
          </Card>

          {/* Student List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Student Management</span>
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredStudents.map((student) => (
                    <div key={student.id} className="border rounded-lg p-4">
                      {editingStudent?.id === student.id ? (
                        <div className="space-y-2">
                          <Input
                            value={editingStudent.name}
                            onChange={(e) => setEditingStudent({...editingStudent, name: e.target.value})}
                            placeholder="Name"
                          />
                          <Input
                            value={editingStudent.email}
                            onChange={(e) => setEditingStudent({...editingStudent, email: e.target.value})}
                            placeholder="Email"
                          />
                          <Input
                            value={editingStudent.studentId}
                            onChange={(e) => setEditingStudent({...editingStudent, studentId: e.target.value})}
                            placeholder="Student ID"
                          />
                          <Input
                            value={editingStudent.grade}
                            onChange={(e) => setEditingStudent({...editingStudent, grade: e.target.value})}
                            placeholder="Grade"
                          />
                          <div className="flex space-x-2">
                            <Button onClick={handleUpdateStudent} size="sm">Save</Button>
                            <Button onClick={() => setEditingStudent(null)} variant="outline" size="sm">Cancel</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <p className="text-sm text-gray-600">ID: {student.studentId} | Grade: {student.grade}</p>
                            <p className="text-sm text-gray-600">{student.email}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button onClick={() => handleEditStudent(student)} size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button onClick={() => handleDeleteStudent(student.id)} size="sm" variant="destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
