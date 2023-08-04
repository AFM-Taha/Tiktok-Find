import { UrlSection } from '@/components/adminComponents/manageProducts/addProduct';
import { useState } from 'react';

type Props = {};

const AddProduct = (props: Props) => {
  const [id, setId] = useState('');

  const url = `https://www.lovbuy.com/1688api/getproductinfo.php?key=d5227a4d75d4e397254e059c2b1bf982&item_id=${id}&lang=en`;
  console.log(id);
  

  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl  font-semibold">Manage Products</h2>
      {/* Url  Section */}
      <UrlSection setId={setId} />
      
    </div>
  );
};

export default AddProduct;
