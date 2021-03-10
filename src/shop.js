class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateStockQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }

    return this.items;
  }
}

module.exports = {
  Shop,
};
