import { useState, useEffect } from "react";
import { values } from "idb-keyval";

export const useFavoriteFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const favoriteUsers = await values();
    setIsLoading(false);
    setUsers(favoriteUsers);
  }

  return { users, isLoading, fetchUsers };
};
