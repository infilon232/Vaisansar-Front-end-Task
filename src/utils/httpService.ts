import {API_BASE_URL,apiKey} from '../constants/appConstants';
const URL = API_BASE_URL ;
const HttpService = {
    random: URL+"random?apiKey="+apiKey,
}
export default HttpService;
 

