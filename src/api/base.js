import fetchClient from "./fetchClient.js";
import AppConstants from "../appConstants.js";

class Base {
    // getAll() {
    //     const url = `${AppConstants.API_URL}/${this.getResourceName()}`;
    //     return fetchClient.get(url);
    // }
    getAll (params) {
        const url = `${AppConstants.API_URL}/${this.getResourceName()}`;
        const defaultParams = { _page: AppConstants.DEFAULT_PAGE, _limit: AppConstants.DEFAULT_LIMIT};
        if(params){    
            return fetchClient.get(url,params);
        }
        else {
            return fetchClient.get(url,defaultParams)
        }
    }

    getDetail(id) {
        const url = `${AppConstants.API_URL}/${this.getResourceName()}/${id}`;
        return fetchClient.get(url);
    }

    add(product) {
        const url = `${AppConstants.API_URL}/${this.getResourceName()}`;
        return fetchClient.post(url, product);
    }

    update(product) {
        const url = `${AppConstants.API_URL}/${this.getResourceName()}/${product.id}`;
        return fetchClient.patch(url, product); 
    }

    remove(id) {
        const url = `${AppConstants.API_URL}/${this.getResourceName()}/${id}`;
        return fetchClient.delete(url);
    }
}

export default Base;