window.onload = function(){			
				document.getElementById("btnMat").addEventListener("click", createMatrix);
			}

let createMatrix = function(){
	let rows = document.getElementById("rows").value;
	let cols = document.getElementById("cols").value;
	let maxVal = document.getElementById("maxVal").value;	
	var arr = [];
	for(var i=0; i < rows; i++){      
    	arr.push([]);					// Creates an empty line
		arr[i].push( new Array(cols));		// Adds cols to the empty line
	    for(var j=0; j < cols; j++){	      
	        arr[i][j] = Math.round(Math.random() * maxVal);	  // Initializes
	    }
  	}
	console.log(arr);
	toTable(arr);

}

let toTable = function(arr){

	const wrapper = document.getElementById("tableWrap");		 
	const table = document.createElement("table");		 	
	
	for (var i = 0; i < arr.length; i++) {
		const row = document.createElement("tr");			
		for (var j = 0; j < arr[1].length; j++) {
			const td = document.createElement("td");		
			let data = document.createTextNode(arr[i][j]);
			td.appendChild(data);
			row.appendChild(td);
		}
		table.appendChild(row);
	}
	wrapper.appendChild(table);
}

