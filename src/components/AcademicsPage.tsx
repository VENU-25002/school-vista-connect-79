
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Book, Users, Clock } from 'lucide-react';

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Information</h1>
          <p className="text-xl text-gray-600">Comprehensive curriculum and academic resources</p>
        </div>

        {/* Academic Calendar */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="mr-3 h-6 w-6 text-blue-600" />
            Academic Calendar 2024
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spring Semester</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Start:</strong> January 15, 2024</li>
                  <li><strong>Spring Break:</strong> March 25-29, 2024</li>
                  <li><strong>End:</strong> May 24, 2024</li>
                  <li><strong>Finals:</strong> May 20-24, 2024</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fall Semester</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Start:</strong> August 26, 2024</li>
                  <li><strong>Thanksgiving:</strong> November 25-29, 2024</li>
                  <li><strong>End:</strong> December 20, 2024</li>
                  <li><strong>Finals:</strong> December 16-20, 2024</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Registration:</strong> January 8-12, 2024</li>
                  <li><strong>Parent Conferences:</strong> April 10, 2024</li>
                  <li><strong>Graduation:</strong> June 15, 2024</li>
                  <li><strong>New Student Orientation:</strong> August 19, 2024</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Book className="mr-3 h-6 w-6 text-blue-600" />
            Curriculum Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Algebra I & II</li>
                  <li>• Geometry</li>
                  <li>• Pre-Calculus</li>
                  <li>• AP Calculus</li>
                  <li>• Statistics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Science</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Biology</li>
                  <li>• Chemistry</li>
                  <li>• Physics</li>
                  <li>• Earth Science</li>
                  <li>• Environmental Science</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Language Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• English Literature</li>
                  <li>• Creative Writing</li>
                  <li>• Public Speaking</li>
                  <li>• Journalism</li>
                  <li>• AP English</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• World History</li>
                  <li>• US History</li>
                  <li>• Government</li>
                  <li>• Economics</li>
                  <li>• Geography</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="mr-3 h-6 w-6 text-blue-600" />
            Department Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>STEM Department</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our STEM department focuses on Science, Technology, Engineering, and Mathematics 
                  with hands-on learning experiences and modern laboratory facilities.
                </p>
                <p className="text-sm"><strong>Department Head:</strong> Dr. Sarah Johnson</p>
                <p className="text-sm"><strong>Contact:</strong> stem@school.edu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Humanities Department</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The Humanities department encompasses English, History, Social Studies, and Arts, 
                  fostering critical thinking and cultural awareness.
                </p>
                <p className="text-sm"><strong>Department Head:</strong> Prof. Michael Davis</p>
                <p className="text-sm"><strong>Contact:</strong> humanities@school.edu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arts Department</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Arts department includes Visual Arts, Music, Theater, and Digital Media, 
                  encouraging creativity and artistic expression.
                </p>
                <p className="text-sm"><strong>Department Head:</strong> Ms. Emily Rodriguez</p>
                <p className="text-sm"><strong>Contact:</strong> arts@school.edu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physical Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Physical Education and Health programs promote fitness, wellness, and teamwork 
                  through various sports and activities.
                </p>
                <p className="text-sm"><strong>Department Head:</strong> Coach Robert Wilson</p>
                <p className="text-sm"><strong>Contact:</strong> pe@school.edu</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Class Schedule */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="mr-3 h-6 w-6 text-blue-600" />
            Daily Schedule
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Regular Schedule</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 1</span>
                      <span>8:00 AM - 8:50 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 2</span>
                      <span>9:00 AM - 9:50 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Break</span>
                      <span>9:50 AM - 10:10 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 3</span>
                      <span>10:10 AM - 11:00 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 4</span>
                      <span>11:10 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Lunch</span>
                      <span>12:00 PM - 12:45 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 5</span>
                      <span>12:45 PM - 1:35 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Period 6</span>
                      <span>1:45 PM - 2:35 PM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Early Release (Wednesdays)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 1</span>
                      <span>8:00 AM - 8:35 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 2</span>
                      <span>8:45 AM - 9:20 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 3</span>
                      <span>9:30 AM - 10:05 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Break</span>
                      <span>10:05 AM - 10:20 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 4</span>
                      <span>10:20 AM - 10:55 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Period 5</span>
                      <span>11:05 AM - 11:40 AM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Period 6</span>
                      <span>11:50 AM - 12:25 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
