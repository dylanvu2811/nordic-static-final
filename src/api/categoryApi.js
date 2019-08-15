import base from "./base.js";

class CategoryApi extends base {
    getResourceName() {
        return 'categories';
    }
}
const categoryApi = new CategoryApi();
export default categoryApi;