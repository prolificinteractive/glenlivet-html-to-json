var glenlivet = require('glenlivet');
var prolific = glenlivet.createBarrel({
  plugins: [
    require('glenlivet-request'),
    require('../index')
  ],
  pluginDefaults: {
    request: {
      protocol: 'http:',
      host: 'www.prolificinteractive.com'
    }
  }
});

var getPageLinks = prolific.bottle('getPageLinks', {
  request: {
    method: 'GET',
    pathname: function (data) {
      return data.page || '/';
    }
  },
  htmlToJson: ['a[href]', {
    'href': function ($a) {
      return $a.attr('href');
    },
    'text': function ($a) {
      return $a.text().split("\n").shift().trim();
    }
  }]
}).method('json');

getPageLinks({
  page: '/blog'
}, function (err, links) {
  console.log(links);
});
