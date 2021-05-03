import {employeesTableHeadTemplate} from "./templates/employees-table-head-template.js";
import {employeesTableBodyTemplate} from './templates/employees-table-body-template.js';
import {handleTableDeleteButtonClick, handleTableSortClick, handleTableUpdateButtonClick} from "../modules/table.js";
import {handleSearchClick} from "../modules/search.js";

export function updateDOMTableBody(data) {
    $('tbody').html(employeesTableBodyTemplate({data}));

    document
        .getElementsByClassName('table')[0]
        .addEventListener('click', handleTableSortClick);

    document
        .getElementById('search-button')
        .addEventListener('click', handleSearchClick);

    $('.deleteBtn').click(event => {
        handleTableDeleteButtonClick(event);
    });

    $('.updateBtn').click(event => {
        handleTableUpdateButtonClick(event);
    });
}

export function updateDOMTableHead(sort) {
    $('#table-head').html(employeesTableHeadTemplate({ sort }));
}

export function getSearchFormData() {
    const name = $('#search-input-name').val();
    const surname = $('#search-input-surname').val();
    return {
        name,
        surname
    };
}


