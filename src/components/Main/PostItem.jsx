import React, { useContext, useEffect, useState } from 'react';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import styled from 'styled-components';
// import { stringPostDate } from '../../store/slices/postSlice';
import { Link } from 'react-router-dom';
import supabase from '../../api/api.supabase';

const StPostItem = styled.div`
  /* background-color: rebeccapurple; */
  width: 90%;
  height: 90%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 0 20px 0;
  @media screen and (max-width: 600px) {
  }
`;

const StImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 5%;
  cursor: pointer;
`;

const StIdAndLikeButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0 0 0;
`;

const StPostUserId = styled.span`
  font-size: 130%;
  color: #484848;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 90%;
  }
`;

const StLikeButton = styled.button``;

const StPopularity = styled.span`
  /* background-color: aqua; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 100%;
  color: #484848;

  @media screen and (max-width: 600px) {
    font-size: 100%;
    gap: 1px;
  }
`;

const StPostContentWrapper = styled.div`
  /* background-color: green; */
  font-size: 80%;
  width: 100%;
  height: 200%;
  padding: 3% 0;
`;

const StPostContent = styled.p`
  /* background-color: red; */
  height: 25px;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* text-align: justify; */
  color: #7e7e7e;

  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;

const StNickname = styled.p`
  font-size: 1rem;
`;

const StPostDate = styled.div`
  /* background-color: aliceblue; */
  width: 100%;
  display: flex;
  justify-content: left;
  color: #d0d0d0;
  /* position: absolute;
  bottom: 1%; */
  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;

const MainProfileImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  margin-right: 10px;
`;
const PostItem = ({ post, user }) => {
  const { product_imageSrc, product_name, post_content, popularity, created_at } = post;
  const createdAt = created_at;
  const createDate = `${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`;

  //console.log(user);
  // const [activeButton, setActivButton] = useState(null);
  //console.log(post);

  return (
    <StPostItem>
      <Link to="/detailed">
        <StImage src={product_imageSrc} alt={product_name} />
      </Link>
      <StIdAndLikeButtons>
        <StPostUserId>
          <MainProfileImg src={user?.user_imageSrc} />
          <StNickname>{user?.user_name}</StNickname>
        </StPostUserId>
        <StPopularity>
          <StLikeButton>
            <IoHeartOutline onClick={() => {}} />
          </StLikeButton>
          {popularity}
          <IoBookmarkOutline size={27} onClick={() => {}} />
        </StPopularity>
      </StIdAndLikeButtons>
      <StPostContentWrapper>
        <StPostContent>{post_content}</StPostContent>
      </StPostContentWrapper>
      <StPostDate>{createDate}</StPostDate>
    </StPostItem>
  );
};
export default PostItem;
