import Link from 'next/link';

const ProductManage = () => {
  return (
    <div className="text-gray-100">
      <h2 className="mb-20 text-center text-3xl  font-semibold">
        Manage Product
      </h2>
      {/* content here */}

      <Link
        href={'/admin/manage-products/add-product'}
        className="  rounded border-2 border-blue-600 bg-blue-600 px-5 py-1 font-semibold duration-300  hover:bg-gray-50 hover:text-blue-600">
        Add Product
      </Link>
      <div className="relative  mt-5 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManage;
