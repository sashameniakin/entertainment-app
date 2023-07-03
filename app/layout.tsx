import "./globals.css";

export const metadata = {
  title: "entertainment app",
  description: "entertainment app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
