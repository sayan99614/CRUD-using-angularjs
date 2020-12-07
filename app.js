var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	$scope.newUser = {};
	$scope.info = "";

	$scope.users = [
		{username: "dheeman", fullName: "Dheeman pati", email:"example@gmail.com"},
		
	];

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.info = " User Added Successfully!";
		$scope.newUser = {};
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});