import './globals.css';

export const metadata = {
  title: 'RekaPaper — Fonds d\'Écran 8K pour iPhone & Mac',
  description:
    'Fonds d\'écran numériques effet peinture à l\'huile, en résolution 8K, pour iPhone et Mac.',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fafaf8] text-[#111111] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
