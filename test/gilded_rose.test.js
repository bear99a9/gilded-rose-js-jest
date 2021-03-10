const { Shop } = require('../src/shop');
const { Item } = require('../src/item');
const { NormalItem } = require('../src/normal_item');

describe('Gilded Rose', function () {
  it('NormalItem', function () {
    const gildedRose = new Shop([new NormalItem('foo', 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(19);
  });

});
