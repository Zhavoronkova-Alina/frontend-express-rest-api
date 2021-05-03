import {getSearchFormData} from "../DOM/employees-table.js";
import {updatePagination} from "./pagination.js";
import {updateTable} from "./table.js";

export async function handleSearchClick(event) {
    const data = await getSearchFormData();

    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('surname', data.surname);

    await updateTable();
    await updatePagination();
}