function getmarks() {
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
    var totalMarks = 400;
    var Marksobtained = maths+ english + chemistry + physics;
    var percentage = (Marksobtained / totalMarks) * 100;
    var grade = ""
    document.getElementById("percentage").innerHTML = percentage + "%" 
   if(percentage > 90 ) {
       grade= "A+";
    } else if (percentage < 90 && percentage > 80) {
        grade = "A";
    } else if (percentage < 80 && percentage > 60) {
        grade = "B";
    } else if (percentage < 60 ) {
        grade = "F";

    document.getElementById("grade").innerHTML = grade ;
    if(percentage < 60) {
         document.getElementById("pass").innerHTML = "Sorry! you have failed";
    } else{
        document.getElementById("pass").innerHTML = "Congratulation! you have passed";
    }
}
}