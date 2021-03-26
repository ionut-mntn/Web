function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    // !!!! de implementat aici si invers sa sorteze tabelul !!!!!!
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[c];
            y = rows[i + 1].getElementsByTagName("td")[c];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function item(c) {
    return function () {
        sortTable(c);
    }
}

th = document.getElementsByTagName('th');
for (let c = 0; c < th.length; c++) {
    th[c].addEventListener('click', item(c)); // on click, apply sortTable!!
}

console.log('proba man');






// /**
//  * Sorts a HTML table.
//  * 
//  * @param {HTMLTableElement} table The table to sort
//  * @param {number} column The index of the column to sort
//  * @param {boolean} asc Determines if the sorting will be in ascending
//  */

// function sortTableByColumn(table, column, asc = true) {
//     const dirModifier = asc ? 1 : -1;
//     const tBody = table.tBodies[0];
//     const rows = Array.from(tBody.querySelectorAll("tr"));

//     // Sort each row
//     const sortedRows = rows.sort((a, b) => {
//         const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
//         const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

//         return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
//     });

//     // Remove all existing TRs from the table
//     while (tBody.firstChild) {
//         tBody.removeChild(tBody.firstChild);
//     }

//     // Re-add the newly sorted rows
//     tBody.append(...sortedRows);

//     // Remember how the column is currently sorted
//     table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
//     table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
//     table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

//     document.querySelectorAll(".table-sortable th").forEach(headerCell => {
//         headerCell.addEventListener("click", () => {
//             const tableElement = headerCell.parentElement.parentElement.parentElement;
//             const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
//             const currentIsAscending = headerCell.classList.contains("th-sort-asc");

//             sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
//         });
//     });
// }
// sortTableByColumn(document.querySelector("table"), 1);