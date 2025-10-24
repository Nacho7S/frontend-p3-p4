import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Form App",
  description: "Made BY Nacha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="antialiased"
      >
        <div className="w-full h-full bg-red-100">
          <div className=" flex flex-row items-center justify-center h-[100vh]">
        {children}
            
      </div>
          
         </div>
      </body>
    </html>
  );
}
