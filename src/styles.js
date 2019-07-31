import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.div`
display: flex;
color: blue;
`;

export const DetailText = styled.p`
font-family: "Arial"
`;

export const Jobapp = styled.div`
display: flex;
`;

export const Searchform = styled.form`
display: flex;
max-height: 35px;
`;

export const FormButton = styled.button`
background-color: #757de8;
font-family: "Arial";
font-weight: bold;
border: none;
`;

export const Searchtextarea = styled.input`
font-weight-bold;
font: 20px arial;
resize: none;

`;
export const CommentInput = styled.input`
font-weight-bold;
font: 20px arial;
resize: none;

`;

export const Loadingtext = styled.h1`
display: flex;
justify-content: center;
align-items: space-between;
color: #00227b;
font: 45px arial;
`;

export const DetailSection = styled.div`
// display: flex;
// justify-content: center;
// align-content: space-around;
`;

export const StyledLink = styled(Link)`
background-color: #757de8;
font-weight: bold;
font-size: 15px
font-family: "Arial";
border: none;
`;

export const CommentFormDiv = styled.form`
display: flex;
justify-content: flex-start;
`;

export const CommentText = styled.p`
font-family: "Arial";
`