import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import { InterviewQuestionsService} from "../services/interviewQuestions.service";
import {validateToken} from "../middlewares/validateToken";
import { getUserId, setResResult } from "../utils/requestUtils";

export const useInterviewQuestionsRoutes = () => {
  const router = Router();
  const expSrv = () => serviceFactory.getService(InterviewQuestionsService);

  router.get("/interview-questions", validateToken, async (req, res) => {
    const result = await expSrv().getInterviewQuestions(getUserId(req));
    setResResult(res, result, r => r?.payload);
  });

  router.post("/interview-questions", validateToken, async (req, res) => {
    const result = await expSrv().saveInterviewQuestions({
      userId: getUserId(req),
      payload: req.body,
    });
    setResResult(res, result);
  });

  return router;
};