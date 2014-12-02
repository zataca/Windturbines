/*
 * In deze file kan je pagina-onhankelijke scripts plaats als je dat handig vindt
 */
google.load("visualization", "1", {packages: ["corechart"]});

function drawDayChart() {
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
		title: 'Windopbrengst (kWh)', 
		aggregationTarget: 'series',
		width: '800',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.LineChart(document.getElementById('day'));
	chart.draw(data, options);
}

function drawPredictionChart() {
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
		['22', 2100, null]
	]);
	var options = {
		title: 'Dagproductie (Euro)', 
		aggregationTarget: 'series',
		width: '800',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('prediction'));
	chart.draw(data, options);
}

function drawComboWeekChart() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		['Dag', 'Verwachting', 'Actueel', 'Prijs (x100)'],
		['01-12-14', 55, 45, 22],
		['02-12-14', 40, 40, 50],
		['03-12-14', 45, 25, 52],
		['04-12-14', 48, 30, 15],
		['05-12-14', 15, 25, 29],
		['06-12-14', null, null, null],
		['07-12-14', null, null, null]
	]);

	var options = {
		title: 'Weekopbrengst',
		vAxis: {title: "kWh (x1000)"},
		hAxis: {title: "Datum"},
		seriesType: "bars",
		series: {2: {type: "line"}}
	};

	var chart = new google.visualization.ComboChart(document.getElementById('weekcombo'));
	chart.draw(data, options);
}

function drawComboMonthChart() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		['Week', 'Verwachting', 'Actueel', 'Prijs (x100)'],
		['49', 414, 300, 120],
		['50', 300, 100, 40],
		['51', 150, 300, 120],
		['52', null, null, null]
	]);

	var options = {
		title: 'Maandopbrengst',
		vAxis: {title: "MWh"},
		hAxis: {title: "Week"},
		seriesType: "bars",
		series: {4: {type: "line"}}
	};

	var chart = new google.visualization.ComboChart(document.getElementById('monthcombo'));
	chart.draw(data, options);
}

function drawYearHistoryChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'MW'],
		['2014', 10000],
		['2013', 11700],
		['2012', 9000],
		['2011', 10300],
		['2010', 10000]
	]);
	var options = {
		title: 'Totale opbrengst per jaar'
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('yearhistory'));
	chart.draw(data, options);
}

function drawMonthHistoryChart() {
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
	var chart = new google.visualization.ColumnChart(document.getElementById('monthhistory'));
	chart.draw(data, options);
}

function drawQuarterHistoryChart() {
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
	var chart = new google.visualization.ColumnChart(document.getElementById('quarterhistory'));
	chart.draw(data, options);
}

function drawDayDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Uren', 'Afwijking'],
		['00', -10],
		['02', 10],
		['04', 20],
		['06', 10],
		['08', 10],
		['10', 10],
		['12', 10],
		['14', 15],
		['16', 14],
		['18', 18],
		['20', 20],
		['22', 21]
	]);
	var options = {
		title: 'Afwijking in %', 
		vAxis: {title: "Afwijking in %)"},
		hAxis: {title: "Uur"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('daydifference'));
	chart.draw(data, options);
}

function drawWeekDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Afwijking'],
		['01-12-14', -10],
		['02-12-14', 00],
		['03-12-14', -35],
		['04-12-14', -30],
		['05-12-14', 80],
		['06-12-14', null],
		['07-12-14', null]
	]);
	var options = {
		title: 'Afwijking (in %)', 
		vAxis: {title: "Afwijking (in %)"},
		hAxis: {title: "Datum"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('weekdifference'));
	chart.draw(data, options);
}

function drawMonthDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Week', 'Afwijking'],
		['49', -25],
		['50', -65],
		['51', 100],
		['52', null]
	]);
	var options = {
		title: 'Afwijking (in %)', 
		vAxis: {title: "Afwijking (in %)"},
		hAxis: {title: "Week"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('monthdifference'));
	chart.draw(data, options);
}