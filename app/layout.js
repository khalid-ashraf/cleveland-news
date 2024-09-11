import "./globals.css";

export const metadata = {
  title: "Cleveland News",
  description: "Everything that happens in Cleveland",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
