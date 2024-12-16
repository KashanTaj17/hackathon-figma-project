import { IoLocation } from "react-icons/io5";
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white w-[1540px]">
        {/* Header */}
        <div className="relative bg-cover bg-center h-[316px] w-[1540px]" style={{ backgroundImage: "url('/image_20.png')", }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center">            
            <div>
            <img src="/Logo101.png" alt="logoo" className="w-[89px] h-[89px] ml-8" />
              <h1 className="text-4xl font-bold text-black mb-2">Contact</h1>
              <p className="text-black text-sm">Home &gt; Contact</p>
            </div>
          </div>
        </div>
    


      <div className="flex flex-col w-[1540px] items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
          {/* Page Header */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] text-center mb-6 pb-10">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br></br>
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Left Section - Contact Information */}
            <div className=" p-6 w-[1540px]">
              {/* Address */}
              <div className="mb-6 ">
                <h2 className="flex items-center w-[1540px] text-gray-800 font-semibold mb-1">
                  <span className="mr-2"><IoLocation /> </span> Address
                </h2>
                <p className="text-gray-600">
                  236 5th SE Avenue, New <br></br>
                  York NY10000, United <br></br>
                  States
                </p>
                <span className="text-purple-600 font-semibold"></span>
              </div>
  
              {/* Phone */}
              <div className="mb-6">
                <h2 className="flex items-center text-gray-800 font-semibold mb-1">
                  <span className="mr-2">&#x260E;</span> Phone
                </h2>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
  
              {/* Working Time */}
              <div>
                <h2 className="flex items-center text-gray-800 font-semibold mb-1">
                  <span className="mr-2">&#x1F551;</span> Working Time
                </h2>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
  
            {/* Right Section - Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your name</label> <br></br>
                  <input
                    type="text"
                    placeholder="Abc"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email address</label> <br></br>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Subject</label> <br></br>
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Message</label> <br></br>
                  <textarea

                    placeholder="Hi! I'd like to ask about"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#B88E2F] text-white px-12 py-2 rounded hover:bg-yellow-700 focus:outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          
        {/* Footer */}
        <div className="flex justify-between p-20 w-full mr-12 h-[270px] items-center mt-12 bg-[#FAF3EA] text-center">
          <div className="">
            <img src="/trophy 1.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">High Quality</h4>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
          <div>
          <img src="/guarantee.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold ">Warranty Protection</h4>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
          <div>
          <img src="/shipping.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-[#898989]">Order over 150$</p>
          </div>
          <div>
          <img src="/customer-support.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
  