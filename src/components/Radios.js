import Radio from "./Radio";
function Radios({ className, name, values, onChange, checkedNumber }) {
  return (
    <div className={className}>
      {values.map((ele) => (
        <Radio
          key={ele}
          name={name}
          number={ele}
          onChange={onChange}
          checked={checkedNumber === ele}
        />
      ))}
    </div>
  );
}
export default Radios;
