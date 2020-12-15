const Stuff = require("./stuff");
const FAQ = require("./faq");
const Group = require("./group");

const loadLists = (keystone) => {
    Stuff(keystone);
    FAQ(keystone);
    Group(keystone);
};

module.exports = loadLists;
