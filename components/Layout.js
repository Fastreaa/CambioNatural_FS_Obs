import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-6">
      {/* HEADER / BARRA DE NAVEGACIÓN */}
      <nav className="flex justify-between items-start py-8">
        {/* LOGOTIPO A LA IZQUIERDA */}
        <Link href="/" className="no-underline">
          <div className="font-black text-2xl leading-none tracking-tighter uppercase">
            Cambio<br />Natural
          </div>
        </Link>

        {/* MENÚ A LA DERECHA */}
        <ul className="flex gap-8 font-bold text-xs tracking-widest uppercase mt-2">
          <li><Link href="/tools" className="no-underline hover:text-cambio-blue">Tools</Link></li>
          <li><Link href="/mediadub" className="no-underline hover:text-cambio-pink">MediaClub</Link></li>
          <li><Link href="/gatherings" className="no-underline hover:text-cambio-yellow">Gatherings</Link></li>
          <li><Link href="/we-are" className="no-underline hover:text-gray-500">We Are</Link></li>
        </ul>
      </nav>

      {/* CONTENIDO DE LA PÁGINA */}
      <main className="flex-grow py-10">
        {children}
      </main>

      {/* FOOTER SIMPLE */}
      <footer className="py-8 border-t border-gray-200 text-center text-sm font-bold text-gray-400 uppercase">
        © 2025 Cambio Natural
      </footer>
    </div>
  );
}