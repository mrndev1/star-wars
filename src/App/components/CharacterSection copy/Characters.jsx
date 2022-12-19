import React from "react";

// components
import Pagination from "../Pagination/Pagination";
import Character from "./Character";

export default function Characters ({ characters, pagination, pages, page }) {
    return (
        <section>
            <Pagination pagination={pagination} page={page} pages={pages}/>
            <div className="flex flex-justify-between flex-wrap gap-10">
                {
                    characters.length && characters.map(
                        (character, index) => {
                            return <Character key={index}
                                url={character.url}
                                name={character.name}
                                height={character.height}
                                mass={character.mass}
                                birth={character.birth_year}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
};