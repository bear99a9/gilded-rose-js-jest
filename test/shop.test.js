const { Shop } = require('../src/shop');
const { AgedBrie } = require('../src/aged_brie');

describe('Shop', function () {

  it('initiates with an array', function () {
    const shop = new Shop;
    expect(shop.items instanceof Array).toBe(true);
  });

  it('calls updateStockQuality on items', function () {
    const item = new AgedBrie;
    const shop = new Shop([item]);
    const spy = jest.spyOn(item, 'updateQuality');
    shop.updateStockQuality();
    expect(spy).toHaveBeenCalled();
  });

});
