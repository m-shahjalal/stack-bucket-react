import { Redirect, Router } from '@reach/router';
import NotFound from '../pages/404';
import BucketDetailPage from '../pages/bucket-details';
import BucketPage from '../pages/buckets';

const AppRouter = () => {
	return (
		<Router>
			<Redirect from='/buckets' to='/' noThrow />
			<BucketPage path='/' />
			<BucketDetailPage path='/buckets/:id' />
			<NotFound default />
		</Router>
	);
};

export default AppRouter;
