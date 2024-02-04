const axios = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://185.172.103.40:1337/api/accueil?populate=*');
    console.log(res.data); // Log the retrieved data
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    return {};
  }
};
