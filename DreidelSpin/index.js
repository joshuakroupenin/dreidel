module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var dreidel = ["Gimmel", "Hay", "Shin","Nun"];
   
    letter = Math.floor(Math.random() * 4);     // returns a random integer from 0 to 3
   
    context.res = {
            // status: 200, /* Defaults to 200 */
            body: dreidel[letter]
    }
};