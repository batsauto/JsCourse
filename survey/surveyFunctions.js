//WireUps

document.addEventListener("DOMContentLoaded", function () {

    let summarybtn = document.getElementById("summaryButton")
    summarybtn.addEventListener("click", function () {
        drawSummary();
    });

    let overallScorebtn = document.getElementById("overallScoreButton")
    overallScorebtn.addEventListener("click", function () {
        drawOverallScore();
    });

    let trendsbtn = document.getElementById("trendsButton")
    trendsbtn.addEventListener("click", function () {
        drawTrends();
    });

    let graphRightClick = document.getElementById("resultsCanvas")
    graphRightClick.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        var d = document.querySelector('.menu');
        d.style.top = event.clientY + "px";
        d.style.left = event.clientX + "px";
        d.style.visibility = "visible";
        let theCanvas = document.getElementById("resultsCanvas")
        let theLink = document.getElementById("getPictureLink")
        let dataURL = theCanvas.toDataURL("image/png");
        theLink.href = dataURL;
        theLink.download = "results.png";
        document.addEventListener("click", function () {
            if (this != ".menu") {
                console.log("click outside menu");
                d.style.visibility = "hidden";
            }
        });
    });

    let mouseYTooltip = document.getElementById("resultsCanvas")
    mouseYTooltip.addEventListener("mousemove", (event) => {
        console.log("eventclientY", event.clientY)
        mouseYTooltip.setAttribute("title", event.clientY)
            
    })


    var offset = document.querySelector('#resultsCanvas').getBoundingClientRect(); document.addEventListener('mousemove', function(e) { var pos = { left: e.pageX - offset.left, top: e.pageY - offset.top } })

    clearCanvas();


}, false);

const leftSideOfGraph = 75;
const widthOfGraph = 725;
const topOfGraph = 25;
const heightOfGrpah = 525;
const rightSideOfGraph = 800;
const bottomOfGraph = 550;

var backgroundColor = "lightgray"
var labelsColor = "maroon"
var backgroundLinesColor = "lightblue"
var axisColor = "black"

var color = {
    excellent: "green",
    good: "blue",
    okay: "purple",
    poor: "orange",
    terrible: "red"
};

var xTic = (rightSideOfGraph - leftSideOfGraph) / (29); //pixels per day
var yTic = (bottomOfGraph - topOfGraph) / (100); //pixels per score


//document.addEventListener("DOMContentLoaded", function () {
//    // Add your JavaScript here
//
//    let summarybtn = document.getElementById("summaryButton")
//    summarybtn.addEventListener("click", function () {
//        drawSummary();
//    });
//
//    let overallScorebtn = document.getElementById("overallScoreButton")
//    overallScorebtn.addEventListener("click", function () {
//        drawOverallScore();
//    });
//
//    let trendsbtn = document.getElementById("trendsButton")
//    trendsbtn.addEventListener("click", function () {
//        drawTrends();
//    });
//
//    clearCanvas();
//
//});


function drawSummary() {
    let dsc = document.getElementById("graphType");
    dsc.innerHTML = "<p>" + "Summary" + "</p>";
    clearCanvas();
}



