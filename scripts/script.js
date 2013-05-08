// JavaScript source code


$(function () {
    //createKanbanBoard();
    initializeAlldroppers();
    $("#taskbtn").click(function () {

        createItem($("#BoardLane0>div>ol")[0], $("#indextext").val());
        if ($("#toDropDefault0"))
        {
            var a = $("#toDropDefault0");
            var par = a.parent();
            par.find("#toDropDefault0").remove();

        }
        initializeAlldroppers();
        
		$("#indexCard").fadeOut(500);

       
    });

    $("#newTask").click(function () {
        
      
        $("#indexCard").fadeIn(1000);
    
        


    });

    $("#homelink").mouseover(function () {
        alert("hello");
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

    $("#indexCard").draggable();
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

/*
This Function is the key function to create the board. Eventually this will read the database by passing the member ID to the database and getting the entire board object.
*/
//function createKanbanBoard()
//{
//    var kanbanRow = document.getElementById("BoardRow");
//    var myLanes = document.createElement("div");
//    //Hard coded the number of lanes but eventually will be coming from Board Object stored in DB.
//	for (i = 0; i < 5; i++)
//    {
//        //Setting Up The Lanes
//        myLanes = document.createElement("div");
//        myLanes.setAttribute("id", "BoardLane" + i);
//        myLanes.setAttribute("class", "mycell");
//        //Setting Up the Lane Headers
//        var laneHeading = document.createElement("h1");
//        var laneHeadingText = document.createTextNode("Label " + i);
//        laneHeading.appendChild(laneHeadingText);
//        //Setting Up the DragBox. For each DragBox div there will also be a another Display Div That will be relative to this div for viewing details of the card.
//        var myDragBox = document.createElement("div");
//        myDragBox.setAttribute("class", "DragBox");
//        //setting up the dropbox List
//        var oList = document.createElement("ol");
//        oList.setAttribute("class", "dropbox");
//        var listItem = document.createElement("li");
//        listItem.setAttribute("id", "toDropDefault"+i);
//		//This will depend on the Board Object if there are already items then this default will not be created instead another loop will be needed here.
//        var listItemText = document.createTextNode("Item Will be created here. Currently No items!");
//        listItem.appendChild(listItemText);
//        oList.appendChild(listItem);
//        myDragBox.appendChild(oList);

//        myLanes.appendChild(laneHeading);
//        myLanes.appendChild(myDragBox);
//        kanbanRow.appendChild(myLanes);
//    }
   
  

//}