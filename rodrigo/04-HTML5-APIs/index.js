document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("btnSave").addEventListener("click", Save);
  document.getElementById("btnDelete").addEventListener("click", Delete);
  document.getElementById("btnShow").addEventListener("click", Show);

  //DRAG AND DROP
  let holder = document.getElementById("textContent");

  holder.ondragover = function(e) {
    e.preventDefault();
  };

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

let request = indexedDB.open("database");
let db;

request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  db = request.result;
  let store = db.createObjectStore("textResult", {autoIncrement: true});
}

request.onsuccess = function() {
  db = request.result;
};

function Save() {
  SaveDB();
  SaveLocal();
}

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

function SaveLocal() {
  let content = document.getElementById("textContent").value;
  localStorage.setItem("text", content);
}

function Show() {
  ShowDB();
  ShowLocal();
}

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

function ShowLocal() {
  console.log("Local data: " + localStorage.getItem("text"));
  document.getElementById("showLocalText").innerHTML = localStorage.getItem("text");
}

function Delete() {
  DeleteDB();
  DeleteLocal();
  ClearText();
}

function DeleteDB() {
  let tx = db.transaction(["textResult"], "readwrite").objectStore("textResult").clear();
  tx.onsuccess = function(event) {
    console.log("Data has been removed from your database.");
  };

}

function DeleteLocal() {
  localStorage.removeItem("text");
}

function ClearText() {
  document.getElementById("showDBText").innerHTML = "";
  document.getElementById("showLocalText").innerHTML = "";
  document.getElementById("textContent").value = "";
}
