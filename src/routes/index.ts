import { Application } from "express";
import {useHomeRoutes} from "./home.routes";
import {useAuthRoutes} from "./auth.routes";
import {useInterviewQuestionsRoutes} from "./interviewQuestions.routes";

export function useRoutes(app: Application): void {
  app.use("/api", useHomeRoutes());
  app.use("/api/auth", useAuthRoutes());
  app.use("/api/interview-questions", useInterviewQuestionsRoutes());
}