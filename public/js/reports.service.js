// reports.js
'use strict';
{
	angular
		.module('DistributedSite')
		.factory('ReportsService', reportsService)

	function reportsService () {
		return {
			"massiveEvo": {
				articleTitle: 'Massively Concurrent Agent-Based Evolutionary Computing',
				articleAuthors: 'D. Krzywicki, W. Turek, A. Byrski, M. Kisiel-Dorohinicki',
				articleSource: 'Journal Of Computational Science',
				reviewDate: new Date(2016, 08, 27),
				articleURL: 'http://ac.els-cdn.com/S1877750315300041/1-s2.0-S1877750315300041-main.pdf?_tid=79eef28c-6e12-11e6-8fb3-00000aacb361&acdnat=1472493811_ca6c7d3e0aac58d39b9746e1454bbc7b',
				articleFile: 'articles/Concurrent_Agent_Systems_Scala.pdf',
				review: 'reviews/massively-concurrent-review.docx'
			}
		}
	}
}

/*
	{
		articleTitle: '',
		articleAuthors: '',
		articleSource: '',
		reviewDate: '',
		articleURL: '',
		articleFile: 'articles/..',
		review: 'html/reviews/..',
	}
 */