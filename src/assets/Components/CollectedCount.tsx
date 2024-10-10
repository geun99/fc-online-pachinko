import { BoxStyle, RemainCountsStyle } from "./RemainCounts";
import { RewardType } from "../../App";
import ResetButton from "./ResetButton";

interface CollectedCountProps {
  collections: RewardType;
  onClick: () => void;
}

const CollectedCount = ({ collections, onClick }: CollectedCountProps) => {
  return (
    <RemainCountsStyle>
      누적 획득 보상
      <div className="grid">
        {Object.keys(collections).map((collection) => {
          return (
            <div>
              <BoxStyle value={collection}>
                {collection as keyof RewardType}
              </BoxStyle>
              {collections[collection as keyof RewardType]}개
            </div>
          );
        })}
      </div>
      <ResetButton onClick={onClick} value="획득 보상 초기화" />
    </RemainCountsStyle>
  );
};

export default CollectedCount;
