
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../../contexts/AuthContext';
import { User, Calendar, BookOpen, MessageCircle } from 'lucide-react';

const ParentDashboard = () => {
  const { user } = useAuth();

  // Mock data for child's information
  const childInfo = {
    name: 'Alex Johnson',
    studentId: 'STU001',
    grade: 'Grade 10',
    attendance: 96,
    gpa: 3.7,
  };

  const recentGrades = [
    { subject: 'Mathematics', grade: 'A-', date: '2024-03-15', assignment: 'Algebra Test' },
    { subject: 'English', grade: 'B+', date: '2024-03-14', assignment: 'Essay Assignment' },
    { subject: 'Science', grade: 'A', date: '2024-03-13', assignment: 'Lab Report' },
    { subject: 'History', grade: 'B', date: '2024-03-12', assignment: 'Research Project' },
  ];

  const upcomingEvents = [
    { date: '2024-03-20', event: 'Parent-Teacher Conference', time: '2:00 PM' },
    { date: '2024-03-22', event: 'Science Fair', time: '10:00 AM' },
    { date: '2024-03-25', event: 'Spring Break Begins', time: 'All Day' },
    { date: '2024-04-10', event: 'Report Card Distribution', time: '3:00 PM' },
  ];

  const announcements = [
    {
      title: 'Parent-Teacher Conference Reminder',
      date: '2024-03-16',
      content: 'Please confirm your attendance for the upcoming parent-teacher conference.',
    },
    {
      title: 'Spring Break Schedule',
      date: '2024-03-15',
      content: 'School will be closed from March 25-29. Classes resume on April 1st.',
    },
    {
      title: 'Science Fair Participation',
      date: '2024-03-14',
      content: 'Students are encouraged to participate in the annual science fair.',
    },
  ];

  const attendanceData = [
    { month: 'January', present: 20, absent: 1 },
    { month: 'February', present: 18, absent: 0 },
    { month: 'March', present: 14, absent: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
          <p className="text-gray-600">Monitoring progress for {childInfo.name}</p>
        </div>

        {/* Child Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Student</p>
                  <p className="text-lg font-bold text-gray-900">{childInfo.name}</p>
                  <p className="text-sm text-gray-600">{childInfo.studentId}</p>
                </div>
                <User className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Grade</p>
                  <p className="text-2xl font-bold text-gray-900">{childInfo.grade}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">{childInfo.attendance}%</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current GPA</p>
                  <p className="text-2xl font-bold text-gray-900">{childInfo.gpa}</p>
                </div>
                <User className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <div>
                      <div className="font-semibold">{grade.subject}</div>
                      <div className="text-sm text-gray-600">{grade.assignment}</div>
                      <div className="text-xs text-gray-500">{grade.date}</div>
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

          {/* Attendance Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.map((month, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <div>
                      <div className="font-semibold">{month.month}</div>
                      <div className="text-sm text-gray-600">
                        {month.present} present, {month.absent} absent
                      </div>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {Math.round((month.present / (month.present + month.absent)) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4 py-2">
                    <div className="font-semibold">{event.event}</div>
                    <div className="text-sm text-gray-600">
                      {event.date} at {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <div className="font-semibold">Ms. Johnson (Math Teacher)</div>
                  <div className="text-sm text-gray-600">
                    Great progress in algebra! Alex is showing excellent improvement.
                  </div>
                  <div className="text-xs text-gray-500">March 15, 2024</div>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 py-2">
                  <div className="font-semibold">School Administration</div>
                  <div className="text-sm text-gray-600">
                    Reminder: Parent-teacher conference scheduled for March 20th.
                  </div>
                  <div className="text-xs text-gray-500">March 14, 2024</div>
                </div>
                <div className="border-l-4 border-purple-400 pl-4 py-2">
                  <div className="font-semibold">Dr. Smith (Science Teacher)</div>
                  <div className="text-sm text-gray-600">
                    Alex's science fair project looks very promising!
                  </div>
                  <div className="text-xs text-gray-500">March 13, 2024</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>School Announcements</CardTitle>
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

export default ParentDashboard;
