import {deleteEmployee, postEmployee, updateEmployee} from "../services/employees-service.js";
import {
    addEventListeners,
    clearCreateModalData, closeCreateModal, closeDeleteModal, closeUpdateModal,
    getCreateModalData, getIdFromUpdateModal, getUpdateModalData,
    linkModals
} from "../DOM/modal.js";
import {updateTable} from "./table.js";

export async function createModalProcess() {
    const employeeData = getCreateModalData();
    //console.log(employeeData);
    const response = await postEmployee(employeeData);

    if (!response.ok) {
        const error = await response.json();
        clearCreateModalData();
        closeCreateModal();
        alert(error.output.payload.message);
        return;
    }

    await updateTable();
    clearCreateModalData();
    closeCreateModal();
}

export async function updateModalProcess() {
    const employeeData = getUpdateModalData();
    const employeeId = getIdFromUpdateModal();
    //console.log(employeeId, employeeData);

    const response = await updateEmployee(employeeId, employeeData);
    if (!response.ok) {
        const error = await response.json();
        closeUpdateModal();
        alert(error.output.payload.message);
        return;
    }

    await updateTable();
    closeUpdateModal();
}

export async function deleteModalProcess(event) {
    const employeeData = sessionStorage.getItem('employeeData').split(',');
    const employeeId = employeeData[0];
    console.log(employeeId);

    const response = await deleteEmployee(employeeId);

    if (!response.ok) {
        const error = await response.json();
        closeDeleteModal();
        alert(error.output.payload.message);
        return;
    }

    await updateTable();
    closeDeleteModal();
}

export async function updateModals() {
    linkModals();
    addEventListeners();
}