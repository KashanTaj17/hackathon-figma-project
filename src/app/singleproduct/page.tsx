import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

function Product () {
  return (
    <div className="container mx-full ">
      {/* Breadcrumb */}
      <nav className=" w-[1540px] h-[100px] top-[114px] bg-[#F9F1E7] text-sm mb-4 gap-4 ">
        <div className=" flex text-center items-center space-x-10 mx-24 space-y-7 ">
        <Link href="/" className="hover:underline text-xl text-[#9F9F9F] space-x-8 flex">
          Home  
          <MdKeyboardArrowRight size={26} className="text-black"/>
        </Link>
        <Link href="/" className="hover:underline text-xl text-[#9F9F9F]  space-x-8 flex">
          Shop <MdKeyboardArrowRight size={26} className="text-black"/>          |
        </Link>
       <Link href="/" className="hover:underline text-xl font-semibold">
          Asgaard Sofa
       </Link>

        </div>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Product Images */}
        <div className="flex flex-col gap-4 mx-24">
          <img
            src="/Image_29.png"
            alt="Asgaard Sofa"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 pb-4">Asgaard Sofa</h1>
          <p className="text-xl text-[#9F9F9F] font-semibold mb-2 pb-4">Rs. 250,000.00</p>
          <div className="flex items-center gap-1 text-yellow-400 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-gray-500 text-sm ml-2"> |  (5 Customer Reviews)</span>
          </div>
          <p className="text-gray-700 mb-4 pb-3">
            Setting the bar as one of the loudest speakers and its class the <br></br>
            killburn is a compact stout-hearted hero with a well-balanced<br></br>
            audio with boates a clear midrange and extended highs for a <br></br>
            sound.
          </p>
          <div className="flex gap-4 mb-4 ">
            <div className="space-y-2 pb-4">
              <span className="font-semibold ">Size:</span>
              <Image src={"/Group 91.png"} height={30} width={30} alt="pic90" />
              <Image src={"/Group 90.png"} height={30} width={30} alt="pic90" />
              <Image src={"/Group 89.png"} height={30} width={30} alt="pic90" />
            </div>
            
             <br></br>
            <div className="space-y-2 pb-4">
              <span className="font-semibold " >Color:</span>
              <Image src={"/Rectangle 42.png"} height={30} width={30} alt="pic90" />
              <Image src={"/Rectangle 43.png"} height={30} width={30} alt="pic90" />
              <Image src={"/Rectangle 44.png"} height={30} width={30} alt="pic90" />
            </div>
          </div>
          <div className="flex gap-4 items-center pb-10">
          <button className="px-6 py-2 bg-gray-100 text-black rounded hover:bg-gray-300">
              -    1    +
            </button>
            <button className="px-6 py-2 bg-gray-100 text-black rounded hover:bg-gray-300">
              Add To Cart
            </button>
            <button className="px-6 py-2 bg-gray-100 text-black rounded hover:bg-gray-300">
             + Compare
            </button>
          </div>

          <div className="pt-10 space-y-2 pb-5">
            <p className="text-[#9F9F9F]"> SKU : SS001 </p>
            <p className="text-[#9F9F9F]"> Category : Sofas </p>
            <p className="text-[#9F9F9F]"> Tags : Sofa, Chair, Home, Shop </p>
            <p className="flex space-x-4 text-[#9F9F9F]">Share   : <FaFacebook className="text-black"/>
            <FaLinkedin className="text-black" />
            <FaSquareTwitter className="text-black"/></p>

          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 justify-center">
        <div className="flex border-b justify-center">
          <button className="py-2 px-4 text-black border-b-2 border-blue-600">
            Description
          </button>
          <button className="py-2 px-4 text-[#9F9F9F] hover:text-blue-600">
            Additional Information
          </button>
          <button className="py-2 px-4 text-[#9F9F9F] hover:text-blue-600">
            Reviews [5]
          </button>
        </div>
        <div className="p-4 justify-center items-center mx-36 pt-4">
          <p className="text-[#9F9F9F] justify-center">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and
           sound of Marshall, unplugs the chords, and takes the show on the road. 
           <br></br>
           <br></br>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br></br>
        speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br></br>
        and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br></br>
        to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>

        <Image src={"/Image_30.png"} height={348} width={1239} alt="picsThirteen" 
        className="justify-center m-20" />
      </div>

      {/* Related Products */}
      <div className="mt-12 items-center justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center pt-5 pb-4">Related Products</h2>
        <div className="grid grid-cols-1 place-items-center text-center md:grid-cols-4 m-24 gap-6  ">
          <div className="border rounded-lg p-4 shadow-md space-y-2 font-bold ">
            <img src="/image_01.png" alt="Chair" className="w-full h-[301px] mb-2 rounded-lg ]"  />
            <p className="text-black ">Sylttherine</p>
            <p className="text-[#898989]">Stylish Cafe Chair</p>
            <p className="text-black">Rp 2,500,000</p>
          </div>
          <div className="border rounded-lg p-4 shadow-md space-y-2 font-bold">
            <img src="/Images_23.png" alt="Chair" className="w-full h-[301px] mb-2 rounded-lg" />
            <p className="text-black">Leviosa</p>
            <p className="text-[#898989]">Stylish Cafe Chair</p>
            <p className="text-black">Rp 2,500,000</p>
          </div>
          <div className="border rounded-lg p-4 shadow-md space-y-2 font-bold">
            <img src="/image_03.png" alt="Sofa" className="w-full h-[301px] mb-2 rounded-lg" />
            <p className="text-black">Lolito</p>
            <p className="text-[#898989]">Luxury Big Sofa</p>
            <p className="text-black">Rp 7,000,000</p>
          </div>
          <div className="border rounded-lg p-4 shadow-md space-y-2 font-bold">
            <img src="/image_04.png" alt="Sofa" className="w-full h-[277px] mb-2 rounded-lg" />
            <p className="text-black">Respira</p>
            <p className="text-[#898989]"> Outdoor Baar Table And Stole</p>
            <p className="text-black">Rp 500,000</p>
          </div>
        </div>
        <button className="items-center text-center w-[245px] h-[48px] top-[2646px] left-[598px] bg-[#FFFFFF] text-[#B88E2F] text-bold border border-[#B88E2F] font-bold hover:border-[3px] justify-between mb-12 space-y-4 mx-[45%]" > Show More </button>
      </div>
    </div>
  );
};

export default Product;
