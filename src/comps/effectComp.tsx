import React, { useEffect, useState } from "react";

export interface EffectCompProps {

}

const EffectComp: React.FC<EffectCompProps> = () => {

    useEffect(() => {
        const timer = window.setInterval(() => {
            setVal(v => v + 1)
        }, 1000);

        // clean up function
        return () => clearInterval(timer);

    }, [])
    const [val, setVal] = useState(1);
    return (<div>
        {val}
    </div>);
}

export default EffectComp;