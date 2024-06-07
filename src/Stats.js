//Not quite working

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function Stats() {
//   const [team, setTeam] = useState("");
//   const [year, setYear] = useState("");
//   const [playerData, setPlayerData] = useState([]);
//   const [teamOptions, setTeamOptions] = useState([]);
//   const [filteredPlayerData, setFilteredPlayerData] = useState([]); // State for filtered data
//   const [nameFilter, setNameFilter] = useState(""); // State for name filter
//   const [positionFilter, setPositionFilter] = useState(""); // State for position filter

//   useEffect(() => {
//     fetchTeamOptions();
//     fetchData();
//   });

//   useEffect(() => {
//     filterPlayerData();
//   }); // Update filtered data when playerData or filters change

//   const fetchTeamOptions = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/teams");
//       setTeamOptions(response.data.teams);
//     } catch (error) {
//       console.error("Error fetching team options:", error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:5000/players?team=${team}&year=${year}`
//       );
//       setPlayerData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleFetchData = () => {
//     fetchData();
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "team") {
//       setTeam(value);
//     } else if (name === "year") {
//       setYear(value);
//     } else if (name === "name") {
//       // Handle name filter change
//       setNameFilter(value);
//     } else if (name === "position") {
//       // Handle position filter change
//       setPositionFilter(value);
//     }
//   };

//   const filterPlayerData = () => {
//     let filteredData = [];
//     if (playerData && Array.isArray(playerData)) {
//       filteredData = playerData.filter((player) => {
//         // Filter logic here
//         // Example filter logic:
//         if (
//           nameFilter &&
//           !player.Name.toLowerCase().includes(nameFilter.toLowerCase())
//         ) {
//           return false;
//         }
//         if (positionFilter && player.Position !== positionFilter) {
//           return false;
//         }
//         return true;
//       });
//     }
//     setFilteredPlayerData(filteredData);
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Team:
//           <select name="team" value={team} onChange={handleInputChange}>
//             <option value="">Select a team</option>
//             {teamOptions.map((teamOption, index) => (
//               <option key={index} value={teamOption}>
//                 {teamOption}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Year:
//           <input
//             type="text"
//             name="year"
//             value={year}
//             onChange={handleInputChange}
//           />
//         </label>
//         {/* Add filter inputs */}
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={nameFilter}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Position:
//           <input
//             type="text"
//             name="position"
//             value={positionFilter}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button onClick={handleFetchData}>Fetch Data</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Number</th>
//               <th>Name</th>
//               <th>Last Name</th>
//               <th>First Name</th>
//               <th>Year</th>
//               <th>Position</th>
//               <th>Goals</th>
//               <th>Assists</th>
//               <th>Games Played</th>
//               <th>Goals Per Game</th>
//               <th>Assists Per Game</th>
//               <th>Points Per Game</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Render filteredPlayerData instead of playerData */}
//             {filteredPlayerData.map((player, index) => (
//               <tr key={index}>
//                 <td>{player.Number}</td>
//                 <td>{player.Name}</td>
//                 <td>{player.LastName}</td>
//                 <td>{player.FirstName}</td>
//                 <td>{player.Year}</td>
//                 <td>{player.Position}</td>
//                 <td>{player.Goals}</td>
//                 <td>{player.Assists}</td>
//                 <td>{player.GamesPlayed}</td>
//                 <td>{player.GoalsPerGame}</td>
//                 <td>{player.AssistsPerGame}</td>
//                 <td>{player.PointsPerGame}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Stats;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Stats() {
  const [team, setTeam] = useState("");
  const [year, setYear] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);

  useEffect(() => {
    fetchTeamOptions();
  }, []);

  const fetchTeamOptions = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/teams");
      setTeamOptions(response.data.teams);
    } catch (error) {
      console.error("Error fetching team options:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/players?team=${team}&year=${year}`
      );
      setPlayerData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchData = () => {
    fetchData();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "team") {
      setTeam(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  return (
    <div>
      <div>
        <label>
          Team:
          <select name="team" value={team} onChange={handleInputChange}>
            <option value="">Select a team</option>
            {teamOptions.map((teamOption, index) => (
              <option key={index} value={teamOption}>
                {teamOption}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={year}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Year</th>
              <th>Position</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Games Played</th>
              <th>Goals Per Game</th>
              <th>Assists Per Game</th>
              <th>Points Per Game</th>
            </tr>
          </thead>
          <tbody>
            {playerData.map((player, index) => (
              <tr key={index}>
                <td>{player.Number}</td>
                <td>{player.Name}</td>
                <td>{player.LastName}</td>
                <td>{player.FirstName}</td>
                <td>{player.Year}</td>
                <td>{player.Position}</td>
                <td>{player.Goals}</td>
                <td>{player.Assists}</td>
                <td>{player.GamesPlayed}</td>
                <td>{player.GoalsPerGame}</td>
                <td>{player.AssistsPerGame}</td>
                <td>{player.PointsPerGame}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;
