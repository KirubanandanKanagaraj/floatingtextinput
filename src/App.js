import "./styles.scss";
import TextInput from "./TextInput";

import { User, Envelope, AddressBook } from "phosphor-react";

export default function App() {
  return (
    <div className="App">
      <form>
        <h1 tabIndex="0">Floating Label Input Textbox</h1>
        <TextInput
          labelText="First Name"
          inpID="firstName"
          size="sm"
          icon={<User size="18" weight="bold" />}
        ></TextInput>

        <TextInput
          labelText="Last Name"
          inpID="lastName"
          size="md"
          icon={<User size="20" weight="bold" />}
        ></TextInput>

        <TextInput
          labelText="Email ID"
          inpID="email"
          size="lg"
          icon={<Envelope size="24" weight="bold" />}
        ></TextInput>

        <TextInput
          labelText="Designation"
          inpID="designation"
          size="xl"
          icon={<AddressBook size="27" weight="bold" />}
        ></TextInput>
      </form>
    </div>
  );
}
