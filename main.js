console.log("calvin is connected")


$('#btn1').click(random)

var cndList = [
"https://www.youtube.com/embed/Gc4OXzPY0Gg",
"https://www.youtube.com/embed/6HXYcnCAIg4",
"https://www.youtube.com/embed/hY7m5jjJ9mM",
]

function random(){
	var randomItem = cndList[Math.floor(Math.random()*cndList.length)]
	$('.display').attr("src", randomItem)
}
/*------------------------*/

$('#btn2').click(randomedm)

var edmList = [
"https://www.youtube.com/embed/r5y1V-NLsmg",
"https://www.youtube.com/embed/LXbu4kstjyU",
"https://www.youtube.com/embed/T_uym6NCRRE",
"https://www.youtube.com/embed/3r20yqy4D8Q",
"https://www.youtube.com/embed/NC8nYjhVsOE",
"https://www.youtube.com/embed/RJOqJ-RitOg",
"https://www.youtube.com/embed/bditFugO2SI",
"https://www.youtube.com/embed/ll5ykbAumD4",
"https://www.youtube.com/embed/ka6HFK7dYtA",
]

function randomedm(){
	var randomItem = edmList[Math.floor(Math.random()*edmList.length)]
	$('.display').attr("src", randomItem)
}


/*------------------------*/
$('#btn3').click(boredRandom)

var boredList = [
"https://www.youtube.com/embed/2ZC3rM2Y8jQ",
"https://www.youtube.com/embed/YZWH_G4yVsk",
"https://www.youtube.com/embed/pja5h8t-x3Y",
"https://www.youtube.com/embed/2X6bc-7DsVU",
"https://www.youtube.com/embed/r0haWB1Uezk",
"https://www.youtube.com/embed/s2KmCOO4xd8",
"https://www.youtube.com/embed/VsTd4rM6V50",
"https://www.youtube.com/embed/gaCIDRbmmDI",
"https://www.youtube.com/embed/CTmgR0k5VCs",
]


function boredRandom(){
	var randomItem = boredList[Math.floor(Math.random()*boredList.length)]
	$('.display').attr("src", randomItem)
}


/*------------------------*/
$('#btn4').click(trailerRandom)

var trList = [
"https://www.youtube.com/embed/fmrdsRdYZlg",
"https://www.youtube.com/embed/mmZqOKVvWrY",
"https://www.youtube.com/embed/Scj3wiIcSu0",
"https://www.youtube.com/embed/6cLn1-OE2dI",
"https://www.youtube.com/embed/1-f8O118hnE",
"https://www.youtube.com/embed/dzxFdtWmjto",
"https://www.youtube.com/embed/TTfe2Manwmo",
"https://www.youtube.com/embed/RZXnYVPDlbQ",
]

function trailerRandom(){
	var randomItem = trList[Math.floor(Math.random()*trList.length)]
	$('.display').attr("src", randomItem)
}

