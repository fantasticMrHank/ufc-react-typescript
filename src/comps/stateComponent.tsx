import React, { useState } from "react";

export interface StateCompProps {

}

const StateComp: React.FC<StateCompProps> = () => {

    const [arr, arrSet] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);

    const addThisNum = () => {
        arrSet([...arr, arr.length + 1])
    }
    return (
        <div>
            <div>
                <button onClick={addThisNum}>add to array</button>
                {JSON.stringify(arr)}
            </div>

            <div>
                <button onClick={() => setName('lori')}>change name</button>
                {name}
            </div>
        </div>
    );
}

export default StateComp;