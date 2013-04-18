// JavaScript source code


$(function () {
    createKanbanBoard();
    initializeAlldroppers();
    $("#taskbtn").click(function () {

        createItem($("#BoardLane0>div>ol")[0], $("#indextext").val())
        if ($("#toDropDefault0"))
        {
            var a = $("#toDropDefault0");
            var par = a.parent();
            par.find("#toDropDefault0").remove();

        }
        initializeAlldroppers();
       
       
    });
});


 



function initializeAlldroppers() {
    $(".dropbox").sortable({
        revert: true,
        connectWith: "ol",
        stop: function () { 

            var listName=this.getAttribute("id");
            var allitems=  this.getElementsByTagName("li");
          for (i = 0; i < allitems.length; i++)
          {
              allitems[i].setAttribute("id", listName + i);
              allitems[i].setAttribute("class", "BoardDrop");
              initializeAlldroppers();
          }
        }
    });
    $(".card").draggable({
        connectToSortable: ".dropbox", revert: "invalid", helper: "clone",
        stop: function () {
        
            initializeAlldroppers();
        }
    });

    $(".BoardDrop").draggable({
        connectToSortable: ".dropbox", revert: "invalid", helper: "clone",
        start:function(){startParent=this.parentNode.getAttribute("id");},
        stop: function () {
           
            
            var par = this.parentNode;
            par.removeChild(this);
            
            
        }
    });
}


function createItem(parentNode,text) {

    var firstItem = document.createElement("li");
    firstItem.setAttribute("class", "BoardDrop");
   firstItem.innerHTML=text;
    parentNode.appendChild(firstItem);
}

function createDefaultNode() { }
function DeleteDefaultNode() { }
function createKanbanBoard()
{
    var kanbanRow = document.getElementById("BoardRow");
    var myLanes = document.createElement("div");
    for (i = 0; i <= 3; i++)
    {
        //Setting Up The Lanes
        myLanes = document.createElement("div");
        myLanes.setAttribute("id", "BoardLane" + i);
        myLanes.setAttribute("class", "mycell");
        //Setting Up the Lane Headers
        var laneHeading = document.createElement("h1");
        var laneHeadingText = document.createTextNode("Label " + i);
        laneHeading.appendChild(laneHeadingText);
        //Setting Up the DragBox
        var myDragBox = document.createElement("div");
        myDragBox.setAttribute("class", "DragBox");
        //setting up the dragbox List
        var oList = document.createElement("ol");
        oList.setAttribute("class", "dropbox");
        var listItem = document.createElement("li");
        listItem.setAttribute("id", "toDropDefault"+i);
        var listItemText = document.createTextNode("Item Will be created here. Currently No items!");
        listItem.appendChild(listItemText);
        oList.appendChild(listItem);
        myDragBox.appendChild(oList);

        myLanes.appendChild(laneHeading);
        myLanes.appendChild(myDragBox);
        kanbanRow.appendChild(myLanes);
    }
   
    //<div id="BoardLane1" class="mycell">
    //               <h1 class="LaneLabels" id="ToDo">To Do</h1>
    //               <div  class="DragBox">
                       
    //                 <ol id="toDoList" class="dropbox"><li id="toDropDefault">Item Will be created here. Currently No items!</li></ol>
    //               </div>
    //           </div>

}