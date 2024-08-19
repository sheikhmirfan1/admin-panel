import { List, SimpleList, Datagrid, TextField, EmailField, DateField } from "react-admin";



const UsersList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <EmailField source="email" />
                {/* <TextField source='location' />
                <TextField source='role' />
                <TextField source='genre' /> 
                <DateField source='createdAt' /> */}
            </Datagrid>
        </List>
    )
}

export default UsersList