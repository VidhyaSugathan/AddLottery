import React from "react";
import Input from "./Input";
import "../styles/AddLottery.css";
import { useState } from "react";
import axios from "axios";
export default function AddLottery() {
    const [lotteryadd, setLotteryadd] = useState("");
    const [lotterydate, setLotterydate] = useState("");
    const [lotteryprize, setLotteryprize] = useState("");
    const [lotterystatus, setLotterystatus] = useState("");
    const [lotterystart, setLotterystart] = useState("");
    const [lotteryend, setLotteryend] = useState("");
    const [lotterycost, setLotterycost] = useState("");
    const [lotterypurchase, setLotterypurchase] = useState("");
    const [lotteryselect, setLotteryselection] = useState("");
    const [lotterysub, setLotterysub] = useState("");
    const handleAddlottery = () => {
        let url = "http://localhost:8000/addlottery"
        let req = {
            lotteryname: lotteryadd,
            lotterydate: lotterydate,
            lotteryprize: lotteryprize,
            lotterystatus: lotterystatus,
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
    return (
        <>
            <div className="AddLottery">
                <div className="AddLottery_labels">
                    <div className="AddLottery_labels_col">
                        <div>
                            <Input name="Lottery Name" onChange={(e) => { setLotteryadd(e.target.value); }} />

                        </div>
                        <div>
                            <Input name="Draw Date" onChange={(e) => { setLotterydate(e.target.value) }} />

                        </div>
                        <div>
                            <Input name="Lottery Prize" onChange={(e) => { setLotteryprize(e.target.value) }} />
                        </div>
                        <div>
                            <Input name="Lottery Status" onChange={(e) => { setLotterystatus(e.target.value) }} />
                        </div>
                        <div>
                            <Input name="Lottery Cost" onChange={(e) => { setLotterycost(e.target.value) }} />
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
                        <div>
                            <Input name="Sub Lottery" onChange={(e) => { setLotterysub(e.target.value) }} />
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
            </div>
        </>
    )
}
