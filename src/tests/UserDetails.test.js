import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render, mount } from 'enzyme';
import UserDetails from '../components/UserDetails';

configure({ adapter: new Adapter()});
let wrapper;
beforeEach(() => {
    wrapper = render(<UserDetails name='Varun' email="vnair@abc.com" compName='Acc' />);
})

describe('<Home />', () => {
    it('should match the original output in <UserDetails/> component', () => {
        expect(wrapper).toMatchSnapshot();
    })
})