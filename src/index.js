module.exports = function toReadable(number) {
  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  const result = [];

  const hundred = Math.floor(number / 100);
  if (hundred > 0) {
    result.push(`${units[hundred]} hundred`);
  }

  const remainder = number % 100;
  if (remainder >= 10 && remainder <= 19) {
    result.push(teens[remainder - 10]);
  } else {
    const ten = Math.floor(remainder / 10);
    const unit = remainder % 10;
    if (ten > 0) {
      result.push(tens[ten]);
    }
    if (unit > 0) {
      result.push(units[unit]);
    }
  }

  return result.join(' ');
};
