"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = useRoutes;
const home_routes_1 = require("./home.routes");
const auth_routes_1 = require("./auth.routes");
const interviewQuestions_routes_1 = require("./interviewQuestions.routes");
function useRoutes(app) {
    app.use("/api", (0, home_routes_1.useHomeRoutes)());
    app.use("/api/auth", (0, auth_routes_1.useAuthRoutes)());
    app.use("/api/interview-questions", (0, interviewQuestions_routes_1.useInterviewQuestionsRoutes)());
}
//# sourceMappingURL=index.js.map