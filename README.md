# Portfolio V2 🚀

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Framer Motion. Features real GitHub project integration, smooth animations, and a clean, professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-cyan)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with a dark theme and green accent colors
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **🔗 Real Project Data**: Integrates with GitHub API to showcase actual deployed projects
- **⚡ Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **🎯 SEO Optimized**: Meta tags and structured data for better search visibility
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 14](https://Next.js.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/emetos05/portfolioV2.git
   cd portfolioV2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolioV2/
├── public/
│   ├── images/
│   │   └── logo_yellow.png
│   └── social_asset/
│       ├── github.svg
│       ├── instagram.svg
│       ├── linkedin.svg
│       └── twitterx.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── social/
│   │   │   │   ├── Github.tsx
│   │   │   │   ├── Instagram.tsx
│   │   │   │   ├── LinkedIn.tsx
│   │   │   │   └── Twitter.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Intro.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Projects.tsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── data/
│   │   └── projects.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Key Components

### Navbar

- Responsive navigation with smooth scrolling
- Mobile hamburger menu with animations
- Desktop and mobile optimized layouts

### Projects Section

- Real GitHub project integration
- Interactive project cards with hover effects
- Live demo and repository links
- Featured project highlighting

### Experience Timeline

- Animated timeline with skill tags
- Company logos and descriptions
- Responsive design for all screen sizes

### Hero Section

- Animated text reveals
- Professional introduction
- Call-to-action buttons

## 🔧 Customization

### Updating Project Data

Edit `src/data/projects.ts` to add your GitHub projects:

```typescript
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "project-image.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-project.com",
    featured: true,
  },
];
```

### Styling

- Colors: Modify the green theme in `tailwind.config.js`
- Animations: Customize Framer Motion variants in components
- Layout: Adjust responsive breakpoints and spacing

### Content

- Update personal information in `src/app/page.tsx`
- Modify social links in the sidebar components
- Edit experience data in `Experience.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Mobile hamburger menu
- Collapsible sidebars
- Optimized typography scaling
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static deployment
- **Self-hosted**: Use `npm run build` and `npm run start`

## 🔗 Live Demo

Visit the live portfolio: [https://your-portfolio-domain.com](https://your-portfolio-domain.com)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://Next.js.org/) and [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Dan Emehin - [dan.emehin@gmail.com](mailto:dan.emehin@gmail.com)

Project Link: [https://github.com/emetos05/portfolioV2](https://github.com/emetos05/portfolioV2)

---

⭐ **Star this repository if you found it helpful!**
