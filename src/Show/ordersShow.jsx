import { ArrayField, Datagrid, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ArrayField source="products">
        <Datagrid>
          <TextField source="product" />
          <NumberField source="quantity" />
          <NumberField source="price" />
        </Datagrid>
      </ArrayField>
      <TextField source="name" />
      <TextField source="status" />
      <TextField source="location" />
      <NumberField source="phone" />
      <NumberField source="totalPrice" />
    </SimpleShowLayout>
  </Show>
);