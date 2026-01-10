# TechToday 🧠🚀

**TechToday** is a modern technology blog platform built with **Next.js** and **TypeScript**, focused on sharing high-quality content about web development, programming, and emerging technologies.

---

## 🌟 Features

- 📰 Publish and manage tech blog posts
- 🧑‍💻 Categories for organized content
- ⭐ Featured posts support
- 🖼 Image-based blog cards
- ⏱ Reading time indicator
- 💬 Contact form with MongoDB backend
- 🔐 Server Actions for secure data handling
- 📱 Fully responsive UI (Tailwind CSS + DaisyUI)

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Backend:** Next.js Server Actions
- **Database:** MongoDB (Node.js Driver)
- **State Management:** React Hooks
- **Deployment:** Vercel (recommended)

---

## 📂 Project Structure

```
src/
├─ app/
│  ├─ page.tsx            # Home Page
│  ├─ about/page.tsx      # About Page
│  ├─ contact/page.tsx    # Contact Page
│  └─ create-blog/page.tsx
├─ actions/
│  ├─ createBlog.ts
│  └─ contact.ts
├─ lib/
│  ├─ mongodb.ts
│  ├─ dbConnect.ts
│  └─ postCollection.ts
├─ type/
│  ├─ Blog.ts
│  └─ ContactMessage.ts
```

---

## 🧩 Blog Data Model

```ts
interface Blog {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  categoryId: number;
  tags: string[];
  readingTime: string;
  isFeatured: boolean;
  authorEmail: string;
  createdAt: Date;
}
```

---

## 📬 Contact Messages

Messages submitted through the Contact page are securely stored in MongoDB using Server Actions.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```
MONGODB_URI=your_mongodb_connection_string
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 👨‍💻 Author

**Shaikh Al Nahian**
📧 Email: sheikhalnahian@gmail.com

---

## 📄 License

MIT License
