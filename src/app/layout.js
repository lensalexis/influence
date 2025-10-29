import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
  description: "A strategic brand agency that harnesses the power of Muslim influence for social good. We help brands reach Muslim donors and consumers with clarity, respect, and results.",
  keywords: "Muslim marketing, Muslim donors, brand strategy, digital marketing, Muslim consumers, fundraising, brand agency",
  openGraph: {
    title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
    description: "A strategic brand agency that harnesses the power of Muslim influence for social good.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influence Brand Agency | Strategic Brand Agency for Muslim Markets",
    description: "A strategic brand agency that harnesses the power of Muslim influence for social good.",
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
