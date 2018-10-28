import React from 'react';
import { shallow } from 'enzyme';
import Name from './Name';

describe("when Name is used", () => {
    let props = {};

    beforeEach(() => {
        props.firstname = "Roger";
        props.lastname = "Federer";
      });

    it('renders a div as parent element', () => {
        const wrapper = shallow(<Name {...props}/>);
        expect(wrapper.find('div').first().length).toEqual(1);
    });

    it('renders a firstname and lastname as single string', () => {
        const wrapper = shallow(<Name {...props} />);
        const fullname = wrapper.find('div').find('h1');
        expect(fullname.length).toEqual(1);
        expect(fullname.text()).toEqual('Roger Federer');
    });

});

