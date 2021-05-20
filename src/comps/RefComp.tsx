import React, { useRef } from "react";

export interface UseRefCompProps {

}

const UseRefComp: React.FC<UseRefCompProps> = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    return (<input type="text" ref={inputRef} />);
}

export default UseRefComp;