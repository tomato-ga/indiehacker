'use client'

import Link from 'next/link'
import { Menu, Search, User } from 'lucide-react'

const Header = () => {
  const navItems = [
    { label: 'Starting Up', href: '/startup' },
    { label: 'Tech', href: '/tech' },
    { label: 'Creators', href: '/creators' },
    { label: 'Services', href: '/services' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Money', href: '/money' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1F364D] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-[#9CB3C9]" />
            </button>
            <Link href="/" className="text-2xl font-bold text-white">
              TechNews
            </Link>
          </div>

          <nav className="hidden lg:flex lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#9CB3C9] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden lg:flex">
              <Search className="h-5 w-5 text-[#9CB3C9] hover:text-white transition-colors" />
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[#4799EB] px-4 py-2 text-sm text-white hover:bg-[#5BA4ED] transition-colors">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header