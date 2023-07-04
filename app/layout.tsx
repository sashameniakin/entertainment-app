import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "entertainment app",
  description: "entertainment app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
