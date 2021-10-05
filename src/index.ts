export const isValidDNI = (dni: string): boolean => {
  if (dni.length !== 10) return false;
  // Digitos de provincia (2 primeros)
  const provinceDigits = dni.substring(0, 2);
  // Deben estar entre 1 y 24.
  if (parseInt(provinceDigits, 10) < 1 || parseInt(provinceDigits, 10) > 24) return false;
  // Coeficientes de validación (en posiciones pares)
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  // Obtener la suma de multiplicar los dígitos por su respectivo coeficiente, si el resultado es mayor que 9, se resta 9.
  const suma = coeficientes
    .map((coeficiente, index) => {
      const dig = parseInt(dni.charAt(index), 10);
      const result = dig * coeficiente;
      return result > 9 ? result - 9 : result;
    })
    .reduce((acumulador, dig) => acumulador + dig);
  // Restamos el resultado de la suma de la decena inmediata superior.
  const decena = Math.ceil(suma / 10) * 10;
  const resultado = decena - suma;
  // Si el resultado es 10, el dígito es cero.
  const digito = resultado === 10 ? 0 : resultado;
  // Si el dígito es igual al último dígito de la cédula, la cédula es válida.
  return digito === parseInt(dni.charAt(9), 10);
};
