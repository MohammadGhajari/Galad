import { getName } from 'iso-639-1';


export function getCurrencySymbol(currencyCode) {
  switch (currencyCode) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CAD":
      return "CA$";
    case "AUD":
      return "A$";
    case "CHF":
      return "Fr";
    case "CNY":
      return "¥";
    case "SEK":
      return "kr";
    case "INR":
      return "₹";
    default:
      return null;
  }
}


export function getLanguageName(code) {
  try {
    const language = getName(code);
    if (language) {
      return language;
    } else {
      return 'Language not found';
    }
  } catch (error) {
    return 'Error: Invalid language code';
  }
}

