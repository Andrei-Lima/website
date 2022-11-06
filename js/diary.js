const list = document.getElementById("quote-list");
let offset = 0;
const quote_list = [
	{string:"i hung out with my friends, i'm happy :)",date:"05/nov/2022",},
	{string:"today i ate a hamburguer",date:"06/nov/2022",},
	{string:"",date:"",},
	{string:"",date:"",},
	{string:"",date:"",},
];

function c(n) {
	return offset += n;
}

window.onload = () => {
	show_diary();
}

function show_diary() {
	for(let i = 0; i < 5; i++) {
		var quote = quote_list[(offset*5)+i];
		document.getElementById(i).innerHTML = quote.string+" "+quote.date;
	}
}



