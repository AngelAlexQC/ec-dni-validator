export function isValidDNI(dni: string): boolean {
  if (dni == null || dni == '') {
    return false;
  }
  var sum = 0;
  var remainder = 0;
  var pri = false;
  var pub = false;
  var nat = false;
  var provinceDigits = 24;
  var mod = 11;

  // Check if the dni is not containing letters
  var ok = 1;
  for (let i = 0; i < dni.length && ok == 1; i++) {
    var n = parseInt(dni.charAt(i));
    if (isNaN(n)) ok = 0;
  }
  if (ok == 0) {
    return false;
  }

  if (dni.length < 10) {
    return false;
  }

  // First two digits are the province
  let province = parseInt(dni.substr(0, 2));
  if (province < 1 || province > provinceDigits) {
    return false;
  }

  // Store digits in variables
  var d1 = parseInt(dni.substr(0, 1));
  var d2 = parseInt(dni.substr(1, 1));
  var d3 = parseInt(dni.substr(2, 1));
  var d4 = parseInt(dni.substr(3, 1));
  var d5 = parseInt(dni.substr(4, 1));
  var d6 = parseInt(dni.substr(5, 1));
  var d7 = parseInt(dni.substr(6, 1));
  var d8 = parseInt(dni.substr(7, 1));
  var d9 = parseInt(dni.substr(8, 1));
  var d10 = parseInt(dni.substr(9, 1));

  /* The third digit is: */
  /* 9 for private companies and foreigners */
  /* 6 for public companies */
  /* less than 6 (0,1,2,3,4,5) for natural persons */

  if (d3 == 7 || d3 == 8) {
    return false;
  }
  /* Only for natural persons (mod 10) */
  if (d3 < 6) {
    nat = true;
    var p1 = d1 * 2;
    if (p1 >= 10) p1 -= 9;
    var p2 = d2 * 1;
    if (p2 >= 10) p2 -= 9;
    var p3 = d3 * 2;
    if (p3 >= 10) p3 -= 9;
    var p4 = d4 * 1;
    if (p4 >= 10) p4 -= 9;
    var p5 = d5 * 2;
    if (p5 >= 10) p5 -= 9;
    var p6 = d6 * 1;
    if (p6 >= 10) p6 -= 9;
    var p7 = d7 * 2;
    if (p7 >= 10) p7 -= 9;
    var p8 = d8 * 1;
    if (p8 >= 10) p8 -= 9;
    var p9 = d9 * 2;
    if (p9 >= 10) p9 -= 9;
    mod = 10;
  } else if (d3 == 6) {
    /* Only for public companies (mod 11) */
    /* Here the verification digit is in pos. 9, in the other 2 in pos. 10 */
    pub = true;
    var p1 = d1 * 3;
    var p2 = d2 * 2;
    var p3 = d3 * 7;
    var p4 = d4 * 6;
    var p5 = d5 * 5;
    var p6 = d6 * 4;
    var p7 = d7 * 3;
    var p8 = d8 * 2;
    var p9 = 0;
  } else if (d3 == 9) {
    /* Only for private entities (mod 11) */
    pri = true;
    var p1 = d1 * 4;
    var p2 = d2 * 3;
    var p3 = d3 * 2;
    var p4 = d4 * 7;
    var p5 = d5 * 6;
    var p6 = d6 * 5;
    var p7 = d7 * 4;
    var p8 = d8 * 3;
    var p9 = d9 * 2;
  }
  //@ts-ignore
  sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
  remainder = sum % mod;

  /* If remainder=0, dig.ver.=0, otherwise 10 - remainder*/
  var vd = remainder == 0 ? 0 : mod - remainder;

  /* now we compare the element in position 10 with the dig. ver.*/
  if (pub == true) {
    if (vd != d9) {
      return false;
    }
    /* The dni of the public sector companies end with 0001*/
    if (dni.substr(9, 4) != '0001') {
      return false;
    }
  } else if (pri == true) {
    if (vd != d10) {
      return false;
    }
    if (dni.substr(10, 3) != '001') {
      return false;
    }
  } else if (nat == true) {
    if (vd != d10) {
      return false;
    }
    if (dni.length > 10 && dni.substr(10, 3) != '001') {
      return false;
    }
  }
  return true;
}
