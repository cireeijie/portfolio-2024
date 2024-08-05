import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import InnerPagesNavigation from "../components/InnerPagesNavigation";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric John Ariate | Developer & Designer",
  description: "Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <InnerPagesNavigation />
      <main className="flex-1 h-full overflow-hidden">{children}</main>
    </div>
  );
}
