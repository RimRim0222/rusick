import { TestUser } from './TestUser';

interface ITestSuspense {
  test: string;
}

export function TestSuspense({ test }: ITestSuspense) {
  console.log('test', test);
  return <TestUser />;
}
