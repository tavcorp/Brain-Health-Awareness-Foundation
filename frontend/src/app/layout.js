import "./globals.css";

export const metadata = {
  title: "Brain Health Awareness Foundation",
  description: "Brain Health Awareness Foundation helps people recognize, protect, and talk about brain health before crisis makes the decision for them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
