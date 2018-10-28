import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe("when Info is used", () => {
    let props = {};

    beforeEach(() => {
        props.label = "my label";
        props.value = "some value";
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Info {...props}/>);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders a label as h3 element with the props value', () => {
        const wrapper = shallow(<Info {...props} />);
        const label = wrapper.find('div').find('h3');
        expect(label.length).toEqual(1);
        expect(label.text()).toEqual('my label:');
    });

    it('renders a value as span element with the props value', () => {
        const wrapper = shallow(<Info {...props} />);
        const value = wrapper.find('div').find('span');
        expect(value.length).toEqual(1);
        expect(value.text()).toEqual('some value');
    });
});

