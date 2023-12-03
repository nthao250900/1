import AccountComponent from "components/accountComponent/account.component";
import Container from "components/clients/Container";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const AccountView = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <div
        style={{
          padding: "50px 0",
        }}
      >
        <AccountComponent record={user.userData} />
      </div>
    </Container>
  );
};

export default AccountView;
