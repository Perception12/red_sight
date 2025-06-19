"use client";

import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import SkeletonCard from "./Skeleton";
import Pagination from "./Pagination";

const ViolationCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-10 prompt_layout">
      {data.map((info) => (
        <InfoCard key={info.id} info={info} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [violations, setViolations] = useState([]);
  const [filteredViolations, setFilteredViolations] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchViolations = async () => {
      const res = await fetch(
        `/api/violations?page=${page}&limit=${itemsPerPage}`
      );
      const data = await res.json();
      setViolations(data.data);
      setTotalCount(data.count);
      setLoading(false);
    };

    fetchViolations();
  }, [page]);

  useEffect(() => {
    const lowerText = searchText.toLowerCase();
    setFilteredViolations(
      violations.filter(
        (info) =>
          info.location.toLowerCase().includes(lowerText) ||
          info.plate_number.toLowerCase().includes(lowerText)
      )
    );
  }, [searchText, violations]);

  return (
    <section className="feed">
      <form
        className="w-full flex-center relative max-w-xl"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="search for plate number, or intersection name"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      {loading ? (
        <div className="mt-10 !w-full space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          <ViolationCardList data={filteredViolations} />
          {totalCount > itemsPerPage && (
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={Math.ceil(totalCount / itemsPerPage)}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Feed;
