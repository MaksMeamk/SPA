import axios from 'axios';
import { handlingError } from '../../Authorization/Requests';

export const fetchSearch = async (query) => {
   console.log(query);
   const apiKey = 'AIzaSyAIDhQZwvq8pHXi3p8gZiijURh4ucS0vic'; // API-ключ
   const maxResults = 10; // Максимальное количество результатов
   try {
      const response = await axios.get(
         'https://www.googleapis.com/youtube/v3/search',
         {
            params: {
               q: query,
               part: 'snippet',
               type: 'video',
               maxResults: maxResults,
               key: apiKey,
            },
         }
      );
      return response;
   } catch (error) {
      console.log(error);
      handlingError(error);
   }
};
