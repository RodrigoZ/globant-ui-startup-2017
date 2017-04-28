function go_to_index() {
  window.location.href =
    "file:///home/steve/Desktop/bootcamp/globant-ui-startup-2017/martin/01-JS-DOM-APIs/index.html";
}

function loadXMLDoc() {

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      myObj = JSON.parse(this.responseText);
      document.getElementById("joke").innerHTML = myObj.value.joke;
    }
  };
  xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xmlhttp.send();
}


function get(config) {
  //return a new promise
  return new Promise(
    function(resolve, reject) {
      //do the usual XHR stuff
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', config.url);

      xmlhttp.onload = function() {
        //this is called even on 404 etc
        //so check the status
        if (xmlhttp.status === 200) {
          //resolve the promise with the response text
          resolve(xmlhttp.response);
        } else {
          //otherwise reject with the status text
          //wich will hopefully be a meaningful error
          reject(Error(xmlhttp.statusText));
        }
      };
      //make the request
      xmlhttp.send();
    });
}

function promise_joke() {
  let config = { url: "http://api.icndb.com/jokes/random" };

  get(config)
    //if promise is resolved
    .then(
      function(response) {
        console.log("Success!, response");
        //make the parse of response
        let obj = JSON.parse(response);
        //change content with the .joke value
        document.getElementById("joke").innerHTML = obj.value.joke;
      })
    //or rejected
    .catch(
      function(error) {
        console.error("Failed!", error);
        //red color of warning
        document.getElementById("joke").innerHTML = "Error!";
        document.getElementById("joke").className = "error_section";
      }
    )
}

function load_9() {
  let config = { url: "https://api.github.com/search/repositories?q=JavaScript" };
  get(config)
    //if promise is resolved
    .then(
      function(response) {
        console.log("Success!, response");
        //make the parse of response
        let obj = JSON.parse(response);
        //run all the items array searching for full_name info
        const ul = document.getElementById("full_name_list");
        for (let i = 0; i < obj.items.length; i++) {
          let li = document.createElement("li");
          let value = li.appendChild(document.createTextNode(obj.items[i].full_name));
          console.log(value);
          ul.appendChild(li);
          //this adds new 'li' to the 'ul' in the index.html
        }

      })
    //or rejected
    .catch(
      function(error) {
        console.error("Failed!", error);
      }
    )
}

function exercise_10() {
  //this is extracted from "how to => Filter List" by W3schools

  //declare all the parameters 
  let input = document.getElementById("my_input");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("full_name_list");
  let li = ul.getElementsByTagName("li");
  //this for act as an index that display only the files that match the simbols used to search, 
  //if not, do not display nothing
  for (i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//this creates a 2d matrix with 'random' integer numbers on it between 0 and 100 inclusive.
function create_matrix(rows, colums) {
  const matrix = new Array(rows);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(colums);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = getRandomIntInclusive(0, 100);
    }
  }
  return matrix;
}
//this generates 'random' integer numbers between 'min' and 'max' inclusive.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//the idea is that the matrix entered is numeric only, so it does not have headers or any hierarchical 
//mode of information, just plane numbers which can be reach by coordenates. 
function matrix_to_table(matrix) {
  let table = document.createElement("table");
  for (let i = 0; i < matrix.length; i++) { //going to each row the matrix contains. 
    let table_row = document.createElement("tr");
    for (let j = 0; j < matrix[i].length; j++) { //going to each data the row contains.
      let table_data = document.createElement("td");
      let data = document.createTextNode(matrix[i][j]);
      table_data.appendChild(data);
      table_row.appendChild(table_data);
    }
    table.appendChild(table_row);
  }
  return table;
}

function insert_table() {
  const matrix = create_matrix(3, 4);
  const table = matrix_to_table(matrix);
  document.body.insertBefore(table, document.body.lastChild);
}