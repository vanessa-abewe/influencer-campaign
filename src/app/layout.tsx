import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Influencer Campaign Management</h1>
              <div className="space-x-4">
                <a href="/" className="hover:text-blue-200">Home</a>
                <a href="/influencers" className="hover:text-blue-200">Influencers</a>
                <a href="/snapshot" className="hover:text-blue-200">Snapshot</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}