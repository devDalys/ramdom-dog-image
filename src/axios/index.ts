import axios from 'axios';
import { Dispatch } from 'react';
import { dogsAction, dogState } from '../types/dogType';


export const fetchDogs = () => {
	return async (dispatch: Dispatch<dogsAction>) => {
		try {
			dispatch({ type: dogState.FETCH_DOGS });
			const getArrayDogs = async () => {
				let dogs: any = [];
				for (let i = 0; i < 15; i++) {
					dogs.push((await axios.get('https://random.dog/woof.json')).data);
				}
				return dogs;
			};
			const response = await getArrayDogs();

			dispatch({ type: dogState.FETCH_DOGS_SUCCESS, payload: response });
		} catch (e) {
			dispatch({ type: dogState.FETCH_DOGS_FAILED, payload: 'Собачки куда-то пропали' });
		}
	};
};
