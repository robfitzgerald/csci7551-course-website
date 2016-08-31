'use strict';
{
	angular
		.module('DistributedSite', ['ngMaterial'/*, 'ui.router'*/])
		.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});
}