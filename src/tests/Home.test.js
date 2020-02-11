import React from 'react';
import Home from '../components/Home';
import Adapter from 'enzyme-adapter-react-16';
import { configure, render, mount} from 'enzyme';
import Item from '../components/Item';

configure({ adapter: new Adapter()});
let wrapper;
beforeEach(() => {
    wrapper =render(<Home />);
})

// afterEach(() => {
//     wrapper.unmount();
// })

describe('<Home />', () => {
    it('should render all the static elements in <Home /> component', () => {
        expect(wrapper).toMatchSnapshot()
})
})