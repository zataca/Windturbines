/*
 * In deze file kan je pagina-onhankelijke scripts plaats als je dat handig vindt
 */
google.load("visualization", "1", {packages: ["corechart"]});
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Tijd', 'Voorspelling', 'Opbrengst'],
		['10:00', 10000, 10200],
		['10:05', 10170, 10160],
		['10:10', 6060, 7000],
		['10:15', 10030, null]
	]);
	var options = {
		title: 'Windopbrengst (mW)', aggregationTarget: 'series',
		chartArea: {width: "60%"}
	};
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}
