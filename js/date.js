function returnDate(){
	var monthIdx = ["Jan.", "Feb.", "Mar.", "Apr.",
									"May" , "Jun.", "Jul.", "Aug.",
									"Sep.", "Oct.", "Nov.", "Dec."];

	var now  = new Date();

	var day   = now.getDate();
	var month = now.getMonth();
	var year  = now.getFullYear();

	var x = now.toTimeString();

	return monthIdx[month] + " " + day + ", " + year /*+ ", " + hour + ":" + min + ":" + sec*/;
}
