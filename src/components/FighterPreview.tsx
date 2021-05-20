import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentGroup, deleteFighter, deleteWeightClass } from "../store/fighterSlice";
import { motion } from 'framer-motion';

export interface FighterPreviewProps {

    fighter: {
        id: number
        name: string
        weightclass: string
        record: string
        champion: boolean
        ranking: number
        pic: string
    }

    checkIfWeightClassEmpty: (name: string) => void

    idx: number
}

const FighterPreview: React.FC<FighterPreviewProps> = ({ fighter, checkIfWeightClassEmpty, idx }) => {

    const dispatch = useDispatch();

    const myGroup = useSelector(currentGroup);

    const removeFighter = () => {
        dispatch(deleteFighter(fighter.id.toString()))
        checkIfWeightClassEmpty(fighter.weightclass);

    }

    useEffect(() => {
        console.log('which idx: ', idx);
    })
    return (
        <motion.div className={fighter.champion ? 'fighter-card-champ' : 'fighter-card'}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: idx * 0.2
            }}

        >
            <img src={fighter.pic} alt="Avatar" className="avatar"></img>
            <h3 className='fighter-name'>{fighter.name}</h3>
            <h3 className='fighter-record'>{fighter.record}</h3>
            {fighter.champion ? <h3 className='champ-text'>Champion</h3> : <></>}
            <button className='delete-fighter-btn' onClick={removeFighter}>Delete Fighter</button>
        </motion.div>
    );
}

export default FighterPreview;