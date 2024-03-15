import ItemImageHolder from "./ItemImageHolder";

function MoboMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16  ">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={37} />
        <ItemImageHolder id={38} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={39} />
        <ItemImageHolder id={40} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={41} />
        <ItemImageHolder id={42} />
      </div>
    </div>
  );
}
export default MoboMain;
