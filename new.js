// Menyiapkan data
var data = new google.visualization.DataTable();
data.addColumn('string', 'Bulan');
data.addColumn('number', 'Pendapatan');
data.addRows([
  ['Januari', 1000],
  ['Februari', 1500],
  ['Maret', 800],
  // ...
]);

// Menyiapkan opsi
var options = {
  title: 'Grafik Pendapatan Bulanan',
  // ...
};

// Membuat objek grafik
var chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));

// Menggambar grafik dengan menggunakan data dan opsi yang telah disiapkan
chart1.draw(data, options);
