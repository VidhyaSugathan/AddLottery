import React, { useState } from "react";
import List from "./List";
import axios from "axios";
export default function Admin(){
    const [array,setArray]=useState([]);
    
    let url="http://localhost:8000/lotterylist";
    let req={};
    let header={};
    useState(()=>{
        axios.post(url, req, header).then((res) => {
            console.log("success",res.data)
            setArray(res.data)
        }).catch();
    },[])
    return(
        <List array={array} label1="Lottery Name" value1={"txtLotteryname"} label2="Draw Date" value2={"dtLotterydrawdate"} label3="Lottery Prize" value3={"txtLotteryprize"} label4="Ticket Cost" value4={"txtCost"}/>
    )
};