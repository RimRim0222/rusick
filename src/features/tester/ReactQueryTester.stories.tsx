import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryTester } from './ReactQueryTester';

const defaultTitle = 'Features';

export default {
  title: `${defaultTitle}/ReactQueryTester`,
  components: ReactQueryTester,
};

export function Default() {
  const url = 'https://dummy.restapiexample.com/api/v1/employees';
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryTester url={url} />
    </QueryClientProvider>
  );
}
