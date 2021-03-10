const { Item } = require('../src/item');

class NormalItem extends Item {
  updateQuality() {
    if (this.sellIn <= 0) {
      for (let i = 0; i < 2; i++) {
        this.quality--;
      }
    }else {
      this.quality--;
    }

    if (this.quality <= 0) {
      this.quality = 0;
    }

    this.sellIn--;
  }
}

module.exports = {
  NormalItem,
};
