export const employeesTablePaginationTemplate = _.template(
    `
        <%if (isPrevPageActive) {%>
            <li class="page-item">
                <a class="page-link text-success" href="#" aria-label="Previous">
                    Previous
                </a>
            </li>
        <% } else { %>
            <li class="page-item disabled">
                <a class="page-link text-success">
                    Previous
                </a>
            </li>
        <% } %>
        
        <li class="page-item disabled" aria-current="page">
            <a class="page-link text-success" href="#" aria-label="Next">
                <%- page %>
            </a>
        </li>
        
        <%if (isNextPageActive) {%>
            <li class="page-item">
                <a class="page-link text-success" href="#" aria-label="Next">
                    Next
                </a>
            </li>
        <% } else { %>
            <li class="page-item disabled">
                <a class="page-link text-success">
                    Next
                </a>
            </li>
        <% } %>
    `
);