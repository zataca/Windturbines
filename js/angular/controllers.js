/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function ($scope) {
			console.info("Indexcontroller intiated");

			// populate data
			var turbines = ["1", "2", "3"];
			var turbine1 = ["486 kW", "30 m/s", "24 %", "Z 1 Bft", "ZW", "Matige wind"];
			var turbine2 = ["576 kW", "15 m/s", "21 %", "Z 5 Bft", "NW", "Zwakke wind"];
			var turbine3 = ["321 kW", "25 m/s", "17 %", "Z 4 Bft", "NO", "Sterke wind"];

			// standard view
			updateView(turbine1);
			$('#turbine').html('Windturbine 1');
			$('.dropdown-toggle').html('Windturbine 1' + ' <span class="caret"></span>');

			// populate dropdown menu
			var s = '';
			for (val in turbines) {
				s += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Windturbine ' + turbines[val] + '</a></li>';
			}
			$('.dropdown-menu').html(s);

			// change view to selected item
			$(".dropdown-menu li a").click(function () {
				var windturbine = $(this).text();
				$('.dropdown-toggle').html(windturbine + ' <span class="caret"></span>');
				$('#turbine').html($(this).text());
				if (windturbine === "Windturbine 1") {
					updateView(turbine1);
				} else if (windturbine === "Windturbine 2") {
					updateView(turbine2);
				} else {
					updateView(turbine3);
				}
			})

			function updateView(values) {
				$('#molen').html(values[0]);
				$('#windsnelheid').html(values[1]);
				$('#vermogen').html(values[2]);
				$('#windkracht').html(values[3]);
				$('#windrichting').html(values[4]);
				$('#wind').html(values[5]);
			}
		})

		.controller('OpbrengstenCtrl', function ($scope) {
			console.info("Indexcontroller intiated");
		})

		.controller('HistorieCtrl', function ($scope) {
			console.info("Indexcontroller intiated");
			$(".dropdown-menu li a").click(function () {
				$('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
				console.info($(this).text());
			});
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
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
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

		.directive('dayChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Uren', 'Productie in kWh'],
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

		.directive('weekChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
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

		.directive('monthChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Dagen', 'Productie in kWh'],
						['1', 25],
						['5', 30],
						['10', 35],
						['15', 25],
						['20', 30],
						['25', 35],
						['30', 40]
					]);
					var options = {
						title: 'Maandproductie', aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('monthHistoryChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Month', 'kWh'],
						['Jan', 1000],
						['Feb', 1170],
						['Maa', 660],
						['Apr', 1030],
						['Mei', 100],
						['Jun', 900],
						['Jul', 555],
						['Aug', 1111],
						['Sep', 1030],
						['Okt', 888],
						['Nov', 666],
						['Dec', 111]
					]);
					var options = {
						title: 'Totale opbrengst per maand'
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('quarterHistoryChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Quarter', 'kWh'],
						['Q1', 2730],
						['Q2', 2030],
						['Q3', 2695],
						['Q4', 1500]
					]);
					var options = {
						title: 'Totale opbrengst per kwartaal'
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('yearHistoryChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Year', 'gWh'],
						['2014', 10000],
						['2013', 11700],
						['2012', 9000],
						['2011', 10300],
						['2010', 10000]
					]);
					var options = {
						title: 'Totale opbrengst per jaar'
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})