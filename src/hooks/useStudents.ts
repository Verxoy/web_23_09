import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/StudentsApi';
import type StudentsInterface from '@/types/StudentInterface';

interface StudentsHookInterface {
  students: StudentsInterface[];
}

const useStudents = (): StudentsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudentsApi(),
    enabled: false,
  });

  return {
    students: data ?? [],
  };
};

export default useStudents
