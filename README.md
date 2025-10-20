# Cyber-Themed CV Portfolio

A minimalist, unique CV website with a cyber-themed design featuring glowing accents, geometric patterns, and a modern, clean aesthetic.

![Cyber CV Preview](https://placehold.co/600x400/05D9E8/1E213F?text=Cyber+CV+Portfolio&font=montserrat)

## Features

- Responsive design with mobile-friendly navigation
- Dark theme with neon accent colors
- Interactive elements with subtle animations
- Comprehensive sections for displaying professional information:
  - About
  - Experience
  - Projects
  - Skills
  - Contact

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- CSS Animations and Transitions

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cyber-portfolio.git
cd cyber-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Customization

### Updating Content

Edit the following files to customize your portfolio:

- `app/page.tsx`: Contains the main content sections (About, Experience, Projects, Skills, Contact)
- `components/Sidebar.tsx`: Navigation sidebar and profile information
- `app/globals.css`: Global styles and CSS variables

### Changing Colors

The color scheme can be modified in the `tailwind.config.cjs` file. Look for the `colors` section:

```js
colors: {
  'cyber-black': '#0A0A0F',
  'cyber-dark': '#131320',
  'cyber-navy': '#1E213F',
  'cyber-gray': '#2C2C3B',
  'cyber-light': '#E6E6EC',
  'neon-blue': '#05D9E8',
  'neon-purple': '#AD1AAF',
  'neon-pink': '#FF3864',
  'neon-green': '#39FF14',
},
```

### Adding Profile Image

Replace the placeholder image at `public/profile-placeholder.jpg` with your own image.

## Design Elements

### Cyber Theme Components

- **Glowing Accents**: Neon borders and text with shadow effects
- **Geometric Patterns**: Grid backgrounds and angular shapes
- **Dark Theme with Vibrant Accents**: Dark background with bright neon highlights
- **Interactive Elements**: Hover animations and transitions
- **Modern Typography**: Clean sans-serif and monospace fonts

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Fonts from Google Fonts
- Icons from Heroicons
- Next.js framework by Vercel
