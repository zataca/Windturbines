/*
 * In deze file kan je pagina-onhankelijke scripts plaats als je dat handig vindt
 */
google.load("visualization", "1", {packages: ["corechart"]});

function drawDayChart() {
	var data = google.visualization.arrayToDataTable([
		['Tijd', 'Verwachting', 'Actueel'],
		['10:00', 57.5, 50],
		['10:15', 15, 5],
		['10:30', 10, 40],
		['10:45', 36, null],
		['11:00', 10, null]
	]);
	var options = {
		title: 'Windopbrengst (in kWh)',
		vAxis: {title: "kWh (x10)"},
		hAxis: {title: "Tijd"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
		
	var chart = new google.visualization.LineChart(document.getElementById('day'));
	chart.draw(data, options);
}

function drawPredictionChart() {
	var data = google.visualization.arrayToDataTable([
		['Uren', 'Verwachting', 'Actueel'],
		['10:00', 15, 20],
		['10:15', 32, 22],
		['10:30', 46, 38],
		['10:45', 56, null],
		['11:00', 70, null]
	]);
	var options = {
		title: 'Dagproductie (in €)',
		vAxis: {title: "Opbrengst (in €)"},
		hAxis: {title: "Tijd"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('prediction'));
	chart.draw(data, options);
}

function drawComboWeekChart() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		['Dag', 'Verwachting', 'Actueel', 'Prijs (x100)'],
		['01-12-14', 55, 50, 20],
		['02-12-14', 40, 40, 50],
		['03-12-14', 45, 25, 52],
		['04-12-14', 48, 30, 15],
		['05-12-14', 15, 25, 29],
		['06-12-14', 30, null, null],
		['07-12-14', 25, null, null]
	]);

	var options = {
		title: 'Weekopbrengst',
		vAxis: {title: "kWh (x1000)", 
				maxValue: 55},
		hAxis: {title: "Datum"},
		seriesType: "bars",
		series: {2: {type: "line"}},
	};

	var chart = new google.visualization.ComboChart(document.getElementById('weekcombo'));
	chart.draw(data, options);
}

function drawComboMonthChart() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		['Week', 'Verwachting', 'Actueel', 'Prijs (x100)'],
		['49', 386, 300, 120],
		['50', 300, 100, 40],
		['51', 150, 300, 120],
		['52', 200, null, null]
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
		['Jaar', 'MWh'],
		['2014', 10000],
		['2013', 11700],
		['2012', 9000],
		['2011', 10300],
		['2010', 10000]
	]);
	var options = {
		title: 'Jaaropbrengst',
		vAxis: {title: "Opbrengst (in MWh)"},
		hAxis: {title: "Jaar"},
		width: '1000'
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('yearhistory'));
	chart.draw(data, options);
}

function drawMonthHistoryChart() {
	var data = google.visualization.arrayToDataTable([
		['Maand', 'MWh'],
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
		title: 'Maandopbrengst',
		vAxis: {title: "Opbrengst (in MWh)"},
		hAxis: {title: "Maand"},
		width: '1000'
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('monthhistory'));
	chart.draw(data, options);
}

function drawQuarterHistoryChart() {
	var data = google.visualization.arrayToDataTable([
		['Kwartaal', 'MWh'],
		['Q1', 2730],
		['Q2', 2030],
		['Q3', 2695],
		['Q4', 1500]
	]);
	var options = {
		title: 'Kwartaalopbrengst',
		vAxis: {title: "Opbrengst (in MWh)"},
		hAxis: {title: "Kwartaal"},
		width: '1000'
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('quarterhistory'));
	chart.draw(data, options);
}

function drawDayDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Tijd', 'Afwijking'],
		['10:00', -15],
		['10:15', -66],
		['10:30', 75],
		['10:45', null],
		['11:00', null]
	]);
	var options = {
		title: 'Afwijking (in %)', 
		vAxis: {title: "Afwijking (in %)"},
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