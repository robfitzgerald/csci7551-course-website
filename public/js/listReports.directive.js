'use strict';
{
	angular
		.module('DistributedSite')
		.directive('listReports', ['ReportsService', reportDirective])


	function reportDirective(ReportsService) {
		return {
			restrict: 'E',
			templateUrl: 'html/reports.html',
			controller: function(ReportsService) {
				var vm = this
				vm.reports = ReportsService.getReports()
			},
			controllerAs: 'r'
		}
	}
}