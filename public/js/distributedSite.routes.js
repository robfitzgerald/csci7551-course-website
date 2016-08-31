'use strict';
{
  angular
    .module('DistributedSite')
    .config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        // .state('frontPage', {
        //   url: '/',
        //   controller: () => {
        //     this.number = 0;
        //   },
        //   controllerAs: 'page',
        //   template: '<present-page number="page.number"></present-page>'
        // })
        .state('presentation', {
          url: '/report/:report',
          controller: function ($stateParams, ReportsService) {
            var vm = this;
            try {
              vm.reportName = ReportsService[$stateParams.report]
            } catch (e) {
              console.log('router unable to route based on url input: ' + $stateParams.report)
              console.log(e)
            }
            // vm.reportName = $stateParams.report;
          },
          controllerAs: 'r',
          template: '<report report="r.reportName"></report>'
        })
    })
}