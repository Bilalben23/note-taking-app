# 📝 Note Taking App

A simple and clean note-taking application built with **React + TypeScript**, styled using **TailwindCSS** and **DaisyUI**, following the **Atomic Design methodology** and **Component-Driven Development (CDD)** principles.

> Includes full Storybook support for visual component development and testing.

---

## 🚀 Features

- Add and delete notes
- Component-based structure (Atomic Design: atoms → molecules → organisms → templates)
- Fully styled using **TailwindCSS** + **DaisyUI**
- All components are documented and testable in **Storybook**
- Clear folder structure with clean Git commit history

---

## 🧱 Tech Stack

| Tool         | Description                          |
| ------------ | ------------------------------------ |
| React + Vite | Frontend framework & fast dev server |
| TypeScript   | Type-safe development                |
| TailwindCSS  | Utility-first CSS framework          |
| DaisyUI      | TailwindCSS component library        |
| Storybook    | UI component explorer and docs       |
| uuid         | Generates unique IDs for notes       |

---

## 📁 Folder Structure

```

src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│ ├── atoms/ # Basic UI building blocks
│ ├── molecules/ # Composed from atoms
│ ├── organisms/ # Sections of UI
│ └── templates/ # Full pages

```

---

## 📦 Installation

```bash
git clone https://github.com/your-username/note-taking-app.git
cd note-taking-app
npm install
```

---

## 🧪 Run the App

Start the development server:

```bash
npm run dev
```

---

## 📘 Run Storybook

Open Storybook to view and test components:

```bash
npm run storybook
```

---

## ✅ Usage

1. Type a title and content into the form.
2. Click **"Add Note"** to save it.
3. View added notes in a list below.
4. Click **"Delete"** to remove a note.

---

## 🧠 Architecture: Atomic Design + CDD

This project follows the Atomic Design methodology:

| Layer         | Description                                |
| ------------- | ------------------------------------------ |
| **Atoms**     | Reusable UI elements (e.g., Button, Input) |
| **Molecules** | Combined atoms (e.g., NoteForm)            |
| **Organisms** | Complex components (e.g., NotesList)       |
| **Templates** | Full pages (e.g., NotePage)                |

CDD was used to build and test components in isolation first using **Storybook**, then compose them step-by-step into the final application.

---

## 📚 Resources

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook Docs (CSF3)](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react)
- [Component-Driven Development (CDD)](https://www.componentdriven.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

---

## 📜 License

MIT License

---

## 🚀 Live Demo

## 👉 [View the live app here](https://note-taking-app-neon.vercel.app/)

---

> Built with ❤️ using React, Storybook, Tailwind, and DaisyUI
