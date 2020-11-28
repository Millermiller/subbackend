import { __decorate } from "tslib";
import request from '@/utils/request';
import { Service } from 'typedi';
export var API;
(function (API) {
    let IntroAPI = class IntroAPI {
        all() {
            return request.get('/intro');
        }
        load(id) {
            return request.get(`/intro/${id}`);
        }
        save(id, form) {
            return request.put(`/intro/${id}`, form);
        }
        destroy(id) {
            return request.delete(`/intro/${id}`);
        }
    };
    IntroAPI = __decorate([
        Service()
    ], IntroAPI);
    API.IntroAPI = IntroAPI;
})(API || (API = {}));
//# sourceMappingURL=introAPI.js.map