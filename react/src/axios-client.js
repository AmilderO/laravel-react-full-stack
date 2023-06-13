import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use(async (config) => {
    if(!config.headers.Authorization) {
        return config;
    }
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(async (response) =>{
    console.log("SATISFACTORIO RESPONSE");
    return response;

}, (error)=>{
    try {
        const {response} = error;
        if(response.status === 401){
            localStorage.removeItem('ACCESS_TOKEN');
        }
    } catch (e) {
        console.log("errorrrrrr");
        console.error(e);
    }
})
export default axiosClient;
