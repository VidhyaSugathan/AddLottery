import React from "react";
import Input from "./Input";
import "../styles/AddLottery.css";
import { useState } from "react";
function AddLottery() {
    const [add, setAdd] = useState("");
    const [date, setDate] = useState("");
    const [prize, setPrize] = useState("");
    const [status, setStatus] = useState("");
    const [range, setRange] = useState("");
    const [purchase, setPurchase] = useState("");
    const [select, setSelection] = useState("");
    const [sub, setSub] = useState("");
    console.log("Parent", date)
    const handleChange = (v) => {
        console.log(v)
        setAdd(v);
        setDate(v);
        setPrize(v);
        setStatus(v);
        setRange(v);
        setPurchase(v);
        setSelection(v);
        setSub(v);
    };
    return (
        <>
            <div className="AddLottery">

                <div className="AddLottery_labels">
                    <div className="AddLottery_labels_col">
                        <div>
                            <Input name="Lottery Name" onChange={(e) => { handleChange(e.target.value) }} add={add} />

                        </div>
                        <div>
                            <Input name="Draw Date" onChange={(e) => { handleChange(e.target.value) }} date={date} />

                        </div>
                        <div>
                            <Input name="Lottery Prize" onChange={(e) => { handleChange(e.target.value) }} prize={prize} />
                        </div>
                        <div>
                            <Input name="Lottery Status" onChange={(e) => { handleChange(e.target.value) }} status={status} />
                        </div>
                    </div>
                    <div className="AddLottery_labels_col">
                        <div>
                            <Input name="Selection Range" onChange={(e) => { handleChange(e.target.value) }} range={range} />
                        </div>
                        <div>
                            <Input name="Purchasing Limit" onChange={(e) => { handleChange(e.target.value) }} purchase={purchase} />
                        </div>
                        <div>
                            <Input name="Selection Limit" onChange={(e) => { handleChange(e.target.value) }} select={select} />
                        </div>
                        <div>
                            <Input name="Sub Lottery" onChange={(e) => { handleChange(e.target.value) }} sub={sub} />
                        </div>
                    </div>
                </div>
                <div className="AddLottery_buttons">
                    <div>
                        <button>Edit</button>
                    </div>
                    <div>
                        <button>Add Lottery</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddLottery;