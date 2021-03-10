const { BackstagePasses } = require('../src/backstage_passes');

describe('BackstagePasses', function () {
  it('quality increases by 1 when there are more than 10 days on sellin', function () {
    const item = new BackstagePasses('pass 1', 12, 30);
    item.updateQuality();
    expect(item.quality).toEqual(31);
    expect(item.sellIn).toEqual(11);
  });

  it('quality increases by 2 when there are 10 to 6 days on sellin', function () {
    const item = new BackstagePasses('pass 2', 9, 30);
    item.updateQuality();
    expect(item.quality).toEqual(32);
  });

  it('quality increases by 3 when there are 5 days or less on sellin', function () {
    const item = new BackstagePasses('pass 3', 4, 30);
    item.updateQuality();
    expect(item.quality).toEqual(33);
  });

  it('quality drops to 0 after the concert', function () {
    const item = new BackstagePasses('pass 4', 0, 30);
    item.updateQuality();
    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(0);
  });

  it('Quality of an item is never more than 50', function () {
    const item = new BackstagePasses('pass 5', 9, 49);
    item.updateQuality();
    expect(item.quality).toEqual(50);
  });

});