function drawOverallScore() {
    let dsc = document.getElementById("graphType");
    dsc.innerHTML = "<p>" + "Overall Score" + "</p>";
    clearCanvas();
    let canvas = document.getElementById("resultsCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 2;
    for (var prop in color) {
        console.log("this is the color", prop, color[prop]);
        ctx.beginPath();
        ctx.strokeStyle = color[prop];
        for (var i = 0; i < raw_survey_results.length - 1; i++) {
            ctx.moveTo(getXPointForDay(i), getYPointForScore(raw_survey_results[i][prop]));
            ctx.lineTo(getXPointForDay(i + 1), getYPointForScore(raw_survey_results[i + 1][prop]));
            ctx.stroke();
            ctx.closePath();
        }
    }

}


function drawTrends() {
    let dsc = document.getElementById("graphType");
    dsc.innerHTML = "<p>" + "Trends" + "</p>";
    clearCanvas();

    let canvas = document.getElementById("resultsCanvas");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color.excellent;
    ctx.moveTo(getXPointForDay(0),
        getYPointForScore(raw_survey_results[0].excellent));
    ctx.lineTo(getXPointForDay(29),
        getYPointForScore(raw_survey_results[29].excellent));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = color.good;
    ctx.moveTo(getXPointForDay(0),
        getYPointForScore(raw_survey_results[0].good));
    ctx.lineTo(getXPointForDay(29),
        getYPointForScore(raw_survey_results[29].good));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = color.okay;
    ctx.moveTo(getXPointForDay(0),
        getYPointForScore(raw_survey_results[0].okay));
    ctx.lineTo(getXPointForDay(29),
        getYPointForScore(raw_survey_results[29].okay));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = color.poor;
    ctx.moveTo(getXPointForDay(0),
        getYPointForScore(raw_survey_results[0].poor));
    ctx.lineTo(getXPointForDay(29),
        getYPointForScore(raw_survey_results[29].poor));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = color.terrible;
    ctx.moveTo(getXPointForDay(0),
        getYPointForScore(raw_survey_results[0].terrible));
    ctx.lineTo(getXPointForDay(29),
        getYPointForScore(raw_survey_results[29].terrible));
    ctx.stroke();
    ctx.closePath();
}

function clearCanvas() {
    let xaxisx = 70;
    let xaxisy = 565;
    let yaxisx = 55;
    let yaxisy = 550;
    let bkgLineX = 75;
    let bkgLineY = 550;
    let bkglinexx = 75;
    let bkglineyy = 550;
    let canvas = document.getElementById("resultsCanvas");
    let ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 850, 600);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 4;
    ctx.fillStyle = labelsColor;
    ctx.fillText("Scores", 15, 300);
    ctx.fillText("Day", 425, 585);
    ctx.beginPath();
    //    ctx.moveTo(75, 25);
    ctx.moveTo(leftSideOfGraph, topOfGraph);
    //    ctx.lineTo(75, 550);
    ctx.lineTo(leftSideOfGraph, bottomOfGraph);
    //    ctx.lineTo(800, 550);
    ctx.lineTo(rightSideOfGraph, bottomOfGraph);
    for (var i = 0; i < 31; i++) {
        ctx.fillText(i, xaxisx, xaxisy);
        xaxisx = xaxisx + 24;
    };
    for (var i = 0; i < 101; i += 5) {
        ctx.fillText(i, yaxisx, yaxisy);
        yaxisy = yaxisy - 25;
    };
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath()
    ctx.strokeStyle = backgroundLinesColor;
    ctx.lineWidth = 0.5;
    for (var i = 0; i < 31; i++) {
        ctx.moveTo(bkgLineX, bkgLineY);
        ctx.lineTo(bkgLineX, topOfGraph)
        bkgLineX = bkgLineX + 24;
    };
    for (var i = 0; i < 101; i += 5) {
        ctx.moveTo(bkglinexx, bkglineyy);
        ctx.lineTo(rightSideOfGraph, bkglineyy)
        bkglineyy = bkglineyy - 25;
    }
    ctx.stroke();

    ctx.closePath();

    //    let pump = new Image();
    //    pump.addEventListener("load", function () {
    //        ctx.drawImage(pump, 750, 25, 75, 75);
    //    });
    //    pump.src = "https://i.pinimg.com/736x/aa/d4/42/aad442299e94f3cbafb83081f8de9bf9--cool-pumpkin-carving-carving-pumpkins.jpg";;

}

function getXPointForDay(day = 0) {
    return leftSideOfGraph + (day * xTic);
}

function getYPointForScore(score = 0) {
    return bottomOfGraph - (score * yTic);
}

function drawTestRec() {
    let canvas = document.getElementById("resultsCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillRect(leftSideOfGraph, topOfGraph, widthOfGraph, heightOfGrpah)
}
