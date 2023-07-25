export interface BreadcrumbItem {
  id: number;
  name: string;
  url: string;
}

export default interface ProductsGridHomeCardProps {
  imgsrc: string;
  alttext: string;
  title: string;
  basePrice: number;
  currentPrice: number;
}

interface Specification {
  width: string;
  _id: string;
}

interface Variant {
  size?: string;
  color?: string;
  material?: string;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  specifications: Specification[];
  variants: Variant[];
  tags: string[];
  description: string;
  image: string;
  price: number;
  stock: number;
  sku: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FetchedData {
  status: string;
  message: string;
  data: {
    totalProducts: number;
    pageCount: number | null;
    result: Product[];
  };
}
