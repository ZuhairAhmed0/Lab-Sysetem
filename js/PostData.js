import {authorization} from './login.js';

class PostData {
   constructor (data = {}, url = '') {
      this.data = data;
      this.url = url;
   }
   fetchData() {
      fetch(`https://lab01.deno.dev/api/${this.url}`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
            Authorization: authorization,
         },
         body: JSON.stringify(this.data),
      })
         .then((response) => {
            if (response.status == 200) {
               return response.json();
            } else {
               return response.text();
            }
         })
         .then((data) => {
            console.log(data);
            document.querySelectorAll(`form input`).forEach((input) => (input.value = ''));
         });
   }
}

export default PostData;
