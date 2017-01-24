

function ToDoList(whattodo, deadlinedate, deadlinetime, notes){
  this.whatToDo = whattodo;
  this.deadlineDate = deadlinedate;
  this.deadlineTime = deadlinetime;
  this.notes = notes;
}

var id = 0;
var whatToDoArray = [];
//interface logic

$(function(){
  $("form#todolistform").submit(function(event){

    var whatToDo = $("input#whattodo").val();
    var deadlineDate = $("input#deadlinedate").val();
    var deadlineTime = $("#deadlinetime").val();
    var notes = $("textarea#notes").val();

    var newToDoList = new ToDoList(whatToDo, deadlineDate, deadlineTime, notes);



    $("#show-lists").show();
    $("#show-lists ul").append("<span class='todolists' id='" + newToDoList.whatToDo + "''><li>"+ newToDoList.whatToDo
    + "</li></span>"  + "<input type='checkbox' name='list-item' id='" + newToDoList.whatToDo + "check" + "'>");

    whatToDoArray.push(newToDoList.whatToDo);
    alert(whatToDoArray);


    $(".todolists").last().click(function(){
      $("#show-detail").toggle();
      $(".todoitem").text(newToDoList.whatToDo);
      $(".tododate").text(newToDoList.deadlineDate);
      $(".todotime").text(newToDoList.deadlineTime);
      $(".todonote").text(newToDoList.notes);
      });

      alert(whatToDoArray.length);



    event.preventDefault();
  });

  $("#complete").click(function(){
    for(var i=0; i<whatToDoArray.length; i++){
      console.log(whatToDoArray[i]);
        if( $("#" + whatToDoArray[i] + "check").is(':checked')   ){
          alert("I am checked");
          //$(newToDoList.whatToDo[i]).remove();
          $("#" + whatToDoArray[i]).remove();
          $("#" + whatToDoArray[i] + "check").remove();

        }
      };
  });

});
