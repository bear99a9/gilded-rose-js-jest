const { Item } = require('../src/item');

class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality++;
    }

    this.sellIn--;
  }
}

module.exports = {
  AgedBrie,
};
