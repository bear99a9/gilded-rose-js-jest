const { Conjured } = require('../src/conjured');

describe('Conjured', function () {
  it('quality reduces by 2 and sellin decrease by 1 if inside sellin time', function () {
    const item = new Conjured('conjured 1', 20, 20);
    item.updateQuality();
    expect(item.sellIn).toEqual(19);
    expect(item.quality).toEqual(18);
  });

  it('quality reduces by 4 if outside sellin time', function () {
    const item = new Conjured('conjured 2', -1, 20);
    item.updateQuality();
    expect(item.quality).toEqual(16);
  });

  it('quality can not reduce below zero', function () {
    const item = new Conjured('conjured 3', -1, 2);
    item.updateQuality();
    expect(item.quality).toEqual(0);
  });

});
