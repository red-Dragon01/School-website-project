import "./globals.css";

export const metadata = {
  title: "KISHORE BHARATI SHISHU BIDYAPITH",
  description:
    "KISHORE BHARATI SHISHU BIDYAPITH- School Management, Student Portal ,teacher portal Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}