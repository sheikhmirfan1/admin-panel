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

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >

    <Resource
      name="users"
      list={UsersList}
      // edit={EditGuesser}
      // show={ShowGuesser}
    />
  </Admin>
);
