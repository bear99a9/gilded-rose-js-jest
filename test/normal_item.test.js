const { NormalItem } = require('../src/normal_item');

describe('NormalItem', function () {
  it('quality and sellin decrease by one if inside sellin time', function () {
    const item = new NormalItem('item1', 25, 30);
    item.updateQuality();
    expect(item.quality).toEqual(29);
    expect(item.sellIn).toEqual(24);
  });

  it('quality reduces by doubles after sellin', function () {
    const item = new NormalItem('item2', -1, 20);
    item.updateQuality();
    expect(item.quality).toEqual(18);
  });

  it('quality can not reduce below zero', function () {
    const item = new NormalItem('item2', 0, 1);
    item.updateQuality();
    expect(item.quality).toEqual(0);
  });
});
