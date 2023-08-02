## No 1. Data Tentang Penyebab Kematian di Indonesia

A. Untuk tabulasi silang mengenai ini, kita membutuhkan 2 tabel pada dataset yaitu tabel "cause" dan tabel "total death". Untuk melakukannya, ikuti langkah-langkah berikut:

1. Buka file datasetnya di spreadsheet.
2. Buka Google Apps Script (App Script).

B. Berikut adalah kode yang digunakan untuk melakukan tabulasi silang:

```
javascript
function createCrossTabulation() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Penyebab Kematian di Indonesia yang Dilaporkan - Clean.csv"); // Ganti dengan nama sheet Anda
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  // Define headers for the cross-tabulation
  var headers = ["Cause", "Total Death"];
  var crossTab = {};
  // Iterate through each row of the data
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var cause = row[0]; // Cause column
    var totalDeath = row[4]; // Total Death column
    // If the cause does not exist in the cross-tabulation object, initialize it
    if (!crossTab[cause]) {
      crossTab[cause] = {
        Cause: cause,
        "Total Death": 0
      };
    }
    // Accumulate the total death for the cause
    crossTab[cause]["Total Death"] += totalDeath;
  }
  // Convert the cross-tabulation object into an array
  var crossTabArray = Object.values(crossTab);
  // Sort the array by "Total Death" in descending order
  crossTabArray.sort(function(a, b) {
    return b["Total Death"] - a["Total Death"];
  });
  // Write the headers and data to a new sheet
  var resultSheet = ss.insertSheet("Death Summary");
  resultSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var dataRangeResult = resultSheet.getRange(2, 1, crossTabArray.length, headers.length);
  var resultValues = crossTabArray.map(row => headers.map(header => row[header]));
  dataRangeResult.setValues(resultValues);
}
```

 
C. Setelah mengetik kode di atas, klik jalankan, maka secara otomatis sistem akan melakukan tabulasi silang penyebab kematian. Dalam jawaban saya, saya telah mengurutkan dari penyebab kematian tertinggi ke penyebab terendah, sehingga hasil dari tabulasi silang akan seperti berikut:

