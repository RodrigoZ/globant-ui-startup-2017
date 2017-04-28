window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById("hello-world").className = "";
    }, 1000);
    document.getElementById("promises").addEventListener('click', some);
    document.getElementById("table").addEventListener('click', matrixGenerate);
    document.getElementById("plus").addEventListener('click', moreFields);
    document.getElementById("method").addEventListener('click', showRequestHeader)
});

function loadJoke(config) {
    /*Return a new promise*/
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        if (config.method === "POST") {
            xhttp.open(config.method, config.url, config.async);
            xhttp.setRequestHeader(config.header, config.val);
        } else {        
            xhttp.open(config.method, config.url + config.parameters, config.async);
        }
        
        xhttp.onload = function() {
            if (xhttp.status === 200) {
                resolve(xhttp.response);
            } else {
                reject(Error(xhttp.statusText));   
            }
        };

        /* Handle network error */
        xhttp.onerror = function() {
            reject(Error("Network Error"));
        };

        /* Make the request */
        if (config.method==="POST") {
            xhttp.send(config.parameters);
        } else {
            xhttp.send();
        }
    });
}

function some() {
    var dir = document.getElementById("url").value;
    var meth = document.getElementById("method").value;
    var id_text = "joke";
    var id_title = "j-title";
    var text = document.getElementById(id_text);
    var title = document.getElementById(id_title);
    var concat="";
    var result="";
    var temp="";
    var config = {
        method: meth,
        url: dir,
        async: true,
        header:'',
        val:'',
        parameters: ''
    };
    /* Add all the parameters from the multiple boxes added. */
    if (config.method === "GET") {
        concat = "?";        
        result = "?";
    } else {
        concat = "&";
    }
    var amount = document.getElementById("d-fields-section").childElementCount;
    for (i=0; i<amount; i++) {
        if (document.getElementById("d-field"+i).value != "") {
            result += document.getElementById("d-field"+i).value+concat;
            config.parameters = result.slice(0,-1);
        }
    }
    if (config.method === "POST") {
        config.header = document.getElementById("header").value;
        config.val = document.getElementById("value").value;
        console.log(config);

    }

    /*  Run or fulfill the promise. (No catch function, i use the 
        second value of then for that) */
    loadJoke(config).
    then(function(response) {
        var obj = JSON.parse(response);
        /* Reset color */
        if (hasClass("content", "red-text")) {
            removeClass("content", "red-text");
            addClass("content", "black-text");
        }
        if (config.url == 'http://api.icndb.com/jokes/random') {
            title.innerHTML = "What a Joke!";
            text.innerHTML = obj.value.joke;
        } else if (config.url+config.parameters == "https://api.github.com/search/repositories?q='JavaScript'"){
            for (var i = 0; i < obj.items.length; i++) {
                document.getElementById("list").innerHTML += "<li>" + obj.items[i].full_name + "</li>";
            }
            title.innerHTML = "Look Right!";
            text.innerHTML = "------>";
        } else {
            title.innerHTML = "This is what i've got";
            text.innerHTML = obj;            
        }
    },
    function(error) {
        text.innerHTML = error;
        title.innerHTML = "Something went WRONG!";
        if (hasClass("content", "black-text")) {
            removeClass("content", "black-text");
        }
        addClass("content","red-text");
    })
}

/* Matrix generation */

function rand(max) {
    return Math.floor((Math.random() * max) + 1)
}

function matrixGenerate() {
    var cols = rand(7);
    var rows = rand(7);
    var matrix = [];
    var temp;
    for (var i=0; i<rows; i++) {
    temp = [];
        for (var j=0; j<cols; j++) {
            temp.push(rand(100));
        }
        matrix.push(temp);
    }
    toTable(matrix);
}

function toTable(matrix) {
    var newTable = document.getElementById("newTable");
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    matrix.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    if (newTable.innerHTML != "") {
        newTable.innerHTML = "";
    }
    newTable.appendChild(table);
    removeClass("newTable", "hide");
}


/* Class Functions */

function addClass(idobj, classname) {
    document.getElementById(idobj).className = classname;
}

function removeClass(idobj, classname) {
    var obj = document.getElementById(idobj);
    obj.classList.remove(classname);
}

function hasClass(idobj, classname) {
    var obj = document.getElementById(idobj);
    return obj.classList.contains(classname);    
}


/* Implementing fields creation */

function moreFields() {
    var section = document.getElementById("d-fields-section");
    var obj = document.getElementById("d-field0");
    var amount = section.childElementCount;
    if (amount < 5) {
        var clone = obj.cloneNode(true);
        clone.id = "d-field" + amount;
        section.appendChild(clone);
    } else {
        alert("TOO MANY FIELDS BRAH!");
    }
}

/* Show the fields of request header */

function showRequestHeader() {
    if (document.getElementById("method").value == "POST") {
        removeClass("request-header", "hide");
    } else {
        addClass("request-header", "hide");
    }
}

