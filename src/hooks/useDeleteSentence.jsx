import useAxiosPublic from "./useAxiosPublic";
import Swal from "sweetalert2";


const useDeleteSentence = () => {
    const axiosPublic = useAxiosPublic();

    const handleDeleteSentence = async(api, id)=>{
        try{

           Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
             
              if (result.isConfirmed) {
                const res = axiosPublic.patch(`/${api}`, id)
                if(res.data?.deletedCount>0){
                   Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                }
               
              }
            })
        }
        catch(err){
          console.log(err)
        }
  }
  return [handleDeleteSentence]
};

export default useDeleteSentence;
