import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { AiOutlineControl } from "react-icons/ai";
import FilterModal from "./AgentFilterModal";
import { Input } from "antd";
import { useAgents } from "../../context/useAgents";
import { endpoints, hostUri } from "../../fetch";
const AgentFilter = ({ setCurrent, count }) => {
  const { agents } = useAgents();
  const [Occupation, setOccupation] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortStatus, setStatus] = useState("all");
  useEffect(() => {
    const fetchOccupation = async () => {
      try {
        const response = await fetch(hostUri + endpoints.getAgentOccupations);
        if (!response.ok) {
          throw new Error("Failed to fetch Occupation");
        }
        const data = await response.json();
        setOccupation(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOccupation();
  }, []);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const handleFilter = () => {
      let filteredAgents = [...agents];
      if (sortStatus === "all") {
        filteredAgents = [...agents];
      } else if (sortStatus === "running") {
        filteredAgents = filteredAgents.filter(
          (agent) => agent.status === "running"
        );
      } else if (sortStatus === "hold") {
        filteredAgents = filteredAgents.filter(
          (agent) => agent.status === "hold"
        );
      }
      // Filter by selectedOccupation
      if (selectedOccupation.length > 0) {
        filteredAgents = filteredAgents.filter((agent) =>
          selectedOccupation.includes(agent.occupation)
        );
      }

      // Filter by searchInput
      if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredAgents = filteredAgents.filter(
          (agent) =>
            agent.name.toLowerCase().includes(searchTerm) ||
            agent.occupation?.toLowerCase().includes(searchTerm)
        );
      }

      // Filter by sortStatus

      // Sort by name
      if (sortOrder === "asc") {
        filteredAgents.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "desc") {
        filteredAgents.sort((a, b) => b.name.localeCompare(a.name));
      }

      setCurrent(filteredAgents);
    };

    handleFilter();
  }, [
    selectedOccupation,
    agents,
    setCurrent,
    searchInput,
    sortOrder,
    sortStatus,
  ]);

  const handleSelectedOccupation = (newOccup) => {
    if (selectedOccupation.includes(newOccup)) {
      setSelectedOccupation((prevOccupation) =>
        prevOccupation.filter((occ) => occ !== newOccup)
      );
    } else {
      setSelectedOccupation((prevOccupation) => [...prevOccupation, newOccup]);
    }
  };
  const handleSearchInputChange = (value) => {
    setSearchInput(value);
    // setSelectedOccupation([]);
  };

  return (
    <div className="agent-filter shadow-sm rounded-4">
      <div className="d-flex flex-row justify-content-between px-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <Input
            type="text"
            placeholder="Search by agent title or Occupation"
            value={searchInput}
            onChange={(e) => handleSearchInputChange(e.target.value)}
            style={{ width: 200 }}
          />
        </div>

        <div className="justify-content-center align-items-center d-flex gap-1">
          <Chip
            size="small"
            className="bg-primary text-white"
            label={"sort" + (sortOrder !== "asc" ? "(A-Z)" : "(Z-A)")}
            onClick={() => {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
          <Chip
            size="small"
            className={
              sortStatus === "all"
                ? "bg-primary text-white"
                : "bg-primary-subtle text-primary"
            }
            label={"All"}
            onClick={() => {
              setStatus("all");
            }}
          />
          <Chip
            size="small"
            className={
              sortStatus !== "all"
                ? "bg-primary text-white"
                : "bg-primary-subtle text-primary"
            }
            label={sortStatus === "running" ? "Hold" : "Running"}
            onClick={() => {
              setStatus((p) => (p === "running" ? "hold" : "running"));
            }}
          />
          <IconButton
            color="secondary"
            aria-label="filter"
            onClick={() => setFiltersVisible((p) => !p)}
          >
            <AiOutlineControl color="#3B4CB8" size={30} />
          </IconButton>
        </div>
      </div>
      <FilterModal
        Occupation={Occupation}
        selectedOccupation={selectedOccupation}
        setSelectedOccupation={setSelectedOccupation}
        isOpen={filtersVisible}
        onClose={() => setFiltersVisible(false)}
      />
    </div>
  );
};

export default AgentFilter;
