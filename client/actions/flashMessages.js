import { ADD_FLASH_MESSAGE } from '../constants';

export function addFlashMessage(message) {
	return {
		type: ADD_FLASH_MESSAGE,
		message
	}
}