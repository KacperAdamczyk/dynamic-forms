import { FC } from 'react';
import styled from 'styled-components';

import { FormSchemaContextProvider } from 'contexts';
import { JsonEditor, CustomForm } from 'components';

const Container = styled.div`
  display: flex;
  justify-items: center;
`;

const Item = styled.div`
  margin: 20px;
`;

export const App: FC = () => {
  return (
    <Container>
      <FormSchemaContextProvider>
        <Item>
          <JsonEditor />
        </Item>
        <Item>
          <CustomForm />
        </Item>
      </FormSchemaContextProvider>
    </Container>
  );
};
