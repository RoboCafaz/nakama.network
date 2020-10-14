import { fallbackIcons, getUnitIcon } from '../unit-helpers';

describe('unit-helpers', () => {
  describe('getUnitIcon', () => {
    describe('hardcoded', () => {
      it.each(Object.entries(fallbackIcons))('for %d returns %s', (id, expectation) => {
        expect(getUnitIcon(parseInt(id))).toBe(expectation);
      });
    });
    describe('non-hardcoded', () => {
      it.each([
        [1, 'https://onepiece-treasurecruise.com/wp-content/uploads/f0001.png'],
        [10, 'https://onepiece-treasurecruise.com/wp-content/uploads/f0010.png'],
        [100, 'https://onepiece-treasurecruise.com/wp-content/uploads/f0100.png'],
        [1000, 'https://onepiece-treasurecruise.com/wp-content/uploads/f1000.png']
      ])('for %d returns wiki %s', (id, expectation) => {
        expect(getUnitIcon(id)).toBe(expectation);
      });
    });
  });
});
