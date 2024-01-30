// utils.js
module.exports = {
    formaterDatesDansDonnees: function (data) {
      return data.map((evenement) => {
        return {
          ...evenement,
          date: formaterDate(evenement.date), // Assure-toi d'ajuster cela en fonction de ta structure de données
        };
      });
    },
  
    formaterDate: function (dateAPI) {
      const dateObj = new Date(dateAPI);
      const mois = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const jour = dateObj.getDate().toString().padStart(2, '0');
      return `${mois}/${jour}`;
    },
  };
  