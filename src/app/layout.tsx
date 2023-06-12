import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Cabin } from "next/font/google";

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
    <html lang="pl">
      <body className={cabin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
