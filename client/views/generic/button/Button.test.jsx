import React from 'react';
import Button from './Button.jsx';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test( 'Text displaying properly', () => {
  const component = renderer.create(
    <Button type="default">Test Button Text</Button>
  );
  const tree = component.toJSON();
  expect( tree.children[0].children[0] ).toEqual( 'Test Button Text' );
});

test( 'Selected class is showing correctly', () => {
  const component = renderer.create(
    <Button selected type="default">Test Button Text</Button>
  );
  const tree = component.toJSON();
  expect( tree.props.className ).toContain( 'selected' );
});

test( 'Class name is being passed in correctly', () => {
  const component = renderer.create(
    <Button className="test-class" type="default">Test Button Text</Button>
  );
  const tree = component.toJSON();
  expect( tree.props.className ).toContain( 'test-class' );
});
