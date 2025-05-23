
// Demo data setup for the school management system
export const initializeDemoData = () => {
  const existingUsers = localStorage.getItem('schoolUsers');
  
  if (!existingUsers) {
    const demoUsers = [
      {
        id: '1',
        name: 'Admin User',
        email: 'admin@school.edu',
        password: 'admin123',
        role: 'admin',
      },
      {
        id: '2',
        name: 'John Teacher',
        email: 'teacher@school.edu',
        password: 'teacher123',
        role: 'teacher',
        employeeId: 'EMP001',
        department: 'Mathematics',
        subjectsTaught: ['Algebra', 'Geometry', 'Calculus'],
      },
      {
        id: '3',
        name: 'Alex Student',
        email: 'student@school.edu',
        password: 'student123',
        role: 'student',
        studentId: 'STU001',
        grade: 'Grade 10',
        dateOfBirth: '2008-05-15',
        gender: 'Male',
      },
      {
        id: '4',
        name: 'Mary Parent',
        email: 'parent@school.edu',
        password: 'parent123',
        role: 'parent',
        childStudentId: 'STU001',
        relationship: 'mother',
      },
    ];

    localStorage.setItem('schoolUsers', JSON.stringify(demoUsers));
  }
};

// Call this function when the app starts
initializeDemoData();
