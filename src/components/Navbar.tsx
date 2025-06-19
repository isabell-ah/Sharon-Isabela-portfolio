import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  activeSection?: string;
  onClick?: () => void;
}

const NavLink = ({ href, label, activeSection, onClick }: NavLinkProps) => {
  const isActive = activeSection === href.replace('#', '');

  return (
    <a
      href={href}
      className={`nav-link ${isActive ? 'active-nav-link' : ''}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = 'home';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const topVisible = rect.top <= 100;
          const bottomVisible = rect.bottom > 100;

          if (topVisible && bottomVisible) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border py-.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className='section-container flex justify-between items-center'>
        <a href='#home' className='text-2xl font-bold text-foreground'>
          Sharon Isabela<span className='text-primary'>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              activeSection={activeSection}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleMobileMenu}
          className='md:hidden'
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in'>
          <nav className='flex flex-col items-center justify-center h-full space-y-8 p-4'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                activeSection={activeSection}
                onClick={closeMobileMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
