function locationInfo() {
  alert("Location Info Generated");
}

function createTable() {
  alert("Table Generated");
}

const pathName = window.location.pathname;
if (pathName === "/debuggingTest/index.html" || pathName === "/debuggingTest/") {
  locationInfo();
} else if (pathName === "/debuggingTest/test.html") {
  createTable();
}

console.log(pathName);
