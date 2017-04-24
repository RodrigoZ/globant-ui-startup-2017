document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("btnSave").addEventListener("click", Save);
  document.getElementById("btnDelete").addEventListener("click", Delete);
  document.getElementById("btnShow").addEventListener("click", Show);

  /*
  DRAG AND DROP
   */
  let holder = document.getElementById("textContent");

  holder.ondragover = function(e) {
    e.preventDefault();
  };

/**
 * [When the user drops a file on the textarea, its value will be changed to what the file contains]
 */
  holder.ondrop = function(e) {
    e.preventDefault();

    let file = e.dataTransfer.files[0],
      reader = new FileReader();
    reader.onload = function(event) {
      console.log(event.target);
      holder.value = event.target.result;
    };
    console.log(file);
    reader.readAsText(file);
    return false;
  };

});

//Prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//Prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of indexedDB.")
}

let request = indexedDB.open("database");
let db;

/**
 * [The database did not previously exist, so we create object stores and indexes.]
 */
request.onupgradeneeded = function() {
  db = request.result;
  let store = db.createObjectStore("textResult", {autoIncrement: true});
}

request.onsuccess = function() {
  db = request.result;
};

/**
 * [Save description: Calls the corresponding Save method on the indexedDB and localStorage. Gives the functions high cohesion]
 */
function Save() {
  SaveDB();
  SaveLocal();
}

/**
 * [SaveDB description: Stores the data given by the textarea element on an indexedDB]
 */
function SaveDB() {
  let content = document.getElementById("textContent").value;
  let tx = db.transaction(["textResult"], "readwrite").objectStore("textResult").add({content: content});
  console.log(tx);

  tx.onsuccess = function(event) {
    console.log("Data has been added to your database.");
  };

  tx.onerror = function(event) {
    console.log("Unable to add, data is already in your database!");
  }
}

/**
 * [SaveLocal description: Stores the data given by the textarea element on a localStorage]
 */
function SaveLocal() {
  let content = document.getElementById("textContent").value;
  localStorage.setItem("text", content);
}

/**
 * [Show description: Calls the corresponding Show method on the indexedDB and localStorage. ]
 */
function Show() {
  ShowDB();
  ShowLocal();
}

/**
 * [ShowDB description: Shows on console the data stored on indexedDB]
 */
function ShowDB() {
  let tx = db.transaction(["textResult"]).objectStore("textResult");
  // We can show a specific single object with: db.transaction(["textResult"]).objectStore("textResult").get([insert object index]);
  tx.openCursor().onsuccess = function(event) {
    let cursor = event.target.result;
    if (cursor) {
      console.log("SUCCESS " + cursor.value.content);
      document.getElementById("showDBText").innerHTML = cursor.value.content;
      cursor.continue();
    } else {
      console.log("No more entries");
    }
  }
}

/**
 * [ShowLocal description: Shows on console the data stored on localStorage]
 */
function ShowLocal() {
  console.log("Local data: " + localStorage.getItem("text"));
  document.getElementById("showLocalText").innerHTML = localStorage.getItem("text");
}

/**
 * [Delete description: Calls the Delete's methods on the indexedDB and localStorage, then cleans the HTML elements]
 */
function Delete() {
  DeleteDB();
  DeleteLocal();
  ClearText();
}

/**
 * [DeleteDB description: Deletes the indexedDB data, shows a success event on console]
 */
function DeleteDB() {
  let tx = db.transaction(["textResult"], "readwrite").objectStore("textResult").clear();
  tx.onsuccess = function(event) {
    console.log("Data has been removed from your database.");
  };

}

/**
 * [DeleteLocal description: Deletes the localStorage data]
 */
function DeleteLocal() {
  localStorage.removeItem("text");
}

/**
 * [ClearText description: Clears the HTML element's indicated by their id's]
 */
function ClearText() {
  document.getElementById("showDBText").innerHTML = "";
  document.getElementById("showLocalText").innerHTML = "";
  document.getElementById("textContent").value = "";
}
