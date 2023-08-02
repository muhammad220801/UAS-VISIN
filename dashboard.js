google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
  var spreadsheetId = '1AWUgaSZsmuxHiaBl_T7Vhh3WzpVQefBhs3cjxhuVNmg';
  var range1 = 'DeathSummary!A1:B182';
  var range2 = 'Death Type: Bencana Alam!A1:B17';
  var range3 = 'Death Type: Non Bencana Alam!A1:B24';
  var range4 = 'Death Type: Bencana Sosial!A1:B14';

  var query1 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range1);
  query1.send(function(response1) {
    handleQueryResponse(response1, 'chart1', drawChart1);
  });

  var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range2);
  query2.send(function(response2) {
    handleQueryResponse(response2, 'chart2', drawChart2);
  });
  
  var query3 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range3);
  query3.send(function(response3) {
    handleQueryResponse(response3, 'chart3', drawChart3);
  });
  var query4 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range4);
  query4.send(function(response4) {
    handleQueryResponse(response4, 'chart4', drawChart4);
  });
}

function handleQueryResponse(response, chartId, drawFunction) {
  if (response.isError()) {
    console.error('Error in query: ' + response.getMessage());
    return;
  }

  var data = response.getDataTable();
  drawFunction(data, chartId);
}

function drawChart1(data, chartId) {
  var options = {
    title: 'presentase penyebab kematian terbanyak',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.PieChart(document.getElementById(chartId));
  chart.draw(data, options);
}

function drawChart2(data, chartId) {
  var options = {
    title: 'Grafik Total Kematian Karena Bencana alam Berdasarkan Tahun',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.ColumnChart(document.getElementById(chartId));
  chart.draw(data, options);
}

function drawChart3(data, chartId) {
  var options = {
    title: 'Grafik Total kematian karena Bencana Non-Alam Berdasarkan Tahun',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.ColumnChart(document.getElementById(chartId));
  chart.draw(data, options);
}
function drawChart4(data, chartId) {
  var options = {
    title: 'Grafik Total Kematian Karena Bencana Sosial Berdasarkan Tahun',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.ColumnChart(document.getElementById(chartId));
  chart.draw(data, options);
}