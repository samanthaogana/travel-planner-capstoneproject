import React from "react";

const TestimonialsPage = () => {
  return (
    <section className="py-16 ">
      <h2 className="font-greatVibes font-medium text-center text-seaBlue text-4xl my-4">Testimonials</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-poppins italic mb-4">"This service exceeded my expectations! Would 10/10 recommend."</p>
          <p className="font-bold font-poppins">- Ross Lynch</p>
        </div>
        {/* Add more testimonials as needed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-poppins  italic mb-4">"Post-tour, our band was in desperate need of a getaway. Travelscapes was exactly what we needed. We discovered incredible destinations and accomodations, and the website is a breeze to use!"</p>
          <p className="font-bold font-poppins">- Coldplay</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-poppins italic mb-4">"I absolutely adore the minimalist and stylish design of Travelscapes! Not only did I discover fantastic adventures, but it's also so user-friendly"</p>
          <p className="font-bold font-poppins">- Rory Gilmore</p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsPage;
