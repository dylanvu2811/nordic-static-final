import base from "./base.js";

class ProductApi extends base {
    getResourceName() {
        return 'products';
    }
}
const productApi = new ProductApi();
export default productApi;