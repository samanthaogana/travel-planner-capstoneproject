import React from "react";

const ItineraryPage = () => {
  return (
    <section>
      {/* <h1 className='font-greatVibes text-center text-seaBlue font-medium text-4xl my-4'>Itinerary</h1>
      <div className=" flex justify-end">
        <button className='border mx-4 py-2 px-3 font-bold bg-yellowOrange text-white rounded-lg font-poppins'>Add New Itinerary</button>
      </div> */}

      <form className="flex flex-col gap-4 my-2 mx-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium font-poppins"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter destination"
            />
          </div>
          <div>
            <label
              htmlFor="flight-number"
              className="block text-sm font-medium font-poppins"
            >
              Flight Number
            </label>
            <input
              type="text"
              id="flight-number"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter flight number"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="departure-airport"
              className="block text-sm font-medium font-poppins"
            >
              Departure Airport
            </label>
            <input
              type="text"
              id="departure-airport"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Departure airport"
            />
          </div>
          <div>
            <label
              htmlFor="departure-date"
              className="block text-sm font-medium font-poppins"
            >
              Departure Date
            </label>
            <input
              type="text"
              id="departure-date"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter date"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="departure-time"
              className="block text-sm font-medium font-poppins"
            >
              Departure Time
            </label>
            <input
              type="text"
              id="departure-time"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter time"
            />
          </div>
          <div>
            <label
              htmlFor="arrival-airport"
              className="block text-sm font-medium font-poppins"
            >
              Arrival Airport
            </label>
            <input
              type="text"
              id="arrival-airport"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Arrival airport"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="arrival-date"
              className="block text-sm font-medium font-poppins"
            >
              Arrival Date
            </label>
            <input
              type="text"
              id="arrival-date"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter date"
            />
          </div>
          <div>
            <label
              htmlFor="arrival-time"
              className="block text-sm font-medium font-poppins"
            >
              Arrival Time
            </label>
            <input
              type="text"
              id="arrival-time"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter time"
            />
          </div>
        </div>
      </form>

      <div>
        <h2 className="font-greatVibes text-3xl text-center font-semibold my-5">
          Accomodation
        </h2>

        <form className="flex flex-col gap-4 my-2 mx-2 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="hotel-name"
                className="block text-sm font-medium font-poppins"
              >
                Hotel Name
              </label>
              <input
                type="text"
                id="hotel-name"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter hotel name"
              />
            </div>
            <div>
              <label
                htmlFor="check-in-date"
                className="block text-sm font-medium font-poppins"
              >
                Check-in Date
              </label>
              <input
                type="text"
                id="check-in-date"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Check-in date"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="check-in-time"
                className="block text-sm font-medium font-poppins"
              >
                Check-in Time
              </label>
              <input
                type="text"
                id="check-in-time"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Check-in time"
              />
            </div>
            <div>
              <label
                htmlFor="check-out-date"
                className="block text-sm font-medium font-poppins"
              >
                Check-out Date
              </label>
              <input
                type="text"
                id="check-out-date"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Check-out date"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="check-out-time"
                className="block text-sm font-medium font-poppins"
              >
                Check-out Time
              </label>
              <input
                type="text"
                id="check-out-time"
                className="w-full sm:w-3/6 border border-gray-300 p-2 rounded"
                placeholder="Check-out time"
              />
            </div>
          </div>
        </form>
      </div>

      <div>
        <h2 className="font-greatVibes text-3xl text-center font-semibold my-5">
          Activities
        </h2>

        <form className="flex flex-col gap-4 my-2 mx-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="activity-name"
                className="block text-sm font-medium font-poppins"
              >
                Activity Name
              </label>
              <input
                type="text"
                id="activity-name"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter activity"
              />
            </div>
            <div>
              <label
                htmlFor="activity-date"
                className="block text-sm font-medium font-poppins"
              >
                Date
              </label>
              <input
                type="text"
                id="activity-date"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter date"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="activity-time"
                className="block text-sm font-medium font-poppins"
              >
                Time
              </label>
              <input
                type="text"
                id="activity-time"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter time"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium font-poppins"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter location"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="activity-details"
                className="block text-sm font-medium font-poppins"
              >
                Details
              </label>
              <textarea
                name="details"
                id="activity-details"
                className="w-full border border-gray-300 p-2"
              ></textarea>
            </div>  
          </div>
          <div className="flex gap-4">
          <button className="border font-bold bg-yellowOrange text-white py-2 px-2 sm:py-2 sm:px-3 rounded-lg">Add New Activity</button>
            <button className="border font-bold bg-yellowOrange text-white  py-2 px-3 rounded-lg">Delete Activity</button>
          </div>        
        </form>
      </div>

      <div>
        <h2 className="text-center font-greatVibes text-3xl font-semibold my-5">
          Journal Entry
        </h2>

        <form className="flex flex-col gap-4 my-2 mx-2">
          <div>
            <label
              htmlFor="what-you-enjoyed-most"
              className="font-medium block text-sm font-poppins"
            >
              What you enjoyed most
            </label>
            <textarea
              name="journal-prompt"
              id="what-you-enjoyed-most"
              className="border border-gray-300 w-full p-2"
            ></textarea>

            <label
              htmlFor="self-care"
              className="font-medium block text-sm font-poppins"
            >
              Self-care activities
            </label>
            <textarea
              name="journal-prompt"
              id="self-care"
              className="border border-gray-300 w-full p-2"
            ></textarea>

            <label
              htmlFor="gratitude"
              className="font-medium block text-sm font-poppins"
            >
              Gratitude
            </label>
            <textarea
              name="journal-prompt"
              id="gratitude"
              className="border border-gray-300 w-full p-2"
            ></textarea>
          </div>
          <div className="mb-2">
          <button className="font-bold border rounded-lg px-3 py-2 bg-yellowOrange text-white">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ItineraryPage;
