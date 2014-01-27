function MyController($scope) {
	var updateClock = function(){
		$scope.clock = {
			now: new Date()
		}
	};
	setInterval(function(){
		$scope.$apply(updateClock);
	}, 999);
	updateClock();
}
