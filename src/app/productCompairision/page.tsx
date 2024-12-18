import Link from "next/link";
import Image from "next/image";

function ProductCompairision () {
  return (
    <div className="min-h-screen bg-white w-[1540px]">
    {/* Header */}
    <div className="relative bg-cover bg-center h-[316px] w-[1540px]" style={{ backgroundImage: "url('/image_20.png')", }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center">            
        <div>
        <Image src="/Logo101.png" alt="logoo" className="w-[89px] h-[89px] ml-36" />
          <h1 className="text-4xl font-bold text-black mb-2"> Product Compairision </h1>
          <p className="text-black text-sm">Home &gt; Compairision</p>
        </div>
      </div>
    </div>

    <div className=" bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold  justify-start pb-28">
               Go to Product <br></br>
               page for more <br></br>
               Products 
            </h1>
            <div className="pb-44">
            <Link href="#" className="text-gray-600 underline ">
              View More
            </Link>
            </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Product 1 */}
          <div className="rounded-full p-4 flex flex-col items-center">
            <Image
              src="/Image_26.png"
              alt="Asgaard Sofa"
              width={280}
              height={167}
              className="mb-4"
            />
            <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
            <p className="text-gray-800 font-bold">Rs. 250,000.00</p>
            <div className="flex items-center">
              <p className="text-yellow-500 text-lg">4.7</p>
              <p className="ml-2">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            </div>
            <p className="text-gray-500 text-sm">204 Review</p>
          </div>

          {/* Product 2 */}
          <div className="rounded-lg p-4 flex flex-col items-center">
            <Image
              src="/Image_26.png"
              alt="Outdoor Sofa Set"
              width={280}
              height={211}
              className="mb-4"
            />
            <h2 className="text-lg font-semibold">Outdoor Sofa Set</h2>
            <p className="text-gray-800 font-bold">Rs. 224,000.00</p>
            <div className="flex items-center">
              <p className="text-yellow-500 text-lg">4.2</p>
              <p className="ml-2">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            </div>
            <p className="text-gray-500 text-sm">145 Review</p>
          </div>
        </div>
        <div>
            <div className="font-bold pt-6 pb-28">Add A Product <br></br>
            <button className="bg-yellow-600 items-center justify-center text-white py-2 px-6 mt-6 space-y-6 rounded hover:bg-yellow-700">
              Choose a Product
            </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white shadow-md rounded-lg p-4 pb-8">
          <div className="grid grid-cols-3 gap-4 text-left ">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold  pb-8 space-y-8">General</h3>
              <p>Sales Package</p>
              <p>Model Number</p>
              <p>Secondary Material</p>
              <p>Configuration</p>
              <p>Upholstery Material</p>
              <p>Upholstery Color</p>
            </div>
            <div>
              <p className="font-bold  pb-4 space-y-4">1 sectional sofa</p>
              <p>TFCBLIGRBL6SRHS</p>
              <p>Solid Wood</p>
              <p>L-shaped</p>
              <p>Fabric + Cotton</p>
              <p>Bright Grey & Lion</p>
            </div>
            <div>
              <p className="font-bold  pb-4 space-y-4" >1 Three Seater, 2 Single Seater</p>
              <p>DTUBLIGRBL568</p>
              <p>Solid Wood</p>
              <p>L-shaped</p>
              <p>Fabric + Cotton</p>
              <p>Bright Grey & Lion</p>
            </div>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-3 gap-4 mt-4 pb-8 space-y-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-2 pb-4 space-y-3 ">Product</h3>
              <p>Filling Material</p>
              <p>Finish Type</p>
              <p>Adjustable Headrest</p>
              <p>Maximum Load Capacity</p>
              <p>Origin of Manufacture</p>
            </div>
            <div>
              <p className="font-bold  pb-4 space-y-4">Foam</p>
              <p>Bright Grey & Lion</p>
              <p>No</p>
              <p>280 KG</p>
              <p>India</p>
            </div>
            <div>
              <p className="font-bold  pb-4 space-y-4">Matte</p>
              <p>Bright Grey & Lion</p>
              <p>Yes</p>
              <p>300 KG</p>
              <p>India</p>
            </div>
          
    
        <div className="border-b border-r p-4">
          <h2 className="font-bold text-lg">Dimensions</h2>
          <div className="mt-2 space-y-2">
            <p>Width: <span className="font-semibold">265.32 cm</span> </p>
            <p>Height: <span className="font-semibold">76 cm</span></p>
            <p>Depth: <span className="font-semibold">167.76 cm</span></p>
            <p>Weight: <span className="font-semibold">45 KG</span></p>
            <p>Seat Height: <span className="font-semibold">41.52 cm</span></p>
            <p>Leg Height: <span className="font-semibold">5.46 cm</span></p>
          </div>
        </div>

        <div className="border-b p-4">
          <h2 className="font-bold text-lg">Dimensions</h2>
          <div className="mt-2 space-y-2">
            <p>Width: <span className="font-semibold">265.32 cm</span></p>
            <p>Height: <span className="font-semibold">76 cm</span></p>
            <p>Depth: <span className="font-semibold">167.76 cm</span></p>
            <p>Weight: <span className="font-semibold">65 KG</span></p>
            <p>Seat Height: <span className="font-semibold">41.52 cm</span></p>
            <p>Leg Height: <span className="font-semibold">5.46 cm</span></p>
          </div>
        </div>

        {/* Warranty */}
        <div className="border-r p-4">
          <h2 className="font-bold text-lg">Warranty</h2>
          <div className="mt-2 space-y-2 mb-6 pb-6">
            <p><span className="font-bold">Warranty Summary:</span> 1 Year Manufacturing Warranty</p>
            <p><span className="font-bold">Service Type:</span> For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
            <p><span className="font-bold">Covered in Warranty:</span> Warranty Against Manufacturing Defect</p>
            <p><span className="font-bold">Not Covered:</span> Damages Due To Wear & Tear or Beyond Intended Use.</p>
            <p><span className="font-bold pt-10">Domestic Warranty:</span> 1 Year</p>
            <button className=" px-4 py-2 mt-6 space-y-12 bg-[#B88E2F] text-white font-semibold">Add To Cart</button>
          </div>
        </div>

        <div className="p-4">
          <h2 className="font-bold text-lg">Warranty</h2>
          <div className="mt-2 space-y-2 mb-6 pb-6">
            <p><span className="font-bold">Warranty Summary:</span> 1.2 Year Manufacturing Warranty</p>
            <p><span className="font-bold">Service Type:</span> For Warranty Claims Email support@xyz.com</p>
            <p><span className="font-bold">Covered in Warranty:</span> Manufacturing Defects Only</p>
            <p><span className="font-bold">Not Covered:</span> Damages Due To Wear & Tear or Beyond Intended Use.</p>
            <p><span className="font-bold space-y-6">Domestic Warranty:</span> 3 Months</p>
            <button className=" px-4 py-2 mt-6 space-y-12 bg-[#B88E2F] text-white font-semibold">Add To Cart</button>
          </div>
        </div>
        </div>
        </div>
          {/* Footer */}
          <div className="flex justify-between p-20 w-full mr-12 h-[270px] items-center mt-12 bg-[#FAF3EA] text-center">
          <div className="">
            <Image src="/trophy 1.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">High Quality</h4>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
          <div>
          <Image src="/guarantee.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold ">Warranty Protection</h4>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
          <div>
          <Image src="/shipping.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-[#898989]">Order over 150$</p>
          </div>
          <div>
          <Image src="/customer-support.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default ProductCompairision;
