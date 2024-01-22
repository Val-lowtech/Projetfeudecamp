const axios = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('https://effortless-light-cc77bc4294.strapiapp.com/api/accueil?populate=*');
    console.dir(res.data, { depth: null });
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};
