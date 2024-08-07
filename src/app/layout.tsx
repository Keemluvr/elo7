import type { Metadata } from "next";
import { museoSans } from "./fonts";

export const metadata: Metadata = {
  title: "Elo7",
  description: "Generated by create next app",
  icons: [
    {
      url: "favicon/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      url: "favicon/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    // Windows
    {
      url: "favicon/mstile-70x70.png",
      type: "image/png",
      sizes: "70x70",
    },
    {
      url: "favicon/mstile-150x150.png",
      type: "image/png",
      sizes: "150x150",
    },
    {
      url: "favicon/mstile-70x70.png",
      type: "image/png",
      sizes: "310x310",
    },
    // Apple touch icons
    {
      url: "favicon/apple-touch-icon-57x57.png",
      type: "image/png",
      sizes: "57x57",
    },
    {
      url: "favicon/apple-touch-icon-60x60.png",
      type: "image/png",
      sizes: "60x60",
    },
    {
      url: "favicon/apple-touch-icon-72x72.png",
      type: "image/png",
      sizes: "72x72",
    },
    {
      url: "favicon/apple-touch-icon-76x76.png",
      type: "image/png",
      sizes: "76x76",
    },
    {
      url: "favicon/apple-touch-icon.png",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={museoSans.className}>{children}</body>
    </html>
  );
}
