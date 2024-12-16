import Image from "next/image";
function Hero () {
    return (
       <>
       <div className="flex">
           <div className=" heroImage">
            <Image
            src={"/heroS.png.jpg"}
            height={100}
            width={1550}
            alt="picTwo" />
           </div>
        </div>
       </>
    )
}
export default Hero;