const { Shop, item } = require('../src/gilded_rose');
const { NormalItem } = require('../src/normal_item');
const { AgedBrie } = require('../src/aged_brie');
const { Sulfuras } = require('../src/sulfuras');

describe('Gilded Rose', function () {
  it('Normal items decrease by 1 within sellin period', function () {
    const gildedRose = new Shop([new NormalItem('normal', 20, 20), new AgedBrie('brie', 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
    expect(items[0].name).toEqual('normal');
    expect(items[0].sellIn).toEqual(19);

    // expect(items[1].quality).toEqual(21);
    expect(items[1].name).toEqual('brie');
    expect(items[1].sellIn).toEqual(19);

  });

  xit('Aged brie increases by 1 as it ages', function () {
    const gildedRose = new Shop([new AgedBrie('brie', 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[1].quality).toEqual(21);
    expect(items[1].name).toEqual('brie');
    expect(items[1].sellIn).toEqual(19);
  });

});
