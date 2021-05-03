export const employeesModalUpdateTemplate = _.template(
    `
    <div class="modal-dialog modal-dialog-centered" role="dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateModalLabel">Update employee</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeUpdateModalButton">
                        <span aria-hiden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="updateInputId" class="form-label">ID</label>
                            <input type="text" class="form-control" id="updateInputId" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="updateInputName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="updateInputName">
                        </div>
                        <div class="mb-3">
                            <label for="updateInputSurname" class="form-label">Surname</label>
                            <input type="text" class="form-control" id="updateInputSurname" required>
                        </div>
                        <div class="mb-3">
                            <label for="updateInputBirthDate" class="form-label">Birth date</label>
                            <input type="date" class="form-control" id="updateInputBirthDate" value="2000-01-01" min="1900-01-01" max="2021-04-22">
                        </div>
                        <div class="mb-3">
                            <label for="updateInputPosition" class="form-label">Position</label>
                            <select class="form-select" id="updateInputPosition">
                                <option selected value="Junior Software Engineer">Junior Software Engineer</option>
                                <option value="Middle Software Engineer">Middle Software Engineer</option>
                                <option value="Senior Software Engineer">Senior Software Engineer</option>
                                <option value="Lead Software Engineer">Lead Software Engineer</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="updateInputSalary" class="form-label">Salary</label>
                            <input type="number" class="form-control" id="updateInputSalary">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="updateModalCancelButton">Cancel</button>
                    <button type="submit" class="btn btn-success" id="updateModalUpdateButton" class="close" data-bs-dismiss="modal" aria-label="Close">Update</button>
                </div>
            </div>
        </div>
    `
);