| Cause                                              | Total Death |
|----------------------------------------------------|------------:|
| COVID-19                                           |      156970 |
| Tsunami Aceh (Meninggal)                           |      129171 |
| Penyakit Sistem Sirkulasi Darah                    |       84298 |
| Penyakit Infeksi & Parasit Tertentu                |       59700 |
| Kecelakaan Lalu Lintas                             |       59604 |
| Tuberkulosis                                       |       39315 |
| Kondisi Tertentu yang bermula pada masa Perinatal  |       38370 |
| Tsunami Aceh (Hilang)                              |       37527 |
| Penyakit Sistem Napas                              |       27635 |
| Penyakit Sistem Cerna                              |       24941 |
| Cedera, Keracunan, dan Akibat Sebab Luar Tertentu Lainnya |       21813 |
| Penyakit Endokrin, Nutrisi, dan Metabolik          |       20615 |
| Penyakit Sistem Kemih Kelamin                      |       17239 |
| Neoplasma                                          |       17117 |
| Gejala, Tanda & Penemuan Laboratorium, Klinik Abnormal YTK |       14765 |
| Demam Berdarah Dengue (DBD)                        |       14593 |
| Stroke tidak menyebut pendarahan atau infark       |       13284 |
| Pneumonia                                          |       12007 |
| Gempa Bumi                                         |       10484 |
| Perdarahan intrakranial                            |       10117 |
| Diare & gastroenteritis Oleh penyebab infeksi tertentu (kolitis infeksi) |        9693 |
| Penyakit Susunan Syaraf                            |        9201 |
| Cedera intrakranial                                |        9119 |
| Septisemia                                         |        7973 |
| AIDS                                               |        7385 |
| Pertumbuhan janin lamban, malnutrisi janin dan gangguan yang berhubungan dengan kehamilan pendek dan berat badan lahir rendah |        7284 |
| Infeksi Saluran Napas Bagian Atas Akut Lainnya     |        6283 |
| Sebab Luar Morbiditas & Mortalitas                 |        5801 |
| Gagal ginjal lainnya                               |        5568 |
| Hipoksia intrauterus dan asfiksia lahir            |        4965 |
| Diabetes melitus YTT                              |        4470 |
| Kehamilan, Persalinan & Masa Nifas                 |        3982 |
| Demam Tifoid dan Paratifoid                        |        3906 |
| Tuberkulosis paru                                 |        3852 |
| Kecelakaan kerja                                  |        3667 |
| Malaria (termasuk semua malaria)                   |        3578 |
| Faktor yg Mempengaruhi Keadaan Kesehatan & yg Berhubungan dengan Pelayanan Kesehatan |        3348 |
| TB Paru BTA Positif                               |        3282 |
| TB Paru                                           |        3271 |
| Gempa Bumi dan Tsunami                            |        2615 |
| Penyakit jantung lainnya                          |        2577 |
| Tuberkulosis paru lainnya                        |        2024 |
| Penyulit kehamilan, persalinan dan masa nifas lainnya |        1972 |
| Gangguan saluran napas lainnya yang berhubungan dengan masa perinatal |        1934 |
| Kronis Filariasis                                 |        1933 |
| Hipertensi Esensial (Primer)                      |        1890 |
| Kecelakaan Transportasi                           |        1819 |
| Malformasi, Deformasi Kongenital & Kelainan Kromosom |        1745 |
| Rabies - Lyssa                                    |        1592 |
| Penyakit Darah & Organ Pembuat Darah & Gangguan tertentu yang Melibatkan Mekanisme Imun |        1577 |
| KLB Diare                                         |        1565 |
| Penyakit infeksi dan parasit kongenital           |        1449 |
| Janin dan bayi baru lahir yang dipengaruhi oleh faktor dan penyulit kehamilan persalinan dan kelahiran |        1371 |
| Tetanus Neonatorium                               |        1272 |
| Tanah Longsor                                     |        1191 |
| Leptospirosis                                    |        1184 |
| Banjir Bandang                                   |        1148 |
| Penyakit Sistem Muskuloskeletal dan Jaringan Ikat |        1075 |
| Kehamilan yang berakhir abortus                   |         799 |
| Kondisi lain yang bermula pada masa perinatal     |         767 |
| Banjir                                           |         758 |
| Penyakit Kulit & Jaringan Subkutan               |         714 |
| Dispepsia                                        |         686 |
| Banjir dan Tanah Longsor                         |         664 |
| Cedera YDT lainnya YTT dan daerah badan Multipel |         605 |
| Gangguan Mental & Perilaku                       |         595 |
| Diare                                            |         552 |
| Gempa & Tsunami                                  |         509 |
| Eklamsia dan preeklamsia                         |         508 |
| Demam yang Sebabnya Tidak Diketahui              |         462 |
| Tsunami                                          |         433 |
| Penyakit Mata dan Adneksa                        |         424 |
| Infeksi khusus lainnya pada masa perinatal       |         392 |
| Letusan Gunung Berapi                            |         382 |
| Difteri                                          |         369 |
| Gizi Buruk                                       |         293 |
| Kebakaran                                        |         290 |
| Penyulit kehamilan dan persalinan lainnya        |         276 |
| Gastritis dan Duodenitis                         |         235 |
| KLB Demam Berdarah Dengue (DBD)                  |         235 |
| Penyakit Apendiks                                |         234 |
| Kejadian Luar Biasa (KLB) - Penyakit             |         188 |
| Avian Influenza (Flu Burung)                     |         168 |
| Kecelakaan Transportasi Laut-Udara               |         168 |
| Penyakit Telinga dan Pros. Mastoideus            |         165 |
| Perdarahan pasca persalinan                      |         157 |
| KLB Campak                                       |         153 |
| Letusan Gunung Api                               |         132 |
| Cedera lahir                                     |         131 |
| Kejadian Luar Biasa (KLB) - Keracunan            |         116 |
| Kecelakaan Transportasi Darat                   |         112 |
| Plasenta previa                                  |         106 |
| Angin Puting Beliung                             |         100 |
| Keracunan Makanan                                |          99 |
| Persalinan prematur                             |          88 |
| KLB Dengue High Fever                           |          87 |
| Konflik                                         |          83 |
| Kecelakaan Industri                             |          76 |
| Konflik Sosial atau Kerusuhan Sosial             |          69 |
| KLB                                             |          68 |
| Konflik Sosial                                  |          66 |
| Ledakan Granat/Bom                              |          63 |
| Penyakit hemolitik pada janin dan bayi baru lahir |          63 |
| Tetanus                                         |          61 |
| Gagal Teknologi                                 |          57 |
| KLB Malaria Falsiparum                          |          44 |
| Aksi Teror dan Sabotase                         |          42 |
| Campak                                          |          42 |
| Banjir disertai Tanah Longsor                   |          40 |
| KLB Tetanus Neonatal                            |          39 |
| Kegagalan Teknologi                             |          38 |
| Angin Siklon Tropis                             |          37 |
| Antraks                                         |          35 |
| Perdarahan antepartum                           |          35 |
| KLB Rabies                                      |          31 |
| Malaria Klinis                                  |          30 |
| Persalinan dengan penyulit gawat janin          |          30 |
| KLB Keracunan Makanan                           |          27 |
| Kebakaran Hutan dan Lahan                       |          22 |
| Keracunan/KLB                                   |          22 |
| Hepatitis Klinis                               |          20 |
| Angin Topan / Angin Puting Beliung / Angin Puyuh |          19 |
| KLB Difteri                                    |          19 |
| Rabies                                         |          19 |
| KLB Malaria                                    |          15 |
| Banjir Lahar Dingin                            |          12 |
| Hepatitis B                                    |          12 |
| Gelombang Pasang/Badai                         |          11 |
| Ledakan (bom, tabung gas, dll)                 |           9 |
| KLB Polio                                      |           8 |
| Ledakan Akibat Gas                            |           8 |
| KLB Dengue Shock Syndrome                      |           7 |
| Petir                                         |           7 |
| Tersambar Petir                               |           7 |
| Kebakaran (Pemukiman)                         |           6 |
| Batuk Rejan                                   |           5 |
| Gelombang Pasang                              |           5 |
| Kegagalan Teknologi (termasuk ledakan kompor gas) |           5 |
| KLB Keracunan                                 |           5 |
| Angin siklon tropis (angin kencang dan angin puting beliung) |           4 |
| Keracunan                                     |           4 |
| Angin kencang                                 |           3 |
| Gelombang Besar                               |           3 |
| KLB Gizi Buruk                                |           3 |
| Banjir Bandang dan Tanah Longsor              |           2 |
| KLB Hepatitis                                 |           2 |
| Ledakan Bom                                   |           2 |
| Letusan/Peningkatan Aktivitas Gunung Api      |           2 |
| Bencana kelaparan                             |           1 |
| Gelombang Besar dan Angin Siklon Tropis       |           1 |
| KLB Antraks                                   |           1 |
| KLB Leptospirosis                             |           1 |
| Longsor Sampah                                |           1 |
| Abrasi Air Laut                               |           0 |
| Angin Topan                                   |           0 |
| Banjir Bandang dan Angin Siklon Tropis        |           0 |
| Cikungunya                                    |           0 |
| Erupsi Gunung Api                             |           0 |
| Hepatitis A                                   |           0 |
| Kekeringan                                    |           0 |
| KLB Cacat Air                                 |           0 |
| KLB Cikungunya                                |           0 |
| KLB Demam Berdarah                            |           0 |
| KLB Diare Berdarah                            |           0 |
| KLB Disentri                                  |           0 |
| KLB Frambusia                                 |           0 |
| KLB Hand, Foot, Mouth Diseases                |           0 |
| KLB Hepatitis Klinis                          |           0 |
| KLB Malaria Klinis                            |           0 |
| KLB Marasmus                                  |           0 |
| KLB Meningitis                                |           0 |
| KLB Parotitis                                 |           0 |
| KLB Pertusis                                  |           0 |
| KLB Rubella                                   |           0 |
| KLB Tetanus                                   |           0 |
| KLB Thypoid                                   |           0 |
| KLB Tifus Perut                               |           0 |
| KLB Typus Perut                               |           0 |
| Kolera                                        |           0 |
| Rubella                                       |           0 |
| Wabah Penyakit (Epidemi)                      |           0 |


