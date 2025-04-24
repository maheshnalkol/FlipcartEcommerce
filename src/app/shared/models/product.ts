export interface ProductSpecification {
  _id: string;
  specification_name: string;
  specification_value: string;
}

export interface Iproduct {
  _id: string;
  title: string;
  product_description: string[];
  rating: number;
  reviews_count: number;
  images: string[];
  tags: string[];
  product_details: string | null;
  return_policy: string | null;
  total_price: string;
  product_specifications: ProductSpecification[] | null;
  category: string;
  subcategory: string;
}
