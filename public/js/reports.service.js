// reports.js
'use strict';
{
	angular
		.module('DistributedSite')
		.factory('ReportsService', reportsService)

	function reportsService () {
		return {
			getReports: () => { return reports() }
		}

		function reports () {
			return [
				{
					articleTitle: 'Massively Concurrent Agent-Based Evolutionary Computing',
					articleAuthors: 'D. Krzywicki, W. Turek, A. Byrski, M. Kisiel-Dorohinicki',
					articleSource: 'Journal Of Computational Science',
					reviewDate: new Date(2016, 7, 27),
					articleURL: 'http://ac.els-cdn.com/S1877750315300041/1-s2.0-S1877750315300041-main.pdf?_tid=79eef28c-6e12-11e6-8fb3-00000aacb361&acdnat=1472493811_ca6c7d3e0aac58d39b9746e1454bbc7b',
					reviewWord: 'reviews/massively-concurrent-review.docx',
					reviewPDF: 'reviews/massively-concurrent-review.pdf',
					description: 'This article presents a new approach for generating agents in an asynchronous network which are engaged in an evolutionary optimization algorithm.'
				}
			]
		}
	}
}