import Card from "./Card.js";

const Body = () => {
  return (
    <div className="w-full h-screen p-8">
      <div className="w-11/12 flex flex-wrap gap-4 items-center">
        {Array(5)
          .fill("")
          .map((card, i) => {
            return <Card key={i} />;
          })}
      </div>
    </div>
  );
};
export default Body;
