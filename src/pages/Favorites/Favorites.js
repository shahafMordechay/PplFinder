import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { useFavoriteFetch } from "hooks";
import * as S from "../style";

const Favorites = () => {
  const { users, isLoading, fetchUsers } = useFavoriteFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFavorites
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          fetchUsers={fetchUsers}
          favorites={users}
          fetchFavorites={fetchUsers}
        />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
