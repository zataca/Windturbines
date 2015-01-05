/* De paginaspecifieke code zit in de controllers */
angular.module('blogPrototype.controllers', [])
		.controller('HomeCtrl', function ($scope) {
			console.info("Indexcontroller intiated");

			// populate data
			var turbines = ["Enercon E-70", "Enercon E-44", "Enercon E-53"];
			var turbine1 = ["904 kW", "9,5 m/s", "39 %", "Z 5 Bft 182°", "Harlingen"];
			var turbine2 = ["576 kW", "11,5 m/s", "64 %", "Z 6 Bft 182°", "Franeker"];
			var turbine3 = ["321 kW", "8,5 m/s", "40 %", "Z 5 Bft 182°", "Groningen"];

			// standard view
			updateView(turbine1);
			$('#turbine').html('Enercon E-70');
			$('.dropdown-toggle').html('Enercon E-70' + ' <span class="caret"></span>');
			drawDayChart();
			drawDayDifferenceChart();

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

			// show data
			function updateView(values) {
				$('#molen').html(values[0]);
				$('#windsnelheid').html(values[1]);
				$('#vermogen').html(values[2]);
				$('#windkracht').html(values[3]);
				$('#locatie').html(values[4]);
			}

			// show charts from selected period
			$(".btn-group > button.btn").on("click", function () {
				value = this.innerHTML;
				$('#charts').children().empty();
				if (value === "Vandaag") {
					drawDayChart();
					drawDayDifferenceChart();
				} else if (value === "Week") {
					drawComboWeekChart();
					drawWeekDifferenceChart();
				} else if (value === "Maand") {
					drawComboMonthChart();
					drawMonthDifferenceChart();
				}
			});
		})

		.controller('HistorieCtrl', function ($scope) {
			console.info("Indexcontroller intiated");

			// standard view
			drawYearHistoryChart();
			drawMonthHistoryChart();
			drawQuarterHistoryChart();

			// change view to selected item
			$(".dropdown-menu li a").click(function () {
				$('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
				console.info($(this).text());
			});
		});