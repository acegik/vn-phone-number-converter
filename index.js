'use strict';

module.exports = function convertPrefixPhoneNumber(number, opts) {
  if (! typeof number === 'string') return number;
  opts = opts || {};
  if (opts.removeDelimiters !== false) {
    number = number.replace(DELIMITER, '');
  }
  return PATTERNS.reduce(function(number, p) {
    return number.replace(p.pattern, p.replace)
  }, number);
}

var COUNTRY_CODE = '^(0|\\+84[.-\\s]?|0084[.-\\s]?)';
var DELIMITER = /[.-\s]/;

var PATTERNS = [
  // Đầu số 0120 chuyển đổi thành 070
  // Đầu số 0121 chuyển đổi thành 079
  // Đầu số 0122 chuyển đổi thành 077
  // Đầu số 0126 chuyển đổi thành 076
  // Đầu số 0128 chuyển đổi thành 078
  {
    pattern: new RegExp(COUNTRY_CODE + '12([068])'), replace: '$17$2', provider: 'mobifone'
  },
  {
    pattern: new RegExp(COUNTRY_CODE + '121'), replace: '$179', provider: 'mobifone'
  },
  {
    pattern: new RegExp(COUNTRY_CODE + '122'), replace: '$177', provider: 'mobifone'
  },
  // Đầu số 0123 chuyển đổi thành 083
  // Đầu số 0124 chuyển đổi thành 084
  // Đầu số 0125 chuyển đổi thành 085
  // Đầu số 0127 chuyển đổi thành 081
  // Đầu số 0129 chuyển đổi thành 082
  {
    pattern: new RegExp(COUNTRY_CODE + '12([3-5])'), replace: '$18$2', provider: 'vinaphone'
  },
  {
    pattern: new RegExp(COUNTRY_CODE + '127'), replace: '$181', provider: 'vinaphone'
  },
  {
    pattern: new RegExp(COUNTRY_CODE + '129'), replace: '$182', provider: 'vinaphone'
  },
  // Đầu số 0162 chuyển đổi thành 032
  // Đầu số 0163 chuyển đổi thành 033
  // Đầu số 0164 chuyển đổi thành 034
  // Đầu số 0165 chuyển đổi thành 035
  // Đầu số 0166 chuyển đổi thành 036
  // Đầu số 0167 chuyển đổi thành 037
  // Đầu số 0168 chuyển đổi thành 038
  // Đầu số 0169 chuyển đổi thành 039
  {
    pattern: new RegExp(COUNTRY_CODE + '16([2-9])'), replace: '$13$2', provider: 'viettel'
  },
  // Đầu số 0186 chuyển đổi thành 056
  // Đầu số 0188 chuyển đổi thành 058
  {
    pattern: new RegExp(COUNTRY_CODE + '18([68])'), replace: '$15$2', provider: 'vietnam-mobile'
  },
  // Đầu số 0199 chuyển đổi thành 059
  {
    pattern: new RegExp(COUNTRY_CODE + '199'), replace: '$159', provider: 'gmobile'
  },
]
