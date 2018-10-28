import React from 'react';
import { shallow } from 'enzyme';
import Nationality from './Nationality';

describe("when Nationality is used", () => {
    let props = {};

    beforeEach(() => {
        props.flag = "flag.png";
        props.countryCode = "IT";
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Nationality />);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders an image with the alt text', () => {
        const wrapper = shallow(<Nationality {...props} />);
        const img = wrapper.find('div').find('img');
        expect(img.length).toEqual(1);
        expect(img.prop('src')).toEqual('flag.png');
        expect(img.prop('alt')).toEqual('IT');
    });
});

