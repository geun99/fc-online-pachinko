import { createGlobalStyle } from "styled-components";
import Header from "./assets/Components/Header";
import Tabs from "./assets/Components/Tabs";
import { useState } from "react";

export type tabType = 4 | 5 | 7;

function App() {
  const [activeTab, setActiveTab] = useState<tabType>(7);

  return (
    <>
      <AppStyle />
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

const AppStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Pretendard-Regular', sans-serif;
    color:white;
}
  body {
    background-color: #282c34;
    text-align: center;    
  }
`;

export default App;
