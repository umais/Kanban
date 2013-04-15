// JavaScript source code
var startParent = null;
var endParent = null;

$(function () {
    initializeAlldroppers();
   // $("#draggable").draggable({  revert: "invalid", helper: "clone" });
   // initializeAlldroppers();
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
              //alert(allitems[i].getAttribute("id"));
              initializeAlldroppers();
          }
        }
    });
    $(".card").draggable({
        connectToSortable: ".dropbox", revert: "invalid", helper: "clone",
        stop: function () {
            //this.setAttribute("class", "card");
            //alert(this.getAttribute("class"));
            initializeAlldroppers();
        }
    });

    $(".BoardDrop").draggable({
        connectToSortable: ".dropbox", revert: "invalid", helper: "clone",
        start:function(){startParent=this.parentNode.getAttribute("id");},
        stop: function () {
            //this.setAttribute("class", "card");
            
            var par = this.parentNode;
           par.removeChild(this);
           // if(par.getElementsByTagName("li").length===1)
           //createFirstItem(par);
            
        }
    });
}


function createFirstItem(parentNode) {

    var firstItem = document.createElement("li");
    firstItem.setAttribute("class", "BoardDrop");
   firstItem.innerHTML="Drop Here";
    parentNode.appendChild(firstItem);
}

function DeleteDefaultNode(){}