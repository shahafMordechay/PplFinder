import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers(nations) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=25&page=1&inc=name,location,email,picture&nat=${nations}`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchMoreUsers(nations) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=25&page=1&inc=name,location,email,picture&nat=${nations}`
    );
    setIsLoading(false);
    setUsers(users.concat(response.data.results));
  }

  return { users, isLoading, fetchUsers, fetchMoreUsers };
};
