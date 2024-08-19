import {
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const ReservationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="email" />
      <TextField source="phone" />
      <NumberField source="people" />
      <TextField source="date" />
    </SimpleShowLayout>
  </Show>
);
