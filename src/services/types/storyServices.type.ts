import {DocumentPickerResponse} from 'react-native-document-picker';

export type createStoryType = (data: NewStoryType) => Promise<NewStoryResp>;
export type getStoryDetails = (id: string) => Promise<StoryType>;
export type getChapterDetails = (id: string) => Promise<ChapterType>;
export type addChapterType = (data: NewChapterType) => Promise<ChapterType>;
export type fetchUserStoriesType = (id: string) => Promise<StoryType[]>;

export type updateChapterType = (data: NewChapterType) => Promise<ChapterType>;

export interface ChapterType {
  _id: string;
  storyId: string;
  title: string;
  content: string;
  media: string[];
  choices: any[];
  createdAt: string;
  updatedAt: string;
}

export type StoryType = {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  chapters: StoryChapterType[];
  author: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
};

export type StoryChapterType = {
  chapterId: string;
  title: string;
  description: string;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type NewStoryType = {
  title: string;
  description: string;
  tags?: string[];
  // chapters: number;
  author: string;
};

export type NewStoryResp = {
  _id: string;
  message: string;
  success: boolean;
};

export type NewChapterType = {
  storyId?: string;
  title: string;
  content: string;
  media?: DocumentPickerResponse;
  chapterId?: string;
  // order: number;
};
