import React from "react";

// coponents
import Pagination from "../Pagination/Pagination";
import Film from "./Film";

export default function Films ({ films, pagination, pages, page }) {

    let img = 'https://starwars-visualguide.com/assets/img/films/';

    return (
        <section>
            <Pagination pagination={pagination} page={page} pages={pages}/>
            <div className="flex flex-justify-between flex-wrap gap-10">
                {
                    films.length && films.map(
                        (film, index) => {
                            return <Film key={index}
                                img={`${img}${index+1}.jpg`}
                                name={film.title}
                                description={film.opening_crawl}
                                director={film.director}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
};