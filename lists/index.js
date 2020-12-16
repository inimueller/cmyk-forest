const Stuff = require('./stuff')
const FAQ = require('./faq')
const ProjectDetails = require('./projectDetail')

const loadLists = (keystone) => {
  Stuff(keystone)
  FAQ(keystone)
  ProjectDetails(keystone)
}

module.exports = loadLists
