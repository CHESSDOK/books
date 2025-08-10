import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import bookImg from "../assets/book.jpg"; // Replace with your actual image

const books = [
  { title: "The Psychology of Money", price: 700, img: bookImg },
  { title: "The Psychology of Money", price: 700, img: bookImg },
  { title: "The Psychology of Money", price: 700, img: bookImg },
  { title: "The Psychology of Money", price: 700, img: bookImg },
  { title: "The Psychology of Money", price: 700, img: bookImg },
];

function BookCarousel({ title, subtitle, items }) {
  return (
    <div className="my-8">
      <h2 className="text-center text-2xl font-extrabold uppercase">{title}</h2>
      <p className="text-center mb-4">{subtitle}</p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((book, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img
                src={book.img}
                alt={book.title}
                className="w-48 h-64 object-cover"
              />
              <p className="mt-2 font-bold">{book.title}</p>
              <p className="text-orange-500 font-semibold">
                Php {book.price}.00
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function BooksSection() {
  return (
    <div className="px-4">
      <BookCarousel
        title="Latest Books"
        subtitle="Browse the collection of our new interesting Books. You will definitely find what you are looking for."
        items={books}
      />
      <BookCarousel
        title="Featured Books"
        subtitle="Browse the collection of our best top interesting Books. You will definitely find what you are looking for."
        items={books}
      />
      <BookCarousel
        title="Discounted Books"
        subtitle="Browse the collection of our cheapest Books. You will definitely find what you are looking for."
        items={books}
      />
    </div>
  );
}
