var glenlivet = require('glenlivet');
var htmlToJson = require('html-to-json');

module.exports = glenlivet.createPlugin('htmlToJson', function (filter) {
  this.middleware({
    'filter:htmlToJson': function (data, next, abort) {
      htmlToJson.parse(data.html, filter).done(function (json) {
        data.json = json;
        next();
      }, abort);
    }
  });
});
