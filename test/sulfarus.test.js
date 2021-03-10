const { Sulfuras } = require('../src/sulfuras');

describe('Sulfuras', function () {
  it('being a legendary item, never has to be sold or decreases in quality', function () {
    const item = new Sulfuras('sulfuras', 0, 50);
    item.updateQuality();
    expect(item.quality).toEqual(50);
    expect(item.sellIn).toEqual(0);
  });
});
