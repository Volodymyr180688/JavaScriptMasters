import axios from 'axios';


export async function createUser(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.post(url, email, comment);
    return res.data;    
}

