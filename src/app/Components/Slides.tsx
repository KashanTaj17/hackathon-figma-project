import Image from "next/image";
function Slides () {
    return (
        <>
        <div className="flex m-3/12 gap-6 pt-10 slideSection w-[1540px] h-[670px] top-[2763px] bg-[#FCF8F3]">
            <div className="slideText pt-9 ms-32 m-20  ">
            <h4 className=" font-extrabold text-[2rem] pt-10 py-1 ">50+ Beautiful rooms <br/>
            inspiration</h4>

            <p> Our designer already made a lot of beautiful <br/>
             prototipe of rooms that inspire you</p>
            <button className="my-6 bg-[#B88E2F] text-white p-2"> Explore More </button>
            </div>

            <div className="">
            <Image
                src={"/Products.png"}
                height={582}
                width={404}
                alt="picSeventeen" />
            </div>

            <div className="">
                <Image
                src={"/room_02.png"}
                height={386}
                width={386}
                alt="picEighteen"/>

            <Image
                src="/image_19.png"
                alt="Product"
                className="w-[120px] h-[27px] top-[3333px] left-[992px] gap-20px object-cover mt-6"
            />

                
            </div>

        </div>
        </>
    )
}
export default Slides;