export const employeesModalDeleteTemplate = _.template(
    `
    <div class="modal-dialog modal-dialog-centered" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">Delete employee</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="deleteModalCloseButton">
                    <span aria-hiden="true"></span>
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to delete this employee?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="deleteModalNoButton">No</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="deleteModalYesButton">Yes</button>
            </div>
        </div>
    </div>
    `
);