var mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
var con = mysql.createConnection({
    database: "lotterydrums",
    host: "localhost",
    user: "root",
    password: "password",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});
//--------------------ADD LOTTERY--------------------- //
app.post("/addlottery", function (req, res) {
    let lotteryname = req.body.lotteryname;
    let lotterydate = req.body.lotterydate;
    let lotterycost = req.body.lotterycost;
    let unitsaleamount=req.body.unitsaleamount;
    let adminchargeperunit=req.body.adminchargeperunit;
    let lotterystart = req.body.lotterystart;
    let lotteryend = req.body.lotteryend;
    let lotteryselection = req.body.lotteryselection;
    let lotterypurchase = req.body.lotterypurchase;
    let lotterysub = req.body.lotterysub;
    let agentcommission=req.body.agentcommission;
    let tax=req.body.tax;
    let commissionrate=req.body.commissionrate
    let otherdeduct1=req.body.otherdeduct1;
    let charitypercent=req.body.charitypercent;
    let otherdeduct2=req.body.otherdeduct2;
    var sql = "insert into tbllotterymaster(txtLotteryname,dtLotterydrawdate,txtCost,txtUnitSaleAmount,txtAdminChargeperUnit,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery,txtAgentCommission,txtTax ,txtOtherDeduct1 ,txtOtherDeduct2,txtCommissionrate,txtCharitypercent) values('" + lotteryname + "','" + lotterydate + "','"+unitsaleamount+"','"+adminchargeperunit+"','" + lotterycost + "','" + lotterystart + "','" + lotteryend + "','" + lotteryselection + "','" + lotterypurchase + "','" + lotterysub + "','"+agentcommission+"','"+tax+"','"+otherdeduct1+"','"+otherdeduct2+"','"+commissionrate+"','"+charitypercent+"' );";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//--------------------ADD LOTTERY PROVIDER----------------------//
app.post("/addlotteryproviderfetch", function (req, res) {
    var sql="SELECT id, txtProvidername FROM tblprovider;";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });
//--------------------LOTTERY NAME EXISTING----------------------//
app.post("/addlotteryexist", function (req, res) {
    let refProvider=req.body.refProvider
    var sql="select id,txtLotteryname from tbllotterymaster where refProvider='"+refProvider+"';";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });

//--------------------LOTTERY EXISTING DETAILS--------------------- //

app.post("/addlotterydetails", function (req, res) {
    let id=req.body.id;
    var sql="select dtLotterydrawdate,txtCost,txtUnitSaleAmount,txtAdminChargeperUnit,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery,txtAgentCommission,txtTax ,txtOtherDeduct1 ,txtOtherDeduct2,txtCommissionrate,txtCharitypercent,txtFirstprize,txtSecondprize,txtThirdprize,txtFourthprize,txtFifthprize,txtSixthprize from tbllotterymaster where id = '"+id+"';";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });

//-------------------------EDIT LOTTERY--------------------------//

app.post("/editlottery", function (req, res) {
    let id = req.body.id;
    let drawdate = req.body.drawdate;
    let puramount = req.body.puramount;
    let unitsaleamount = req.body.unitsaleamount;
    let adminchargeperunit = req.body.adminchargeperunit;
    let commissionrate = req.body.commissionrate;
    let agentcommission = req.body.agentcommission;
    let tax = req.body.tax;
    let otherdeduct1 = req.body.otherdeduct1;
    let otherdeduct2 = req.body.otherdeduct2;
    let charitypercent = req.body.charitypercent;
    let first = req.body.first;
    let second = req.body.second;
    let third = req.body.third;
    let fourth = req.body.fourth;
    let fifth = req.body.fifth;
    let sixth = req.body.sixth;
    let cost = req.body.cost;
    let start = req.body.start;
    let end = req.body.end;
    let selection = req.body.selection;
    let purchase = req.body.purchase;
    let sublottery = req.body.sublottery;
    var sql = "UPDATE tbllotterymaster SET dtLotterydrawdate='" + drawdate + "',txtCost='" + cost + "',txtPurchasedamount='"+puramount+"' ,txtStartRange='" + start + "',txtEndRange='" + end + "',txtSelectionLimit='" + selection + "',txtPurchaseLimit='" + purchase + "',txtSubLottery='" + sublottery + "' ,txtUnitSaleAmount='"+unitsaleamount+"',txtAdminChargeperUnit='"+adminchargeperunit+"',txtCommissionrate='"+commissionrate+"',txtAgentCommission='"+agentcommission+"',txtTax='"+tax+"',txtOtherDeduct1='"+otherdeduct1+"',txtOtherDeduct2='"+otherdeduct2+"',txtCharitypercent='"+charitypercent+"',txtFirstprize='"+first+"',txtSecondprize='"+second+"',txtThirdprize='"+third+"',txtFourthprize='"+fourth+"',txtFifthprize='"+fifth+"',txtSixthprize='"+sixth+"' WHERE id = '" + id + "';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//------------------------SUB LOTTERY--------------------------//

app.post("/sublottery", function (req, res) {
    let id = req.body.id;
    let sublottery = req.body.sublottery;
    var sql = "UPDATE tbllotterymaster SET txtRaffleid='1',txtSubLottery='" + sublottery + "' WHERE id = '" + id + "';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//-----------------------LOTTERY LIST------------------------//
app.post("/lotterylist", function (req, res) {
var sql="select txtLotteryname,dtLotterydrawdate,txtLotteryprize,txtCost from tbllotterymaster;";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
});
});

//-----------------------LOTTERY EXILE------------------------//
app.post("/lotteryexile", function (req, res) {
    var sql="select txtLotteryname,dtLotterydrawdate from tbllotterymaster where dtLotterydrawdate < now();";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });
    
app.listen(8000, () => {
    console.log("Running")
});