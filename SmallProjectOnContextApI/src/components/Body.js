import Card from "./Card.js";
import { useStateValue } from "../context/Provider.js";
const Body = () => {
  const {
    state: { res },
    dispatch,
  } = useStateValue();
  console.log(res);
  return (
    <div className="w-full p-8">
      <div className="w-11/12 mx-auto flex flex-wrap gap-4 items-center justify-center">
        {res.map((res) => (
          <Card key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
