import React from 'react';
import { mount } from 'enzyme';
import Item from '../../../src/components/menu-item';

describe('<Item />', () => {

    const onAdd = jest.fn();

    it('should render tr tag', () => {
        const wrapper = mount(
            <Item
                id={1}
                name="test"
                thumbnail=""
                description=""
                price={1}
                onAdd={onAdd}
        />
    );
        expect(wrapper.find('Card').exists()).toBe(true);
        expect(wrapper.find('Button').exists()).toBe(true);
        wrapper.find('Button').simulate('click');
        expect(onAdd).toBeCalled();
    });

});