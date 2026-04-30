import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen Kumar K — Senior UX/UI Architect · AI Agentic & Generative Design Expert",
  description: "Praveen Kumar K — 18+ years of UX/UI Architecture, AI Agentic Design, Generative AI UX Strategy, Human-Computer Interaction and Product Design across 14+ countries worldwide.",
  keywords: ["UX Design", "UI Design", "AI Agentic Design", "Product Design", "HCI", "Generative AI", "Behavioural UX"],
  authors: [{ name: "Praveen Kumar K" }],
  openGraph: {
    type: "website",
    title: "Praveen Kumar K — Senior UX/UI Architect · AI Agentic Design Expert",
    description: "18+ years of UX/UI Architecture, AI Agentic Design, Generative AI UX Strategy across 14+ countries worldwide.",
    images: [{ url: "https://www.praveenuxui.com/assets/img/images/profile.png" }],
    url: "https://www.praveenuxui.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kumar K — Senior UX/UI Architect",
    description: "18+ years of UX/UI, AI Agentic Design & Generative AI UX Strategy across 14+ countries.",
    images: ["https://www.praveenuxui.com/assets/img/images/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0F2F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1018" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fontawsome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fontawsome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Praveen Kumar K",
              "jobTitle": "Senior UX/UI Architect & AI Agentic Design Strategist",
              "description": "18+ years of UX/UI Architecture, AI Agentic Design, Generative AI UX Strategy across 14+ countries",
              "url": "https://www.praveenuxui.com/",
              "image": "https://www.praveenuxui.com/assets/img/images/profile.png",
              "email": "praveenkumar.kanneganti@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/praveenkumarkanneganti/",
                "https://www.behance.net/praveen-ui-ux",
                "https://www.facebook.com/pranu21m",
                "https://www.youtube.com/@praveenk9821"
              ],
              "knowsAbout": ["UX Design", "UI Design", "AI Agentic Design", "Product Design", "HCI", "Generative AI", "Behavioural UX"]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div id="page-content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/ajax-form.js"></script>
        <script src="/assets/js/clipboard.min.js"></script>
        <script src="/assets/js/slick.min.js"></script>
        <script src="/assets/js/script.js"></script>
        <script src="/assets/js/animations.js"></script>
      </body>
    </html>
  );
}
