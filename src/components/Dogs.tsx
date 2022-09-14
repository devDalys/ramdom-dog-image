import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useTypeSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { fetchDogs } from '../axios';

const Dogs: React.FC = () => {
	const { dogs, error, loading } = useTypeSelector(state => state.dogs);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch<any>(fetchDogs());
	}, []);
	console.log(dogs);
	const moreDogs = () => {
		dispatch<any>(fetchDogs());
	};

	return (
		<div className="container">
			<div className="container__header">
				<h1 className="container__header-title">Собаки это очень мило, посмотри сам</h1>
				<Button variant="contained" className={'container__header-btn'} onClick={() => dispatch<any>(fetchDogs())}>
					Хочу ещё{' '}
				</Button>
			</div>
			{loading && (
				<div className="loader">
					<span className="loader__title">Хорошие мальчики уже бегут</span>
					<CircularProgress />
				</div>
			)}
			<div className="photos">
				{dogs.map(item => {
					return <img src={item.url} alt="" />;
				})}
			</div>
		</div>
	);
};
export default Dogs;
