import React from "react";
import ExploreDestinations from "./ExploreDestinations";
import ContactUs from "./ContactUs";
import TestimonialsPage from "./TestimonialsPage";

const LandingPage = () => {
  return (
    <main>
      <section>
        <img
          className="w-full h-screen object-cover object-center"
          src="/images/pexels-asadphoto-29614936.jpg"
          alt="hero background"
        />
    

        <div className="absolute inset-0 flex flex-col justify-center mx-11 mb-28 sm:mx-14 my-32"> 
        <h1 className="text-white font-black font-poppins text-4xl  mb-2 md:text-5xl">Find Your Next Escape</h1>
        <p className="text-white font-bold font-poppins mb-4 sm:text-lg sm:mt-2">All you need for an unforgettable adventure. From<br className="hidden sm:inline"/> flights and awesome stays to thrilling trips and fun<br className="hidden sm:inline" /> activities, plan it all with just a click. Quick,<br className="hidden sm:inline" /> easy, and stress-free.Ready to explore?</p>
        <p><button className="border text-white font-bold font-poppins py-2 px-3 rounded-lg bg-yellowOrange sm:py-3 sm:px-4 ">Get started</button></p>
        </div>
      </section>

        <section>
       <ExploreDestinations />
       </section>

       <section>
        <TestimonialsPage />
       </section>

       <section>
       <ContactUs />
       </section>
     
    </main>
  );
};

export default LandingPage;
