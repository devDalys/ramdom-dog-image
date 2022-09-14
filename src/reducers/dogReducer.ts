import { dogType, Action, dogState } from '../types/dogType';

const initialStore: dogType = {
	dogs: [],
	loading: false,
	error: null
};

export const dogReducer = (state = initialStore, action: Action): dogType => {
	switch (action.type) {
		case dogState.FETCH_DOGS:
			return {
				dogs: [],
				error: null,
				loading: true
			};
		case dogState.FETCH_DOGS_SUCCESS:
			return { dogs: action.payload, error: null, loading: false };
		case dogState.FETCH_DOGS_FAILED:
			return { dogs: [], error: action.payload, loading: false };
		default:
			return state;
	}
};
