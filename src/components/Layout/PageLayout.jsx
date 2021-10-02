export default function PageLayout(props) {
  return (
    <div className="text-white flex-1 p-10 overflow-auto">
      <h3 className="font-bold text-5xl">{props.title}</h3>
      <section className="mt-10 mx-auto w-full lg:w-1/2">{props.children}</section>
    </div>
  );
}
