import { Box, BoxProps, Image } from 'grommet';
import React, { useMemo } from 'react';
import { UnitStub } from 'nakama.common';
import { getUnitIcon } from '../../modules/unit-helpers';

export interface UnitBoxProperties {
  unitId: number;
  size: BoxProps['height'];
}

export interface UnitBoxImplProperties extends UnitBoxProperties {
  unit: UnitStub;
}

const getUnit = (unitId: number) => ({} as UnitStub);

export const UnitBoxImpl = ({ unit, size = 'xxsmall' }: UnitBoxImplProperties) => {
  const unitImage = useMemo(() => getUnitIcon(unit.id), [unit.id]);

  return (
    <Box height={size} width={size} background="brand">
      <Image fit="cover" src={unitImage} alt={unit.name} />
    </Box>
  );
};

export const UnitBox = (props: UnitBoxProperties) => {
  const unit = useMemo(() => getUnit(props.unitId), [props.unitId]);
  return <UnitBoxImpl unit={unit} {...props} />;
};
