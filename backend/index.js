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
    let lotterydate = req.body.lotterydate
    let lotteryprize = req.body.lotteryprize;
    let lotterycost = req.body.lotterycost;
    let lotterystatus = req.body.lotterystatus;
    let lotterystart = req.body.lotterystart;
    let lotteryend = req.body.lotteryend;
    let lotteryselection = req.body.lotteryselection;
    let lotterypurchase = req.body.lotterypurchase;
    let lotterysub = req.body.lotterysub;
    var sql = "insert into tbllotterymaster(txtLotteryname,dtLotterydrawdate,txtLotteryprize,txtCost,txtLotterystatus,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery) values('" + lotteryname + "','" + lotterydate + "','" + lotteryprize + "','" + lotterycost + "','" + lotterystatus + "','" + lotterystart + "','" + lotteryend + "','" + lotteryselection + "','" + lotterypurchase + "','" + lotterysub + "');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//--------------------ADD LOTTERY PROVIDER----------------------//
app.post("/addlotteryproviderfetch", function (req, res) {
    var sql="SELECT txtProvidername FROM tblprovider;";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });
//--------------------ADD LOTTERY EXISTING----------------------//
app.post("/addlotteryexist", function (req, res) {
    let refProvider=req.body.refProvider
    var sql="select txtLotteryname from tbllotterymaster r join tblprovider i on i.id = r.refProvider  where refProvider='"+refProvider+"';";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });

//--------------------ADD LOTTERY EXISTING DETAILS--------------------- //

app.post("/addlotterydetails", function (req, res) {
    let id=req.body.id;
    var sql="select dtLotterydrawdate,txtLotteryprize,txtCost,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery from tbllotterymaster where id = '"+id+"';";
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
    let prize = req.body.prize;
    let cost = req.body.cost;
    let start = req.body.start;
    let end = req.body.end;
    let selection = req.body.selection;
    let purchase = req.body.purchase;
    let sublottery = req.body.sublottery;
    var sql = "UPDATE tbllotterymaster SET dtLotterydrawdate='" + drawdate + "',txtLotteryprize= '" + prize + "',txtCost='" + cost + "',txtStartRange='" + start + "',txtEndRange='" + end + "',txtSelectionLimit='" + selection + "',txtPurchaseLimit='" + purchase + "',txtSubLottery='" + sublottery + "' WHERE id = '" + id + "';";
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