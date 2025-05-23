
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '../../contexts/AuthContext';
import { Users, BookOpen, Calendar, CheckCircle } from 'lucide-react';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    subject: '',
  });

  const classes = [
    { id: 1, name: 'Mathematics - Grade 10', students: 28, room: 'Room 101' },
    { id: 2, name: 'Algebra - Grade 9', students: 25, room: 'Room 102' },
    { id: 3, name: 'Calculus - Grade 12', students: 22, room: 'Room 103' },
  ];

  const todaySchedule = [
    { time: '8:00 AM', class: 'Mathematics - Grade 10', room: 'Room 101' },
    { time: '9:00 AM', class: 'Algebra - Grade 9', room: 'Room 102' },
    { time: '10:10 AM', class: 'Free Period', room: '-' },
    { time: '11:10 AM', class: 'Calculus - Grade 12', room: 'Room 103' },
    { time: '12:45 PM', class: 'Mathematics - Grade 10', room: 'Room 101' },
  ];

  const recentAssignments = [
    { title: 'Algebra Homework', class: 'Grade 9', submitted: 23, total: 25, dueDate: '2024-03-20' },
    { title: 'Calculus Quiz', class: 'Grade 12', submitted: 20, total: 22, dueDate: '2024-03-18' },
    { title: 'Geometry Project', class: 'Grade 10', submitted: 25, total: 28, dueDate: '2024-03-22' },
  ];

  const handleCreateAssignment = () => {
    if (!newAssignment.title || !newAssignment.dueDate) {
      return;
    }

    // In a real app, this would save to a database
    console.log('Creating assignment:', newAssignment);
    
    setNewAssignment({
      title: '',
      description: '',
      dueDate: '',
      subject: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
          <p className="text-gray-600">Employee ID: {user?.employeeId} | Department: {user?.department}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">75</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Classes</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Grades</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className="text-2xl font-bold text-gray-900">94%</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-blue-600">{item.time}</div>
                      <div>
                        <div className="font-semibold">{item.class}</div>
                        <div className="text-sm text-gray-600">{item.room}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Create Assignment */}
          <Card>
            <CardHeader>
              <CardTitle>Create Assignment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input
                  placeholder="Assignment title"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                />
              </div>
              <div>
                <Input
                  placeholder="Subject/Class"
                  value={newAssignment.subject}
                  onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Assignment description"
                  value={newAssignment.description}
                  onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
                />
              </div>
              <div>
                <Input
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                />
              </div>
              <Button onClick={handleCreateAssignment} className="w-full">
                Create Assignment
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* My Classes */}
          <Card>
            <CardHeader>
              <CardTitle>My Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes.map((classItem) => (
                  <div key={classItem.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{classItem.name}</h3>
                        <p className="text-sm text-gray-600">{classItem.students} students • {classItem.room}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Assignments */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssignments.map((assignment, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.class} • Due: {assignment.dueDate}</p>
                        <p className="text-sm text-green-600">
                          {assignment.submitted}/{assignment.total} submitted
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        Grade
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
