import axios from "axios"

export const UploadPhotosService = (token) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/uploadPhotos`, { headers: { Authorization: `Bearer ${token}` } })
};


// export const GetPhotosService = (token) => {
//     return axios.get(`${import.meta.env.VITE_API_URL}/getPhotos`,{ headers: { Authorization: `Bearer ${token}` } })
// };   