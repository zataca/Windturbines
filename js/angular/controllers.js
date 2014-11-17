/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function($scope) {
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
			drawDayChart();
			drawPredictionChart();

			// populate dropdown menu
			var s = '';
			for (val in turbines) {
				s += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + turbines[val] + '</a></li>';
			}
			$('.dropdown-menu').html(s);

			// change view to selected item
			$(".dropdown-menu li a").click(function() {
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

			// show data
			function updateView(values) {
				$('#molen').html(values[0]);
				$('#windsnelheid').html(values[1]);
				$('#vermogen').html(values[2]);
				$('#windkracht').html(values[3]);
				$('#locatie').html(values[4]);
			}

			// show charts from selected period
			$(".btn-group > button.btn").on("click", function() {
				value = this.innerHTML;
				$('#charts').children().empty();
				if (value === "Vandaag") {
					drawDayChart();
					drawPredictionChart();
				} else if (value === "Week") {
					drawWeekChart();
					drawWeekEuroChart();
				} else if (value === "Maand") {
					drawMonthChart();
					drawMonthEuroChart();
				} else if (value === "Jaar") {
					drawYearChart();
					drawYearEuroChart();
				}
			});
		})

		.controller('HistorieCtrl', function($scope) {
			console.info("Indexcontroller intiated");

			// standard view
			drawYearHistoryChart();
			drawMonthHistoryChart();
			drawQuarterHistoryChart();
			drawDifferenceChart();

			// change view to selected item
			$(".dropdown-menu li a").click(function() {
				$('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
				console.info($(this).text());
			});
		});