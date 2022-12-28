import React from "react";
import Input from "./Input";
import "../styles/AddLottery.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowDropDownCircle } from "react-icons/md";
import Collapsible from "react-collapsible";
export default function AddLottery() {

    const [lotterydate, setLotterydate] = useState("");
    const [otherdeduct1, setOtherdeduct1] = useState("");
    const [otherdeduct2, setOtherdeduct2] = useState("");
    const [lotterystart, setLotterystart] = useState("");
    const [lotteryend, setLotteryend] = useState("");
    const [lotterycost, setLotterycost] = useState("");
    const [lotterypurchase, setLotterypurchase] = useState("");
    const [lotteryselect, setLotteryselection] = useState("");
    const [lotterysub, setLotterysub] = useState("");
    const [tax, setTax] = useState("");
    const [agentcommission ,setAgentcommission]=useState("");
    const [unitsaleamount,setUnitsaleamount] =useState("");
    const [commissionrate,setCommissionrate] =useState("");
    const [adminchargeperunit,setAdminchargeperunit]=useState("");
    const [provider, setProvider] = useState("");
    const [lotteryname, setLotteryname] = useState("");

    const [Array, setArray] = useState([]);
    const [Array1, setArray1] = useState([]);
    const [Array2, setArray2] = useState([]);
    const handleAddlottery = () => {
        let url = "http://localhost:8000/addlottery"
        let req = {
            lotteryname: lotteryname,
            lotterydate: lotterydate,
            unitsaleamount:unitsaleamount,
            adminchargeperunit:adminchargeperunit,
            lotterystart: lotterystart,
            lotteryend: lotteryend,
            lotterycost: lotterycost,
            lotterypurchase: lotterypurchase,
            lotteryselection: lotteryselect,
            lotterysub: lotterysub,
            agentcommission:agentcommission,
            commissionrate:commissionrate,
            tax:tax,
            otherdeduct1:otherdeduct1,
            otherdeduct2:otherdeduct2
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


    }, []);
    const Lotteryname = (id) => {
        let url1 = "http://localhost:8000/addlotteryexist"
        let req1 = { refProvider: id }
        console.log("req", id)
        let header1 = {}
        axios.post(url1, req1, header1)
            .then((res) => {
                setArray1(res.data);
                console.log("lotteryname", res.data)
            })
            .catch();

        let url2 = "http://localhost:8000/addlotterydetails";
        let req2 = {
            id: id
        };
        let header2 = {};
        axios.post(url2, req2, header2)
            .then((res) => {
                console.log("details", setArray2)
                setArray2("hi",res.data)
                setLotterydate(res.data[0].dtLotterydrawdate)
                setAdminchargeperunit(res.data[0].txtAdminChargeperUnit)
                setLotterycost(res.data[0].txtCost)
                setUnitsaleamount(res.data[0].txtUnitSaleAmount)
                setAgentcommission(res.data[0].txtAgentCommission)
                setTax(res.data[0].txtTax)
                setCommissionrate(res.data[0].txtCommissionrate)
                setOtherdeduct1(res.data[0].txtOtherDeduct1)
                setOtherdeduct2(res.data[0].txtOtherDeduct2)
                setLotterystart(res.data[0].txtStartRange)
                setLotteryend(res.data[0].txtEndRange)
                setLotterypurchase(res.data[0].txtPurchaseLimit)
                setLotterysub(res.data[0].txtSubLottery)
                setLotteryselection(res.data[0].txtSelectionLimit)
            }).catch();
    }

    return (
        <>
            <div className="AddLottery">
                <Collapsible trigger={<div className="AddLottery_header"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span> Add Lottery </div>}>


                    <div className="AddLottery_sheader" >
                        <div>
                            <select onClick={(e) => {
                                Lotteryname(e.target.value)
                            }}
                                onChange={(e) => { setProvider(e.target.value); }} >
                                <option>Select</option>
                                {Array.map((itm, index) => {
                                    return (
                                        <>
                                            <option value={itm.id}>{itm.txtProvidername}</option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <select
                                onChange={(e) => {
                                    setLotteryname(e.target.value)
                                }}>
                                <option>Select</option>
                                {Array1.map((itm, index) => {
                                    return (
                                        <>
                                            <option onClick={(e) => { Lotteryname(e.target.value) }} value={itm.id}>{itm.txtLotteryname}</option>
                                        </>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                    <Collapsible trigger={<div className="AddLottery_subheader"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span>Lottery Details</div>}>
                        <div className="AddLottery_labels">
                        <div>
                                <Input name="New Lottery Name" value={lotteryname} onChange={(e) => { setLotteryname(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Draw Date" value={lotterydate} onChange={(e) => { setLotterydate(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Ticket Cost" value={lotterycost} onChange={(e) => { setLotterycost(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Purchased Amount per unit" value={unitsaleamount} onChange={(e) => { setLotterycost(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Unit Sale Amount" value={unitsaleamount} onChange={(e) => { setUnitsaleamount(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Admin Charge per Unit" value={adminchargeperunit} onChange={(e) => { setAdminchargeperunit(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Sub Lottery" value={lotterysub} onChange={(e) => { setLotterysub(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Start Range" value={lotterystart} onChange={(e) => { setLotterystart(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="End Range" value={lotteryend} onChange={(e) => { setLotteryend(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Selection Limit" value={lotteryselect} onChange={(e) => { setLotteryselection(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Purchasing Limit" value={lotterypurchase} onChange={(e) => { setLotterypurchase(e.target.value) }} />
                            </div>


                        </div>

                    </Collapsible>
                    <Collapsible trigger={<div className="AddLottery_subheader"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span>Lottery Deductions</div>}>
                        <div className="AddLottery_labels">

                            <div>
                                <Input name="Agent Commission" value={agentcommission} onChange={(e) => { setAgentcommission(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Tax" value={tax} onChange={(e) => { setTax(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Commission Rate" value={commissionrate} onChange={(e) => { setCommissionrate(e.target.value) }} />
                            </div>

                            <div>
                                <Input name="Other Deductions 1" value={otherdeduct1} onChange={(e) => { setOtherdeduct1(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Other Deductions 2" value={otherdeduct2} onChange={(e) => { setOtherdeduct2(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Charity Percentage" value={lotteryend} onChange={(e) => { setLotteryend(e.target.value) }} />
                            </div>
                        </div>

                    </Collapsible>
                    <Collapsible trigger={<div className="AddLottery_subheader"><span><MdArrowDropDownCircle></MdArrowDropDownCircle></span>Lottery Prize Money</div>}>
                        <div className="AddLottery_labels">

                            <div>
                                <Input name="First Prize" value={lotterystart} onChange={(e) => { setLotterystart(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Second Prize" value={lotteryend} onChange={(e) => { setLotteryend(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Third Prize" value={lotteryend} onChange={(e) => { setLotteryend(e.target.value) }} />
                            </div>

                            <div>
                                <Input name="Fourth Prize" value={lotteryselect} onChange={(e) => { setLotteryselection(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Fifth Prize" value={lotterypurchase} onChange={(e) => { setLotterypurchase(e.target.value) }} />
                            </div>
                            <div>
                                <Input name="Sixth Prize" value={lotterypurchase} onChange={(e) => { setLotterypurchase(e.target.value) }} />
                            </div>
                        </div>

                    </Collapsible>
                    <div className="AddLottery_buttons">
                            <div>
                                <button>Edit Lottery</button>
                            </div>
                            <div>
                                <button onClick={(e) => { handleAddlottery(e) }}>Add Lottery</button>
                            </div>
                        </div>
                </Collapsible>
            </div >

        </>
    )
}
