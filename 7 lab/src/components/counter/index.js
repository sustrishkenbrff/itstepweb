import { useContext } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';


const CounterComponent = () => {

 const { selectedGoods } = useContext(GoodsContext);

 // const costs = selectedGoods
 //  .map(el => el.cost);
 // let sum = 0;
 // for (const el of costs) {
 //  sum += el;
 // }

 const sum = selectedGoods.reduce((acc, cur) => {
  return acc + cur.cost;
 }, 0);

 return (
  <div className='cost-wrapper'>
   <div>{sum}/40</div>
   <div className='auto-detect'>auto-detect</div>
  </div>
 );
};

export default CounterComponent;