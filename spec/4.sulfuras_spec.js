describe("Sulfuras Class", function() {
    describe ("inherits properties from Item class", function () {
        it("should return the name, sellIn and quality of the item", function() {
            const sulfurasItem = new Sulfuras("Item name", 2, 3);
            expect(sulfurasItem.name).toEqual("Item name");
            expect(sulfurasItem.sellIn).toEqual(2);
            expect(sulfurasItem.quality).toEqual(3);
        });

    });

    describe ("updateItemQuality", function () {
        it("should NOT decrease quality by 1", function() {
            const sulfurasItem = new Sulfuras("Item name", 12, 3);
            sulfurasItem.updateItemQuality();
            expect(sulfurasItem.quality).toEqual(3);
        });
    });

    describe ("updateItemSellIn", function () {
        it("should NOT decrease sellIn value", function() {
            const sulfurasItem  = new Sulfuras("Item name", 10, 6);
            sulfurasItem .updateItemSellIn();
            expect(sulfurasItem.sellIn).toEqual(10);
        });

    });

});