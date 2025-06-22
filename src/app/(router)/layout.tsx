import Footer from "@/widgets/main/footer/footer";
import Header from "@/widgets/main/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fcfcff]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
