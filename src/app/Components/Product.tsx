import Image from "next/image";
function Product () {
    return(
        <>
        <h1 className="text-center font-bold text-3xl py-8 pt-10">Our Products</h1>
        <div className="flex px-24 gap-6 py-4">
            <div className=" imageEleven space-y-4 bg-[#F4F5F7]">
                <Image
                 src={"/image_01.png"}
                 height={320}
                 width={320}
                 alt="picSix" />
            <p className="font-bold text-3xl">Syltherine</p>
            <p className="text-gray-600">Stylish cafe chair</p>
            <div className="flex items-center space-x-3">
            <p className="flex text-lg font-bold text-gray-900 pl-2">Rp 2.500.000</p>
            <p className="text-gray-400 line-through">Rp 3.500.000</p>
            </div>

            </div>

            <div> 
                <Image
                src={"/image_02.png"}
                height={320}
                width={320}
                alt="picSeven" />
            </div>
                
            <div className="imageThirteen space-y-4 bg-[#F4F5F7]">
                <Image
                src={"/image_03.png"}
                height={320}
                width={320}
                alt="picEight" />
            <p className="font-bold text-3xl">Lolito</p>
            <p className="text-gray-600">Luxury Big Sofa</p>
            <div className="flex items-center space-x-3">
            <p className="text-lg font-bold text-gray-900">Rp 7.000.000</p>
            <p className="text-gray-400 line-through">Rp 14.000.000</p>
            </div>
            </div>

            <div className="imageFourten space-y-4 bg-[#F4F5F7]">
                <Image
                src={"/image_04.png"}
                height={320}
                width={320}
                alt="picNine" />
            <p className="font-bold text-3xl">Restpria</p>
            <p className="text-gray-600">Outdoor baar table ans store</p>
            <p className="font-bold text-1xl">Rp 5.00.000</p>
            </div>
        </div>

        <div className="flex px-24 gap-6 py-4 ">
                <div className="imageFifteen space-y-4 bg-[#F4F5F7]">
                    <Image
                    src={"/image_05.png"}
                    height={320}
                    width={320}
                    alt="picThirteen" />
                    <p className="font-bold text-3xl">Grifo</p>
                    <p className="text-gray-600">Night lamp</p>
                    <p className="font-bold text-1xl">Rp 1.500.000</p>
                </div>

                <div className="imageSixteen space-y-4 bg-[#F4F5F7]">
                    <Image
                    src={"/image_06.png"}
                    height={320}
                    width={320}
                    alt="picFourteen" />
                    <p className="font-bold text-3xl">Muggo</p>
                    <p className="text-gray-600">Small mug</p>
                    <p className="font-bold text-1xl">Rp 150.000</p>
                </div>

                <div className="imageSeveenten space-y-4 bg-[#F4F5F7]">
                    <Image
                    src={"/image_07.png"}
                    height={320}
                    width={320}
                    alt="picFifeten" />
                    <p className="font-bold text-3xl">Pingky</p>
                    <p className="text-gray-600">Cute bad set</p>
                    <div className="flex items-center space-x-3">
                    <p className="text-lg font-bold text-gray-900">Rp 7.000.000</p>
                    <p className="text-gray-400 line-through">Rp 14.000.000</p>
                    </div>
                </div>

                <div className="imageEighteen space-y-4 bg-[#F4F5F7]">
                    <Image
                    src={"/image_08.png"}
                    height={320}
                    width={320}
                    alt="picSixteen" />
                    <p className="font-bold text-3xl">Potty</p>
                    <p className="text-gray-600">Minimalist flower pot</p>
                    <p className="font-bold text-1xl">Rp 500.000</p>
                </div>
            </div>
            <button className="items-center text-center w-[245px] h-[48px] top-[2646px] left-[598px] bg-[#FFFFFF] text-[#B88E2F] text-bold border border-blue-800 hover:border-[3px] justify-between mb-12 space-y-4 mx-[45%]" > Show More </button>
        </>
    )
}
export default Product;