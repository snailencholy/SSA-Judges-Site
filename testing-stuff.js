
const fs = require("fs");
const { isMainThread } = require("worker_threads");
// const json = require("./judge-data.json");

// judges = [...json.row]

// //console.log(judges[1].JUDGE)

// if( judges[1].JUDGE === "Able, Devonea") {
//     console.log("THAT WORKS");
// }

const data = fs.readFileSync("./judge-data.json", "utf-8")
const judgeData = JSON.parse(data)
//console.log(judgeData[24].JUDGE)

let input = "Allen, Michelle I"

// answer = judgeData.filter(x => x.JUDGE === input)

// if (answer !== undefined) {
//     console.log(answer[JUDGE])
// }


//console.log(judgeData.findIndex(x => x.JUDGE === input))

const index = judgeData.findIndex(x => x.JUDGE === input)
console.log(`This is what you were looking for ${judgeData[index].JUDGE}`)

// judgeData.forEach((element, i) => {
//     if(judgeData[i].JUDGE === input){
//         console.log(`${i} ${judgeData[i].JUDGE}`)
//     }
// });