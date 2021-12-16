import { RecoilState, useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';

export function useLoadable<T>(params: unknown, query: unknown, init: unknown) {
  const [param, setParams] = useRecoilState(params as RecoilState<typeof params>);
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const [result, setResult] = useState<T>(init as T);

  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  const handleParams = (values: unknown) => {
    if (isEqual(param, values)) {
      setParams(values);
    }
  };

  return {
    handleParams,
    param,
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}

export function useLoadableRefresh<T>(
  params: unknown,
  query: unknown,
  init: unknown,
  refresh: unknown,
) {
  const [param, setParam] = useRecoilState(params as RecoilState<typeof params>);
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const setRefreshParams = useSetRecoilState(refresh as RecoilState<number>);
  const [result, setResult] = useState<T>(init as T);

  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  const handleParams = (values: any) => {
    if (isEqual(param, values)) {
      setRefreshParams((prevState) => prevState + 1);
    } else {
      setParam(values);
    }
  };

  return {
    handleParams,
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}

export function useLoadableDefault<T>(query: unknown, init: unknown) {
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const [result, setResult] = useState<T>(init as T);
  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  return {
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}
