import { useEffect, useState } from "react"


export const useFetch = (api) =>{
    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setDatas(data)
        })
        .catch((err)=>{console.log(err);
        });
    },[api])

    return [datas];
}