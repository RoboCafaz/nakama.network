import React from 'react';
import { UnitType, UnitFlag, UnitClass, UnitStub } from 'nakama.common';
import { UnitBoxImpl } from '../unit-box';

export default {
  title: 'Units / Boxes',
  component: UnitBoxImpl
};

const testUnit: UnitStub = {
  id: 520,
  name: "Monkey D. Luffy, Straw Hat Pirates' Attack",
  class: UnitClass.Fighter | UnitClass.FreeSpirit,
  type: UnitType.STR,
  flags: UnitFlag.Unknown
};

export const DefaultUnitBox = () => (
  <React.Fragment>
    <UnitBoxImpl unit={testUnit} unitId={testUnit.id} size="xxsmall" />
    <UnitBoxImpl unit={testUnit} unitId={testUnit.id} size="xsmall" />
    <UnitBoxImpl unit={testUnit} unitId={testUnit.id} size="small" />
    <UnitBoxImpl unit={testUnit} unitId={testUnit.id} size="medium" />
    <UnitBoxImpl unit={testUnit} unitId={testUnit.id} size="large" />
  </React.Fragment>
);
