import { FC, useMemo, useCallback } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';

import { FormSchema, InputConstraint } from 'types';
import { FormGenerator } from 'components/FormGenerator';

function generateFieldValidationSchema(
  controlType: FormSchema['controlType'],
  constraints: FormSchema['constraints'] = {},
) {
  let base = string();

  const { required } = constraints;
  if (required) {
    base = base.required();
  }

  switch (controlType) {
    case 'input':
      Object.entries(constraints as InputConstraint).forEach(
        ([name, value]) => {
          if (name === 'min') {
            base = base.min(value);
          }

          if (name === 'max') {
            base = base.max(value);
          }
        },
      );
      break;
  }

  return base;
}

function createValidationSchema(schema: FormSchema[]) {
  // NOTE: This is a very simple implementation that makes some invalid assumptions
  const validationSchema = schema.reduce(
    (acc, { name, controlType, constraints }) => ({
      ...acc,
      [name]: generateFieldValidationSchema(controlType, constraints),
    }),
    {},
  );

  return object().shape(validationSchema);
}

interface Props {
  schema: FormSchema[];
}

export const Form: FC<Props> = ({ schema }) => {
  const initialValues = useMemo(
    () =>
      schema.reduce(
        (values, { name, defaultValue }) => ({
          ...values,
          [name]: defaultValue ?? '',
        }),
        {},
      ),
    [schema],
  );

  const validationSchema = useMemo(() => createValidationSchema(schema), [
    schema,
  ]);

  const onSubmit = useCallback((values: unknown) => {
    console.log('onSubmit', values);
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormGenerator schema={schema} />
    </Formik>
  );
};
