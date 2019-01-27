import axios from './axios';

const get = () => {
  axios.get('/mediaItems').then(res => console.log(res));
}

export {get as getMediaItems};
