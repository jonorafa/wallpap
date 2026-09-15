import './globals.css';
import { content } from '../lib/content';
import { CartProvider } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

export const metadata = {
  title: content.meta.title,
  description: content.meta.description,
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: 'website'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#10141c] text-[#f0f2f6] font-sans antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
