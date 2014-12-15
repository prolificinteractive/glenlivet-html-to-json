var glenlivet = require('glenlivet');
var plugin = require('../index');

describe('glenlivet-html-to-json', function () {
  it('wraps htmlToJson.parse()', function (done) {
    glenlivet
      .createBottle({
        htmlToJson: {
          'foo': function ($doc) {
            return $doc.find('#foo').text();
          }
        }
      })
      .plugins([plugin])
      .serve({
        html: '<div id="foo">bar</div>'
      }, function (err, data) {
        if (err) {
          throw err;
          return;
        }

        data.json.foo.should.equal('bar');
        done();
      });
  });
});
