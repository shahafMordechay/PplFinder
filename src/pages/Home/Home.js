import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch, useFavoriteFetch } from "hooks";
import * as S from "../style";

const Home = () => {
  const nations = [
    { value: "BR", label: "Brazil" },
    { value: "AU", label: "Australia" },
    { value: "CA", label: "Canada" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
  ];

  const { users, isLoading, fetchUsers, fetchMoreUsers } = usePeopleFetch();
  const favorites = useFavoriteFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          checkBoxItems={nations}
          fetchUsers={fetchUsers}
          favorites={favorites.users}
          fetchFavorites={favorites.fetchUsers}
          fetchMoreUsers={fetchMoreUsers}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
