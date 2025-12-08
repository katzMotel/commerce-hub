'use client';

import { ThemeToggle } from './ui';

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">CommerceHub</h1>
      <ThemeToggle />
    </header>
  );
}