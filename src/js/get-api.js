import axios from 'axios';


export async function getUsers() {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.get(url);
  return res.data;
}