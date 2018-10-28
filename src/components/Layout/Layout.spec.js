import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe("when Layout component is used", () => {

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders the Header and Footer component', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('header').length).toBe(1);
        expect(wrapper.find('footer').length).toBe(1);
    });

    it('renders children component', () => {
        const wrapper = shallow(<Layout> <p>children</p> </Layout>);
        const div = wrapper.find('div').first();
        expect(div.find('p').length).toBe(1);
        expect(div.find('p').html()).toEqual('<p>children</p>');
    });
});

