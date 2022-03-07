window.onload = function () {

  // Pie Chart
  var pieChart = new CanvasJS.Chart("pieChart", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: ""
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
    indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.08, label: "Running" },
			{ y: 27.34, label: "Bicycling" },
			{ y: 10.62, label: "Swimming" },
			{ y: 5.02, label: "Walking" },
			{ y: 4.07, label: "Diving" },
			{ y: 1.22, label: "Horseback Rinding" },
			{ y: 0.44, label: "Others" }
        ]
      }]
    });
  pieChart.render();
  // Pie Chart End

  // Bar Chart
  var barChart = new CanvasJS.Chart("barChart", {
    exportEnabled: true,
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: ""
    },
    axisY: {
      title: "Number of exercises",
    },
    axisX: {
      title: "Month"
    },
    data: [{
      type: "column",
      yValueFormatString: "#,##0#",
      dataPoints: [
        { label: "March", y: 23},	
        { label: "February", y: 15 },	
        { label: "January", y: 20 },
        { label: "December", y: 14 },	
        { label: "November", y: 16 },
        { label: "October", y: 22 },
        { label: "September", y: 21 },
        { label: "August", y: 19 }
        
      ]
    }]
  });
  barChart.render();
  // Bar Chart End
}