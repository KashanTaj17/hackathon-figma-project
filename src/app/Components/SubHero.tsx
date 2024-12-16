import Image from "next/image";
function SubHero () {
    return (
        <>
        <div className="subText text-center py-10 ">
            <h3 className="font-bold text-3xl ">Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imageArea flex text-center px-24 gap-4 font-bold">
            <div className="space-y-6 imageOne ">

                <Image
                src={"/image 106.png"}
                height={480}
                width={782.12}
                alt="picThree" />
                <h6 className="">Dining</h6>
            </div>

            <div className="space-y-6 imageTwo ">
                <Image
                src={"/living room.png"}
                height={480}
                width={782.12}
                alt="picFour" />
                <h6>Living</h6>
            </div>

            <div className="space-y-6 imageThree ">
                <Image
                src={"/badroom.png"}
                height={480}
                width={782.12}
                alt="picFive" />
                <h6>Bedroom</h6>
            </div>
        </div>
        </>
    )
}
export default SubHero;
