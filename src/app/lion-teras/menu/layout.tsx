// src/app/lion-teras/menu/layout.tsx

export const metadata = {
    title: "QR Menü — Merdiven",
  };
  
  export default function QrMenuLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="tr">
        <body className="min-h-screen bg-white text-neutral-900">
          {children}
        </body>
      </html>
    );
  }