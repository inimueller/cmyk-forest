const Stuff = require("./stuff");
const FAQ = require("./faq");
const Users = require("./users");

const loadLists = (keystone) => {
    Stuff(keystone);
    FAQ(keystone);
    Users(keystone);
};

module.exports = loadLists;
