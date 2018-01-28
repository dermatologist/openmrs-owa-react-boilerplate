import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {App} from './App'

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        loadManifest: jest.fn(),
    };

    const enzymeWrapper = shallow(<App {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('App', () => {
        it('should render self', () => {
            const {enzymeWrapper} = setup();

            expect(enzymeWrapper.find('h1').text()).toBe('React Example')
        });
    })
});