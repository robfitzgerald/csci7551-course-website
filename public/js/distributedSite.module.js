'use strict';
{
	angular
		.module('DistributedSite', ['ngMaterial'])
		.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});
}