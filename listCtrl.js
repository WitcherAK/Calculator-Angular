(function()
{
	'use strict';
	
	var controllerId='calcCtrl';
	
	angular.module("SimpleApp").controller(controllerId,["$scope", calcCtrl]);
	
	function calcCtrl($scope)
	{
		$scope.liczba1=10;
		$scope.liczba2=1;
		$scope.przycisk='mno'; 
		$scope.arch =[];
		$scope.wynik =0;
		
		$scope.zapisz=function()
		{
			$scope.arch.push(
			{
				liczba1: $scope.liczba1,
				liczba2: $scope.liczba2,
				dzialanie: $scope.przycisk,
				wynik: $scope.wynik,
			}
			)
			
			
		}
				
		
		$scope.funkcja=function()
		{
			if ($scope.liczba2==0)	
			{
				if($scope.przycisk ==='dzi')
				{
					$scope.przycisk='mno'; 
				}
				return true
			}
			else
				return false
			
		}
		
		
		
	}
	
	
	
})()