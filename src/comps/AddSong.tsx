import React, { useState } from "react";
import { MainInterface as MyInterface } from './SongList';

interface AddSongProps {
    songs: MyInterface['SongList'],
    setSongs: React.Dispatch<React.SetStateAction<MyInterface['SingleSong'][]>>
    color: string,

}

interface AnimalType {
    animals: {
        name: string,
        size: string,
        color: string
    }[]
}

const AddSong: React.FC<AddSongProps> = ({ songs, setSongs, color }) => {


    const [newSong, setNewSong] = useState<MyInterface['SingleSong']>({
        name: '',
        artist: '',
        label: ''
    });





    const myAnials: AnimalType['animals'] = [
        { name: 'interhorse', size: 'large', color: 'brown' },
        { name: 'mouse', size: 'small', color: 'grey' }
    ]

    const createSong = () => {
        setNewSong({
            name: "Skae it up",
            artist: "Taylor",
            label: "Polygram"
        })
    }

    const addThisSong = () => {
        setSongs([
            ...songs, newSong
        ])

        myGenFunct(songs)
    }

    const myGenFunct = <T,>(arr: T[]) => {
        arr.map(a => console.log('single item: ', a))
    }
    return (<>
        <button style={{ backgroundColor: color }} onClick={createSong}>create song</button>
        <button onClick={addThisSong}>add song</button>

        {}
    </>);
}

export default AddSong;