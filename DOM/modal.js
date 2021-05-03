import {createModalProcess, updateModalProcess, deleteModalProcess} from "../modules/modal.js";
import {employeesModalUpdateTemplate} from "./templates/employees-modal-update-template.js";
import {employeesModalCreateTemplate} from "./templates/employees-modal-create-template.js";
import {employeesModalDeleteTemplate} from "./templates/employees-modal-delete-template.js";

export function getUpdateModalData() {
    return {
        name: $('#updateInputName').val(),
        surname: $('#updateInputSurname').val(),
        birthDate: transformDateDirect($('#updateInputBirthDate').val()),
        position: $('#updateInputPosition').val(),
        salary: parseInt($('#updateInputSalary').val(), 10)
    };
}

export function getIdFromUpdateModal() {
    return $('#updateInputId').val();
}

export function fillUpdateModalData() {
    const employeeData = sessionStorage.getItem('employeeData').split(',');
    document.getElementById("updateInputId").value = employeeData[0];
    document.getElementById("updateInputName").value = employeeData[1];
    document.getElementById("updateInputSurname").value = employeeData[2];
    document.getElementById("updateInputBirthDate").value = transformDateReverse(employeeData[3]);
    document.getElementById("updateInputPosition").value = employeeData[4];
    document.getElementById("updateInputSalary").value = employeeData[5];
}

export function getCreateModalData() {
    return {
        name: $('#createInputName').val(),
        surname: $('#createInputSurname').val(),
        birthDate: transformDateDirect($('#createInputBirthDate').val()),
        position: $('#createInputPosition').val(),
        salary: parseInt($('#createInputSalary').val(), 10)
    };
}

export function clearCreateModalData() {
    document.getElementById("createInputName").value = "";
    document.getElementById("createInputSurname").value = "";
    document.getElementById("createInputBirthDate").value = "2000-01-01";
    document.getElementById("createInputPosition").value = "Junior Software Engineer";
    document.getElementById("createInputSalary").value = "";
}

export function linkModals() {
    $('#createModal').html(employeesModalCreateTemplate);
    $('#updateModal').html(employeesModalUpdateTemplate);
    $('#deleteModal').html(employeesModalDeleteTemplate);
}

export function addEventListeners() {
    $('#createButton').on('click', function () {
        $('#createModal').modal('show');
    });

    document.getElementById('createModal').addEventListener('click', addCreateModalEventListeners);
    document.getElementById('deleteModal').addEventListener('click', addDeleteModalEventListeners);
    document.getElementById('updateModal').addEventListener('click', addUpdateModalEventListeners);
}

function addCreateModalEventListeners(event) {
    document
        .getElementById('createModalSubmitButton')
        .addEventListener('click', createModalProcess);

    $('#createModalCloseButton').on('click', function () {
        $('#createModal').modal('hide');
        clearCreateModalData();
    });
}

function addDeleteModalEventListeners(event) {
    document
        .getElementById('deleteModalYesButton')
        .addEventListener('click', deleteModalProcess);
}

function addUpdateModalEventListeners(event) {
    document
        .getElementById('updateModalUpdateButton')
        .addEventListener('click', updateModalProcess);
}

export function closeDeleteModal() {
    $('#deleteModal').modal('hide');
}

export function closeUpdateModal() {
    $('#updateModal').modal('hide');
}

export function closeCreateModal() {
    $('#createModal').modal('hide');
}

function transformDateDirect(strDate) {
    // original date is '1999-02-01'
    // transform it to '01.02.1999'
    return strDate[8] + strDate[9] + '.' + strDate[5] + strDate[6] + '.' + strDate[0] + strDate[1] + strDate[2] + strDate[3];
}

function transformDateReverse(strDate) {
    // original date is '01.02.1999'
    // transform it to '1999-02-01'
    return strDate[6] + strDate[7] + strDate[8] + strDate[9] + '-' + strDate[3] + strDate[4] + '-' + strDate[0] + strDate[1];
}