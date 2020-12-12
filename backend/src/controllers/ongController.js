const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {    

    async index (req,res)  {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
      },

    async store (req,res) {
        const {name, whatsapp, email, city, uf} = req.body;
        const id = generateUniqueId();
        await connection('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf
        });
        return res.json({id}); 
      }
    

}