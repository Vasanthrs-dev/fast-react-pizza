import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === 'submitting';
  return (
    <div className='text-right'>
      <fetcher.Form method='PATCH'>
        <Button
          disabled={isLoading}
          type='primary'
        >{`${isLoading ? 'Making priority...' : 'Make order priority'}`}</Button>
      </fetcher.Form>
    </div>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(params);
  await updateOrder(params.orderID, data);
  return null;
}
export default UpdateOrder;
