import { useForm } from "react-hook-form";
// import SectionTitle from "../../../components/SectionTitle";
import { FaTrashAlt, FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useGetData from "../../hooks/useGetData";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useDeleteData from "../../hooks/useDeleteData";

const AddTopic = () => {
    const allData = useGetData('all-topics');
    const [handleDelete] = useDeleteData()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      
    
      const onSubmit = async (data) => {

            const topicData = {
                topic: data.topic,
                sentences:[]
            }
            
            const topic = await axiosPublic.post('/english-topic', topicData);
            if(topic?.data.insertedId){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.topic} is added to the database`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }

    }
      return (
       <>
            <Helmet>
                    <title>Add Chapter</title>
            </Helmet>
            {/* <SectionTitle heading={'Add a Notes'} subHeading={""}/> */}
            <div className="p-4 border-2 border-blue-700">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-ful my-6">
                        <label className="label">
                            <span className="label-text text-white">Topic*</span>
                        </label>
                        <input placeholder="topic" className="input input-bordered w-full text-black" {...register("topic")} />
                    </div>
                    {/* Submit */}
                    <button className="btn btn-primary text-white">
                        Add English Topic <FaUtensils className="ml-3"/>
                    </button>
                </form>
            </div>
            <div>{allData?.length}</div>
            <div className="text-2xl">{allData?.map((data, index)=><div key={index} className="border-2 border-black flex justify-between items-center px-4 py-2"> 
                <div>
                    {data?.topic}
                </div>  
                <button onClick={()=>handleDelete('delete-topic', data?._id)} className="btn btn-primary btn-sm">
                        <FaTrashAlt className=""/>
            </button></div>)}

            </div>
            
       </>
      )
};

export default AddTopic;