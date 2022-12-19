import React from "react";

// style
import s from '../style.module.css';

// components
import Pagination from "../Pagination/Pagination";
import Planet from "./Planet";

export default function Planets ({ planets, pagination, pages, page }) {
    return (
        <section>
            <Pagination pagination={pagination} page={page} pages={pages}/>
            <div className={`${s.planet_container} flex flex-justify-between flex-wrap gap-10`}>
                {
                    planets.length && planets.map(
                        (planet, index) => {
                            return <Planet key={index}
                                id={index+1}
                                name={planet.name}
                                population={planet.population}
                                terrain={planet.terrain}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
};