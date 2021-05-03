import {getEmployeesList} from "../services/employees-service.js";
import {getPageNum} from "../DOM/pagination.js";
import {updateDOMTableBody, updateDOMTableHead} from "../DOM/employees-table.js";
import {fillUpdateModalData} from "../DOM/modal.js";

export async function handleTableSortClick(event) {
    const target = event.target;

    if (target.closest('.fa-sort-amount-down-alt')) {
        sessionStorage.setItem('sort', 'desc');
        await updateTable();
    }

    if (target.closest('.fa-sort-amount-up-alt')) {
        sessionStorage.setItem('sort', 'asc');
        await updateTable();
    }
}

export function handleTableDeleteButtonClick(event) {
    const employeeData = getRowData(event);
    sessionStorage.setItem('employeeData', employeeData);
}

export function handleTableUpdateButtonClick(event) {
    const employeeData = getRowData(event);
    sessionStorage.setItem('employeeData', employeeData);
    fillUpdateModalData();
}

function getRowData(event) {
    const target = event.target;
    const employeeData = Object
        .values(target.closest('tr').children)
        .map(td => td.innerText);
    return employeeData;
}

export async function updateTable(pageNum = getPageNum()) {
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const sort = sessionStorage.getItem('sort');

    const employeesList = await getEmployeesList({
        page_num: pageNum,
        name,
        surname,
        sort_param: sort});

    updateDOMTableHead(sort);
    updateDOMTableBody(employeesList);
}