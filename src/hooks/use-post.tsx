// src/hooks/use-post.ts
import { useSession } from "next-auth/react";
import { useState } from "react";
import api from "@/lib/axios";

interface UsePostResponse {
  data: any;
  loading: boolean;
  error: any;
  post: (body: any, config?: any) => Promise<void>;
}

const usePost = (url: string): UsePostResponse => {
  const { data: session } = useSession();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const post = async (body: any, config?: any) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await api.post(url, body, {
        ...config,
        headers: {
          ...config?.headers,
          // @ts-ignore
          Authorization: `${session?.token}`,
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, post };
};

export default usePost;