# vn-phone-number-converter

> Converting 11-digit mobile phone numbers to 10-digits

## Examples

```javascript
var converter = require('vn-phone-number-converter');

var number_in_11digits = [
  '01207654321', '+841220123456', '00841289876543'
];

console.log('Result: %s',
  JSON.stringify(number_in_11digits.map(converter)));
```