## 2. Data tentang Jumlah Kematian Berdasarkan Tahun dan Tipe

A. Pada kasus kali ini, saya akan mengtabulasi silangkan dataset berdasarkan tipe-tipenya yaitu Bencana Alam, Non-Bencana Alam, dan Bencana Sosial.

B. Kita mulai dari Bencana Alam dan Non-Alam pertama buka app script lalu masukkan kode di bawah ini:

```
javascript
function createCrossTabulationByType() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Penyebab Kematian di Indonesia yang Dilaporkan - Clean.csv"); // Ganti dengan nama sheet Anda
  // Get data for each type
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  // Create separate cross-tabulation objects for each type
  var crossTabAlam = {};
  var crossTabNonAlam = {};
  var crossTabSosial = {};
  // Iterate through each row of the data
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var year = "Tahun " + row[2].toString(); // Year column with label
    var type = row[1]; // Type column
    var totalDeath = row[4]; // Total Death column
    // Check the type and add the data to the appropriate cross-tabulation object
    if (type === "Bencana Alam") {
      var key = year;
      if (!crossTabAlam[key]) {
        crossTabAlam[key] = {
          Year: year,
          "Total Death": 0
        };
      }
      crossTabAlam[key]["Total Death"] += totalDeath;
    } else {
      var key = year;
      if (!crossTabNonAlam[key]) {
        crossTabNonAlam[key] = {
          Year: year,
          "Total Death": 0
        };
      }
      crossTabNonAlam[key]["Total Death"] += totalDeath;
    }
  }
  // Convert the cross-tabulation objects into arrays
  var crossTabArrayAlam = Object.values(crossTabAlam);
  var crossTabArrayNonAlam = Object.values(crossTabNonAlam);
  // Sort the arrays by Year
  crossTabArrayAlam.sort(function(a, b) {
    return a.Year.localeCompare(b.Year);
  });
  crossTabArrayNonAlam.sort(function(a, b) {
    return a.Year.localeCompare(b.Year);
  });
  // Write the headers and data to new sheets
  var resultSheetAlam = ss.insertSheet("Death Type: Bencana Alam");
  resultSheetAlam.getRange(1, 1, 1, 2).setValues([["Year", "Total Death"]]);
  var dataRangeResultAlam = resultSheetAlam.getRange(2, 1, crossTabArrayAlam.length, 2);
  var resultValuesAlam = crossTabArrayAlam.map(row => [row["Year"], row["Total Death"]]);
  dataRangeResultAlam.setValues(resultValuesAlam);
  var resultSheetNonAlam = ss.insertSheet("Death Type: Non Bencana Alam");
  resultSheetNonAlam.getRange(1, 1, 1, 2).setValues([["Year", "Total Death"]]);
  var dataRangeResultNonAlam = resultSheetNonAlam.getRange(2, 1, crossTabArrayNonAlam.length, 2);
  var resultValuesNonAlam = crossTabArrayNonAlam.map(row => [row["Year"], row["Total Death"]]);
  dataRangeResultNonAlam.setValues(resultValuesNonAlam);
}
```

