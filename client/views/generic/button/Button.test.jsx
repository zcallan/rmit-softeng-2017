import React from 'react';
import Button from './Button.jsx';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test( 'Text displaying properly', () => {
  const component = renderer.create(
    <Button type="default">Test Button Text</Button>
  );
  const tree = component.toJSON();
  expect( tree.children[0] ).toEqual( 'Test Button Text' );
});
