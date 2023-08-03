import { useState, useEffect } from "react";

export default function useAsync(handler: Function, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(error);
      setLoading(false);
      throw err;
    }
  };

  return {
    data,
    loading,
    error,
    act,
  };
}
