import Link from "next/link";
import Image from "next/image";
import { CiGrid41 } from "react-icons/ci";
import { TbVector } from "react-icons/tb";

  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Image_22.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: null,
      discount: null,
      image: "/Images_23.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Images_24.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: null,
      discount: "New",
      image: "/Images_25.png",
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Image_22.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: null,
      discount: null,
      image: "/Images_23.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Images_24.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: null,
      discount: "New",
      image: "/Images_25.png",
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Image_22.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: null,
      discount: null,
      image: "/Images_23.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Images_24.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: null,
      discount: "New",
      image: "/Images_25.png",
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Image_22.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: null,
      discount: null,
      image: "/Images_23.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/Images_24.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: null,
      discount: "New",
      image: "/Images_25.png",
    },
  ];
  
 function ProductGrid () {
    return (
      <div>
        {/* Hero Section */}
        <section
          className="relative w-[1540px] h-[316px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/image_21.png')", 
          }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative flex h-full flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
            <p className="text-gray-600 mt-2">
              <span>Home </span>
              <span className="mx-1">&gt;</span>
              <span>Shop</span>
            </p>
          </div>
        </section>
  
        {/* Filter and Sorting */}
        <section className="p-4 bg-[#F9F1E7]">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left: Filter Button */}
            <div className=" flex">
              <button className="px-4 py-2 text-xl rounded hover:bg-gray-300">
                &#x2630; Filter  
              </button>

              <CiGrid41 size={28} className="m-4"/>
             
            </div>
  
            {/* Center: Results Count */}
            <p className="text-gray-700 pl-20">
              Showing <span className="">1–16</span> of 32 results
            </p>
  
            {/* Right: Show & Sort */}
            <div className="flex space-x-4 items-center">
              {/* Show */}
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Show</span>
                <input
                  type="text"
                  className="w-12 px-2 py-1 border rounded"
                  defaultValue="16"
                />
              </div>
  
              {/* Short By */}
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Short by</span>
                <select className="px-2 py-1 border rounded">
                  <option value="default">Default</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        
      <div className="bg-[white] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative border rounded-lg shadow-sm overflow-hidden bg-[#F4F5F8]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[301px] object-cover" 
              />
              {product.discount && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.discount}
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <div className="mt-2">
                  <span className="font-bold text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-6 pb-10 pt-5">
          <button className="w-8 h-8 bg-yellow-500 text-white rounded-lg">1</button>
          <button className="w-8 h-8 bg-gray-200 rounded-lg">2</button>
          <button className="w-8 h-8 bg-gray-200 rounded-lg">3</button>
          <button className="px-4 py-1 bg-gray-200 rounded-lg">Next</button>
        </div>
        <div className="flex justify-evenly items-center p-2 w-full h-[270px] bg-[#F9F1E7]">
        
        < div className="">
    
        <Image src="/trophy 1.png" width={60} height={60} alt="Picture of the author" />
        
          <h4 className=" font-bold">High Quality</h4>
          <p className="text-[#898989]">crafted from top materials</p>
        </div>
        <div>
        <Image src="/guarantee.png" width={60} height={60} alt="Picture of the author" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p className="text-[#898989]">Over 2 years</p>
        </div>
        <div>
        <Image src="/shipping.png" width={60} height={60} alt="Picture of the author" />
          <h4 className="font-bold">Free Shipping</h4>
          <p className="text-[#898989]">Order over 150 $</p>
        </div>
        <div>
        <Image src="/customer-support.png" width={60} height={60} alt="Picture of the author" />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p className="text-[#898989]">Dedicated support</p>
        </div>
      </div>

      </div>
      </div>
    );
  };

 export default ProductGrid ;
  