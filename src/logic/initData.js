// initData.js

let current = '';

init();
generateTables();

function init() {
	console.log('initialize data..');
	const emp_tx = document.getElementById('tx-employee');

	// Build placeholder buttons;
	for (var i = 0; i < 20; i++) {
		let btn = document.createElement('button');
		btn.addEventListener('click', selectEmployee);
		btn.setAttribute('class', 'btn-employee');
		var str = "Employee (TX): ";
		var num = (i+1).toString().padStart(2, '0');
		str = str.concat(num);
		btn.innerHTML = str;
		emp_tx.appendChild(btn);
	}
	const emp_np = document.getElementById('np-employee');

	// Add placeholder buttons;
	for (var i = 0; i < 20; i++) {
		// Build temporary button
		let btn = document.createElement('button');
		btn.addEventListener('click', selectEmployee);
		btn.setAttribute('class', 'btn-employee');
		var str = "Employee (NP): ";
		var num = (i+1).toString().padStart(2, '0');
		str = str.concat(num);
		btn.innerHTML = str;
		emp_np.appendChild(btn);
	}
}


function selectEmployee (e) {
	let btn = document.getElementsByClassName('btn-employee');
	var style = getComputedStyle(document.body)
	let col_def = style.getPropertyValue('--light-bg-col');
	let col_sel = style.getPropertyValue('--main-bg-col');

	// Deselect All
	for (var i = 0; i < btn.length; i++) {
		// Reset Color
		btn[i].style.backgroundColor = col_def;
		btn[i].style.color = 'black';
	}
	// Highlight Selected
	e.target.style.backgroundColor = col_sel;
	e.target.style.color = 'white';

	// Set Current Employee
	var emp = document.getElementById('cur-employee');
	current = e.target.innerHTML;
	emp.innerHTML = current;
}

// TODO: Generate Data Tables

function generateTables () {
	var _headerData = ['Cruise Type','Mon','Tue','Wed','Thu','Fri','Sat','Sun','Pay Amt.','Wkly Totals'];
	buildTableHeader(_headerData);

	var _bodyDataHeaders = ["Dates", "Amore", "Amore (+)", "NP Lunch", "NP Lunch (+)", "Antipasto", "Antipasto (+)", "Dinner", "Bellissimo Dinner", "Dessert", "Dessert (+)", "Gondola Experience", "Dolce Experience", "Other Gondolier Hours", "Photography", "Tips"];
	buildTableBody(_bodyDataHeaders, _headerData.length);
}

function buildTableHeader (_names) {
	console.log('Building Week-1 DataTable Header..');

	let div = document.getElementsByClassName('dynamic_dt')[0];
	let table = document.createElement("table");
	let row = document.createElement("tr");
	for (var i = 0; i < _names.length; i++) {
		let cruiseType = document.createElement("th");
		var str = "col-";
		str = str.concat((i+1).toString());
		cruiseType.setAttribute('class', str);
		cruiseType.innerHTML = _names[i];
		row.appendChild(cruiseType)
	}

	// Push Table
	table.appendChild(row);
	div.appendChild(table);
}

function buildTableBody(_header, _cols) {
	console.log('Building Week-1 DataTable Body...');

	let div = document.getElementsByClassName('data-table')[0];
	let table = document.createElement('table');


	_header.forEach((head, index) => {
		let row = document.createElement('tr');
		
		// Build Out TOP Row
		for (var i = 0; i < _cols; i++) {
			var str = "col-";
			str = str.concat((i+1).toString());

			// Add Header
			if (i == 0) {
				let rowHeader = document.createElement('th');
				rowHeader.setAttribute('class', str);
				rowHeader.innerText = head;
				row.appendChild(rowHeader);
			}
			else {
				let rowBody = document.createElement('td');
				rowBody.setAttribute('class', str);
				rowBody.style.backgroundColor = "green";
				rowBody.style.cellpadding = 0;
				rowBody.style.cellspacing = 0;
				if (head != "Dates") {
					let cell_btn = document.createElement('button');
					// TODO: Set Button ID
					//cell_btn.setAttribute('id', 'Amore-wk1-Mon');
					cell_btn.setAttribute('class', 'table-btn');
					cell_btn.addEventListener('click', () => toggle_dataPopup());
					cell_btn.innerText = 'BTN';
					rowBody.appendChild(cell_btn);
				}
				row.appendChild(rowBody);
			}
			// TODO: Update Row Info (Push to Modal)
		}
		
		table.appendChild(row);
	})

	// Push Table
	div.appendChild(table);
}




