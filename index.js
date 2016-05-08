$(document).ready(function(){
var app = angular.module('myModule', []); 

	app.controller('myController', function($scope){ 
		$scope.todos = [
			'work out', 
			'laundry', 
			'wash dishes'
		];
			$scope.addTag = function(){
				$scope.todos.push($scope.todoName);
			};
	});
});