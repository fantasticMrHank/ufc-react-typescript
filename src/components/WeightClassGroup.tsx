import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { currentGroup, setCurrentWeightClassId, getFightersByWeightClass, currentWeightClass, deleteWeightClass, currentWeightClasses } from "../store/fighterSlice";
import FighterPreview from "./FighterPreview";

export interface WeightClassGroupProps {

}

const WeightClassGroup: React.FC<WeightClassGroupProps> = () => {

    const myParams: any = useParams();

    const dispatch = useDispatch();



    const myGroup = useSelector(currentGroup);
    const allWeightClasses = useSelector(currentWeightClasses);

    useEffect(() => {
        dispatch(getFightersByWeightClass(myParams.id.replace('%20', ' ')));
        dispatch(setCurrentWeightClassId(myParams.id))
    }, [myParams.id])

    const checkIfWeightClassEmpty = (weightName: string) => {
        allWeightClasses.map(w => {
            if (w.name == weightName) {
                dispatch(deleteWeightClass(w.id.toString()))
            }
        })
    }

    return (<div className='group-container'>{myGroup.map(f => <FighterPreview fighter={f} key={f.id} checkIfWeightClassEmpty={checkIfWeightClassEmpty} />)}</div>);
}

export default WeightClassGroup;