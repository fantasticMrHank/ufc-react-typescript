import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { currentGroup, setCurrentWeightClassId, getFightersByWeightClass, currentWeightClass, deleteWeightClass, currentWeightClasses } from "../store/fighterSlice";
import FighterPreview from "./FighterPreview";
import { motion } from 'framer-motion';

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

    return (
        <motion.div className='group-container'
            initial={{
                y: -500,
                opacity: 0
            }}
            animate={{
                opacity: 1,
                y: 0
            }}>

            {myGroup.map((f, idx) => <FighterPreview fighter={f} key={f.id} checkIfWeightClassEmpty={checkIfWeightClassEmpty} idx={idx} />)}
        </motion.div>
    );
}

export default WeightClassGroup;