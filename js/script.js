function table(event){

    event.preventDefault();

    var table = document.getElementById("t1");
    var newTable = document.createElement("TABLE");
    newTable.setAttribute("id", "myTable");

    table.appendChild(newTable);

    var y = document.createElement("TR");
    var y1 = y.createTextNode("Name", "Email", "URl");
    y1.setAttribute("id", "myTr");
    document.table.appendChild(y1);




    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);


}