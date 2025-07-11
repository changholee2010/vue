import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      // console.log(result);
      return result.data;
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader();
        fn.onload = (e) => {
          resolve(e.target.result); // ;base64, ddka;lfjkdsf;jdskf
        };
        fn.readAsDataURL(file);
      });
    },
  },
};