setelah jalankan script di atas maka hasil dari tabulasi silang akan menjadi seperti ini

Bencana Alam

| Year      | Total Death |
|-----------|------------:|
| Tahun 2004 |      166698 |
| Tahun 2005 |        1973 |
| Tahun 2006 |        6960 |
| Tahun 2007 |         562 |
| Tahun 2008 |         262 |
| Tahun 2009 |        1447 |
| Tahun 2010 |        1306 |
| Tahun 2011 |         172 |
| Tahun 2012 |         174 |
| Tahun 2015 |         215 |
| Tahun 2016 |         442 |
| Tahun 2017 |         169 |
| Tahun 2018 |        3739 |
| Tahun 2019 |         352 |
| Tahun 2020 |         236 |
| Tahun 2021 |         583 |


Bencana Non-Alam
 
| Year      | Total Death |
|-----------|------------:|
| Tahun 2000 |         339 |
| Tahun 2001 |         324 |
| Tahun 2002 |         435 |
| Tahun 2003 |         633 |
| Tahun 2004 |       54046 |
| Tahun 2005 |      121063 |
| Tahun 2006 |      120105 |
| Tahun 2007 |       88713 |
| Tahun 2008 |      106036 |
| Tahun 2009 |       31677 |
| Tahun 2010 |       37955 |
| Tahun 2011 |        2001 |
| Tahun 2012 |        1660 |
| Tahun 2013 |        1145 |
| Tahun 2014 |        1199 |
| Tahun 2015 |        2141 |
| Tahun 2016 |        2182 |
| Tahun 2017 |         875 |
| Tahun 2018 |        1237 |
| Tahun 2019 |       14345 |
| Tahun 2020 |       37827 |
| Tahun 2021 |      138523 |
| Tahun 2022 |       12876 |


