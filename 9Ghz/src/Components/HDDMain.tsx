import ItemImageHolder from "./ItemImageHolder";

function HDDMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={31} />
        <ItemImageHolder id={32} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={33} />
        <ItemImageHolder id={34} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={35} />
        <ItemImageHolder id={36} />
      </div>
    </div>
  );
}
export default HDDMain;
