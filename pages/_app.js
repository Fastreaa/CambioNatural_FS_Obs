import '../styles/globals.css'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'

// 1. IMPORTAR LOS COMPONENTES (Aquí es donde seguramente faltaba ArticleCard)
import { HeroSection } from '../components/HeroSection';
import { BigTitle } from '../components/BigTitle';
import { TwoColumns } from '../components/TwoColumns';
import { SectionTransition } from '../components/SectionTransition';
import { ArticleCard } from '../components/ArticleCard'; // <--- ESTA LÍNEA ES CRUCIAL

// 2. HACER LA LISTA (El "Menú" para que MDX sepa qué usar)
const mdxComponents = {
  HeroSection,
  BigTitle,
  TwoColumns,
  SectionTransition,
  ArticleCard, // <--- SIN ESTO, SALE EL ERROR "Expected component to be defined"
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Pasamos la lista de componentes al proveedor */}
      <MDXProvider components={mdxComponents}>
        <div className="text-xl md:text-2xl text-gray-800 font-medium">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </Layout>
  )
}

export default MyApp