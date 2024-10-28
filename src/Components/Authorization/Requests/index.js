import axios from 'axios';

export const fetchAuthorization = async (data) => {
   try {
      const response = await axios.post(
         `${process.env.REACT_APP_LOGIN_URL}/api/auth/login`,
         data,
      );
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response;
   } catch (error) {
      handlingError(error);
   }
};
export const handlingError = (error) => {
   if (error.response) {
      if (Array.isArray(error.response.data.errors)) {
         error.response.data.errors.forEach((item) => {
            alert(`${item.param} - ${item.msg}`);
         });
         throw new Error('response have a lot mistackes');
      } else if (error.response.data.message) {
         alert(error.response.data.message);
         throw new Error(error.response.data.message);
      }
   }
};

export const fetchSearch = async (data) => {
   const apiKey = 'AIzaSyAIDhQZwvq8pHXi3p8gZiijURh4ucS0vic';
   const searchQuery = data;
   const maxResults = 20;
   const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&q=${searchQuery}&type=video&maxResults=${maxResults}&key=${apiKey}`;

   // `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAIDhQZwvq8pHXi3p8gZiijURh4ucS0vic
   // &part=snippet,contentDetails,statistics,status&maxResults=${maxResults}`;

   try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response;
   } catch (error) {
      handlingError(error);
   }
};
