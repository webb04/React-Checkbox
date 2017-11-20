import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Checkbox from './Checkbox';

it('Checkbox selects when clicked', () => {
  const checkbox = mount(<Checkbox label='test' selected={false}/>);

  const stateBeforeClick = checkbox.state().selected;
  expect(stateBeforeClick).toBe(false);

  checkbox.simulate('click');
  const stateAfterOneClick = checkbox.state().selected;
  expect(stateAfterOneClick).toBe(true);

  checkbox.simulate('click');
  const stateAfterTwoClick = checkbox.state().selected;
  expect(stateAfterTwoClick).toBe(false);

});

it('Checkbox renders label', () => {
  const checkbox = mount(<Checkbox label='Webpack' selected={false}/>);

  expect(checkbox.find('.label').length).toEqual(1);
  expect(checkbox.find('.label').text()).toEqual('Webpack');
});
