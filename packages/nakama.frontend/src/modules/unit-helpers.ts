export const fallbackIcons: Record<string, string> = {
  '0574': 'https://onepiece-treasurecruise.com/wp-content/uploads/f00574.png',
  '0575': 'https://onepiece-treasurecruise.com/wp-content/uploads/f00575.png',
  '0742': 'https://onepiece-treasurecruise.com/wp-content/uploads/f0742-2.png',
  '3333': 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5013.png',
  '3334': 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png',
  '3346': 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5026.png',
  '3370': 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5052.png',
  '3374': 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5053.png'
};

export const getUnitIcon = (unitId: number): string => {
  var id = ('0000' + (unitId.toString() || '0')).slice(-4);
  return (
    fallbackIcons[id] || 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png'
  );
};
