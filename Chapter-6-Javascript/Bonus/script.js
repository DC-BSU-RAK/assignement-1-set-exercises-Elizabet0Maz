var arr = [0,1,2]; /*array which holds IDs*/
/*generates random values of red, green and blue*/
var r = Math.floor((Math.random())* 256) /*value for red*/
var g = Math.floor((Math.random())* 256) /*value for green*/
var b = Math.floor((Math.random())* 256) /*value for blue*/

document.getElementById("colourName").innerHTML="( "+r+" , "+g+" , "+b+" )"; /*shows the values to guess the colour*/

var index=Math.floor((Math.random()) *3); /*randomises the box which is correct*/

document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+" )"; /*changes the background colour of the box to the colour of rgbs*/

arr .splice(index,1) /*removes from array*/
/*generates random colour for the 2nd box*/
var r1 = Math.floor((Math.random())* 256)
var g1 = Math.floor((Math.random())* 256)
var b1 = Math.floor((Math.random())* 256)


document.getElementById(arr[0]).style.backgroundColor= "rgb("+r1+","+g1+","+b1+" )"; /*changes the background colour of the box to the colour of rgbs*/

/*generates random colour for the 3rd box*/
var r2 = Math.floor((Math.random())* 256)
var g2 = Math.floor((Math.random())* 256)
var b2 = Math.floor((Math.random())* 256)


document.getElementById(arr[1]).style.backgroundColor= "rgb("+r2+","+g2+","+b2+" )"; /*changes the background colour of the box to the colour of rgbs*/

/*gives the answer depending if the button choosen by the user was correct*/
function guess(){ 
    /*if correct then it will display correct*/
    if (document.activeElement.id==index){
        document.getElementById("colourName").innerHTML="CORRECT";
        document.getElementById("colourName").style.color="yellowgreen";
    }
    /*if wrong then it goes to else and displays wrong*/
    else{
        document.getElementById("colourName").innerHTML="WRONG";
        document.getElementById("colourName").style.color="red";
    }
    /*disables buttons so can be clicked only once*/
    document.getElementsByClassName("btn")[0].removeAttribute("oneclick");
    document.getElementsByClassName("btn")[1].removeAttribute("oneclick");
    document.getElementsByClassName("btn")[2].removeAttribute("oneclick");
}

/*fucntion reloads the website*/
function replay(){
    window.location.reload()
}