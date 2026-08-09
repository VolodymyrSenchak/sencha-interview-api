"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("./auth.service");
const interviewQuestions_service_1 = require("./interviewQuestions.service");
class ServiceFactory {
    constructor() {
        this.container = new Map();
        this.container.set(auth_service_1.AuthService, () => new auth_service_1.AuthService());
        this.container.set(interviewQuestions_service_1.InterviewQuestionsService, () => new interviewQuestions_service_1.InterviewQuestionsService());
    }
    getService(service) {
        const serviceFactory = this.container.get(service);
        if (!serviceFactory) {
            throw new Error(`Service ${service.name} is not registered in the container.`);
        }
        return serviceFactory();
    }
}
exports.default = new ServiceFactory();
//# sourceMappingURL=serviceFactory.js.map