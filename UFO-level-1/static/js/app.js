// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var inputField = d3.select("#datetime")
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);



tableData.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

inputField.on("change", function() {
    var newText = d3.event.target.value;
  });

function runEnter() {
    d3.event.preventDefault();
    var inputValue = inputField.property("value");
    var filteredData = tableData.filter((ufos) => ufos.datetime == inputValue);
    tbody.html("")
    filteredData.forEach((weatherReport) => {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};