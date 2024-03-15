import ItemImageHolder from "./ItemImageHolder";

function GabineteMain() {
  return (
    <div className=" w-screen flex flex-col mt-12 pb-16">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={25} />
        <ItemImageHolder id={26} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={27} />
        <ItemImageHolder id={28} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={29} />
        <ItemImageHolder id={30} />
      </div>
    </div>
  );
}
export default GabineteMain;
