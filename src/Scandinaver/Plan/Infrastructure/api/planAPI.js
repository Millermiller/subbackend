import { __decorate } from "tslib";
import request from '@/utils/request';
import { Service } from 'typedi';
export var API;
(function (API) {
    let PlanAPI = class PlanAPI {
        all() {
            return request.get(`/plan`);
        }
        destroy(id) {
            return request.delete(`/plan/${id}`);
        }
        load(id) {
            return request.get(`/plan/${id}`);
        }
        save(id, form) {
            return request.put(`/plan/${id}`, form);
        }
        search(query) {
            return request.get(`/plan/search?q=${query}`);
        }
        create(form) {
            return request.put(`/plan`, form);
        }
    };
    PlanAPI = __decorate([
        Service()
    ], PlanAPI);
    API.PlanAPI = PlanAPI;
})(API || (API = {}));
//# sourceMappingURL=planAPI.js.map