import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fcfaf5] text-[#263f36] antialiased">
        {children}
      </body>
    </html>
  );
}
