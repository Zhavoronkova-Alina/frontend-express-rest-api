import {updateTable} from "./modules/table.js";
import {updatePagination} from "./modules/pagination.js";
import {updateModals} from "./modules/modal.js";

(async () => {
    await updateTable(1);
    await updatePagination(1);
    await updateModals();
})();
