/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function($scope) {
			console.info("Indexcontroller intiated");

			// populate data
			var turbines = ["1", "2", "3"];
			var turbine1 = ["486 kW", "30 m/s", "24 %", "Z 1 Bft", "ZW", "Matige wind"];
			var turbine2 = ["576 kW", "15 m/s", "21 %", "Z 5 Bft", "NW", "Zwakke wind"];
			var turbine3 = ["321 kW", "25 m/s", "17 %", "Z 4 Bft", "NO", "Sterke wind"];

			// standard view
			$('#turbine').html('Windturbine ' + turbines[0]);
			$('#molen').html(turbine1[0]);
			$('#windsnelheid').html(turbine1[1]);
			$('#vermogen').html(turbine1[2]);
			$('#windkracht').html(turbine1[3]);
			$('#windrichting').html(turbine1[4]);
			$('#wind').html(turbine1[5]);

			// populate dropdown menu
			var s = '';
			for (val in turbines) {
				s += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Windturbine ' + turbines[val] + ' </a></li>';
			}
			$('.dropdown-menu').html(s);

			// change view to selected item
			$(".dropdown-menu li a").click(function() {
				$('.dropdown-toggle').html($(this).text() + '<span class="caret"></span>');
				$('#turbine').html($(this).text());
				$('#molen').html(turbine1[0]);
				$('#windsnelheid').html(turbine1[1]);
				$('#vermogen').html(turbine1[2]);
				$('#windkracht').html(turbine1[3]);
				$('#windrichting').html(turbine1[4]);
				$('#wind').html(turbine1[5]);
			})
		})

		.controller('OpbrengstenCtrl', function($scope) {
			console.info("Indexcontroller intiated");
		})

		.directive('predictionChart', function() {
			return {
				restrict: 'A',
				link: function($scope, $elem, $attr) {
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
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('profitChart', function() {
			return {
				restrict: 'A',
				link: function($scope, $elem, $attr) {
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
						['Dec', 111, 1111]
					]);
					var options = {
						title: 'Totale opbrengst per jaar'
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('dayChart', function() {
			return {
				restrict: 'A',
				link: function($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Uren', 'Productie in Wh'],
						['00', 250],
						['02', 101],
						['04', 60],
						['06', 140],
						['08', 180],
						['10', 103],
						['12', null],
						['14', null],
						['16', null],
						['18', null],
						['20', null],
						['22', null]
					]);
					var options = {
						title: 'Dagproductie', aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('weekChart', function() {
			return {
				restrict: 'A',
				link: function($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Dagen', 'Productie in kWh'],
						['Ma', 25],
						['Di', 11],
						['Wo', 30],
						['Do', 14],
						['Vr', 18],
						['Za', 10],
						['Zo', 09]
					]);
					var options = {
						title: 'Weekproductie', aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})