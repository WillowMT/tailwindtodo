export default function List({
  className,
  title,
  desc,
}: {
  className?: string;
  title: string;
  desc: string;
}) {
  return (
    <div className={className}>
      <h2 className="mx-4 text-xl">{title}</h2>
      <p className=" mx-4 my-3">{desc}</p>
      <button className="ml-4 bg-red-500 hover:bg-red-600 text-[0.8rem] text-white px-3 py-1.5 rounded-md">
        Delete
      </button>
      <button className=" bg-green-500 hover:bg-green-600 text-[0.8rem] text-white px-3 py-1.5 rounded-md ml-3">
        Complete
      </button>
    </div>
  );
}
