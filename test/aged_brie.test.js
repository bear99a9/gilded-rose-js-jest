const { AgedBrie } = require('../src/aged_brie');

describe('AgedBrie', function () {
  it('increases in quality by one as it ages', function () {
      const item = new AgedBrie('brie1', 20, 40);
      item.updateQuality();
      expect(item.quality).toEqual(41);
      expect(item.sellIn).toEqual(19);
    });

  it('quality should not rise over 50', function () {
    const item = new AgedBrie('brie2', 20, 50);
    item.updateQuality();
    expect(item.quality).toEqual(50);
  });
});
