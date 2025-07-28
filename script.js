//your JS code here. If required.
function daysOfAYear(year){
	if(year%4==0){
		if(year%100==0){
			if(year%400==0){
				console.log("365");
			}
		}else{
			console.log("365");
		}
	}else{
		console.log("366");
	}
}

let year = Number(prompt("Enter the year:"));
daysOfAYear(year);