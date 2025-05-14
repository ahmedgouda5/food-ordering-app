export enum PageRoutes {
  Logo = "/",
}

export enum PagesNavbar {
  Menu = "/Menu",
  About = "/About",
  Contact = "/Contact",
  Login = "/Auth/Login",
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
