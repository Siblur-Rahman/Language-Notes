import useAuth from "../hooks/useAuth";
import { handleToggleDesplay } from "./CommonJS";

const ShowHideBlog = ({ from, to }) => {
  const { isHide } = useAuth();
  return (
    <div className="mt-2">
      <button onClick={handleToggleDesplay} className="btn w-full outline-amber-400 outline text-2xl">{from}</button>
      < div className={`bg-gray-200 text-black p-2 ${isHide ? "hidden" : ""}`}>
        {to}
      </div>
    </div>
  );
};

export default ShowHideBlog;
