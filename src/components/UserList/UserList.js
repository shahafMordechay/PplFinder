import React, { useState } from "react";
import { get, set, del } from "idb-keyval";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import * as S from "./style";
import InfiniteScroll from "react-infinite-scroll-component";

const UserList = ({
  users,
  isLoading,
  checkBoxItems,
  fetchUsers,
  favorites,
  fetchFavorites,
  fetchMoreUsers,
}) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [checkedNat, setCheckedNat] = useState(new Set());
  const [searchText, setSearchText] = useState("");

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  // CheckBox filtering
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

  // Favorite button
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

  // Infinity scroll
  const onInfiniteScrollNext = () => {
    if (searchText.length < 1) {
      fetchMoreUsers?.(Array.from(checkedNat).join(","));
    }

    return;
  };

  // Real time search
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const userIncludesSearchText = (user) => {
    return (
      user?.name.title.includes(searchText) ||
      user?.name.first.includes(searchText) ||
      user?.name.last.includes(searchText) ||
      user?.email.includes(searchText) ||
      user?.location.street.number.toString().includes(searchText) ||
      user?.location.street.name.includes(searchText) ||
      user?.location.city.includes(searchText) ||
      user?.location.country.includes(searchText)
    );
  };

  const getFilteredUsers = () => {
    return users.filter(userIncludesSearchText);
  };

  return (
    <S.UserList>
      <S.SearchFilter>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          helperText="Search existing users"
          value={searchText}
          onChange={handleSearchChange}
        />
      </S.SearchFilter>
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
      <S.List id="infinityList">
        <InfiniteScroll
          dataLength={getFilteredUsers().length}
          next={onInfiniteScrollNext}
          hasMore={users.length <= 300}
          scrollableTarget="infinityList"
        >
          {getFilteredUsers().map((user, index) => {
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
        </InfiniteScroll>
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
