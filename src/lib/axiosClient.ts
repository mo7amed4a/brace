
import axios from "axios";
import { useSession } from "next-auth/react";

// Axios Interceptor Instance
const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api",
  withCredentials: true,
});

// Axios Interceptor: Request Method
AxiosClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // استخدام useSession للحصول على الجلسة على جانب العميل
      const { data: session } = useSession();
      console.log("session", session);
      
      //  @ts-ignore
      const accessToken = session?.token; // افتراض أن الـ token موجود في session.accessToken

      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Axios Interceptor: Response Method
AxiosClient.interceptors.response.use(
  (response) => {
    // Can be modified response
    return response;
  },
  (error) => {
    // Handle response errors here
    if (error.response?.status === 401) {
      // يمكنك إضافة منطق للتعامل مع انتهاء صلاحية الـ token
      // مثال: إعادة توجيه المستخدم لتسجيل الدخول
      // signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);

export default AxiosClient;