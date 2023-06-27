import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Cabin } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Dog Energy",
  description:
    "Pomożemy Ci stworzyć świat, który dla Ciebie i psa będzie bezpieczny, przewidywalny i pełny radości!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={cabin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
