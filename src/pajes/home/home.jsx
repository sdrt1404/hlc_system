import CurrentDate from "@/curentData";
import { useScrollTrigger } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";





export default function Home() {


    let API = "https://685a9abb9f6ef96111571888.mockapi.io/Frontent"
    let [data,setData]=useState([])
    
    async function get() {
        try {
            let {data}=await axios.get(API)
            setData(data)

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        get()
    },[])




    return (<>

        <section className="w-[90%] m-auto ">

            <div>
                <CurrentDate/>
            </div>

        </section>

    </>)
}