/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function($scope) {
			console.info("Indexcontroller intiated")

		})

		.controller('OpbrengstenCtrl', function($scope) {
			console.info("Indexcontroller intiated")
		})

		.directive('chart', function() {
			return {
				restrict: 'A',
				link: function($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Tijd', 'Voorspelling', 'Opbrengst'],
						['10:00', 10000, 10200],
						['10:05', 10170, 10160],
						['10:10', 6060, 7000],
						['10:15', 10030, null]
					]);
					var options = {
						title: 'Windopbrengst (mW)', aggregationTarget: 'series',
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			}
		})