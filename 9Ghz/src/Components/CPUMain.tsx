import ItemImageHolder from "./ItemImageHolder";

function CPUMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={7} />
        <ItemImageHolder id={8} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={9} />
        <ItemImageHolder id={10} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={11} />
        <ItemImageHolder id={12} />
      </div>
    </div>
  );
}
export default CPUMain;
