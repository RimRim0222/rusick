import { useMutation, useQuery, useQueryClient } from 'react-query';
import api from '@src/api/Instance';

interface IReactQueryTester {
  url: string;
}

const testQuery = async (url: string) => await api.get(url);

export function ReactQueryTester({ url }: IReactQueryTester) {
  const queryClient = useQueryClient();
  const query = useQuery('tester', () => testQuery(url));

  // const mutation = useMutation()

  const { status, data, error, isFetching, isPreviousData } = query;

  if (!isFetching && status === 'success') {
    console.log(isFetching, data?.data.data);
  }

  // const mutation = useMutation();

  return <div>test</div>;
}
