import Nav from '../../components/navigation';
import Create from '../../components/create';
import Table from '../../components/table';

const BucketPage = () => {
	return (
		<div>
			<Nav />
			<main className='container __margin--ylg'>
				<Create placeholder='Create new bucket' />
				<div className='section table __shadow--sm'>
					<Table />
				</div>
			</main>
		</div>
	);
};

export default BucketPage;
