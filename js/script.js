function table(event){

    event.preventDefault();

    

    //get div id for displaying table
    var table = document.getElementById("t1");
    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;

    //create table and table body
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody")
    

    for (var i = 0; i < rows; i++) {
        // creates a table row
        var row = document.createElement("tr");
    
        for (var j = 0; j < columns; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          var cell = document.createElement("td");
          var cellText = document.createTextNode("Row = "+i+", Column = "+j);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }

    // add the row to the end of the table body
    tblBody.appendChild(row);
}


  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
    table.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
