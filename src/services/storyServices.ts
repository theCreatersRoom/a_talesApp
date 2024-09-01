import API from '../utils/api';
import {
  CHAPTER_DETAILS,
  DELETE_CHAPTER,
  NEW_CHAPTER,
  NEW_STORY_URL,
  STORY_DETAILS,
  UPDATE_CHAPTER,
  USER_STORIES_DETAILS,
} from './apiUrls';
import {
  addChapterType,
  createStoryType,
  fetchUserStoriesType,
  getChapterDetails,
  getStoryDetails,
  updateChapterType,
} from './types/storyServices.type';

export const createNewStory: createStoryType = async storyData => {
  const {description, tags, title, author} = storyData;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('tags', tags);
  // formData.append('chapterCount', chapters);
  formData.append('author', author);
  // if (profilePic) {
  //   formData.append('file', {
  //     name: profilePic?.name,
  //     type: profilePic?.type,
  //     uri:
  //       Platform.OS === 'ios'
  //         ? profilePic.uri.replace('file://', '')
  //         : profilePic.uri,
  //   });
  // }
  const result = await API.post(NEW_STORY_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

export const fetchStoryDetails: getStoryDetails = async (id: string) => {
  const result = await API.get(STORY_DETAILS + '?id=' + id, {
    timeout: 10000,
  });
  return result.data?.story;
};

export const fetchChpaterDetails: getChapterDetails = async (id: string) => {
  const result = await API.get(CHAPTER_DETAILS + '?chapterId=' + id);
  return result.data;
};

export const fetchUserStories: fetchUserStoriesType = async (id: string) => {
  const result = await API.get(USER_STORIES_DETAILS + '?userId=' + id);
  return result.data?.data;
};

export const addNewChapter: addChapterType = async chapterData => {
  const {title, content, storyId, media} = chapterData;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('storyId', storyId);
  // if (profilePic) {
  //   formData.append('file', {
  //     name: profilePic?.name,
  //     type: profilePic?.type,
  //     uri:
  //       Platform.OS === 'ios'
  //         ? profilePic.uri.replace('file://', '')
  //         : profilePic.uri,
  //   });
  // }
  const result = await API.post(NEW_CHAPTER, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

export const updateChapter: updateChapterType = async chapterData => {
  const {title, content, chapterId, media} = chapterData;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('chapterId', chapterId);
  // if (profilePic) {
  //   formData.append('file', {
  //     name: profilePic?.name,
  //     type: profilePic?.type,
  //     uri:
  //       Platform.OS === 'ios'
  //         ? profilePic.uri.replace('file://', '')
  //         : profilePic.uri,
  //   });
  // }
  const url = UPDATE_CHAPTER;
  const result = await API.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

export const deleteChapter = async (id: string) => {
  const result = await API.delete(DELETE_CHAPTER + '?chapterId=' + id);
  return result;
};
