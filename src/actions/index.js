import cart from './cart'
import pizza from './pizza';
import general from './general';

export default {
    ...cart,
    ...pizza,
    ...general
}