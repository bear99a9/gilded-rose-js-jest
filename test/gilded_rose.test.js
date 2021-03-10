const { Shop } = require('../src/shop');
const { NormalItem } = require('../src/normal_item');
const { AgedBrie } = require('../src/aged_brie');
const { Sulfuras } = require('../src/sulfuras');
const { BackstagePasses } = require('../src/backstage_Passes');

describe('Gilded Rose', function () {
  const gildedRose = new Shop([new NormalItem('normal', 20, 20),
  new AgedBrie('brie', 20, 20),
  new NormalItem('normal 2', -1, 10),
  new Sulfuras('Sulfuras', 10, 10),
  new BackstagePasses('Pass 1', 30, 10),
  new BackstagePasses('Pass 2', 10, 10),
  new BackstagePasses('Pass 3', 5, 10),
  new BackstagePasses('Pass 4', -1, 10),
  new AgedBrie('brie 2', 20, 50),

  ]);
  const items = gildedRose.updateQuality();

  it('Normal items decrease by 1 within sellin period', function () {
    expect(items[0].quality).toEqual(19);
    expect(items[0].name).toEqual('normal');
    expect(items[0].sellIn).toEqual(19);
  });

  it('Aged brie increases by 1 as it ages', function () {
    expect(items[1].quality).toEqual(21);
  });

  it('Normal items decrease by 2 when out of sellin period', function () {
    expect(items[2].quality).toEqual(8);
  });

  it('Sulfuras does not change', function () {
    expect(items[3].quality).toEqual(10);
  });

  it('Backstage passes quality increase by 1 when 11 or more days left', function () {
    expect(items[4].quality).toEqual(11);
  });

  it('Backstage passes quality increase by 2 when 10 to 6 days left', function () {
    expect(items[5].quality).toEqual(12);
  });

  it('Backstage passes quality increase by 3 when 5 or less days left', function () {
    expect(items[6].quality).toEqual(13);
  });

  it('Backstage passes quality reduce to 0 after the concert', function () {
    expect(items[7].quality).toEqual(0);
  });

  it("No item's quality can be above 50", function () {
    expect(items[8].quality).toEqual(50);
  });

});
