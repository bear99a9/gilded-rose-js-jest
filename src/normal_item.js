const { Item } = require('../src/item');

class NormalItem extends Item {
  updateQuality() {
    this.sellIn--;

    if (this.sellIn <= 0) {
      this.quality -= 2;
    }else {
      this.quality--;
    }

    if (this.quality <= 0) {
      this.quality = 0;
    }
  }
}

module.exports = {
  NormalItem,
};
