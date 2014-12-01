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
		title: 'Windopbrengst (kWh)', aggregationTarget: 'series',
		width: '600',
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
		title: 'Dagproductie (Euro)', aggregationTarget: 'series',
		width: '600',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.LineChart(document.getElementById('prediction'));
	chart.draw(data, options);
}

function drawWeekChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Voorspelde kW', 'Actuele kW'],
		['Ma', 25, 23],
		['Di', 11, 10],
		['Wo', 30, 25],
		['Do', 14, 20],
		['Vr', 18, null],
		['Za', 10, null],
		['Zo', 09, null]
	]);
	var options = {
		title: 'Weekvoorspelling (kWh)',
		aggregationTarget: 'series',
		width: '600',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.LineChart(document.getElementById('week'));
	chart.draw(data, options);
}

function drawWeekEuroChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Voorspelde Euro', 'Actuele Euro'],
		['Ma', 25, 23],
		['Di', 11, 10],
		['Wo', 30, 25],
		['Do', 14, 20],
		['Vr', 18, null],
		['Za', 10, null],
		['Zo', 09, null]
	]);
	var options = {
		title: 'Weekvoorspelling (Euro)',
		aggregationTarget: 'series',
		width: '600',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('weekeuro'));
	chart.draw(data, options);
}

function drawMonthChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Voorspelde kW', 'Actuele kW'],
		['1', 25, 30],
		['5', 30, 25],
		['10', 35, 34],
		['15', 25, 20],
		['20', 30, null],
		['25', 35, null],
		['30', 40, null]
	]);
	var options = {
		title: 'Maandvoorspelling (kWh)',
		width: '600',
		aggregationTarget: 'series',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.LineChart(document.getElementById('month'));
	chart.draw(data, options);
}

function drawMonthEuroChart() {
	var data = google.visualization.arrayToDataTable([
		['Dagen', 'Voorspelde Euro', 'Actuele Euro'],
		['1', 25, 30],
		['5', 30, 25],
		['10', 35, 34],
		['15', 25, 20],
		['20', 30, null],
		['25', 35, null],
		['30', 40, null]
	]);
	var options = {
		title: 'Maandvoorspelling (Euro)',
		width: '600',
		aggregationTarget: 'series',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('montheuro'));
	chart.draw(data, options);
}

function drawYearChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Voorspelde kW', 'Actuele kW'],
		['Jan', 1000, 950],
		['Feb', 1170, 1100],
		['Maa', 660, 700],
		['Apr', 1030, 1000],
		['Mei', 1000, 950],
		['Jun', 900, 900],
		['Jul', 950, null],
		['Aug', 1111, null],
		['Sep', 1030, null],
		['Okt', 988, null],
		['Nov', 1000, null],
		['Dec', 1111, null]
	]);
	var options = {
		title: 'Jaarvoorspelling (kWh)',
		width: '600',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.LineChart(document.getElementById('year'));
	chart.draw(data, options);
}

function drawYearEuroChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Voorspelde Euro', 'Actuele Euro'],
		['Jan', 1000, 950],
		['Feb', 1170, 1100],
		['Maa', 660, 700],
		['Apr', 1030, 1000],
		['Mei', 1000, 950],
		['Jun', 900, 900],
		['Jul', 950, null],
		['Aug', 1111, null],
		['Sep', 1030, null],
		['Okt', 988, null],
		['Nov', 1000, null],
		['Dec', 1111, null]
	]);
	var options = {
		title: 'Jaarvoorspelling (Euro)',
		width: '600',
		legend: {position: 'bottom'}
	};
	var chart = new google.visualization.ColumnChart(document.getElementById('yeareuro'));
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

function drawDifferenceChart() {
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
	var chart = new google.visualization.ColumnChart(document.getElementById('difference'));
	chart.draw(data, options);
}