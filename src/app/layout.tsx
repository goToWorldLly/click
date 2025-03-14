import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "打字练习",
  description: "提升你的英语打字速度",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
