// import React, { useState, useEffect } from "react";
// import Chip from "@mui/material/Chip";
// import IconButton from "@mui/material/IconButton";
// import { AiOutlineControl } from "react-icons/ai";
// import FilterModal from "./ManagerFilterModal";
// import { Input } from "antd";
// import { useManager } from "../../context/useManager";
// const AgentFilter = ({ setCurrent, count }) => {
//   const { managers } = useManager();
//   const [selectedOccupation, setSelectedOccupation] = useState([]);
//   const [filtersVisible, setFiltersVisible] = useState(false);
//   const [sortOrder, setSortOrder] = useState("asc");

//   const [searchInput, setSearchInput] = useState("");
//   useEffect(() => {
//     const handleFilter = () => {
//       let filteredAgents = [...managers];

//       if (selectedOccupation.length > 0) {
//         filteredAgents = filteredAgents.filter((agent) =>
//           selectedOccupation.includes(agent.occupation)
//         );
//       }
//       if (searchInput) {
//         const searchTerm = searchInput.toLowerCase();
//         filteredAgents = filteredAgents.filter(
//           (agent) =>
//             agent.name.toLowerCase().includes(searchTerm) ||
//             agent.occupation?.toLowerCase().includes(searchTerm)
//         );
//       }
//       // if (sortOrder === "asc") {
//       //   filteredAgents.sort(
//       //     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//       //   );
//       // } else if (sortOrder === "desc") {
//       //   filteredAgents.sort(
//       //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       //   );
//       // }
//       setCurrent(filteredAgents);
//     };

//     handleFilter();
//   }, []);

//   const handleSelectedOccupation = (newOccup) => {
//     if (selectedOccupation.includes(newOccup)) {
//       setSelectedOccupation((prevOccupation) =>
//         prevOccupation.filter((occ) => occ !== newOccup)
//       );
//     } else {
//       setSelectedOccupation((prevOccupation) => [...prevOccupation, newOccup]);
//     }
//   };
//   const handleSearchInputChange = (value) => {
//     setSearchInput(value);
//     // setSelectedOccupation([]);
//   };

//   return (
//     <div className="agent-filter shadow-sm rounded-4">
//       <div className="d-flex flex-row justify-content-between px-2 bg-white">
//         <div className="justify-content-center align-items-center d-flex">
//           <Input
//             type="text"
//             placeholder="Search by agent title or Occupation"
//             value={searchInput}
//             onChange={(e) => handleSearchInputChange(e.target.value)}
//             style={{ width: 200 }}
//           />
//         </div>

//         <div className="justify-content-center align-items-center d-flex">
//           <Chip
//             size="small"
//             className="bg-primary text-white"
//             label={sortOrder === "asc" ? "Oldest" : "Newest"}
//             onClick={() => {
//               setSortOrder((prevSortOrder) =>
//                 prevSortOrder === "asc" ? "desc" : "asc"
//               );
//             }}
//           />
//           <IconButton
//             color="secondary"
//             aria-label="filter"
//             onClick={() => setFiltersVisible((p) => !p)}
//           >
//             <AiOutlineControl color="#3B4CB8" size={30} />
//           </IconButton>
//         </div>
//       </div>
//       <FilterModal
//         Occupation={Occupation}
//         selectedOccupation={selectedOccupation}
//         setSelectedOccupation={setSelectedOccupation}
//         isOpen={filtersVisible}
//         onClose={() => setFiltersVisible(false)}
//       />
//     </div>
//   );
// };

// export default AgentFilter;
