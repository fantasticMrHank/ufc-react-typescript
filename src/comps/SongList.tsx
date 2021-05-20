import React, { useState } from "react";
import AddSong from "./AddSong";

export interface MainInterface {
    SingleSong: {
        name: string,
        artist: string,
        label: string
    },

    SongList: {
        name: string,
        artist: string,
        label: string
    }[],

}

const SongList: React.FC = () => {

    const [songs, setSongs] = useState<MainInterface['SongList']>([{
        name: "Better Day",
        artist: "U2",
        label: "Sony"
    }]);

    return (<div>
        {songs.map(s => <div>{s.name}</div>)}

        <AddSong songs={songs} setSongs={setSongs} color="red" />
    </div>);
}

export default SongList;