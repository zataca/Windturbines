/*
 * In deze file kan je pagina-onhankelijke scripts plaats als je dat handig vindt
 */
google.load("visualization", "1", {packages: ["corechart"]});

function drawDayChart() {
	var data = google.visualization.arrayToDataTable([
		['Tijd', 'Verwachting', 'Actueel'],
		['12:00', 1000, 1100],
		['12:15', 1800, 2050],
		['12:30', 3300, 3500],
		['12:45', 4700, 4800],
		['13:00', 5200, null],
		['13:15', 5500, null],
		['13:30', 5500, null],
		['13:45', 5700, null],
		['14:00', 6250, null],
		['14:15', 6800, null],
		['14:30', 7350, null],
		['14:45', 7900, null],
		['15:00', 8450, null]
	]);
	var options = {
		title: 'Opbrengst per 3 uur (in kW)',
		vAxis: {title: "Opbrengst (in kW)"},
		hAxis: {title: "Tijd"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
		
	var chart = new google.visualization.ColumnChart(document.getElementById('day'));
	chart.draw(data, options);
}

function drawComboWeekChart() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		['Dag', 'Verwachting', 'Actueel'],
		['11-12-14', 55, 50],
		['12-12-14', 40, 40],
		['13-12-14', 45, 25],
		['14-12-14', 48, 30],
		['15-12-14', 15, 25],
		['16-12-14', 30, null],
		['17-12-14', 25, null]
	]);

	var options = {
		title: 'Weekproductie',
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
		['12:00', 0],
		['12:15', 10],
		['12:30', 4],
		['12:45', -5],
		['13:00', null],
		['13:15', null],
		['13:30', null],
		['13:45', null],
		['14:00', null],
		['14:15', null],
		['14:30', null],
		['14:15', null],
		['15:00', null]
	]);
	var options = {
		title: 'Afwijking (in %)', 
		vAxis: {title: "Afwijking (in %)"},
		hAxis: {title: "Tijd"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('daydifference'));
	chart.draw(data, options);
}

function drawWeekDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Afwijking +', 'Afwijking -'],
		['11-12-14', 5, -10],
		['12-12-14', 00, -5],
		['13-12-14', 15, -35],
		['14-12-14', 10, -30],
		['15-12-14', 80, -60],
		['16-12-14', null, null],
		['17-12-14', null, null]
	]);
	var options = {
		title: 'Afwijking in kwartieren', 
		vAxis: {title: "Aantal kwartier"},
		hAxis: {title: "Datum"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('weekdifference'));
	chart.draw(data, options);
}

function drawMonthDifferenceChart() {
	var data = google.visualization.arrayToDataTable([
		['Week', 'Afwijking +', 'Afwijking -'],
		['49', 150, -200],
		['50', 300, -250],
		['51', 100, -200],
		['52', null, null]
	]);
	var options = {
		title: 'Afwijking in kwartieren', 
		vAxis: {title: "Aantal kwartier"},
		hAxis: {title: "Week"},
		aggregationTarget: 'series',
		legend: {position: 'right'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('monthdifference'));
	chart.draw(data, options);
}