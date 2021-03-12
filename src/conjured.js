const { Item } = require('../src/item');

class Conjured extends Item {
  updateQuality() {
    this.sellIn--;

    if (this.sellIn < 0) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }

    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

module.exports = {
  Conjured,
};
