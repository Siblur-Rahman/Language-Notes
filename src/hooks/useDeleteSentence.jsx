import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import Swal from "sweetalert2";


const useDeleteSentence = () => {
    const axiosPublic = useAxiosPublic();

    const handleDeleteSentence = async(api, id)=>{
        try{
          axiosPublic.patch(`/${api}`, id)
          .then(res =>{
            console.log(res?.data)
            if(res.data?.deletedCount>0){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Note is deleteded`,
                showConfirmButton: false,
                timer: 1500
              });
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