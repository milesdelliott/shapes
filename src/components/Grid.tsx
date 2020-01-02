import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/Grid.scss";
import Progress from './Progress'

const Area = (area) => {
    const {x,y,height,width,content,index, order, onChangeArea, children} = area;
    const className = `area`;
    const controls = [
        {
            label: 'Start X',
            key: 'x'
        },
        {
            label: 'Start Y',
            key: 'y'
        },
        {
            label: 'Width',
            key: 'width'
        },
        {
            label: 'Height',
            key: 'height'
        },
        {
            label: 'Order',
            key: 'order'
        },
    ]
    return (
        <div className={className} data-row={y} data-col={x} data-height={height} data-width={width} data-order={order}>
            <fieldset>
                {controls.map(control => {
                    return (
                        <>
                            <label>{control.label}</label>
                            <input type="number" value={area[control.key]} onChange={area.onChangeArea(index)(control.key)} />
                        </>
                    )
                })}
            </fieldset>
        </div>
    )
}

const Controls = ({addBlock}) => {
    return (
        <div>
            <button className="button-add" onClick={addBlock}>Add Block</button>
        </div>
    );
}

const DEFAULT_AREAS = [
    {
        x:null,
        y: null,
        width: 5,
        height: 3,
        order: null,
        content: null
    },

];
const Grid = () => {
    const [areas, setAreas] = React.useState(DEFAULT_AREAS);
    const onChangeArea = index => key => event => {
        const newAreas = [...areas];
        console.log(event.target.value);
        newAreas[index][key] = event.target.value;
        setAreas(newAreas);
    }
    const addBlock = () => {
        setAreas([...areas, {
            x: null; y: null, content: null, width: 3, height: 2, order: null,
        }])
    }
  return (
      <div>
          <Controls addBlock={addBlock} />
          <Progress />
    <div className="container">
    <div className="grid">
        {areas.map(( area, i ) =>
            <Area key={i} onChangeArea={onChangeArea} index={i} {...area}>
                
            </Area>
        )}
    </div>
    </div>
      </div>
  )
}

export default Grid
