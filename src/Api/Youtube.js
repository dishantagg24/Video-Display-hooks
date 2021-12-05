import axios from 'axios';

const KEY = 'AIzaSyC943f6jzOzg72EU7Yl0quJ7vLyK5-aRBQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key:KEY
    }
});