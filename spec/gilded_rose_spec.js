// var {Shop, Item} = require('../src/gilded_rose.js').default;
describe("Gilded Rose - Shop", function() {

  it("should return the name of the item (by index) when there is only one item", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const items = gildedRose.items;
    expect(gildedRose.showItemName(0)).toEqual("Aged Brie");
  });

  it("should return the names of all items (by index) when there are multiple items", function() {
    const list = [new Item("Aged Brie", 0, 0), new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0), new Item("Sulfuras, Hand of Ragnaros", 0, 0)]
    const gildedRose = new Shop(list);
    const items = gildedRose.items;
    expect(gildedRose.showItemName(0)).toEqual("Aged Brie");
    expect(gildedRose.showItemName(1)).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(gildedRose.showItemName(2)).toEqual("Sulfuras, Hand of Ragnaros");
  });

});
