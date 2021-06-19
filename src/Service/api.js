const API_KEY = "Ds37N339Cbc5LeiCUdtXuQQnKgn2";

//Upcoming or Ongoing Matches API
export const getCricketMatches = () =>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}

//Get Match Details API
export const getCricketMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
//Get Squad Name API
export const getSquadDetail = (id) => {
    const url = `https://cricapi.com/api/fantasySquad?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
}

//Get Player Data API
export const getPlayerData = (id) => {
    const url = `https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${id}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
}