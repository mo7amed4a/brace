import Footer from "@/components/layout/Footer";
import NavbarAuth from "@/components/layout/navbar-auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <NavbarAuth />
        {/* <ShapeSide className="sticky top-[80%] right-0 -ms-20 h-28 w-52 -rotate-90"/> */}
        <div className="container py-10 max-w-7xl mx-auto p-4 space-y-10">
          {children}
        </div>
        <Footer />
    </>
  );
}
