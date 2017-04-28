
window.onload=function(){

    document.getElementById("btn").onclick = btnclck;    

    document.getElementById("btn2").onclick = btnjs;

    document.getElementById("srcrep").onclick = srchrepo;

    document.getElementById("createMatrix").onclick = tableCreate;
    

}


//*ex nº 6/7/8

function get(config){
    return new Promise(function(resolve,reject){

        var xhttp = new XMLHttpRequest();
        xhttp.open(config.request,config.url,true);

        xhttp.onload = function(){

            if(xhttp.status == 200){

                resolve(JSON.parse(xhttp.response));

            }else{

                reject(xhttp.statusText);
            }
        };

        xhttp.onerror = function(){

            reject(xhttp.statusText);

        };

        xhttp.send(config.send);
    });
}

function btnclck(){
    let config = {
        url:"http://api.icndb.com/jokes/random",
        request:"GET",
        send:null
    }
    get(config)
    .then(function(j){
            
            document.getElementById("fadeSection").innerHTML = j.value.joke;

     }).catch(function(error){

            document.getElementById("fadeSection").style.color='red';
     });
}   

//*ex nº 09

function btnjs(){
    let config = {
        url:"https://api.github.com/search/repositories?q=JavaScript",
        request:"GET",
        send:null
    }
    get(config)
    .then(function(j){
                
                document.getElementById("list").style.opacity = 1;
            
                
                 for(var i = 0 ; i < j.items.length ; i++){

                    let text = j.items[i].full_name;
                    var node = document.createElement("li");
                    node.setAttribute("id", "lit");
                    
                    node.innerHTML = text;
                    document.getElementById("list").appendChild(node);
                

                }
                document.getElementById("btn2").disabled = true;
                  
    }).catch(function(error){

            alert("ERROR");

    });
}

//*ex nº 10

function srchrepo(){

    let name = document.getElementById("intx").value;

      let config = {
        url:"https://api.github.com/search/repositories?q=JavaScript",
        request:"GET",
        send:null
    }
    get(config)
    .then(function(j){
                
                
            
                
                 for(var i = 0 ; i < j.items.length ; i++){

                    let repo = j.items[i].full_name;
                    if(repo == name){
                       document.getElementById("srchresult").innerHTML = "The "+name+" repository WAS FOUND!";
                       return;
                    }
                 }
                 document.getElementById("srchresult").innerHTML = name+" NOT FOUND! ";
                
                  
    }).catch(function(error){

            alert("ERROR");

    });

}

//ex. nº 12
function tableCreate() {

    let col = document.getElementById("col").value;
    let row = document.getElementById("row").value;
    let divid = document.getElementById("contentLeft");
    var tbl = document.createElement('table');

    tbl.setAttribute('id', 'table');

    for (var i = 0; i < row; i++) {

        var tr = document.createElement('tr');
    
        for (var j = 0; j < col; j++) {

                var rndm = document.createTextNode(Math.floor(Math.random()*10));
                var td = document.createElement('td');
                td.appendChild(rndm);
                tr.appendChild(td)
          
        }
        tbl.appendChild(tr);
    }
    divid.appendChild(tbl)
}