import {getSupabaseClient} from "../utils/supabaseDb";
import { fromDbResult, Result } from "../models";
import { InterviewQuestionsModel} from "../models/interview-questions";

export class InterviewQuestionsService {
  private readonly db = getSupabaseClient();

  private readonly interviewQuestionsTable = 'interview_questions';

  async getInterviewQuestions(userId: string): Promise<Result<InterviewQuestionsModel>> {
    const { data, error } = await this.db
      .from(this.interviewQuestionsTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<InterviewQuestionsModel>((data ?? [])[0], error!);
  }

  async saveInterviewQuestions(interviewQuestions: InterviewQuestionsModel): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.interviewQuestionsTable)
      .upsert(interviewQuestions);

    return fromDbResult(true, error!);
  }
}