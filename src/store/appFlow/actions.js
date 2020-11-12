import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	setConnected: [ 'connected' ]
});

export const FlowTypes = Types;
export default Creators;
