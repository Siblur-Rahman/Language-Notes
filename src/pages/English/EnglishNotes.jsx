import { FaTrashAlt } from "react-icons/fa";
import useGetData from "../../hooks/useGetData";
import TopicForm from "../../shared/TopicForm";
import ShowHideBlog from "../../shared/ShowHideBlog";
import useDeleteSentence from "../../hooks/useDeleteSentence";
// import useDeleteData from "../../hooks/useDeleteData";

const EnglishNotes = () => {
    const allData = useGetData('all-topics')
    // const [handleDelete] = useDeleteData()
    const [handleDeleteSentence] = useDeleteSentence()

    return (
        <div>
            {allData?.map((topic, index) =>
            <ShowHideBlog from={topic?.topic} to={<>
            <ShowHideBlog from={"Click Me To Add Sentence"} to={<TopicForm topic={topic?.topic}/>}/>
            {/* <h2 className="text-xl text-center text-red-800 font-bold">{topic?.topic}</h2> */}
                
                {topic?.sentences?.map((data, index)=><div key={index} className="border-2 border-black flex justify-between items-center px-4 py-2">
                <div>
                <ShowHideBlog from={data?.bang} to={data?.eng}/>
                </div>    
                <button onClick={()=>handleDeleteSentence(`deleteSentce/${topic?.topic}`, data)} className="btn btn-primary btn-sm">
                        <FaTrashAlt className=""/>
                </button></div>)}
            </>}/> )}
        </div>
    );
};

export default EnglishNotes;