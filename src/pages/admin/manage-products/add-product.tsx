
type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl  font-semibold">Manage Products</h2>
      {/* content here */}

      <div className=" mt-20 flex justify-center">
        <div className="flex h-[150px]  w-[800px] items-center justify-center rounded-lg bg-gray-100 px-10 shadow-lg">
          <input
            type="text"
            className="h-10 w-full border-2 border-blue-600 "
            placeholder="URL"
          />
          <button className="ml-1  border-2 border-red-800 px-8 py-1.5 text-red-800 duration-200  hover:bg-red-800 hover:text-gray-100">
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
