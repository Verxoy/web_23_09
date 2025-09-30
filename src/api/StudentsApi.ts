import type StudentsInterface from '@/types/StudentsInterface';

export const getStudentsApi = async (): Promise<StudentsInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    const groups = await response.json() as StudentsInterface[];
    return groups;
  }
  catch (err) {
    console.log('>>> getStudentsApi', err);
    return [] as StudentsInterface[];
  }
};
