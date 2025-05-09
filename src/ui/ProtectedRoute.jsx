import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/* eslint-disable */

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //   1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //   2. If there is no authenticated user, redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //   4. If there is an authenticated user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
