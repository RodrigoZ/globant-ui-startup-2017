let config = {
					"method": "",
					"url": "",
					"q": "", 
				}



window.onload = function(){		
			document.getElementById("btnGetJoke").addEventListener("click", getJoke2);
			document.getElementById("btnSearchGitHub").addEventListener("click", getNames);
		//	document.getElementById("divForJoke").classList.remove('hiddenDivForJoke');
			document.getElementById("divForJoke").classList.add('visibleDivForJoke');
}



//topic 1 - ex. 6
let getJoke = function getJoke(){
		let req = new XMLHttpRequest();
		req.open('GET', "http://api.icndb.com/jokes/random", true);
		req.onload = function () {
	        	if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
	        		let jsonResp = JSON.parse(req.responseText);
	        		document.getElementById('hiddenDivForJoke').innerHTML = jsonResp.value.joke;
	        }
	    };
		req.send();
};

//topic 1 - ex. 7
let promiseFunct = function promiseFunct(config){
	let prom = new Promise(function(resolve, reject){
		let req = new XMLHttpRequest();
		req.open(config.method, config.url);
		req.onload = function(){
			if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
				resolve(req.response)
			}
			else{
				reject(Error(req.statusText));
			}
		};

		 // Handle network errors
		req.onerror = function() {
			reject(Error("Network Error"));
		};

		req.send();
	});

	return prom;
};

let getJoke2 = function getJoke2(){
	config.method = "GET";
	config.url = "http://api.icndb.com/jokes/random";
	promiseFunct(config)
		.then(function(response){			
			let jsonResp = JSON.parse(response);
			document.getElementById('divForJoke').innerHTML = jsonResp.value.joke;
	        document.getElementById('divForJoke').classList.add('jokeOK');
		})
		.catch(function(error) {
			console.error("Failed!", error);
			document.getElementById('divForJoke').innerHTML = "ERROR!";
	        document.getElementById('divForJoke').classList.add('jokeError');		
		})						
};

//topic 1 - ex. 9
let getNames = function getNames(){	
	config.method = "GET";
	config.q = document.getElementById('queryBox').value;
	config.url = "https://api.github.com/search/repositories?q="+config.q;
	promiseFunct(config)
	.then(function(response){
		let list = document.createElement("ul");
		let respJson = JSON.parse(response);
		for (let obj in respJson.items){
			const li = document.createElement("li");
			let text = document.createTextNode(respJson.items[obj].full_name);
			li.appendChild(text);
			list.appendChild(li);
            }
        const listWrap = document.getElementById('listWrapper').appendChild(list);   
        listWrap.className = "list";
        
	})
	.catch(function(error) {
		console.error("Failed!", error);	  				
  	})		
					
};

