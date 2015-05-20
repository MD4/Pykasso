/**
 * Created by Baptiste on 20/05/2015.
 */


var redis = require("redis");
var uuid = require('node-uuid');
var exports = {};

/**
 * create drawing
 * @param name
 */
exports.create = function create(name) {
    var uid = uuid.v1();
    console.log("test");
    var client = redis.createClient(6379, '192.168.56.101', {});
    client.on("error", function (err) {
        console.log("Error " + err);
    });
    client.hset("drawings", name, uid, redis.print);
    client.hset("drawing"+uid+"/info", "name", name, redis.print);
    client.zadd("drawing"+uid+"/data", Date.now(), JSON.stringify([]));
    client.end();
};

/**
 * delete drawing
 * @param name
 */
exports.delete = function remove(name) {
    var client = redis.createClient(6379, '192.168.56.101', {});
    exports.getId(name, function(err, uid) {
        var multi = client.multi();
        multi.hdel("drawings", name);
        multi.del("drawing"+uid+"/info");
        multi.del("drawing"+uid+"/data");
        multi.exec();
    });
    client.end();
};

/**
 * get drawing id by drawing name
 * @param name
 * @param callback
 */
exports.getId = function getId(name, callback) {
    var client = redis.createClient(6379, '192.168.56.101', {});
    client.hget("drawings", name, function (err, replies) {
        callback(err, replies);
    });
    client.end();
};

/**
 * add draw to drawing
 * @param name, drawing name
 * @param data, array of point
 */
exports.addToDrawing = function addToDrawing(name, data) {
    var client = redis.createClient(6379, '192.168.56.101', {});
    exports.getId(name, function(err, uid) {
        client.zadd("drawing"+uid+"/data", Date.now(), JSON.stringify(data));
    });
};

module.exports = exports;

/*exports.getDrawData = function getDrawData(name) {
    var client = redis.createClient();
    exports.getId(name, function(err, uid) {
        client.zget();
    });
}*/