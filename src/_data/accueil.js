const axios = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/accueil?populate=*');
    console.dir(res.data, { depth: null });
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};
