const gotTrainData = localStorage.getItem('trainArray')
const convertedTrainData = JSON.parse(gotTrainData)
let robotscook = []
if (robotscook === null){
    robotscook = []
}

class RobotTrain{
    constructor(num, functions, times, imgURL){
        this.num = num,
        this.functions = functions,
        this.times = times,
        this.imgURL = imgURL
    }
}
function trainClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const times = document.querySelector(`#times`).value
    const imgURL = document.querySelector(`#img`).value

    // create object from class
    const robot = new RobotTrain(num, functions, times, imgURL)
    console.log(robot)
    // add to array
    RobotTrain.push(robot)
    // show on screen (forEach)
    RobotTrain.forEach(function(element){
        document.querySelector("#workingTrain").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is ${element.functions} for ${element.times}</p>
        `
    });
    const cookData = JSON.stringify(RobotTrain)
    localStorage.setItem('trainArray',trainData)
    const gotTrainData = localStorage.getItem('trainArray')
    const convertedTrainData = JSON.parse(gotTrainData)
}

convertedTrainData.forEach(function(element){
    document.querySelector("#workingTrain").innerHTML += `
    <img src='${element.imgURL}' />
    <p>The robot No. ${element.num} is ${element.functions} for ${element.times}</p>
    `
});