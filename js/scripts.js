
//Branching
  var triangleTracker = function(side1, side2, side3) {
  var sideOne = parseInt(side1);
  var sideTwo = parseInt(side2);
  var sideThree = parseInt(side3);

  var newTriangle = { side1: sideOne,side2: sideTwo,side3: sideThree,type: ""
  };

//Use of If ...else, else if
  if( isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)){
    return "ERROR: PLEASE ENTER NUMBER FOR ALL THREE SIDES!";
  }
  if(sideOne+sideTwo<sideThree || sideTwo+sideThree<sideOne || sideOne+sideThree<sideTwo){
    return "ERROR: THESE ARE NOT VALID TRIANGLE DIMENSIONS!";
  }
  if(sideOne<=0 || sideTwo <= 0 || sideThree <= 0){
    return "ERROR: ALL SIDES MUST HAVE A VALUE GREATER THAN ZERO!";
  }
  if(sideOne===sideTwo && sideTwo===sideThree){
    newTriangle.type = "Equilateral";
    return newTriangle;
  }else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree){
    newTriangle.type = "Isosceles";
    return newTriangle;
  }else {
    newTriangle.type = "Scalene";
    return newTriangle;
  }

};


//Display the results inputted by user. Use typeof,append
$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    event.preventDefault();

    var side1 = $('input#side1').val();
    var side2 = $('input#side2').val();
    var side3 = $('input#side3').val();
    var triangle = triangleTracker(side1, side2, side3);

    if(typeof(triangle)=="string"){
      alert(triangle);
    }else if(triangle.type=="Equilateral") {
      $("p#equilateral").append("<b>" + triangle.side1 + " "+ triangle.side2 + " " + triangle.side3 +  "</br>");
    }else if(triangle.type=="Isosceles"){
      $("p#isosceles").append("<b>" + triangle.side1 + " "+ triangle.side2 + " " + triangle.side3 + "</br>");
    }else {
      $("p#scalene").append("<b>"+ triangle.side1 + " " +triangle.side2+ " " + triangle.side3  + "</br>");
    }

  });
});
