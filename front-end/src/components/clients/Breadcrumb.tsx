import React from "react";
import { BreadcrumbStyled } from "./styles/BreadcrumbStyle";
import Container from "./Container";
import { NavLink } from "react-router-dom";

type TypeBreadCrumb = {
  text: string;
  href: string | undefined;
};

type Props = {
  title?: string | undefined;
  breadcrumb: TypeBreadCrumb[];
};

const Breadcrumb = ({ title, breadcrumb }: Props) => {
  return (
    <BreadcrumbStyled>
      <div className='breadcrumb'>
        {title && (
          <div className='breadcrumb__left'>
            <h3>{title}</h3>
          </div>
        )}
        <div className='breadcrumb__right'>
          <ul>
            {breadcrumb?.map((item: TypeBreadCrumb, key: number) => (
              <li key={key}>
                {item.href ? (
                  <NavLink className='link' to={item.href}>
                    {item.text}
                  </NavLink>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
