'use strict';

/* Controllers */

function Boards($scope) {
    $scope.name="This is a Board";
    $scope.owner = "Umais Siddiqui" ;
    $scope.active = "true";
    $scope.lanes = [
    {"name": "To Do",
    "position": "0",
    "cards": [{"name":"Card1","cardText":"Better do it fast","position":"0"}]
    },
     {
         "name": "In Progress",
         "position": "1",
         "cards": [{ "name": "Card1", "cardText": "I am doing it", "position": "0" }]
     },
     {
         "name": "Completed",
         "position": "2",
         "cards": [{ "name": "Card1", "cardText": "Faster than you think", "position": "0" }]
     }
  ];
}
