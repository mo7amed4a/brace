import { auth, SessionType } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getServerSession(auth)) as SessionType;
  if (session?.user?.user_category === "admin") {
    return children;
  }
  redirect("/dashboard");
}
