
import { FaTrashAlt, FaUtensils } from "react-icons/fa";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useDeleteData from './../hooks/useDeleteData';
import useAxiosPublic from "../hooks/useAxiosPublic";

const TopicForm = ({topic}) => {
    const [handleDelete] = useDeleteData()
    // const [handleadd] = use()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
const onSubmit = async (data) => {

            const topicData = { 
                eng: data.eng,
                bang: data.bang
            }
            
            const addTopic = await axiosPublic.patch(`/english-topic/${topic}`, topicData);
            console.log(topic?.data.modifiedCount)
            if(addTopic?.data.modifiedCount){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `sentences is added to the database`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }

    }

    return ( 
            <div className="p-4 border-2 border-blue-700">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-ful my-6">
                                    <label className="label">
                                        <span className="label-text text-white">Bangla*</span>
                                    </label>
                                    <input placeholder="bang" className="input input-bordered w-full text-black" {...register("bang")} />
                                    <label className="label">
                                        <span className="label-text text-white">English*</span>
                                    </label>
                                    <input placeholder="eng" className="input input-bordered w-full text-black" {...register("eng")} />
                                </div>
                                {/* Submit */}
                                <button className="btn btn-primary text-white">
                                    Add Sentence <FaUtensils className="ml-3"/>
                                </button>
                            </form>
                </div>  
    );
};

export default TopicForm;