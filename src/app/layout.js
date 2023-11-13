import "./globals.css";

import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({ children }) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.variable} font-roboto`}>
          <ThemeProvider attribute={"class"} defaultTheme="system" ena>
            <ModalProvider userId={userId} />
            <ToasterProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