lanjut ke Bencana sosial.
masukkan kode berikut.

```
javascript
function createCrossTabulationByType() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Penyebab Kematian di Indonesia yang Dilaporkan - Clean.csv"); // Ganti dengan nama sheet Anda
  // Get data for each type
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  // Create separate cross-tabulation objects for each type
  var crossTabSosial = {};
  // Iterate through each row of the data
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var year = "Tahun " + row[2].toString(); // Year column with label
    var type = row[1]; // Type column
    var totalDeath = row[4]; // Total Death column
    // Check if the type is "Bencana Sosial" and add the data to the cross-tabulation object
    if (type === "Bencana Sosial") {
      var key = year;
      if (!crossTabSosial[key]) {
        crossTabSosial[key] = {
          Year: year,
          "Total Death": 0
        };
      }
      crossTabSosial[key]["Total Death"] += totalDeath;
    }
  }
  // Convert the cross-tabulation object into an array
  var crossTabArraySosial = Object.values(crossTabSosial);
  // Sort the array by Year
  crossTabArraySosial.sort(function(a, b) {
    return a.Year.localeCompare(b.Year);
  });
  // Write the headers and data to a new sheet
  var resultSheetSosial = ss.insertSheet("Death Type: Bencana Sosial");
  resultSheetSosial.getRange(1, 1, 1, 2).setValues([["Year", "Total Death"]]);
  var dataRangeResultSosial = resultSheetSosial.getRange(2, 1, crossTabArraySosial.length, 2);
  var resultValuesSosial = crossTabArraySosial.map(row => [row["Year"], row["Total Death"]]);
  dataRangeResultSosial.setValues(resultValuesSosial);
}
```

setelah masukkan kode script diatas maka hasilnya akan  sperti ini

| Year      | Total Death |
|-----------|------------:|
| Tahun 2006 |           1 |
| Tahun 2008 |           1 |
| Tahun 2009 |          16 |
| Tahun 2010 |          33 |
| Tahun 2011 |          34 |
| Tahun 2012 |          65 |
| Tahun 2015 |          45 |
| Tahun 2016 |          26 |
| Tahun 2017 |           0 |
| Tahun 2018 |          25 |
| Tahun 2019 |           7 |
| Tahun 2020 |           4 |
| Tahun 2021 |           4 |
