
export const FooterForm = () => {
  return (
    <div className="w-full max-w-[393px] rounded-[10px] py-10 px-7 bg-gray-800 border border-gray-500">
      <h6 className="heading-6">Subscribe to our newsletter</h6>
      <form className="mt-5 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-md px-4 py-2 text-gray-200"
        />
        <button type="submit" className="btn bg-blue-violet w-full">
          Subscribe
        </button>
      </form>
    </div>
  );
};
