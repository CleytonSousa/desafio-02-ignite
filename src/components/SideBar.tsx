import React, { useState } from "react";
import { Button } from "./Button";

export function SideBar(props: any) {
  // Complete aqui
  const {genres} = props
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return(
    <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map((genre: {id: number, title: string, name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family' }) => (
        <Button
          className={props.active}
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.click(genre.id)}
          selected={selectedGenreId == genre.id ? true : false}
        />
      ))}
    </div>
  </nav>
  )
}
