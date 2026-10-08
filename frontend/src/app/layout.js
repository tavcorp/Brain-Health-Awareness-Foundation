import "./globals.css";

export const viewport = {
  themeColor: "#24385e",
};

export const metadata = {
  title: "Brain Health Awareness Foundation",
  description: "Brain Health Awareness Foundation helps people recognize, protect, and talk about brain health before crisis makes the decision for them.",
  icons: {
    icon: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790259254/logo_brain_sc5ohi.jpg",
  },
  openGraph: {
    title: "Brain Health Awareness Foundation",
    description: "Brain Health Awareness Foundation helps people recognize, protect, and talk about brain health before crisis makes the decision for them.",
    url: "https://brain-health-awareness-foundation.vercel.app/",
    siteName: "Brain Health Awareness Foundation",
    images: [
      {
        url: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790259254/logo_brain_sc5ohi.jpg",
        width: 1200,
        height: 630,
        alt: "Brain Health Awareness Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
