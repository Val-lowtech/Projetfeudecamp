const axios = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://83.166.147.249:1337/api/articles?populate=*');
    console.dir(res.data, { depth: null });
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};
