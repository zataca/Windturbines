/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function ($scope) {
			console.info("Indexcontroller intiated");

			// populate data
			var turbines = ["Enercon E-70", "Enercon E-44", "Enercon E-126"];
			var turbine1 = ["486 kW", "30 m/s", "24 %", "Z 1 Bft", "Harlingen"];
			var turbine2 = ["576 kW", "15 m/s", "21 %", "Z 5 Bft", "Franeker"];
			var turbine3 = ["321 kW", "25 m/s", "17 %", "Z 4 Bft", "Groningen"];

			// standard view
			updateView(turbine1);
			$('#turbine').html('Enercon E-70');
			$('.dropdown-toggle').html('Enercon E-70' + ' <span class="caret"></span>');
			//$("#week").hide();
			//$("#month").hide();
			//$("#year").hide();
			//$("#weekeuro").hide();
			//$("#montheuro").hide();
			//$("#yeareuro").hide();


			// populate dropdown menu
			var s = '';
			for (val in turbines) {
				s += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + turbines[val] + '</a></li>';
			}
			$('.dropdown-menu').html(s);

			// change view to selected item
			$(".dropdown-menu li a").click(function () {
				var windturbine = $(this).text();
				$('.dropdown-toggle').html(windturbine + ' <span class="caret"></span>');
				$('#turbine').html($(this).text());
				if (windturbine === "Enercon E-70") {
					updateView(turbine1);
				} else if (windturbine === "Enercon E-44") {
					updateView(turbine2);
				} else {
					updateView(turbine3);
				}
			});

			function updateView(values) {
				$('#molen').html(values[0]);
				$('#windsnelheid').html(values[1]);
				$('#vermogen').html(values[2]);
				$('#windkracht').html(values[3]);
				$('#locatie').html(values[4]);
			}

			$(".btn-group > button.btn").on("click", function () {
				value = this.innerHTML;
				if (value === "Vandaag") {
					$("#prediction").show();
					$("#day").show();
					$("#week").hide();
					$("#weekeuro").hide();
					$("#month").hide();
					$("#montheuro").hide();
					$("#year").hide();
					$("#yeareuro").hide();
				} else if (value === "Week") {
					$("#week").show();
					$("#weekeuro").show();
					$("#prediction").hide();
					$("#day").hide();
					$("#month").hide();
					$("#montheuro").hide();
					$("#year").hide();
					$("#yeareuro").hide();
				} else if (value === "Maand") {
					$("#month").show();
					$("#montheuro").show();
					$("#prediction").hide();
					$("#day").hide();
					$("#week").hide();
					$("#weekeuro").hide();
					$("#year").hide();
					$("#yeareuro").hide();
				} else if (value === "Jaar") {
					$("#year").show();
					$("#yeareuro").show();
					$("#prediction").hide();
					$("#day").hide();
					$("#week").hide();
					$("#weekeuro").hide();
					$("#month").hide();
					$("#montheuro").hide();
				}
			});
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
						['Tijd', 'Voorspelde kWh', 'Actuele kWh'],
						['10:00', 100, 102],
						['10:05', 101, 101],
						['10:10', 220, 230],
						['10:15', 150, null],
						['10:30', 150, null],
						['10:45', 130, null]
					]);
					var options = {
						title: 'Windopbrengst (kWh)', aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('yearChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Year', 'Voorspelde kW', 'Actuele kW'],
						['Jan', 1000, 950],
						['Feb', 1170, 1100],
						['Maa', 660, 700],
						['Apr', 1030, 1000],
						['Mei', 1000, 950],
						['Jun', 900, 900],
						['Jul', 950, 1000],
						['Aug', 1111, 1000],
						['Sep', 1030, 1000],
						['Okt', 988, 999],
						['Nov', 1000, 1111],
						['Dec', 1111, 1111]
					]);
					var options = {
						title: 'Jaarvoorspelling (kWh)',
						width: '600',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
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
						['Dagen', 'Voorspelde kW', 'Actuele kW'],
						['Ma', 25, 23],
						['Di', 11, 10],
						['Wo', 30, 25],
						['Do', 14, 20],
						['Vr', 18, 15],
						['Za', 10, 12],
						['Zo', 09, 05]
					]);
					var options = {
						title: 'Weekvoorspelling (kWh)',
						aggregationTarget: 'series',
						width: '600',
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
						['Dagen', 'Voorspelde kW', 'Actuele kW'],
						['1', 25, 30],
						['5', 30, 25],
						['10', 35, 34],
						['15', 25, 20],
						['20', 30, 30],
						['25', 35, 35],
						['30', 40, 39]
					]);
					var options = {
						title: 'Maandvoorspelling (kWh)',
						width: '600',
						aggregationTarget: 'series',
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
						['Month', 'MW'],
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
						['Quarter', 'MW'],
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
						['Year', 'GW'],
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

		.directive('dayPredictionChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Uren', 'Voorspelde Euro', 'Actuele Euro'],
						['00', 1000, 1020],
						['02', 1017, 1016],
						['04', 2020, 2050],
						['06', 1003, 1050],
						['08', 1005, 900],
						['10', 1030, 1100],
						['12', 1030, null],
						['14', 1500, null],
						['16', 1400, null],
						['18', 1800, null],
						['20', 2000, null],
						['22', 2100, null],
					]);
					var options = {
						title: 'Dagproductie (Euro)', aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.LineChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('differenceChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Uren', 'Dagen'],
						['Ma', 08],
						['Di', 07],
						['Wo', 01],
						['Do', 10],
						['Vr', 05],
						['Za', 04],
						['Zo', 01]
					]);
					var options = {
						title: 'Afwijking in %', aggregationTarget: 'series',
						legend: {position: 'right'}
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('weekEuroChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Dagen', 'Voorspelde Euro', 'Actuele Euro'],
						['Ma', 25, 23],
						['Di', 11, 10],
						['Wo', 30, 25],
						['Do', 14, 20],
						['Vr', 18, 15],
						['Za', 10, 12],
						['Zo', 09, 05]
					]);
					var options = {
						title: 'Weekvoorspelling (Euro)',
						aggregationTarget: 'series',
						width: '600',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('monthEuroChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Dagen', 'Voorspelde Euro', 'Actuele Euro'],
						['1', 25, 30],
						['5', 30, 25],
						['10', 35, 34],
						['15', 25, 20],
						['20', 30, 30],
						['25', 35, 35],
						['30', 40, 39]
					]);
					var options = {
						title: 'Maandvoorspelling (Euro)',
						width: '600',
						aggregationTarget: 'series',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})

		.directive('yearEuroChart', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem, $attr) {
					var data = google.visualization.arrayToDataTable([
						['Year', 'Voorspelde Euro', 'Actuele Euro'],
						['Jan', 1000, 950],
						['Feb', 1170, 1100],
						['Maa', 660, 700],
						['Apr', 1030, 1000],
						['Mei', 1000, 950],
						['Jun', 900, 900],
						['Jul', 950, 1000],
						['Aug', 1111, 1000],
						['Sep', 1030, 1000],
						['Okt', 988, 999],
						['Nov', 1000, 1111],
						['Dec', 1111, 1111]
					]);
					var options = {
						title: 'Jaarvoorspelling (Euro)',
						width: '600',
						legend: {position: 'bottom'}
					};
					var chart = new google.visualization.ColumnChart($elem[0]);
					chart.draw(data, options);
				}
			};
		})