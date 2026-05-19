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

// Sunrise/sunset hours by month at ~40°N (continental US average).
// Used to pick a default theme when the visitor has no saved preference.
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme;
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else {
      var sunrise = [7, 7, 7, 6, 6, 5, 6, 6, 7, 7, 7, 7];
      var sunset  = [17, 18, 19, 20, 20, 21, 21, 20, 19, 18, 17, 16];
      var d = new Date();
      var h = d.getHours();
      var m = d.getMonth();
      theme = (h < sunrise[m] || h >= sunset[m]) ? 'dark' : 'light';
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
