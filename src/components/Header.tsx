import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentWeightClasses, getWeightClasses } from "../store/fighterSlice";

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    const dispatch = useDispatch();
    const myWeightClasses = useSelector(currentWeightClasses);

    useEffect(() => {
        dispatch(getWeightClasses());
    }, [myWeightClasses.length])


    return (
        <div className="header-container">
            <NavLink to="/" exact={true} className="link-item" activeClassName="active-link">Home</NavLink>
            <NavLink to="/add" exact={true} className="link-item" activeClassName="active-link">Add Fighter </NavLink>
            {myWeightClasses.map(w => (
                <NavLink to={`/weightclasses/${w.name}`} className="link-item" activeClassName="active-link" key={w.id}>{w.name}</NavLink>
            ))}
        </div>
    );
}

export default Header;