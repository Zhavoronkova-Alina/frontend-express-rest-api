export const employeesTableHeadTemplate = _.template(
    `
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Birthday</th>
        <th scope="col">Position</th>
        <th scope="col" aria-label="sort">
            Salary
            <% if (sort === 'asc') { %>
                <i class="fas fa-sort-amount-down-alt"></i>
            <% } else { %>
                <i class="fas fa-sort-amount-up-alt"></i>
            <% } %>
        </th>
        <th scope="col">Options</th>
    </tr>
    `
);