import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { WebProvider } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./style.scss";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DLMS Furnishings | AI-Powered Hospitality Furniture Solutions",
  description:
    "AI-powered hospitality furnishing solutions delivering custom sofas, beds, and contract furniture. End-to-end sourcing, manufacturing, and global installation by DLMS Furnishings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        {/* <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K937FBZN');
          `,
          }}
        /> */}
        {/* <!-- End Google Tag Manager - - > */}
      </head>
      <body
        className={`${dmsans.variable}  antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K937FBZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) - - >  */}

        <WebProvider>
          <NavBar />
          {children}
          <Footer />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
        </WebProvider>
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
    </html>
  );
}
