/**
 * Created by Baptiste on 20/05/2015.
 */

var redis = require("redis");
var client = redis.createClient(6379, '192.168.56.101', {});
client.on("error", function (err) {
    console.log("Error " + err);
});
module.exports = client;