import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFighter, addWeightClass, needNewWeightClass, newWeightClass } from '../store/fighterSlice';

export interface NewProps {

}
export interface fighterInterface {
    id: number
    name: string
    weightclass: string
    record: string
    champion: boolean
    ranking: number
    pic: string
}
const New: React.FC<NewProps> = () => {

    const dispatch = useDispatch();
    const [fighter, setFighter] = useState<fighterInterface>();

    // determine whether to add a new weight class by the latest fighter entry
    const needClass = useSelector(needNewWeightClass);
    const newClass = useSelector(newWeightClass);

    useEffect(() => {
        if (needClass === true) {
            dispatch(addWeightClass(newClass))
        }
    }, [needClass])

    const addThisFighter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addFighter(fighter!))
    }
    const updateFighter = (e: React.ChangeEvent<HTMLInputElement>) => {

        let newValue: any = e.target.value;
        if (e.target.name == "ranking") {
            newValue = parseInt(newValue);
        }
        setFighter({ ...fighter!, [e.target.name]: newValue })
    }

    const updateFighter2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let val = e.target.options[e.target.selectedIndex].value;
        if (val == 'yes') {
            console.log("is champ")
            setFighter({ ...fighter!, champion: true })
        } else {
            console.log("not champ")
            setFighter({ ...fighter!, champion: false })
        }
    }
    return (<>
        <form className='fighter-form' onSubmit={(e) => addThisFighter(e)}>
            <input placeholder='fighter name' onChange={e => updateFighter(e)} name="name" />
            <br />
            <input placeholder='weight class' onChange={e => updateFighter(e)} name="weightclass" />
            <br />
            <input placeholder='record' onChange={e => updateFighter(e)} name="record" />
            <br />
            <input placeholder='fighter image url' onChange={e => updateFighter(e)} name="pic" />
            <br />
            <input placeholder='ranking' onChange={e => updateFighter(e)} name="ranking" />
            <br />
            <label>Is this fighter the campion?</label>
            <br />
            <select onChange={e => updateFighter2(e)}>
                <option value='yes'>yes</option>
                <option value='no'>no</option>
            </select>
            <br />
            <button>Add Fighter</button>
        </form>
    </>);
}

export default New;