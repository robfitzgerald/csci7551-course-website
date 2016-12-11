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
					articleTitle: 'Review: Massively Concurrent Agent-Based Evolutionary Computing',
					articleAuthors: 'D. Krzywicki, W. Turek, A. Byrski, M. Kisiel-Dorohinicki',
					articleSource: 'Journal Of Computational Science',
					reviewDate: new Date(2016, 7, 27),
					articleURL: 'http://ac.els-cdn.com/S1877750315300041/1-s2.0-S1877750315300041-main.pdf?_tid=79eef28c-6e12-11e6-8fb3-00000aacb361&acdnat=1472493811_ca6c7d3e0aac58d39b9746e1454bbc7b',
					download: 'reviews/massively-concurrent-review.pdf',
					description: 'This article presents a new approach for generating agents in an asynchronous network which are engaged in an evolutionary optimization algorithm.'
				},
				{
					articleTitle: 'Traffic Assignment Research Presentation',
					articleAuthors: 'Rob Fitzgerald',
					articleSource: 'PowerPoint Presentation',
					reviewDate: new Date(2016, 11, 10),
					articleURL: '',
					download: 'reviews/robfitzgerald-traffic-assignment.pptx',
					description: 'The research presentation slides which introduce the methods used for simulating assignment of traffic to a road network.'					
				},
				{
					articleTitle: 'Traffic Assignment Project Presentation',
					articleAuthors: 'Rob Fitzgerald',
					articleSource: 'PowerPoint Presentation',
					reviewDate: new Date(2016, 12, 6),
					articleURL: '',
					download: 'reviews/robfitzgerald-traffic-assignment-project.pptx',
					description: 'The project presentation slides showing the design and some implementation of my simulation application.'					
				},
				{
					articleTitle: 'Traffic Assignment Application',
					articleAuthors: 'Rob Fitzgerald',
					articleSource: 'GitHub Repo / Zip File',
					reviewDate: new Date(2016, 12, 6),
					articleURL: 'https://github.com/robfitzgerald/csci7551-project',
					download: 'reviews/robfitzgerald-csci7551-project.zip',
					description: 'Simulation project implemented in C++ using OpenMP.  See README.md for installation and run instructions.'					
				},
				{
					articleTitle: 'Project Review',
					articleAuthors: 'Rob Fitzgerald',
					articleSource: 'PDF',
					reviewDate: new Date(2016, 12, 6),
					articleURL: '',
					download: 'reviews/robfitzgerald-final-report.pdf',
					description: 'Simulation project implemented in C++ using OpenMP.  See README.md for installation and run instructions.'					
				}
			]
		}
	}
}