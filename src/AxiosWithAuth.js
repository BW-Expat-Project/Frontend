import axios from 'axios';

export default function AxiosWithAuth(){
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://expat-gamma.vercel.app',
        headers: {authorization: `Bearer ${token}`}
    })
}