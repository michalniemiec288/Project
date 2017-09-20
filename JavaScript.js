const URL = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers';
let myHeader = new Headers();
let fetchData = {
  headers: myHeader
}
var table = document.getElementById("mytable");
myHeader.append('X-Mashape-Key' ,'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw')

var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = 'POZYCJA';
cell2.innerHTML = 'ZAWODNIK';
cell3.innerHTML = 'GOLE';
row.classList.add('row');
cell1.classList.add('centered');
cell3.classList.add('centered');

fetch(URL,fetchData)
.then(
  (res)=>{
	return res.json();
  }
)
.then((data)=>{
	console.log("Calosc response", data);
  console.log("Jeden zawodnik", data.data.topscorers[0]);

  for(i = 1 ; i <= 10 ; i++){
	  console.log('tabela',table)
	var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = '<div class="separator">' + i + '</div>';
	cell2.innerHTML = '<div class="separator">' + data.data.topscorers[i-1].fullname + '</div>';
	cell3.innerHTML = data.data.topscorers[i-1].goals;
	cell1.classList.add('centered');
	cell3.classList.add('centered');
  }
})
