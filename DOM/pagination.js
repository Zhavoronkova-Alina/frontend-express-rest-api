import {handlePaginationClick} from "../modules/pagination.js";
import {employeesTablePaginationTemplate} from "./templates/employees-table-pagination-template.js";

export function getPageLinkAriaLabel(event) {
    const pageLink = event.target.closest('.page-link');

    if (!pageLink) {
        return;
    }

    return pageLink.getAttribute('aria-label');
}

export function getPageNum() {
    return Number($('.page-link')[1].innerText);
}

export function updateDOMPagination(isPrevPageActive, page, isNextPageActive) {
    $('.pagination').html(employeesTablePaginationTemplate({ isPrevPageActive, page, isNextPageActive }));

    document
        .getElementsByClassName('pagination')[0]
        .addEventListener('click', handlePaginationClick);
}