// customTabs.js

// Hide 'Cruise Tab' on launch
document.getElementById('week-1-data').style.display = 'none';
document.getElementById('week-2-data').style.display = 'none';
function tab_btn(id) {
	const totals = document.getElementById('totals-data');
	const week_1 = document.getElementById('week-1-data');
	const week_2 = document.getElementById('week-2-data');

	switch (id) {
		case 'totals-tab':
			totals.style.display = 'flex';
			week_1.style.display = 'none';
			week_2.style.display = 'none';
			break;
		case 'week-1-tab':
			totals.style.display = 'none';
			week_1.style.display = 'flex';
			week_2.style.display = 'none';
			break;
		case 'week-2-tab':
			totals.style.display = 'none';
			week_1.style.display = 'none';
			week_2.style.display = 'flex';
			break;
	}
}

// TODO: Highlight Selected Tab


function set_table() {
	let table = document.getElementById('wk-1-table');

	_body = table.getElementsByTagName("tbody")[0];
	_row = _body.getElementsByTagName("tr");
	
	// Loop through Rows
	for (let i = 0; i < _row.length; i++) {
		_cell = _row[i].getElementsByTagName("th");
		console.log(_cell[0]);
	}
}
