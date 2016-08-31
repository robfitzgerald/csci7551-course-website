'use strict';
{
	angular
		.module('DistributedSite')
		// .controller('presentPageController', ['$scope', 'pageService', presentPageController])
		.directive('listReports', ['ReportsService', reportDirective])


	function reportDirective(ReportsService) {
		return {
			restrict: 'E',
			// scope: {
			// 	report: '=report'
			// },
			templateUrl: 'html/reports.html',
			controller: function(ReportsService) {
				console.log('ReportsService')
				console.log(ReportsService)
				console.log(ReportsService.getReports())
				var vm = this
				vm.reports = ReportsService.getReports()
			},
			controllerAs: 'r'
			// controller: () => {
			// 	var vm = this
			// 	vm.report = ReportsService[report]
			// },
			// controllerAs: 'reportDetails',
			// link: function(scope, element, attributes) {
			// 	var 			
				// var content = pageService[scope.number]
				// 	, board = content.board // || [{mark: '', positions: []}];
				// 	, x, y;

				// if (Number.isInteger(content.boardSize)) {
				// 	x = y = content.boardSize;
				// } else if (!!content.boardSize && !!content.boardSize.x && !!content.boardSize.y) {
				// 	x = content.boardSize.x;
				// 	y = content.boardSize.y;
				// } else {
				// 	// no board.
				// }

				// if (board) {
				// 		var jboard = new JGO.Board(x, y)
				// 		board.forEach(function(player) {
				// 		player.positions.forEach(function(position) {
				// 			var coordinate = new JGO.Coordinate(parseCol(position, y));
				// 			jboard.setType(coordinate, JGO[player.mark])
				// 		})
				// 	})

				// 	var jsetup = new JGO.Setup(jboard, JGO.BOARD.large);

				// 	jsetup.create('board', function(canvas) {
				// 	  canvas.addListener('click', function(coord, ev) {
				// 	        var type = jboard.getType(coord);
				// 	        type = (type == JGO.WHITE) ? JGO.CLEAR : type + 1; // cycle
				// 	        jboard.setType(coord, type);
				// 	    });
				// 	});
				// }
			// }
		}
	}

	// function presentPageController($scope, pageService) {
	// 	var vm = this
	// 		, pageNumber = $scope.number
	// 		, pageDetails = pageService[pageNumber];
	// 	vm.title = pageDetails.title;
	// 	vm.text = pageDetails.text;
	// 	vm.math = pageDetails.math;
	// 	vm.image = pageDetails.image;
	// 	setTimeout(function () {
 //    	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
 // 		}, 5);
	// }
	
}