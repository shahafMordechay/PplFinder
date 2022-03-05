import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const InfiniteList = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
  height: calc(100vh - 350px);
  margin-block-start: 30px;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin-inline-end: 8px;
  }
`;

export const SearchFilter = styled.div`
  display: flex;
  justify-content: center;
`;
