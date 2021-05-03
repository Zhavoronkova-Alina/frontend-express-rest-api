export const employeesTableBodyTemplate = _.template(
    `
    <% data.forEach(row => { %>
        <tr>
          <td scope="row" class="ID"><%- row.id %></td>
          <td><%- row.name %></td>
          <td><%- row.surname %></td>
          <td><%- row.birthDate %></td>
          <td><%- row.position %></td>
          <td><%- row.salary %></td>
          <td>
                <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-warning updateBtn" data-bs-toggle="modal" data-bs-target="#updateModal">
                        <i class="fas fa-user-cog"></i>
                    </button>
                    <button type="button" class="btn btn-danger deleteBtn" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <i class="fas fa-trash-alt"></i>
                    </button> 
                </div>         
          </td>
        </tr>
    <% }); %>
    `
);
