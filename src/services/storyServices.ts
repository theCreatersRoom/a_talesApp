import API from '../utils/api';
import {STORY_URL} from './apiUrls';
import {createStoryType} from './types/storyServices.type';

export const createNewStory: createStoryType = async storyData => {
  const {chapters, description, tags, title, userId} = storyData;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('tags', tags);
  formData.append('chapterCount', chapters);
  formData.append('userId', userId);
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
  const result = await API.post(STORY_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};
