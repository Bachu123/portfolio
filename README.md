# Sahil Sundriyal - Portfolio Website

A modern, responsive portfolio website showcasing my work as an aspiring Gen-AI Engineer and AI Analyst.

## 🚀 Features

- **Modern Design**: Purple-themed glass morphism UI with smooth animations
- **3D Elements**: Interactive 3D scenes using Three.js and React Three Fiber
- **Responsive**: Fully responsive design that works on all devices
- **Dark Theme**: Beautiful dark theme with purple gradients
- **Sections**: About, Projects, Experience, Skills, Education, and Contact

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom purple theme
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <YOUR_REPO_URL>
cd sahils-web-canvas-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
├── public/          # Static assets (favicon, images)
├── src/
│   ├── components/  # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── SkillsNew.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── ui/       # shadcn/ui components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   └── pages/       # Page components
└── index.html       # HTML entry point
```

## 🎨 Customization

- **Colors**: Edit `src/index.css` to change the color scheme
- **Content**: Update component files in `src/components/`
- **3D Models**: Place `.glb` files in `public/` and reference them in components

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Sahil Sundriyal**
- Email: sahilsundriyal2004@gmail.com
- LinkedIn: [Sahil Sundriyal](https://www.linkedin.com/in/sahil-sundriyal-904b6b233/)
- GitHub: [@notiamsam](https://github.com/notiamsam)

---

Built with ❤️ using React, TypeScript, and Three.js