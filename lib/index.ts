export function isValidDNI(dni: string) {
  // Check if the DNI is null or empty
  if (dni == null || dni === "") {
    return false;
  }

  // Check if the DNI is a string
  if (typeof dni !== "string") {
    return false;
  }

  // Check if the DNI has the correct length
  if (dni.length !== 10 && dni.length !== 13) {
    return false;
  }

  let sum = 0;
  let remainder = 0;
  let pri = false;
  let pub = false;
  let nat = false;
  const provinceDigits = 24;
  let mod = 11;

  // Check if the DNI does not contain letters
  const ok = dni.split("").every((char) => !isNaN(parseInt(char, 10)));
  if (!ok) {
    return false;
  }

  if (dni.length < 10) {
    return false;
  }

  // First two digits are the province
  const province = parseInt(dni.substr(0, 2), 10);
  if (province < 1 || province > provinceDigits) {
    return false;
  }

  // Store digits in variables
  const [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10] = Array.from(dni).map(
    (char) => parseInt(char, 10)
  );

  if (d3 == 7 || d3 == 8) {
    return false;
  }

  if (d3 < 6) {
    nat = true;
    const p1 = d1 * 2 >= 10 ? d1 * 2 - 9 : d1 * 2;
    const p2 = d2 * 1 >= 10 ? d2 * 1 - 9 : d2 * 1;
    const p3 = d3 * 2 >= 10 ? d3 * 2 - 9 : d3 * 2;
    const p4 = d4 * 1 >= 10 ? d4 * 1 - 9 : d4 * 1;
    const p5 = d5 * 2 >= 10 ? d5 * 2 - 9 : d5 * 2;
    const p6 = d6 * 1 >= 10 ? d6 * 1 - 9 : d6 * 1;
    const p7 = d7 * 2 >= 10 ? d7 * 2 - 9 : d7 * 2;
    const p8 = d8 * 1 >= 10 ? d8 * 1 - 9 : d8 * 1;
    const p9 = d9 * 2 >= 10 ? d9 * 2 - 9 : d9 * 2;
    mod = 10;
    sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
  } else if (d3 == 6) {
    pub = true;
    const p1 = d1 * 3;
    const p2 = d2 * 2;
    const p3 = d3 * 7;
    const p4 = d4 * 6;
    const p5 = d5 * 5;
    const p6 = d6 * 4;
    const p7 = d7 * 3;
    const p8 = d8 * 2;
    const p9 = 0;
    sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
  } else if (d3 == 9) {
    pri = true;
    const p1 = d1 * 4;
    const p2 = d2 * 3;
    const p3 = d3 * 2;
    const p4 = d4 * 7;
    const p5 = d5 * 6;
    const p6 = d6 * 5;
    const p7 = d7 * 4;
    const p8 = d8 * 3;
    const p9 = d9 * 2;
    sum = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
  }

  remainder = sum % mod;
  const vd = remainder === 0 ? 0 : mod - remainder;

  if (pub === true) {
    if (vd != d9) {
      return false;
    }
    if (dni.substr(9, 4) !== "0001") {
      return false;
    }
  } else if (pri === true) {
    if (vd != d10) {
      return false;
    }
    if (dni.substr(10, 3) !== "001") {
      return false;
    }
  } else if (nat === true) {
    if (vd != d10) {
      return false;
    }
    if (dni.length > 10 && dni.substr(10, 3) !== "001") {
      return false;
    }
  }

  return true;
}
