export interface Home {
  id: number;
  img: string;
  city: string;
  country: string;
  price: number;
  rating: string;
}

export interface Places {
  id: number;
  img: string;
  location: string;
  type: string;
  desc: string;
  availability: string;
  price: number;
  rating: string;
}

export interface Cart {
  id: number;
  quantity: number;
  productId: number;
  title: string;
  image: string;
}

export interface Order {
  id: number;
  quantity: number;
  productId: number;
}

export interface LoginData {
  email: string;
  password: string;
}
