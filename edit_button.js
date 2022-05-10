var app = angular.module("App", []);
app.controller("Controller", function($scope){
    $scope.table = true;
    $scope.array = [
        {hoten: "nam", lop: "12"},
        {hoten: "fasdf", lop: "213"},
        {hoten: "fasdf", lop: "41232"},
        {hoten: "fasdf", lop: "14123"},
    ];
    $scope.edit = function(array){
        $scope.table = false;
        $scope.x =array;
    }
    $scope.save= function(){
        $scope.table = true;
    }
});