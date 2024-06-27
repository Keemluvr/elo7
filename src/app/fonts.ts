import localFont from "next/font/local";

export const museoSans = localFont({
  fallback: ["sans-serif"],
  variable: "--font-museo-sans",
  src: [
    {
      path: "../../public/fonts/museo-sans/museo-sans-300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/museo-sans/museo-sans-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/museo-sans/museo-sans-700.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
