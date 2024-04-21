const axios = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('https://backend-pfdc.jcloud.ik-server.com/api/auteur-ices?populate=*');
    console.dir(res.data, { depth: null });
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};
