import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (user.role === 'teacher') {
    return <TeacherDashboard />;
  } else if (user.role === 'student') {
    return <StudentDashboard />;
  } else {
    return <p>Invalid user role</p>;
  }
};

const TeacherDashboard = () => {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <TeacherList />
    </div>
  );
};

const StudentDashboard = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentList />
    </div>
  );
};

export default Dashboard;