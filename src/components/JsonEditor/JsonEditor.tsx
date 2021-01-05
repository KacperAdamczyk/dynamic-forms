import { FC, useContext, useCallback } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import { FormSchemaContext } from 'contexts';

export const JsonEditor: FC = () => {
  const [schema, setSchema] = useContext(FormSchemaContext) ?? [];
  const onChange = useCallback(
    ({ error, jsObject }) => {
      if (!error) {
        setSchema?.(jsObject);
      }
    },
    [setSchema],
  );

  return (
    <JSONInput
      id="a_unique_id"
      placeholder={schema}
      theme="darktheme"
      locale={locale}
      onChange={onChange}
    />
  );
};
