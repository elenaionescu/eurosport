import React from 'react';
import { shallow } from 'enzyme';
import Ranking from './Ranking';

describe("when Ranking is used", () => {
    let props = {};

    beforeEach(() => {
        props.position = 1;
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Ranking {...props}/>);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders a label as h1 element', () => {
        const wrapper = shallow(<Ranking {...props} />);
        const label = wrapper.find('div').find('h1');
        expect(label.length).toEqual(1);
        expect(label.text()).toEqual('#1');
    });

});

