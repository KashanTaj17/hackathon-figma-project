import Image from "next/image";
function SecondSlides () {
    return (
        <>
        <div className="text-center pt-12 pb-2">
            <h1>Shape your setup with</h1>
            <h1 className="font-bold text-3xl">#FuniroFurniture</h1>
        <div>
            <Image
            src={"/furniture_20.png"}
            height={721}
            width={1799}
            alt="twentyOne" />
            </div>
        </div>
        </>
    )
}
export default SecondSlides;