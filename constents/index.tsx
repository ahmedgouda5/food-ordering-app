export enum PageRoutes {
  Logo = "/",
}

export enum PagesNavbar {
  Menu = "/Menu",
  About = "/About",
  Contact = "/Contact",
  Login = "/Auth/Login",
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
}

export enum PizzaPjoto {
  Margrita = "/PizzaOne.png",
  cheesse = "/PizzaTwo.png",
  Meet = "/PizzaThree.png",
}

export type TittleProps = {
  head: string;
  para: string;
};

export interface PizzaProps {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  small?: string;
  medium?: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}


export interface Order{
  userId:string | null;
  productName:string;
  image:string;
  productDescription:string;
  price:string;
  size:string | undefined
}