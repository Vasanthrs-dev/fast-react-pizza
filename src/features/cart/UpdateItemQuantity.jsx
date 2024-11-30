import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-center gap-2 md:gap-3'>
      <Button
        type='rounded'
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </Button>
      <p className='text-sm font-medium'>{currentQuantity}</p>
      <Button
        type='rounded'
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
