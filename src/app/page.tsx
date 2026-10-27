'use client';

import Link from 'next/link';
import { Sparkles, Palette, Layers, Download, Heart, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categoryGroups, getCategoryLabel } from '@/lib/design-system';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Generation',
    description: 'Create stunning traditional outfits from text descriptions using advanced AI models trained on Indian textiles.',
  },
  {
    icon: Palette,
    title: 'Complete Colour Studio',
    description: 'Preset heritage colours, full-spectrum picker, HEX/RGB inputs, gradients, and dual-tone combinations.',
  },
  {
    icon: Layers,
    title: 'Instant Layered Editing',
    description: 'Change colours, patterns, embroidery, and fabrics instantly without regenerating the entire design.',
  },
  {
    icon: Download,
    title: 'High-Resolution Exports',
    description: 'Download in PNG/JPEG at standard, high, and ultra-high resolutions with preserved detail quality.',
  },
  {
    icon: Heart,
    title: 'Persistent Design Gallery',
    description: 'Every design auto-saved with full version history. Organise into collections, search, filter, and resume anytime.',
  },
  {
    icon: Zap,
    title: 'Real-Time Preview',
    description: 'See changes instantly with smooth performance. Non-blocking generation keeps you designing.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your designs and data are encrypted and stored securely. Access from any device with your account.',
  },
  {
    icon: Award,
    title: 'Authentic Heritage',
    description: 'Trained on real Indian handloom patterns, motifs, weaving techniques, and traditional embroidery styles.',
  },
];

const stats = [
  { value: '50+', label: 'Traditional Categories' },
  { value: '200+', label: 'Heritage Motifs' },
  { value: '15+', label: 'Fabric Types' },
  { value: '∞', label: 'Colour Combinations' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-900 pt-20 pb-32 sm:pt-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 to-transparent" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Tradition • Art • Your Style</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory-50 tracking-tight mb-6">
              Digital Handloom
              <br />
              <span className="font-accent text-gold-400">Design Network</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-ivory-200 mb-10 leading-relaxed">
              India&apos;s premier AI-powered traditional clothing design platform. 
              Create authentic silk sarees, bridal lehengas, ethnic wear, and handloom masterpieces 
              with professional-grade customization tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/design-studio">
                <Button size="xl" variant="gold" className="w-full sm:w-auto">
                  <Sparkles className="h-5 w-5" />
                  Start Designing Now
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="xl" variant="outline" className="w-full sm:w-auto border-gold-400 text-gold-400 hover:bg-gold-400/10">
                  Explore Gallery
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-ivory-300 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-maroon-900 to-transparent" aria-hidden="true" />
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-ivory-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="page-title">Powerful Tools for Heritage Design</h2>
            <p className="page-subtitle max-w-2xl mx-auto">
              Everything you need to bring your traditional clothing visions to life with professional precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="card-premium h-full">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                    <feature.icon className="h-6 w-6 text-ivory-900" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-maroon-900 mb-2">{feature.title}</h3>
                  <p className="text-maroon-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="page-title">Traditional Clothing Categories</h2>
            <p className="page-subtitle max-w-2xl mx-auto">
              Explore our comprehensive collection of Indian traditional wear categories, each with authentic regional styles.
            </p>
          </div>
          
          <div className="space-y-12">
            {categoryGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-heading text-2xl font-semibold text-maroon-900 mb-6 flex items-center gap-3">
                  <span className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.categories.map((category) => (
                    <Link
                      key={category}
                      href="/design-studio"
                      className="card p-4 hover:shadow-lg hover:border-gold-300 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-maroon-100 to-maroon-200 flex items-center justify-center group-hover:from-gold-100 group-hover:to-gold-200 transition-colors">
                          <Sparkles className="h-6 w-6 text-maroon-600 group-hover:text-gold-600 transition-colors" />
                        </div>
                        <span className="font-medium text-maroon-900 group-hover:text-gold-700 transition-colors">
                          {getCategoryLabel(category)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/design-studio">
              <Button size="lg" variant="premium">
                View All Categories
                <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ivory-50 mb-6">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl text-ivory-200 mb-10 max-w-2xl mx-auto">
            Join thousands of designers creating authentic Indian traditional wear. 
            Start your design journey today with our AI-powered studio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="xl" variant="gold" className="w-full sm:w-auto">
                Create Free Account
              </Button>
            </Link>
            <Link href="/design-studio">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-gold-400 text-gold-400 hover:bg-gold-400/10">
                Try Design Studio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}