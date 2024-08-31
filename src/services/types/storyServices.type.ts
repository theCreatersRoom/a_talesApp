export type createStoryType = (data: NewStoryType) => Promise<NewStoryResp>;

export type NewStoryType = {
  title: string;
  description: string;
  tags?: string[];
  chapters: number;
  userId: string;
};

export type NewStoryResp = {
  _id: string;
  message: string;
  success: boolean;
};
