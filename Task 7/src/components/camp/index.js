import { useContext } from 'react';
import CampIcon from './camp-table.png';
import './style.css';
import GoodsContext from '../../context/goods.context';

const CampComponent = ({ sum }) => {
 const { removeAllGoods } = useContext(GoodsContext);
 const campClick = () => {
    if (sum === 40) {
      removeAllGoods();
    } else {
        alert ('Вам потрібно рівно 40 очок')
    }
  };

 return (
  <div className="camp">
   <img src={CampIcon} onClick={campClick} />
  </div>
 );
};

export default CampComponent;