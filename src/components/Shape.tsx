import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/Shapes.scss";

const Region = ({col,row}) => <rect className="region" x={ col * 10 } y={row * 10} height={10} width={10} />

const Row = ({row}) => <rect className="row" data-position={row} height={10} width={100} y={row * 10} x={0} />

const Col = ({col}) => <rect className="col" data-position={col} width={10} height={60} x={col * 10} y={0} />

const HorizontalDivision = ({position}) => <rect className="division" x={0} y={(position * 10) + 4.5} height={1} width={100} />

const VerticialDivision = ({position}) => <rect className="division" y={0} x={(position * 10) + 4.5} height={60} width={1} />

const Controls = ({rows, toggleRows}) => {
    return (
        <div>
            <fieldset>  
                <legend>Rows or Columns</legend>
                <input type="radio" id="notify-on" name="notify" value="rows" checked={rows} onChange={toggleRows} />
                <label for="notify-on">Rows</label>
                <input type="radio" id="notify-off" name="notify" value="columns" checked={!rows} onChange={toggleRows} />
                <label for="notify-off">Columns</label>
            </fieldset>  
        </div>
    );
}
const Shapes = () => {
    const [horizonalDivs, setHorizontalDivs] = React.useState([]);
    const [verticalDivs, setVerticalDivs] = React.useState([]);
    const [isRows, setRows] = React.useState(true);
    
    const COLS = [0,1,2,3,4,5,6,7,8,9];
    const ROWS = [0,1,2,3,4,5];
    const handleClick = (e) => {
        return isRows
            ? setHorizontalDivs([...horizonalDivs, parseInt(e.target.dataset.position)])
            : setVerticalDivs([...verticalDivs, parseInt(e.target.dataset.position)])
    }
    const toggleRows = () => setRows(!isRows);
    return (
        <div>        
        <Controls rows={isRows} toggleRows={toggleRows} />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" onClick={handleClick}>
        <rect x={0} y={0} width={100} className="boundary" height={60}></rect>
        {isRows
            ? ROWS.map((row) => <Row row={row} />)
            : COLS.map((col) => <Col col={col} />)   
        }
        {horizonalDivs.map((position) => <HorizontalDivision position={position} />)}
        {verticalDivs.map((position) => <VerticialDivision position={position} />)}
    </svg>
        </div>

  )
}

export default Shapes
//{ROWS.map((row) => COLS.map(col => <Region col={col} row={row} />))}