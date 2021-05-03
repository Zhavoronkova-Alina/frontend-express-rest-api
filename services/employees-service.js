import { baseUrl } from "../config.js";

export async function getEmployeesList(options) {
    const url = getUrl(baseUrl, options);
    const params = {
        method: 'GET',
    };

    const response = await fetch(url, params);

    if (!response.ok) {
        return;
    }
    const employeesData = await response.json();
    return employeesData;
}

export async function postEmployee(data) {
    const url = baseUrl;
    const params = {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)
    };

    console.log(data);

    const response = await fetch(url, params);
    return response;
}

export async function updateEmployee(id, data) {
    const url = `${baseUrl}/${id}`;
    const params = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)
    };

    const response = await fetch(url, params);
    return response;
}

export async function deleteEmployee(id) {
    const url = `${baseUrl}/${id}`;
    const params = {
        method: 'DELETE'
    };

    const response = await fetch(url, params);
    return response;
}

function getUrl(baseUrl, params) {
    const nonEmptyQueryParams = Object.fromEntries(
        Object
            .entries(params)
            .filter(([_, value]) => value)
    );

    let url = new URL(baseUrl);

    Object
        .entries(nonEmptyQueryParams)
        .forEach(([name, value]) => url.searchParams.append(name, value));
    return url;
}
