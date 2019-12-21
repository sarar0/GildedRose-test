describe("Standard item Class", function() {
    describe ("inherits properties from Item class", function () {
        it("should return the name, sellIn and quality of the item", function() {
            const standardItem = new Standard("Item name", 2, 3);
            expect(standardItem.name).toEqual("Item name");
            expect(standardItem.sellIn).toEqual(2);
            expect(standardItem.quality).toEqual(3);
        });

    });

    describe ("updateItemQuality", function () {
        it("should decrease quality by 1 when sellIn value is more than 0", function() {
            const standardItem = new Standard("Item name", 12, 3);
            standardItem.updateItemQuality();
            expect(standardItem.quality).toEqual(2);
        });

        it("should decrease quality by 2 when sellIn value is less than 0", function() {
            const standardItem = new Standard("Item name", -3, 6);
            standardItem.updateItemQuality();
            expect(standardItem.quality).toEqual(4);
        });

        describe("edge cases", function() {
            it("should decrease quality by 1 when sellIn value is less than 0 and quality is 1", function() {
                const standardItem = new Standard("Item name", -3, 1);
                standardItem.updateItemQuality();
                expect(standardItem.quality).toEqual(1);
            });
            
            it("should NOT decrease quality when sellIn value is less than 0 and quality is 0", function() {
                const standardItem = new Standard("Item name", -3, 0);
                standardItem.updateItemQuality();
                expect(standardItem.quality).toEqual(0);
            });
        });
    });

});