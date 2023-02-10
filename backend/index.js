const express = require("express");
const cors = require("cors");
const bodyparser=require('body-parser');
const PORT =  8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.get("/", (req, res) => {
	res.send("hello world!");
});


app.post("/", (req, res) => {
    let {first,second} = req.body
    let carryingarr = [];
    let sumarr = []
    let carrystring = "_"
    let sumString = ""
    let carry = 0
    while(first !==0  || second !== 0) {
        let num1 = first%10
        let num2 = second%10
        let sum = num1 + num2
        let rem = sum%10
        carry = Math.floor(sum/10)
        sumString += rem
        carrystring += carry
        carryingarr.push(carrystring.split("").reverse().join(""))
        sumarr.push(sumString.split("").reverse().join(""))
        first = Math.floor(first/10)+carry;
        second= Math.floor(second/10);
    }
    res.send({carryingarr,sumarr});
})


app.listen(PORT, async () => {
	console.log(`Listening at http://localhost:${PORT}`);
});