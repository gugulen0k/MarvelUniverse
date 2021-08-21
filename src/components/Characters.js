import React, { useEffect, useState } from "react";
import md5 from "blueimp-md5";

function Characters() {
  const [charactersList, setCharactersList] = useState([]);

  // Getting list of all marvel characters
  const getCharacters = async () => {
    const privateKey = "04ba2ca8c774b206193186abff34538e35cc0466";
    const publicKey = "7301e4500c8cbe12501f3659ab953b76";
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);

    const url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=7301e4500c8cbe12501f3659ab953b76&hash=${hash}`;

    const result = await fetch(url).then((response) => response.json());
    const data = result.data.results;

    console.log(data);
    // setCharactersList(
    //   data
    //     .sort((a, b) => (a.id > b.id ? 1 : -1))
    //     .map((movie) => {
    //       return {
    //         id: movie.id,
    //         title: movie.title,
    //         release_date: movie.release_date,
    //         duration: movie.duration,
    //         overview: movie.overview,
    //         cover: movie.cover_url,
    //         trailer: movie.trailer_url,
    //       };
    //     })
    // );
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return <div>characters</div>;
}

export default Characters;
