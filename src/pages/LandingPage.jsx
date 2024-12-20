import React from "react";

const LandingPage = () => {
  return (
    <main>
      <section>
        <img
          className="w-full h-screen bg-contain bg-center"
          src="src\assets\images\rachael-annabelle-NG2cP0H7_48-unsplash (1).jpg"
          alt="hero background"
        />
      </section>

      <section>
        <div className="absolute inset-0 flex flex-col justify-center mx-11 mb-28"> 
        <h1 className="text-white font-black font-poppins text-4xl mb-2">Find Your Next Escape</h1>
        <p className="text-white font-bold font-poppins mb-4">All you need for an unforgettable adventure. From flights and awesome stays to thrilling trips and fun activities, plan it all with just a click. Quick, easy and stress-free.Ready to explore?</p>
        <p><button className="border text-white font-bold font-poppins py-2 px-3 rounded-lg bg-yellowOrange">Get started</button></p>
        </div>
      </section>

     
    </main>
  );
};

export default LandingPage;
