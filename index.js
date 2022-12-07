const {MongoClient} = require ('mongodb');
const url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(url);

async function main(){
    await client.connect();
console.log('client connected...');

    const database = client.db('Practice');

   const customer=  database.collection('For_Paresh');

   const customerData = await customer.findOne({
"firstName":"Jame",
"lastName":"Jame",

   });

   console.log('find responce');
   console.log(customerData);
}

main();