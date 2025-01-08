import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-12 flex items-center justify-center">
      <div className="bg-ghostWhite shadow-xl p-8 max-w-6xl w-full mb-5">
        <h1 className="text-4xl text-seaBlue font-medium font-greatVibes mb-6 text-center">Contact Us</h1>
        <p className="mb-6 text-center font-poppins font-normal">
          Do you have a question or need assistance? We're here to help!
        </p>
        <form>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <label htmlFor="first-name" className="block text-sm font-normal font-poppins">First Name</label>
              <input type="text" id="first-name" name="first-name" className="mt-1 p-2 border border-black w-full" />
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label htmlFor="last-name" className="block text-sm font-normal font-poppins">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="mt-1 p-2 border border-black w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-sm font-normal font-poppins">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 border border-black w-full" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-normal font-poppins">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 border border-black w-full"></textarea>
          </div>
          <div className="text-left">
            <button type="submit" className="bg-yellowOrange text-white font-bold py-2 px-4 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

