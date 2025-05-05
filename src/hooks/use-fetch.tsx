import api from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useFetch = (url: string, refresh?: boolean, responseType?: any) => {
  const { data: session } = useSession();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    // @ts-ignore
    if (session?.token) {
      api
        .get(url, {
          headers: {
            // @ts-ignore
            Authorization: session?.token,
          },
          responseType: responseType,
        })
        .then((res) => {
          setData(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }
  }, [refresh, session]);
  return { data, loading, error };
};

export default useFetch;
