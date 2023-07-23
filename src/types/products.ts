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
