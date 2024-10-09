import styled from "styled-components";
import Tab from "./Tab";
import { tabType } from "../../App";

interface TabsProps {
  activeTab: tabType;
  setActiveTab: (tab: tabType) => void;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const TABS_ARR: tabType[] = [7, 5, 4];

  const handleTabActive = (tab: tabType) => {
    setActiveTab(tab);
  };

  return (
    <TabsStyle>
      {TABS_ARR.map((tab) => (
        <Tab
          key={tab}
          isActive={activeTab === tab}
          handleTabActive={() => handleTabActive(tab)}
          label={tab}
        />
      ))}
    </TabsStyle>
  );
};

const TabsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default Tabs;
