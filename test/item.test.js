const { Shop } = require('../src/shop');
const { Item } = require('../src/item');

describe('Item', function () {
  it('should create an item', function () {
    const item = new Item('Banana', 20, 40);
    expect(item.name).toEqual('Banana');
    expect(item.sellIn).toEqual(20);
    expect(item.quality).toEqual(40);
  });
});
