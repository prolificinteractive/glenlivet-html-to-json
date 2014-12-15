# glenlivet-html-to-json

A simple wrapper around html-to-json for glenlivet.

## Installation

`npm install glenlivet-html-to-json`

## Usage

```javascript
prolific.bottle('getPageLinks', {
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
});

prolific
  .getPageLinks({
    page: '/about'
  })
  .get('json')
  .done(function (links) {
    console.log(links);
  });
```
