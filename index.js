const axios = require('axios');

const url = process.env.CONSUMER1
const url2 = process.env.CONSUMER2
const sl1 = process.env.SOL1


async function get() {
    try {
        const response = await axios.get(url2);
        
        if (response.status !== 200) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = response.data;
        let valorUF = Math.round(data.uf.valor);
        console.log(valorUF)
        const dataU = {
        solicitud: sl1,
        valor: valorUF
        };

        axios.post(url, dataU)
        .then(response => {
        console.log('Respuesta:', response.data);
        })
        .catch(error => {
        console.error('Error al realizar la petición:', error);
        });
        
        return 
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

get()