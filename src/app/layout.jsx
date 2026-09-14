import './globals.css';

export const metadata = {
  title: "RekaPaper — Digital Canvas & Fonds d'Écran Texturés 8K pour iPhone & Mac",
  description:
    "RekaPaper Studio. Découvrez des collections exclusives de fonds d'écran numériques effet peinture à l'huile et relief impasto 3D pour iPhone 16 Pro, iPad et Mac Studio.",
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
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
