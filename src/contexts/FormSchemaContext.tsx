import {
  FC,
  createContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

import { FormSchema } from 'types';

const defaultValue: FormSchema[] = [
  {
    controlType: 'input',
    name: 'inputValue',
    label: 'Control 1',
    constraints: {
      required: true,
      min: 3,
      max: 10,
    },
  },
  {
    controlType: 'select',
    name: 'selectValue',
    label: 'Control 2',
    options: {
      data: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
      ],
    },
  },
  {
    controlType: 'input',
    name: 'inputValue2',
    label: 'Control 3 w/ default',
    defaultValue: 'foo',
  },
  {
    controlType: 'select',
    name: 'selectValue2',
    label: 'Control 4',
    options: {
      data: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
      ],
    },
    defaultValue: 'option2',
  },
];

type FormSchemaContextType =
  | [FormSchema[], Dispatch<SetStateAction<FormSchema[]>>]
  | null;
export const FormSchemaContext = createContext<FormSchemaContextType>(null);
export const FormSchemaContextProvider: FC = ({ children }) => {
  const [schema, setSchema] = useState<FormSchema[]>(defaultValue);
  const value = useMemo<FormSchemaContextType>(() => [schema, setSchema], [
    schema,
  ]);

  return (
    <FormSchemaContext.Provider value={value}>
      {children}
    </FormSchemaContext.Provider>
  );
};
