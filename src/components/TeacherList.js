import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('/teachers')
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {teachers.map((teacher) => (
        <li key={teacher.id}>{teacher.name}</li>
      ))}
    </ul>
  );
};

export default TeacherList;