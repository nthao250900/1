import { Avatar } from "antd";
import InputComponent from "components/admin/customers/input.component";
import { StyleActionUser } from "components/admin/customers/styles/styles";
import { UrlServer } from "config/UrlServer";
import React from "react";
import { TypeDataUser } from "types/Types";

interface Props {
  record: TypeDataUser;
}

const AccountComponent = ({ record }: Props) => {
  return (
    <StyleActionUser>
      <div className='action'>
        <div className='action__left'>
          <div className='avatar'>
            <Avatar
              shape='square'
              src={`${UrlServer}/image/${
                record.avatar ?? "avatar-default.png"
              }`}
              className='image'
            />
            <div className='upload-image'>
              <i className='fa-regular fa-pen-to-square'></i>
            </div>
          </div>
          <div className='bottom'>
            <InputComponent
              label='Username'
              type='username'
              text={record.username}
            />
            <InputComponent
              label='Password'
              type='password'
              text={record.password.slice(0, 6)}
            />
          </div>
        </div>
        <div className='action__right'>
          <InputComponent type='text' label='FullName' text={record.fullName} />
          <InputComponent type='email' label='Email' text={record.email} />
          <InputComponent type='text' label='Address' text={record.address} />
          <InputComponent type='date' label='BirthDay' text={record.birthDay} />

          <InputComponent type='text' label='Sex' text={record.sex} />
          <InputComponent type='text' label='Phone' text={record.phone} />
          <InputComponent type='text' label='CCCD' text={record.cccd} />
          {/* <InputComponent
                type='text'
                label='CCCD'
                text={record.cccd}
              /> */}
        </div>
      </div>
    </StyleActionUser>
  );
};

export default AccountComponent;
