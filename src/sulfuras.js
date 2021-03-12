const { Item } = require('../src/item');

class Sulfuras extends Item {
  updateQuality() {
    this.quality = this.quality;
    this.sellIn = this.sellIn;
  }
}

module.exports = {
  Sulfuras,
};
