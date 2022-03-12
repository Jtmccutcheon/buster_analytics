import { getSymbol } from '../utils/getSymbol';

export const BusterSymbol = ({ buster }) => {
  return (
    <svg className="buster_symbol">{getSymbol(buster.shape, buster.fill)}</svg>
  );
};
