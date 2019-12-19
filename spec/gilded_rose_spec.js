// var {Shop, Item} = require('../src/gilded_rose.js').default;
describe("Gilded Rose - Shop", function() {

  describe ("can read an item's property", function () {
    it("should return the name of the item (by index) when there is only one item", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      expect(gildedRose.showItemName(0)).toEqual("Aged Brie");
    });

    it("should return the names of all items (by index) when there are multiple items", function() {
      const list = [new Item("Aged Brie", 0, 0), new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0), new Item("Sulfuras, Hand of Ragnaros", 0, 0)]
      const gildedRose = new Shop(list);
      expect(gildedRose.showItemName(0)).toEqual("Aged Brie");
      expect(gildedRose.showItemName(1)).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(gildedRose.showItemName(2)).toEqual("Sulfuras, Hand of Ragnaros");
    });
  });

  describe ("for all items, quality value is always between 0 and 50 (included)", function () {
    it("should NOT update the quality of the Aged Brie item if current quality is 50", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(50);
    });

    it("should NOT update the quality of the Standard item if current qulity value is 0", function() {
      const gildedRose = new Shop([ new Item("Any item", 15, 0) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0);
    });

    it("should NOT update the quality of the Conjured item if current qulity value is 0", function() {
      const gildedRose = new Shop([ new Item("Conjured item", 15, 0) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0);
    });

  });

  describe ("for Aged Brie items", function () {
    it("should update the quality of the Aged Brie item (increase by 1)", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(2);
    });
  });

  describe ("for Sulfuras items", function () {
    it("should NOT update the quality when the SellIn value is more than 10", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 15, 5) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(5);
    });

    it("should NOT update the quality when the SellIn value is less than 10", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 5) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(5);
    });
  });

  describe ("for Backstage Passes items", function () {
    it("should update the quality (increase by 1) when the SellIn value is more than 10", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(6);
    });

    it("should update the quality (increase by 2) when the SellIn value is between 10 and 6", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 5) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(7);
    });

    it("should update the quality (increase by 3) when the SellIn value is between 5 and 0", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 5) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(8);
    });

    it("should set the quality to 0 when the SellIn value is 0 or less", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 19) ]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0);
    });
  });

    describe ("for Standard items", function () {
      it("decreases the quality by 1 when SellIn value is more than 0", function() {
        const gildedRose = new Shop([ new Item("Any item", 15, 5) ]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(4);
      });

      it("decreases the quality by 2 when SellIn value is 0 or less", function() {
        const gildedRose = new Shop([ new Item("Any item", 0, 5) ]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(3);
      });

    });

    describe ("for Conjured items", function () {
      it("decreases the quality by 2 when SellIn value is more than 0", function() {
        const gildedRose = new Shop([ new Item("Conjured item", 15, 10) ]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(8);
      });

      it("decreases the quality by 4 when SellIn value is 0 or less", function() {
        const gildedRose = new Shop([ new Item("Conjured item", -1, 5) ]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(1);
      });

    });

  });
