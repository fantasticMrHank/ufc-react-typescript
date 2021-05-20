import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentGroup, deleteFighter, deleteWeightClass } from "../store/fighterSlice";

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
}

const FighterPreview: React.FC<FighterPreviewProps> = ({ fighter, checkIfWeightClassEmpty }) => {

    const dispatch = useDispatch();

    const myGroup = useSelector(currentGroup);

    const removeFighter = () => {
        dispatch(deleteFighter(fighter.id.toString()))
        checkIfWeightClassEmpty(fighter.weightclass);

    }

    return (
        <div className={fighter.champion ? 'fighter-card-champ' : 'fighter-card'}>
            <img src={fighter.pic} alt="Avatar" className="avatar"></img>
            <h3 className='fighter-name'>{fighter.name}</h3>
            <h3 className='fighter-record'>{fighter.record}</h3>
            {fighter.champion ? <h3 className='champ-text'>Champion</h3> : <></>}
            <button className='delete-fighter-btn' onClick={removeFighter}>Delete Fighter</button>
        </div>
    );
}

export default FighterPreview;