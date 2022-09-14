interface Dog {
	url?: string,
	fileSizeBytes?: number
}
export interface dogType {
	dogs: Dog;
	loading: boolean;
	error: null | string;
}

export interface Action {
	type: string;
	payload?: any;
}

interface FETCH_DOGS {
	type: dogState.FETCH_DOGS;
}

interface FETCH_DOGS_SUCCESS {
	type: dogState.FETCH_DOGS_SUCCESS;
	payload: [];
}

interface FETCH_DOGS_FAILED {
	type: dogState.FETCH_DOGS_FAILED;
	payload: string;
}

export type dogsAction = FETCH_DOGS | FETCH_DOGS_FAILED | FETCH_DOGS_SUCCESS;

export enum dogState {
	FETCH_DOGS = 'FETCH_DOGS',
	FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS',
	FETCH_DOGS_FAILED = 'FETCH_DOGS_FAILED'
}
