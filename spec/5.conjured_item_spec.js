describe("Conjured item Class", function() {
    describe ("inherits properties from Item class", function () {
        it("should return the name, sellIn and quality of the item", function() {
            const conjuredItem = new Conjured("Item name", 2, 3);
            expect(conjuredItem.name).toEqual("Item name");
            expect(conjuredItem.sellIn).toEqual(2);
            expect(conjuredItem.quality).toEqual(3);
        });

    });

    describe ("updateItemQuality", function () {
        it("should decrease quality by 2 when sellIn value is more than 0", function() {
            const conjuredItem = new Conjured("Item name", 12, 6);
            conjuredItem.updateItemQuality();
            expect(conjuredItem.quality).toEqual(4);
        });

        it("should decrease quality by 4 when sellIn value is less than 0", function() {
            const conjuredItem = new Conjured("Item name", -3, 6);
            conjuredItem.updateItemQuality();
            expect(conjuredItem.quality).toEqual(2);
        });

        it("should decrease quality to zero when sellIn value is less than 0 and quality is less than 4", function() {
            const conjuredItem = new Conjured("Item name", -3, 3);
            conjuredItem.updateItemQuality();
            expect(conjuredItem.quality).toEqual(0);
        });

    });

});