import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!currency instanceof Currency) {
      throw new TypeError('Currency must be a currency');
    } else {
      this._currency = currency;
    }
  }

  displayFullPrice() {
   return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Converion Rate must be a number');
    }
    return amount * conversionRate;
  }
}
