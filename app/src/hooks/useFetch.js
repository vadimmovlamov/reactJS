import { useCallback, useEffect, useState } from "react";

export const useFetching = (
  asyncCallback,
  initialValue,
  isLoadOnMount = true
) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false); //сразу состояние загрузки не идет
  const [error, setError] = useState(null); // по умолчанию у нас ошибок нет

  const handleDataLoad = useCallback(async (data) => {
    setLoading(true);
    try {
      const response = await asyncCallback(data);

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoadOnMount) {
      handleDataLoad();
    }
  }, [handleDataLoad]);

  return {
    data,
    isLoading,
    error,
    handleDataLoad,
  };
};
