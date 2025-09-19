import useProvider from "../hooks/useProvider";
import { handleToggleDesplay } from "./CommonJS";

const ShowHideBlog = ({ button, content }) => {
  const { isHide } = useProvider();
  return (
    <div className="mt-2">
      <button onClick={handleToggleDesplay} className="btn w-full outline-amber-400 outline text-2xl">{button}</button>
      < div className={`bg-gray-200 text-black p-2 ${isHide ? "hidden" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default ShowHideBlog;
