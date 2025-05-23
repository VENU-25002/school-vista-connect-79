
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../../contexts/AuthContext';
import { Calendar, BookOpen, User, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  const scheduleData = [
    { time: '8:00 AM', subject: 'Mathematics', teacher: 'Ms. Johnson', room: 'Room 101' },
    { time: '9:00 AM', subject: 'English Literature', teacher: 'Mr. Davis', room: 'Room 203' },
    { time: '10:10 AM', subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' },
    { time: '11:10 AM', subject: 'History', teacher: 'Ms. Wilson', room: 'Room 305' },
    { time: '12:45 PM', subject: 'Physical Education', teacher: 'Coach Brown', room: 'Gymnasium' },
    { time: '1:45 PM', subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Studio' },
  ];

  const assignments = [
    { subject: 'Mathematics', title: 'Algebra Homework', dueDate: '2024-03-20', status: 'pending' },
    { subject: 'English', title: 'Essay on Shakespeare', dueDate: '2024-03-22', status: 'submitted' },
    { subject: 'Chemistry', title: 'Lab Report', dueDate: '2024-03-25', status: 'pending' },
    { subject: 'History', title: 'World War II Research', dueDate: '2024-03-28', status: 'pending' },
  ];

  const grades = [
    { subject: 'Mathematics', grade: 'A-', percentage: 92 },
    { subject: 'English Literature', grade: 'B+', percentage: 87 },
    { subject: 'Chemistry', grade: 'A', percentage: 95 },
    { subject: 'History', grade: 'B', percentage: 85 },
    { subject: 'Physical Education', grade: 'A', percentage: 98 },
    { subject: 'Art', grade: 'A-', percentage: 90 },
  ];

  const announcements = [
    {
      title: 'Science Fair Registration Open',
      date: '2024-03-15',
      content: 'Register for the annual science fair by March 30th.',
    },
    {
      title: 'Spring Break Reminder',
      date: '2024-03-14',
      content: 'School will be closed from March 25-29 for spring break.',
    },
    {
      title: 'Library Hours Extended',
      date: '2024-03-13',
      content: 'Library is now open until 6 PM on weekdays.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">Student ID: {user?.studentId} | Grade: {user?.grade}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-blue-600">{item.time}</div>
                      <div>
                        <div className="font-semibold">{item.subject}</div>
                        <div className="text-sm text-gray-600">{item.teacher} • {item.room}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-green-600" />
                  Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">96%</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-600" />
                  Overall GPA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">3.7</div>
                  <div className="text-sm text-gray-600">Current Semester</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Assignments */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assignments.filter(a => a.status === 'pending').map((assignment, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4 py-2">
                    <div className="font-semibold">{assignment.title}</div>
                    <div className="text-sm text-gray-600">
                      {assignment.subject} • Due: {assignment.dueDate}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Current Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {grades.map((grade, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div>
                      <div className="font-semibold">{grade.subject}</div>
                      <div className="text-sm text-gray-600">{grade.percentage}%</div>
                    </div>
                    <div className={`text-lg font-bold ${
                      grade.grade.startsWith('A') ? 'text-green-600' : 
                      grade.grade.startsWith('B') ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {grade.grade}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-blue-600" />
              Recent Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{announcement.title}</h3>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                  </div>
                  <p className="text-gray-600">{announcement.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
