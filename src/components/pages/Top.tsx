import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
    const history = useHistory();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        history.push("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        history.push("/users");
    };
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;