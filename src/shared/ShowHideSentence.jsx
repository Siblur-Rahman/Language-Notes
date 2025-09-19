import useProvider from "../hooks/useProvider";
import { handleToggleDesplay } from "./CommonJS";

const ShowHideSentence = ({ from, to }) => {
  const { isHide } = useProvider();
  return (
    <div className="mt-2">
      <span onClick={handleToggleDesplay} className="btn outline-amber-400 outline">{from}</span>
      <span className={`bg-gray-200 text-black p-2 btn outline-amber-400 outline ${isHide ? "hidden" : ""}`}>
        {to}
      </span>
    </div>
  );
};

export default ShowHideSentence;
