const { Shop } = require('../src/shop');
const { NormalItem } = require('../src/normal_item');
const { AgedBrie } = require('../src/aged_brie');
const { Sulfuras } = require('../src/sulfuras');
const { BackstagePasses } = require('../src/backstage_Passes');
const { Conjured } = require('../src/conjured');

const items = [
  new NormalItem('+5 Dexterity Vest', 10, 20),
  new AgedBrie('Aged Brie', 2, 0),
  new NormalItem('Elixir of the Mongoose', 5, 7),
  new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
  new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  new Conjured('Conjured Mana Cake', 3, 6),
  new Conjured('Conjured Vegan Mana Cake', 15, 50),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log('OMGHAI!');
for (let day = 0; day < days; day++) {
  console.log(`
-------- day ${day} --------`);
  console.log('name, sellIn, quality');
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateStockQuality();
}
