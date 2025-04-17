import { UNKNOWN_ERROR_MESSAGE } from "@/constants";
import { UseApiOptions } from "@/types/interfaces/hooks";
import { useEffect, useState } from "react";

export const useFetch = <T>(props: UseApiOptions) => {
  const { url, params, immediate = true } = props;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setStatus(null);
    setLoading(true);

    try {
      const query = params
        ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
        : "";

      const response = await fetch(`${url}${query}`);
      setStatus(response.status);

      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }

      const result: T = await response.json();

      setData(result);
      setError(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : UNKNOWN_ERROR_MESSAGE;

      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [url]);

  return {
    data,
    error,
    status,
    isLoading,
    refetch: fetchData,
  };
};
