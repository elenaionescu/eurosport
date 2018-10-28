import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe("when Avatar is used", () => {
    let props = {};

    beforeEach(() => {
        props.picture = "some/image.png";
        props.altText = "alt text";
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Avatar />);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders an image with the alt text', () => {
        const wrapper = shallow(<Avatar {...props} />);
        const img = wrapper.find('div').find('img');
        expect(img.length).toEqual(1);
        expect(img.prop('src')).toEqual('some/image.png');
        expect(img.prop('alt')).toEqual('alt text');
    });
});

