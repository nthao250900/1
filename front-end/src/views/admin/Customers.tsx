import TableCustomerComponent from "components/admin/customers/table.component";
import { UrlServer } from "config/UrlServer";
import { postWithAuthorization } from "helpers/queryHelper";
import { useQuery } from "react-query";
import React from "react";
import { ADMIN_QUERY_ALL_USER } from "config/KeyQuey";
import { useSelector } from "react-redux";
import { RootState } from "store";

const fetchAllUser = (accessToken: string, parameters?: any) => {
  return postWithAuthorization(
    `${UrlServer}/api/admin/select-account`,
    accessToken
  );
};

const Customers = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { data: dataUser, isLoading }: any = useQuery(
    ADMIN_QUERY_ALL_USER,
    () => fetchAllUser(user.accessToken)
  );
  return (
    <div>
      <TableCustomerComponent dataUser={dataUser} />
    </div>
  );
};

export default Customers;
