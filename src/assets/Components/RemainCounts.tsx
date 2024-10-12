import styled from "styled-components";
import { RewardType } from "../../App";
import { VALUE_COLORS } from "../utils/constants";

interface RemainCountsProps {
  remains: RewardType;
}

const RemainCounts = ({ remains }: RemainCountsProps) => {
  return (
    <RemainCountsStyle>
      잔여 보상
      <div className="grid">
        {Object.keys(remains).map((remain) => {
          return (
            <div key={remain}>
              <BoxStyle value={remain}>{remain as keyof RewardType}</BoxStyle>
              {remains[remain as keyof RewardType]}개
            </div>
          );
        })}
      </div>
    </RemainCountsStyle>
  );
};

export const RemainCountsStyle = styled.div`
  font-size: 2rem;
  .grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    font-size: 2rem;
    gap: 2rem;
  }
`;

export const BoxStyle = styled.div<{ value: string }>`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  background-color: ${({ value }) =>
    VALUE_COLORS[value as keyof typeof VALUE_COLORS]};
  border-radius: 1rem;
`;

export default RemainCounts;
