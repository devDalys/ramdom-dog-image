import axios from 'axios';
import { Dispatch } from 'react';
import { dogsAction, dogState } from '../types/dogType';


export const fetchDogs = () => {
	return async (dispatch: Dispatch<dogsAction>) => {
		try {
			dispatch({ type: dogState.FETCH_DOGS });
			const response = await axios.get('https://random.dog/woof.json');

			dispatch({ type: dogState.FETCH_DOGS_SUCCESS, payload: response.data });
		} catch (e) {
			dispatch({ type: dogState.FETCH_DOGS_FAILED, payload: 'Собачки куда-то пропали' });
		}
	};
};
