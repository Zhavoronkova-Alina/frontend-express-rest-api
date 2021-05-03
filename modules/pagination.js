import {getEmployeesList} from "../services/employees-service.js";
import {getPageLinkAriaLabel, getPageNum, updateDOMPagination} from "../DOM/pagination.js";
import {updateTable} from "./table.js";

async function isPageActive(pageNum) {
    if (pageNum < 1) {
        return false;
    }

    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');

    const pageEmployeesList = await getEmployeesList({
        page_num: pageNum,
        name,
        surname
    });

    return pageEmployeesList && pageEmployeesList.length !== 0;
}

export async function handlePaginationClick(event) {
    const pageLinkAriaLabel = getPageLinkAriaLabel(event);

    if (!pageLinkAriaLabel) {
        return;
    }

    let page = getPageNum();
    if (pageLinkAriaLabel === 'Previous') {
        page = page - 1;
    } else {
        page = page + 1;
    }

    await updateTable(page);
    await updatePagination(page);
}

export async function updatePagination(pageNum = 1) {
    const isPrevPageActive = await isPageActive(pageNum - 1);
    const isNextPageActive = await isPageActive(pageNum + 1);

    updateDOMPagination(isPrevPageActive, pageNum, isNextPageActive);
}