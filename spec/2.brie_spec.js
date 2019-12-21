describe("Aged Brie Class", function() {
    describe ("inherits properties from Item class", function () {
        it("should return the name, sellIn and quality of the item", function() {
            const brie = new AgedBrie("Aged Brie", 2, 3);
            expect(brie.name).toEqual("Aged Brie");
            expect(brie.sellIn).toEqual(2);
            expect(brie.quality).toEqual(3);
        });

    });

    describe ("updateItemQuality", function () {
        it("should increase quality by 1 when sellIn value is more than 0", function() {
            const brie = new AgedBrie("Aged Brie", 2, 3);
            brie.updateItemQuality();
            expect(brie.quality).toEqual(4);
        });

        describe("edge cases", function() {
            
            it("should NOT increase quality when quality is 50", function() {
                const brie = new AgedBrie("Item name", 10, 50);
                brie.updateItemQuality();
                expect(brie.quality).toEqual(50);
            });
        });

    });

});