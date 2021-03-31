import Suggestion from '../suggestion';
import FilterOverlay from './FilterOverlay';

import plusIcon from '../../assets/icons/plus-icon.png';

const Create = ({ suggestion, placeholder }) => {
	return (
		<div className='section add-item __shadow--sm'>
			<div className='add-item__relative'>
				<div className='add-item__input'>
					<img
						className='add-item__icon'
						src={plusIcon}
						alt='Create New Bucket'
					/>
					<input
						className='add-item__input-field'
						type='text'
						placeholder={placeholder}
					/>
				</div>
				{suggestion && <FilterOverlay />}
			</div>
			<div className='horizontal-line'></div>
			{suggestion && <Suggestion />}
		</div>
	);
};

export default Create;
