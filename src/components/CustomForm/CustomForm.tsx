import { useContext } from 'react';

import { FormSchemaContext } from 'contexts';
import { Form } from 'components';

export const CustomForm = () => {
  const [schema] = useContext(FormSchemaContext) ?? [];
  return <div>{schema ? <Form schema={schema} /> : <div>Loading...</div>}</div>;
};
