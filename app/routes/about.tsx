// AboutPage.tsx
export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* About Section */}
      <section className="mb-10">
        <h1 className="text-2xl font-bold mb-4">About Readify</h1>
        <p className="mb-4">
          Readify is a fictional digital platform created to bring knowledge to
          everyone, everywhere. Our mission is simple yet impactful: to provide
          free and limitless access to books and educational content across the
          globe—regardless of background, location, or financial means.
        </p>
        <p>
          In a world overflowing with information, access to quality learning
          resources should never be a privilege. That’s why Readify offers a
          massive online library filled with books on personal growth, career
          building, creativity, and lifelong learning—helping individuals from
          all walks of life achieve their goals.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">What We Do</h2>
        <p className="mb-2">
          <strong>Free Access to Knowledge:</strong> We offer thousands of books
          across various categories—science, business, arts, technology, and
          more—completely free.
        </p>
        <p className="mb-2">
          <strong>Support for New Authors:</strong> Our platform gives aspiring
          authors the chance to publish their work, share their ideas, and
          inspire a global audience.
        </p>
        <p className="mb-2">
          <strong>Promote Lifelong Learning:</strong> Whether you’re studying
          for an exam, developing professional skills, or simply exploring new
          interests, Readify supports continuous growth.
        </p>
        <p>
          We believe that reading has the power to inspire change and empower
          people to overcome challenges, dream bigger, and reach their full
          potential.
        </p>
      </section>

      {/* Our Impact */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Our Impact</h2>
        <p className="mb-4">
          Since our launch, Readify has connected with readers across every
          continent—particularly in communities where books are scarce. By using
          technology, we bridge the gap between knowledge and opportunity,
          creating pathways for self-improvement and personal growth.
        </p>
        <p>
          We’re proud to support thousands of learners—from students and
          educators to entrepreneurs and change-makers—by providing them with
          resources to learn, grow, and live more fulfilling lives.
        </p>
      </section>

      {/* Join Us */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="mb-4">
          Readify is more than a website—it’s a movement for accessible
          education and empowerment. We believe knowledge has the power to
          reduce inequality, inspire innovation, and create brighter futures.
        </p>
        <p className="mb-4">
          We invite dreamers, educators, creators, and organizations to join us.
          Together, we can make reading and learning truly universal.
        </p>
        <p>
          Questions or ideas? Contact us at{" "}
          <a href="mailto:info@readify.com" className="text-blue-600 underline">
            info@readify.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
