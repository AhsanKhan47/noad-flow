import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Maven_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const maven = Maven_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Noad Flow",
  description: "Noad flow explore page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={maven.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
