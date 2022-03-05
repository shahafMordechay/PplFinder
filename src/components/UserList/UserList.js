import React, { useState } from "react";
import { get, set, del } from "idb-keyval";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({
  users,
  isLoading,
  checkBoxItems,
  fetchUsers,
  favorites,
  fetchFavorites,
}) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [checkedNat, setCheckedNat] = useState(new Set());

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const onChangeCheckBox = (value) => {
    const newCheckedNat = new Set(checkedNat);

    if (newCheckedNat.has(value)) {
      newCheckedNat.delete(value);
    } else {
      newCheckedNat.add(value);
    }

    setCheckedNat(newCheckedNat);
    fetchUsers(Array.from(newCheckedNat).join(","));
  };

  const onFavoriteClick = () => {
    const email = users[hoveredUserId].email;
    get(email)
      .then((val) => {
        if (val) {
          del(email);
        } else {
          set(email, users[hoveredUserId]);
        }
      })
      .then(() => {
        fetchFavorites();
      });
  };

  const isFavorite = (index) => {
    return favorites.map((user) => user.email).includes(users[index].email);
  };

  return (
    <S.UserList>
      <S.Filters>
        {checkBoxItems &&
          checkBoxItems.map((filter, index) => (
            <CheckBox
              key={index}
              value={filter.value}
              label={filter.label}
              isChecked={checkedNat.has(filter.value)}
              onChange={onChangeCheckBox}
            />
          ))}
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={index === hoveredUserId || isFavorite(index)}
              >
                <IconButton onClick={onFavoriteClick}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
