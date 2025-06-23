import Footer from "@/widgets/main/footer/footer";
import Header from "@/widgets/main/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
