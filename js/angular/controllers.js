/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function ($scope) {
			console.info("Indexcontroller intiated")

		})

		.controller('OpbrengstenCtrl', function ($scope) {
			console.info("Indexcontroller intiated")
		})

		.directive('predictionChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Tijd', 'Voorspelde kW', 'Actuele kW'],
						['10:00', 10000, 10200],
						['10:05', 10170, 10160],
						['10:10', 6060, 7000],
						['10:15', 10030, null],
						['10:30', 10050, null],
						['10:45', 1030, null]
					]);
					var options = {
						title: 'Windopbrengst (kW)', aggregationTarget: 'series',
						legend: {position: 'bottom'},
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			}
		})

		.directive('profitChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Year', '2014', '2013'],
						['Jan', 1000, 400],
						['Feb', 1170, 460],
						['Maa', 660, 1120],
						['Apr', 1030, 540],
						['Mei', 100, 50],
						['Jun', 900, 333],
						['Jul', 555, 540],
						['Aug', 1111, 1000],
						['Sep', 1030, 540],
						['Okt', 888, 999],
						['Nov', 666, 555],
						['Dec', 111, 1111],
					]);
					var options = {
						title: 'Totale opbrengst per jaar',
						//hAxis: {title: 'Maand', titleTextStyle: {color: 'red'}}
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			}
		})

		.directive('dayChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Tijd', 'Voorspelde kW', 'Actuele kW'],
						['10:00', 10000, 10200],
						['10:05', 10170, 10160],
						['10:10', 6060, 7000],
						['10:15', 10030, null],
						['10:30', 1, null],
						['10:45', 1030, null]
					]);
					var options = {
						title: 'Windopbrengst (kW)', aggregationTarget: 'series',
						legend: {position: 'bottom'},
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			}
		})