import React, { useEffect, useMemo, useState } from "react";

export interface dataObjInterface {
    userId: string,
    id: number,
    title: string,
    body: string
}

const useFetchData = <T,>(url: string): { data: T | null, done: boolean } => {
    const [data, setData] = useState<T | null>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((d: T) => {
                setData(d);
                setDone(true);
            })
    }, [url])

    return {
        data,
        done
    }
}

export interface CustomHookCompProps {

}

const CustomHookComp: React.FC<CustomHookCompProps> = () => {

    const { data, done } = useFetchData<dataObjInterface[]>('https://jsonplaceholder.typicode.com/posts')

    // const myData: dataObjInterface = useMemo(
    //     (data || []).filter((post) => post.title == 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'),
    //     [data]
    // )

    return (<div>
        {
            done && (
                <h3>{data![0].id}</h3>
            )
        }
    </div>);
}

export default CustomHookComp;