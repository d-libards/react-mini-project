import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color) => {
        const id = nanoid();
        return <SingleColor color={color} key={id} />;
      })}
    </section>
  );
}
export default ColorList;
