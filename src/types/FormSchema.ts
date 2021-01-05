import { ControlTypes } from './ControlTypes';

export interface FormSchema {
  controlType: ControlTypes;
  name: string;
  label: string;
  defaultValue?: string;
  options?: SelectOptions;
  constraints?: InputConstraint | SelectConstraint;
}

interface BasicConstraints {
  required?: boolean;
}

export interface SelectConstraint extends BasicConstraints {}

export interface InputConstraint extends BasicConstraints {
  min: number;
  max: number;
}

export interface SelectOptions {
  data: {
    label: string;
    value: string;
  }[];
}
