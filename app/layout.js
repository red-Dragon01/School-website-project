import "./globals.css";

export const metadata = {
  title: "BrightFuture Academy",
  description:
    "BrightFuture Academy - School Management and Student Portal Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}