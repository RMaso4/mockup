import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/ParthosLogo.svg"
                alt="Parthos Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">Parthos</span>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="/login" 
              className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-600 transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Designed for Space
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Experience the next generation of space-oriented design and management tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/login" 
                  className="rounded-md bg-primary px-6 py-3 text-center text-white hover:bg-primary-600 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/about" 
                  className="rounded-md border border-gray-300 dark:border-gray-700 px-6 py-3 text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative aspect-video">
              <div className="relative h-full w-full">
                <Image
                  src="/ParthosLogo.svg"
                  alt="Parthos - Designed for Space"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Intuitive Design",
                  description: "User-friendly interface tailored for space operations.",
                },
                {
                  title: "Advanced Analytics",
                  description: "Powerful tools to analyze and visualize your data.",
                },
                {
                  title: "Secure & Reliable",
                  description: "Built with security and dependability as top priorities.",
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Parthos. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}