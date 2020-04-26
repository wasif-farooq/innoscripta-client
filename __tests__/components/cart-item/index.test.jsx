import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../../src/components/cart-item';

describe('<Item />', () => {

    const onRemove = jest.fn();

    it('should render tr tag', () => {
        const wrapper = shallow(
            <Item
                id={1}
                name="test"
                quantity={1}
                price={1}
                onRemove={onRemove}
            />
        );
        expect(wrapper.find('tr').exists()).toBe(true);
        expect(wrapper.find('tr td').length).toEqual(5);
        expect(wrapper.find('tr td').first().text()).toEqual('test');
        expect(wrapper.find('tr td').at(2).find('Price').exists()).toBe(true);
        expect(onRemove).toBeCalled();
    });

});