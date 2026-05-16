import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chandra — Soul-Centered Guidance",
  description:
    "Reconnect to the wisdom your soul already carries. Chandra offers channeling sessions, doula support, and guided meditation to help you return to yourself.",
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme;
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else {
      var h = new Date().getHours();
      theme = (h >= 7 && h < 19) ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
