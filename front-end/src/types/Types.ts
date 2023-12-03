export type ViewRoutes = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  secondary?: boolean;
  layout?: string;
};

export type TypeRoutes = {
  title: string;
  layout: string;
  views: ViewRoutes[];
};
export type TypeRouteClient = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  layout: string;
  secondary?: boolean;
  views: ViewRoutes[];
};

//
export type TypeDataCollapse = {
  key: number | string;
  label: string;
  children: string;
};

export type TypeDataTabsContentChildren2 = {
  type: string;
  title?: string | undefined;
  collapse?: TypeDataCollapse[] | undefined;
};
export type TypeDataTabsContentChildren = {
  type: string;
  title?: string | undefined;
  text?: string | undefined;
  content?: TypeDataTabsContentChildren2[] | undefined;
  collapse?: TypeDataCollapse[] | undefined;
};

export type TypeDataTabsContent = {
  type: string;
  src?: string | undefined;
  content?: TypeDataTabsContentChildren[] | undefined;
};

export type TypeDataTabs = {
  className: string;
  content: TypeDataTabsContent[];
};

//
export interface TypeDataUser {
  address: string;
  avatar: string;
  birthDay: string;
  cccd: string;
  email: string;
  fullName: string;
  id: number;
  idUser: number;
  password: string;
  payment: string;
  phone: string;
  role: "user" | "admin";
  sex: string;
  username: string;
}

export interface TypeProduct {
  key: string;
  colors: string;
  description: string;
  idProduct: string;
  images: string;
  nameProduct: string;
  price: string;
  price_old: string;
  size: string;
  tags: string;
  trademark: string;
  slug: string;
}

export interface TypeCart {
  cartQuantity: number;
  key: string;
  colors: string;
  description: string;
  idProduct: string;
  images: string;
  nameProduct: string;
  price: string;
  price_old: string;
  size: string;
  tags: string;
  trademark: string;
  slug: string;
}
