const MongoClient = require('mongodb').MongoClient;

const url ='mongodb+srv://jayaprasadb718:asMJVVo05p6CKF3f@cluster0.cwwzkpt.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;
