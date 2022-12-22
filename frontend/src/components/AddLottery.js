import React from "react";
import Input from "./Input";
import "../styles/AddLottery.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowDropDownCircle } from "react-icons/md";
import Collapsible from "react-collapsible";
export default function AddLottery() {
    const [lotteryadd, setLotteryadd] = useState("");
    const [lotterydate, setLotterydate] = useState("");
    const [lotteryprize, setLotteryprize] = useState("");
    const [lotterystart, setLotterystart] = useState("");
    const [lotteryend, setLotteryend] = useState("");
    const [lotterycost, setLotterycost] = useState("");
    const [lotterypurchase, setLotterypurchase] = useState("");
    const [lotteryselect, setLotteryselection] = useState("");
    const [lotterysub, setLotterysub] = useState("");
    const [select, setProvider] = useState("");
    const [lotteryname, setLotteryname] = useState("");
    const [array, setArray] = useState([]);
    const [array1, setArray1] = useState([]);
    const handleAddlottery = () => {
        let url = "http://localhost:8000/addlottery"
        let req = {
            lotteryname: lotteryadd,
            lotterydate: lotterydate,
            lotteryprize: lotteryprize,
            lotterystart: lotterystart,
            lotteryend: lotteryend,
            lotterycost: lotterycost,
            lotterypurchase: lotterypurchase,
            lotteryselection: lotteryselect,
            lotterysub: lotterysub
        }
        console.log(req)
        let header = {}
        axios.post(url, req, header).then((res) => {
            console.log("Success", res.data);
        }).catch();
    }

    useEffect(() => {
        let url = "http://localhost:8000/addlotteryproviderfetch";
        let req = {};
        let header = {};
        axios.post(url, req, header).then((res) => {
            console.log("Hi", res.data)
            setArray(res.data)
        }).catch();
    });
    const Lotteryname = (refProvider) => {
        let url1 = "http://localhost:8000/addlotteryexist"
        let req1 = { refProvider: refProvider }
        let header1 = {}
        axios.post(url1, req1, header1)
            .then((res) => {
                setArray1(res.data);
                console.log("lotteryname", res.data)
            })

    }

    return (
        <>
            <div className="AddLottery">
                <Collapsible trigger={<div className="AddLottery_header"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span> <h1>Add Lottery</h1> </div>}>


                    <div className="AddLottery_sheader" >
                        <div>
                            <select onChange={(e) => { setProvider(e.target.value); }} ><option>select</option>
                                {array.map((itm, index) => {
                                    return (
                                        <>
                                            <option>{itm.txtProvidername}</option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <select onClick={(e) => { Lotteryname(e); }} 
                            onChange={(e) => {setLotteryname(e.target.value)
                            }}>
                                <option>select</option>
                                {array1.map((itm, index) => {
                                    return (
                                        <>

                                            <option>{itm.txtLotteryname}</option>
                                        </>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                    <Collapsible trigger={<div className="AddLottery_subheader"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span> <h2> Lottery Details</h2> </div>}>
                        <div className="AddLottery_labels">
                            <div className="AddLottery_labels_col">
                                <div>
                                    <Input name="Draw Date" onChange={(e) => { setLotterydate(e.target.value) }} />

                                </div>
                                <div>
                                    <Input name="Lottery Prize" onChange={(e) => { setLotteryprize(e.target.value) }} />
                                </div>
                                <div>
                                    <Input name="Lottery Cost" onChange={(e) => { setLotterycost(e.target.value) }} />
                                </div>
                                <div>
                                    <Input name="Sub Lottery" onChange={(e) => { setLotterysub(e.target.value) }} />
                                </div>
                            </div>
                            <div className="AddLottery_labels_col">
                                <div>
                                    <Input name="Start Range" onChange={(e) => { setLotterystart(e.target.value) }} />
                                </div>
                                <div>
                                    <Input name="End Range" onChange={(e) => { setLotteryend(e.target.value) }} />
                                </div>
                                <div>
                                    <Input name="Selection Limit" onChange={(e) => { setLotteryselection(e.target.value) }} />
                                </div>
                                <div>
                                    <Input name="Purchasing Limit" onChange={(e) => { setLotterypurchase(e.target.value) }} />
                                </div>

                            </div>
                        </div>
                        <div className="AddLottery_buttons">
                            <div>
                                <button>Edit</button>
                            </div>
                            <div>
                                <button onClick={(e) => { handleAddlottery(e) }}>Add Lottery</button>
                            </div>
                        </div>
                    </Collapsible>



                </Collapsible>
            </div >

        </>
    )
}
