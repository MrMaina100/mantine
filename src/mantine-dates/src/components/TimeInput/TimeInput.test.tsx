import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors } from '@mantine/tests';
import { __InputStylesNames } from '@mantine/core';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/dates/TimeInput', () => {
  tests.axe([
    <TimeInput aria-label="test-label" />,
    <TimeInput label="test-label" />,
    <TimeInput label="test-label" error />,
    <TimeInput label="test-label" error="test-error" id="test" />,
    <TimeInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<TimeInputProps, __InputStylesNames>({
    component: TimeInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/dates/TimeInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    selector: 'input',
  });
});
