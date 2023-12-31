import Dashboard from "./components/dashboard/Dashboard"
import Footer from "./components/footer/Footer"
import '../app/styles/globals.scss'

export const metadata = {
  title: 'Selo-online',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <Dashboard />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
