import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IntelQI School",
  description: "A smart ERP and LMS system for modern education management.",
  icons: {
    icon: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        
    <Navbar />

        {/* Page Content */}
        <main >
          {children}
        </main>

     <Footer />

      </body>
    </html>
  );
}