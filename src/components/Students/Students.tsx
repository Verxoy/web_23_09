'use client';

import useStudents from '@/hooks/useStudents';
import type StudentsInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';


const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((students: StudentsInterface) => (
        <h2 key={students.id}>
          {students.last_name}
        </h2>
      ))}
    </div>
  );
};

export default Students;