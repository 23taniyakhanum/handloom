# Digital Handloom Design Network

> **Tradition • Art • Your Style**

A premium, AI-powered Indian traditional clothing design platform built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## 🌟 Features

### Core Design Studio
- **AI-Powered Generation**: Create stunning traditional outfits from text descriptions using advanced diffusion models
- **Prompt Engineering**: Natural language prompts with category, fabric, and style guidance
- **Real-Time Preview**: High-resolution garment preview with multiple view modes (mannequin, flat-lay, model, close-ups)

### Advanced Customisation
- **Colour Studio**: 50+ heritage preset colours, full-spectrum picker, HEX/RGB inputs, gradients, dual-tone combinations
- **Pattern Studio**: Add, remove, resize, reposition, and recolour motifs (paisley, floral, lotus, peacock, temple, geometric, traditional)
- **Fabric Studio**: 15+ authentic materials (silk, cotton, chiffon, georgette, organza, linen, velvet, tissue, brocade, jamdani, ikat) with visual texture simulation
- **Embroidery Studio**: Zari, threadwork, mirror, sequins, beadwork, resham, printed designs with placement control
- **Weaving Studio**: Saree body/pallu weaves, border styles, pleat types, blouse designs (necklines, sleeves, back styles)

### Instant Editing (No Regeneration)
- Layered editing using canvas/image masking technology
- Change colours, patterns, embroidery instantly without re-generating
- Undo/Redo, Reset, Compare, Duplicate, Save as New Version
- Version history with full diff tracking

### Professional Export
- PNG/JPEG at Standard (1024²), High (2048²), Ultra-High (4096²) resolutions
- Download original, edited, or high-res versions
- Export design collections

### Persistent Gallery & History
- Supabase-powered authentication and data persistence
- Auto-saved designs with full version history
- Collections (Wedding, Festive, Everyday, Custom)
- Search/filter by category, colour, fabric, date, tags
- Favorites, duplication, organization, cross-device sync

### Heritage Authenticity
- 50+ traditional categories (Kanjivaram, Banarasi, Mysore Silk, Chanderi, Patola, Bandhani, etc.)
- 200+ heritage motifs with cultural significance
- Region-specific weaving patterns and embroidery techniques
- Authentic colour palettes from Indian textile tradition

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, Custom Indian Heritage Design System |
| State | Zustand (persisted), React Context |
| Auth | Supabase Auth (Email/Password, OAuth) |
| Database | Supabase (PostgreSQL) with RLS |
| Storage | Supabase Storage (design images) |
| AI Generation | Configurable API (Stable Diffusion, DALL-E, etc.) |
| Image Editing | Canvas API, Fabric.js (planned) |
| UI Components | Radix UI Primitives, Lucide Icons |
| Notifications | React Hot Toast |

## 🎨 Design System

### Colours
- **Maroon Family**: 50-950 (Deep wine `#702222` primary)
- **Gold Family**: 50-950 (Antique gold `#CA8A04` accent)
- **Ivory Family**: 50-950 (Warm cream `#FAFAF9` backgrounds)
- **Earth Family**: 50-950 (Terracotta, sand tones)

### Typography
- **Headings**: Playfair Display / DM Serif Display (elegant serif)
- **Body**: Inter (modern, readable sans-serif)
- **Accent**: DM Serif Display (decorative)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/pnpm/yarn
- Supabase account
- AI Image Generation API access (Replicate, Hugging Face, OpenAI, or custom)

### Installation

```bash
# Clone and install
git clone <repository-url>
cd digital-handloom
npm install

# Copy environment variables
cp .env.example .env.local

# Configure your .env.local with:
# - Supabase URL and keys
# - AI API endpoint and key

# Run development server
npm run dev
```

### Supabase Setup

1. Create a new Supabase project
2. Run the SQL schema from `database_schema.sql` in the SQL Editor
3. Enable Email/Password auth in Authentication settings
4. Create a storage bucket named `design-images` (public)
5. Configure storage policies for user-uploaded images

### AI Generation API

The platform expects an API endpoint at `AI_API_URL` that accepts:

```json
POST /generate
{
  "prompt": "enhanced prompt string",
  "category": "silk-saree",
  "fabric": "silk",
  "view_type": "mannequin",
  "resolution": "standard",
  "negative_prompt": "distorted, blurry, low quality..."
}
```

Returns:
```json
{
  "image_url": "https://...",
  "thumbnail_url": "https://...",
  "estimated_time": 30
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/           # Auth pages (login, signup)
│   ├── (dashboard)/      # Protected dashboard pages
│   │   ├── design-studio/    # Main design studio
│   │   ├── gallery/          # User gallery
│   │   ├── saved-designs/    # Collections & favorites
│   │   └── about/            # About page
│   ├── api/
│   │   ├── auth/             # Auth endpoints
│   │   └── designs/          # Design CRUD & generation
│   ├── globals.css         # Global styles + design tokens
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Landing page
├── components/
│   ├── ui/                 # Reusable UI components (Radix-based)
│   ├── design-studio/      # Studio-specific components
│   ├── gallery/            # Gallery components
│   ├── auth/               # Auth components
│   └── Navbar.tsx          # Main navigation
├── lib/
│   ├── auth-context.tsx    # Auth provider
│   ├── design-system.ts    # Colours, fonts, constants
│   ├── store.ts            # Zustand store
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Utility functions
├── hooks/                  # Custom React hooks
└── types/                  # TypeScript definitions
```

## 🔐 Authentication Flow

1. User signs up/in via `/auth/signup` or `/auth/login`
2. Supabase creates auth user + profile + default collection
3. JWT stored in httpOnly cookies via Supabase SSR
4. Middleware protects dashboard routes
5. Server components can access user via `supabase.auth.getUser()`

## 🗄 Database Schema

Key tables:
- `profiles` - Extended user info
- `collections` - User-created design collections
- `designs` - Generated designs with all parameters
- `design_versions` - Version history for each design
- `design_tags` - Searchable tags

All tables have Row Level Security (RLS) policies for user isolation.

## 🎯 Key Implementation Details

### Instant Editing Architecture
The design studio uses a layered approach:
1. Base generated image stored as original
2. Edits (colour, pattern, fabric) applied via canvas compositing
3. Each edit creates a new version without re-generation
4. Structural changes (silhouette, major motif changes) trigger AI regeneration with progress indication

### Colour Application
- CSS filters for simple hue shifts
- Canvas-based masking for complex regions (borders, motifs, blouse)
- Preserves texture, lighting, and shadows

### Performance Optimizations
- Async generation with progress polling
- Image caching via Supabase CDN
- Lazy-loaded gallery with pagination
- Zustand persistence for instant studio state recovery
- Code splitting per route

## 📝 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Service role for admin ops |
| `AI_API_URL` | Yes | Image generation API endpoint |
| `AI_API_KEY` | Yes | API authentication key |
| `NEXTAUTH_SECRET` | No | NextAuth secret (if used) |
| `NEXTAUTH_URL` | No | App URL for OAuth callbacks |

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run start
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables
3. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Indian handloom artisans and weaving communities
- Supabase for backend infrastructure
- Vercel for Next.js and hosting
- Radix UI for accessible components
- Lucide for beautiful icons
- All open-source contributors

## 📞 Support

- **Documentation**: `/docs` (coming soon)
- **Issues**: GitHub Issues
- **Email**: hello@digitalhandloom.example.com

---

**Digital Handloom Design Network** — Where tradition meets technology. 🪷#   h a n d l o o m  
 