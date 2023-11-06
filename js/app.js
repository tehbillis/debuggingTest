function locationInfo() {
  alert("Location Info Generated");
}

function createTable() {
  alert("Table Generated");
}

const pathName = window.location.pathname;
if (pathName === "/index.html" || pathName === "/") {
  locationInfo();
} else if (pathName === "/sales.html") {
  createTable();
}

console.log(pathName);
alert(pathName);
