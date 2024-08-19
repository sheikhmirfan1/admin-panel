import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import  dataProvider  from "./dataProvider";
import { authProvider } from "./authProvider";
import UsersList from "./List/usersList";
import { UserCreate } from "./Create/usersCreate";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >

    <Resource
      name="users"
      list={UsersList}
      create={UserCreate}
      // edit={EditGuesser}
      // show={ShowGuesser}
    />
  </Admin>
);
