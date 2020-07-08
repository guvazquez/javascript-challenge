// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var dateInputField = d3.select("#datetime")
var cityInputField = d3.select("#city")
var stateInputField = d3.select("#state")
var countryInputField = d3.select("#country")
var shapeInputField = d3.select("#shape")
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);


// Load complete data
tableData.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Load values as they are changed
dateInputField.on("change", function() {
    var dateText = d3.event.target.value;
  });
cityInputField.on("change", function() {
    var cityText = d3.event.target.value;
  });
stateInputField.on("change", function() {
    var stateText = d3.event.target.value;
  });
countryInputField.on("change", function() {
    var countryText = d3.event.target.value;
  });
shapeInputField.on("change", function() {
    var shapetext = d3.event.target.value;
  });



function runEnter() {
    d3.event.preventDefault();
    var dateinputValue = dateInputField.property("value");
    var cityinputValue = cityInputField.property("value");
    var stateinputValue = stateInputField.property("value");
    var countryinputValue = countryInputField.property("value");
    var shapeinputValue = shapeInputField.property("value");
    //Verify in each input if a value was set and filter based on that value, otherwise go to the next validation
    if (dateinputValue != ""){
      var datefilteredData = tableData.filter((ufos) => ufos.datetime === dateinputValue);
    }else{
      datefilteredData = tableData
    }
    if (cityinputValue != ""){
      var cityfilteredData = datefilteredData.filter((ufos) => ufos.city === cityinputValue);
    }else{
      cityfilteredData = datefilteredData
    }
    if (stateinputValue != ""){
      var statefilteredData = cityfilteredData.filter((ufos) => ufos.state === stateinputValue);
    }else{
      statefilteredData = cityfilteredData
    }
    if (countryinputValue != ""){
      var countryfilteredData = statefilteredData.filter((ufos) => ufos.country === countryinputValue);
    }else{
      countryfilteredData = statefilteredData
    }
    if (shapeinputValue != ""){
      var shapefilteredData = countryfilteredData.filter((ufos) => ufos.shape === shapeinputValue);
    }else{
      shapefilteredData = countryfilteredData
    }
    // clean the body and insert filtered data
    tbody.html("")
    shapefilteredData.forEach((weatherReport) => {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};