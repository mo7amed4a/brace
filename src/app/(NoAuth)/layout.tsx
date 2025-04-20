import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
  
        <Navbar />
        {/* <ShapeSide className="sticky top-[80%] right-0 -ms-20 h-28 w-52 -rotate-90"/> */}

        {children}
        <Footer />
    </>
  );
}
