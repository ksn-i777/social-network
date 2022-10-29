import React from "react";
import s from './About.module.css';
import {Photo} from "./Photo";
import {Description} from "./Description";

export function About() {
    return(
        <div className={s.about}>
            <Photo/>
            <Description/>
        </div>
    )
};
