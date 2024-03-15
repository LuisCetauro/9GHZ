import ItemImageHolder from "./ItemImageHolder";

function GPUMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16   ">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={1} />
        <ItemImageHolder id={2} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={3} />
        <ItemImageHolder id={4} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={5} />
        <ItemImageHolder id={6} />
      </div>
    </div>
  );
}
export default GPUMain;
