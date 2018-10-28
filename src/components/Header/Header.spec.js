import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("when Header is used", () => {

    it('renders a logo', () => {
        const wrapper = shallow(<Header/>);
        const img = wrapper.find('header').find('img');
        expect(img.prop('src')).toEqual('Eurosport_logo.svg');
        expect(img.prop('alt')).toEqual('logo');
    });

    it('renders a text', () => {
        const wrapper = shallow(<Header/>);
        const text = wrapper.find('header').find('span');
        expect(text.text()).toBe('Eurosport Player Stats');
    });
});

