import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import FormRealTime from "../../form/FormRealTime/FormRealTime";

const RealTimeEdit=()=>{
    const {id}=useParams();
    const data=useState({});
    useEffect(()=>{
        // api call to get data 
    },[])
    return(
        <>
            <FormRealTime data={data}  />
        </>
    )
}

export default RealTimeEdit;