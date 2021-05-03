export const employeesModalCreateTemplate = _.template(
    `
            <div class="modal-dialog modal-dialog-centered" role="dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createModalLabel">Create employee</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="createModalCloseButton">
                        <span aria-hiden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="createInputName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="createInputName">
                        </div>
                        <div class="mb-3">
                            <label for="createInputSurname" class="form-label">Surname</label>
                            <input type="text" class="form-control" id="createInputSurname" required>
                        </div>
                        <div class="mb-3">
                            <label for="createInputBirthDate" class="form-label">Birth date</label>
                            <input type="date" class="form-control" id="createInputBirthDate" value="2000-01-01" min="1900-01-01" max="2021-04-22">
                        </div>
                        <div class="mb-3">
                            <label for="createInputPosition" class="form-label">Position</label>
                            <select class="form-select" id="createInputPosition">
                                <option selected value="Junior Software Engineer">Junior Software Engineer</option>
                                <option value="Middle Software Engineer">Middle Software Engineer</option>
                                <option value="Senior Software Engineer">Senior Software Engineer</option>
                                <option value="Lead Software Engineer">Lead Software Engineer</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="createInputSalary" class="form-label">Salary</label>
                            <input type="number" class="form-control" id="createInputSalary">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success" id="createModalSubmitButton" class="close" data-bs-dismiss="modal" aria-label="Close">Submit</button>
                </div>
            </div>
        </div>
    `
);