import { __decorate } from "tslib";
import request from '@/utils/request';
import { Service } from 'typedi';
export var API;
(function (API) {
    let MetaAPI = class MetaAPI {
        all() {
            return request.get(`/meta`);
        }
        destroy(id) {
            return request.delete(`/meta/${id}`);
        }
        load(id) {
            return request.get(`/meta/${id}`);
        }
        save(id, form) {
            return request.put(`/meta/${id}`, form);
        }
        search(query) {
            return request.get(`/meta/search?q=${query}`);
        }
    };
    MetaAPI = __decorate([
        Service()
    ], MetaAPI);
    API.MetaAPI = MetaAPI;
})(API || (API = {}));
//# sourceMappingURL=metaAPI.js.map