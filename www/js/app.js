/**
* app Module
*
* Description
*/
angular.module('app', []).controller('week', ['$scope', function($scope){
	$scope.items=[{
		name:'yy',pro:4,rate:80,money:229
	},{
		name:'sfddy',pro:2,rate:50,money:278
	},{
		name:'ysdfy',pro:6,rate:80,money:789
	}];
}]).controller('lastweek', ['$scope', function($scope){
	$scope.items=[{
		name:'yy',pro:4,rate:80,money:229
	},{
		name:'sfddy',pro:8,rate:50,money:278
	},{
		name:'ysdfy',pro:5,rate:80,money:789
	}];
}]).controller('month', ['$scope', function($scope){
	$scope.items=[{
		name:'yy',pro:4,rate:80,money:229
	},{
		name:'sfddy',pro:8,rate:50,money:278
	},{
		name:'ysdfy',pro:5,rate:80,money:789
	}];
}]).controller('all', ['$scope', function($scope){
	$scope.items=[{
		name:'yy',pro:14,rate:80,money:2129
	},{
		name:'sfddy',pro:18,rate:50,money:1278
	},{
		name:'ysdfy',pro:15,rate:80,money:1789
	},{
		name:'d',pro:12,rate:80,money:1789
	},{
		name:'tt',pro:11,rate:80,money:1769
	}];
}])