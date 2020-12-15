const Stuff = require('./stuff')
const FAQ = require('./faq')
const projectDetails = require('./projectDetail')

const loadLists = (keystone) => {
  Stuff(keystone)
  FAQ(keystone)
  projectDetails(keystone)
}

module.exports = loadLists