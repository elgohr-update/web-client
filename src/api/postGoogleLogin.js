import setAxiosConfig from "../helpers/setAxiosConfig";
import axios from "axios";
import {toast} from "react-toastify";
import {GOOGLE_CONNECT_URL} from '../constants/apiEndpoints';
import handleErrorToast from '../helpers/handleErrorToast';

export default async function postGoogleLogin(token) {
    let body = {
        'token': token,
    };
    let config = setAxiosConfig('POST', `${GOOGLE_CONNECT_URL}`, false);
    config['data'] = body;
    return await axios(config).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            toast.warn(response.data.message);
        }
    }).catch((error) => {
        handleErrorToast(error);
    });
}