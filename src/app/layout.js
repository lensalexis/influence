import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
  description: "A strategic brand agency that harnesses the power of Muslim influence for social good. We help brands reach Muslim donors and consumers with clarity, respect, and results.",
  keywords: "Muslim marketing, Muslim donors, brand strategy, digital marketing, Muslim consumers, fundraising, brand agency",
  icons: {
    icon: "/logos/influence.png",
    shortcut: "/logos/influence.png",
    apple: "/logos/influence.png",
  },
  openGraph: {
    title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
    description: "A strategic brand agency that harnesses the power of Muslim influence for social good.",
    type: "website",
    images: [
      {
        url: "/logos/influence.png",
        width: 1200,
        height: 630,
        alt: "Influence Brand Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
    description: "A strategic brand agency that harnesses the power of Muslim influence for social good.",
    images: ["/logos/influence.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
