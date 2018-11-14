var assert = require('chai').assert;
var changePrefixPhoneNumber = require('../index');

describe('changePrefixPhoneNumber()', function() {
  //http://vietnamnet.vn/vn/cong-nghe/vien-thong/cach-goi-cho-thue-bao-11-so-sau-khi-chuyen-sang-10-so-cua-cac-nha-mang-453985.html
  it('should change MobiFone phone numbers correctly', function() {
    // Đầu số 0120 chuyển đổi thành 070
    // Đầu số 0121 chuyển đổi thành 079
    // Đầu số 0122 chuyển đổi thành 077
    // Đầu số 0126 chuyển đổi thành 076
    // Đầu số 0128 chuyển đổi thành 078
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('0120' + sample), '070' + sample);
    assert.equal(changePrefixPhoneNumber('+84120' + sample), '+8470' + sample);
    assert.equal(changePrefixPhoneNumber('0084120' + sample), '008470' + sample);

    assert.equal(changePrefixPhoneNumber('0121' + sample), '079' + sample);
    assert.equal(changePrefixPhoneNumber('+84121' + sample), '+8479' + sample);
    assert.equal(changePrefixPhoneNumber('0084121' + sample), '008479' + sample);

    assert.equal(changePrefixPhoneNumber('0122' + sample), '077' + sample);
    assert.equal(changePrefixPhoneNumber('+84122' + sample), '+8477' + sample);
    assert.equal(changePrefixPhoneNumber('0084122' + sample), '008477' + sample);

    assert.equal(changePrefixPhoneNumber('0126' + sample), '076' + sample);
    assert.equal(changePrefixPhoneNumber('+84126' + sample), '+8476' + sample);
    assert.equal(changePrefixPhoneNumber('0084126' + sample), '008476' + sample);

    assert.equal(changePrefixPhoneNumber('0128' + sample), '078' + sample);
    assert.equal(changePrefixPhoneNumber('+84128' + sample), '+8478' + sample);
    assert.equal(changePrefixPhoneNumber('0084128' + sample), '008478' + sample);
  });

  it('should change vinaphone phone numbers correctly', function() {
    // Đầu số 0123 chuyển đổi thành 083
    // Đầu số 0124 chuyển đổi thành 084
    // Đầu số 0125 chuyển đổi thành 085
    // Đầu số 0127 chuyển đổi thành 081
    // Đầu số 0129 chuyển đổi thành 082
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('0123' + sample), '083' + sample);
    assert.equal(changePrefixPhoneNumber('+84123' + sample), '+8483' + sample);
    assert.equal(changePrefixPhoneNumber('0084123' + sample), '008483' + sample);

    assert.equal(changePrefixPhoneNumber('0124' + sample), '084' + sample);
    assert.equal(changePrefixPhoneNumber('+84124' + sample), '+8484' + sample);
    assert.equal(changePrefixPhoneNumber('0084124' + sample), '008484' + sample);

    assert.equal(changePrefixPhoneNumber('0125' + sample), '085' + sample);
    assert.equal(changePrefixPhoneNumber('+84125' + sample), '+8485' + sample);
    assert.equal(changePrefixPhoneNumber('0084125' + sample), '008485' + sample);

    assert.equal(changePrefixPhoneNumber('0127' + sample), '081' + sample);
    assert.equal(changePrefixPhoneNumber('+84127' + sample), '+8481' + sample);
    assert.equal(changePrefixPhoneNumber('0084127' + sample), '008481' + sample);

    assert.equal(changePrefixPhoneNumber('0129' + sample), '082' + sample);
    assert.equal(changePrefixPhoneNumber('+84129' + sample), '+8482' + sample);
    assert.equal(changePrefixPhoneNumber('0084129' + sample), '008482' + sample);
  });

  it('should change viettel phone numbers correctly', function() {
    // Đầu số 0162 chuyển đổi thành 032
    // Đầu số 0163 chuyển đổi thành 033
    // Đầu số 0164 chuyển đổi thành 034
    // Đầu số 0165 chuyển đổi thành 035
    // Đầu số 0166 chuyển đổi thành 036
    // Đầu số 0167 chuyển đổi thành 037
    // Đầu số 0168 chuyển đổi thành 038
    // Đầu số 0169 chuyển đổi thành 039
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('0162' + sample), '032' + sample);
    assert.equal(changePrefixPhoneNumber('+84162' + sample), '+8432' + sample);
    assert.equal(changePrefixPhoneNumber('0084162' + sample), '008432' + sample);

    assert.equal(changePrefixPhoneNumber('0163' + sample), '033' + sample);
    assert.equal(changePrefixPhoneNumber('+84163' + sample), '+8433' + sample);
    assert.equal(changePrefixPhoneNumber('0084163' + sample), '008433' + sample);

    assert.equal(changePrefixPhoneNumber('0164' + sample), '034' + sample);
    assert.equal(changePrefixPhoneNumber('+84164' + sample), '+8434' + sample);
    assert.equal(changePrefixPhoneNumber('0084164' + sample), '008434' + sample);

    assert.equal(changePrefixPhoneNumber('0165' + sample), '035' + sample);
    assert.equal(changePrefixPhoneNumber('+84165' + sample), '+8435' + sample);
    assert.equal(changePrefixPhoneNumber('0084165' + sample), '008435' + sample);

    assert.equal(changePrefixPhoneNumber('0166' + sample), '036' + sample);
    assert.equal(changePrefixPhoneNumber('+84166' + sample), '+8436' + sample);
    assert.equal(changePrefixPhoneNumber('0084166' + sample), '008436' + sample);

    assert.equal(changePrefixPhoneNumber('0167' + sample), '037' + sample);
    assert.equal(changePrefixPhoneNumber('+84167' + sample), '+8437' + sample);
    assert.equal(changePrefixPhoneNumber('0084167' + sample), '008437' + sample);

    assert.equal(changePrefixPhoneNumber('0168' + sample), '038' + sample);
    assert.equal(changePrefixPhoneNumber('+84168' + sample), '+8438' + sample);
    assert.equal(changePrefixPhoneNumber('0084168' + sample), '008438' + sample);

    assert.equal(changePrefixPhoneNumber('0169' + sample), '039' + sample);
    assert.equal(changePrefixPhoneNumber('+84169' + sample), '+8439' + sample);
    assert.equal(changePrefixPhoneNumber('0084169' + sample), '008439' + sample);
  })

  it('should change vietnam-mobile phone numbers correctly', function() {
    // Đầu số 0186 chuyển đổi thành 056
    // Đầu số 0188 chuyển đổi thành 058
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('0186' + sample), '056' + sample);
    assert.equal(changePrefixPhoneNumber('+84186' + sample), '+8456' + sample);
    assert.equal(changePrefixPhoneNumber('0084186' + sample), '008456' + sample);

    assert.equal(changePrefixPhoneNumber('0188' + sample), '058' + sample);
    assert.equal(changePrefixPhoneNumber('+84188' + sample), '+8458' + sample);
    assert.equal(changePrefixPhoneNumber('0084188' + sample), '008458' + sample);
  })

  it('should change gmobile phone numbers correctly', function() {
    // Đầu số 0199 chuyển đổi thành 059
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('0199' + sample), '059' + sample);
    assert.equal(changePrefixPhoneNumber('+84199' + sample), '+8459' + sample);
    assert.equal(changePrefixPhoneNumber('0084199' + sample), '008459' + sample);
  })

  it('should change gmobile phone numbers correctly', function() {
    // Đầu số 0199 chuyển đổi thành 059
    let sample = '7654321';
    assert.equal(changePrefixPhoneNumber('019.9' + sample), '059' + sample);
    assert.equal(changePrefixPhoneNumber('+8419.9' + sample), '+8459' + sample);
    assert.equal(changePrefixPhoneNumber('008419.9' + sample), '008459' + sample);
  })
});
