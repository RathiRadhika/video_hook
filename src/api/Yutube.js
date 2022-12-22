import axios from 'axios';

const KEY='AIzaSyAWB5iO-Tz1Tr5uzrvh0qVOEkzQ6LYP8Xg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});