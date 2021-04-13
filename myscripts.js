
function addTable() {
    document.getElementById("myDynamicTable").innerHTML = ""
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < row; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < column; j++) {
        var td = document.createElement('TD');

        td.appendChild(document.createTextNode(""));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
    
  }
