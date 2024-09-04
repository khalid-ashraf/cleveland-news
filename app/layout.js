import { MainHeader } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cleveland News",
  description: "Cleveland news reports",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='page'>
          <MainHeader />

          {children}
        </div>
      </body>
    </html>
  );
}

