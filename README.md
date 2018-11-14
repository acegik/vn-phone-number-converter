# vn-phone-number-converter

> Converting 11-digit mobile phone numbers to 10-digits

## Examples

```javascript
var convert = require('vn-phone-number-converter');

var number = '+84.122.012.3456';
console.log('convert("%s"): %s', number, convert(number));

var number_in_11digits = [
  '01207654321', '+841220123456', '00841289876543'
];

console.log('Results (10 digits): %s',
  JSON.stringify(number_in_11digits.map(convert)));
```