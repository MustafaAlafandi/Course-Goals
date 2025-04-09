import TableStyles from "./Table.module.css";
import Row from "./Row";
const tableHead = [
  "Year",
  "Total Savings",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];
let return_content = <p style={{textAlign:'center'}}>No Investment Calculated Yet.</p>
const Tabel = (props) => {
  if(props.counts.length !== 0)
  {
    return_content = (
      <table className={TableStyles.table}>
      <thead className={TableStyles.thead}>
          <Row cells={tableHead}/>
      </thead>
      <tbody className={TableStyles.tbody}>
        {
          props.counts.map((count,i) => <Row key = {i} cells={count}/>)
        }
      </tbody>
    </table>
    );
  }
  return (
    return_content
  );
};
export default Tabel;
