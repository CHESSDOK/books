// BooksPage.tsx
import { useState } from "react";

interface Book {
  id: number;
  title: string;
  price: number;
  image: string;
}

const categories = [
  "Science Fiction",
  "Fantasy",
  "Crime/Mystery",
  "Thriller/Suspense",
  "Horror",
  "Romance",
  "Historical",
  "Science",
  "Action",
  "Adventure",
];

const books: Book[] = Array(12).fill({
  id: 1,
  title: "Psychology of Money",
  price: 700,
  image: "/images/psychology-of-money.png", // Replace with actual path
});

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 border-r">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Categories */}
        <h2 className="text-lg font-bold mb-4">Category</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </aside>

      {/* Books Grid */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">BOOKS</h1>
        <div className="grid grid-cols-4 gap-6">
          {filteredBooks.map((book, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-orange-600 font-bold">
                Php {book.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
