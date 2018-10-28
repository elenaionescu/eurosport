import React from 'react';
import { shallow } from 'enzyme';
import Points from './Points';

describe("when Info is used", () => {
    let props = {};

    beforeEach(() => {
        props.points = 39;
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Points {...props}/>);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders a label as h3 element', () => {
        const wrapper = shallow(<Points {...props} />);
        const label = wrapper.find('div').find('h3');
        expect(label.length).toEqual(1);
        expect(label.text()).toEqual('Points:');
    });

    it('renders a value as h2 element with the props value', () => {
        const wrapper = shallow(<Points {...props} />);
        const value = wrapper.find('div').find('h2');
        expect(value.length).toEqual(1);
        expect(value.text()).toEqual('39');
    });
});

