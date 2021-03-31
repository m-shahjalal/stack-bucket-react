import Nav from '../../components/navigation';

// Import Assets
import Create from '../../components/create';
import Table from '../../components/table';

const BucketDetailPage = () => {
	return (
		<div>
			<Nav />
			<main className='container __margin--ylg'>
				<Create suggestion placeholder='create bucket items' />
				<section className='section table __shadow--sm'>
					<Table />
				</section>
				<section className='section table table--success __shadow--sm'>
					<Table />
				</section>
			</main>
		</div>
	);
};

export default BucketDetailPage;
