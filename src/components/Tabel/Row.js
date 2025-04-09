const Row = (props) => {
    return(
        <tr>
            {props.cells.map((cell,i)=><th key={i}>{cell}</th>)}
        </tr>
    );
};
export default Row;
