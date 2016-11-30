var app = angular.module("myModule", []);

app.controller('myController', ['$scope', function($scope){
	var employees = [
		{name: "Rahul", role: "Designer", salary: "Rs. 200000" },
		{name: "Ajay", role: "Designer", salary: "Rs. 253687" },
		{name: "Sharuk", role: "Designer", salary: "Rs. 789654" },
		{name: "Salman", role: "Designer", salary: "Rs. 938526" },
		{name: "Deepika", role: "Designer", salary: "Rs. 963288" }
	];
	$scope.employees = employees;


	var countries = [
		{
			name: "India",
			cities: [
				{name: "Mumbai"},
				{name: "Delhi"},
				{name: "Kolkata"},
				{name: "Banglore"},
				{name: "Chennai"},
				{name: "Kerela"},
			]
		},
		{
			name: "China",
			cities: [
				{name: "Shangai"},
				{name: "Shaolin"},
				{name: "Beijing"},
				{name: "Hong Kong"}
			]
		},
		{
			name: "USA",
			cities: [
				{name: "Washington DC"},
				{name: "New York"},
				{name: "California"}

			]
		}
	]

	$scope.countries = countries;

	$scope.view_items = "list-table.html";

}])