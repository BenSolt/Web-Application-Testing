import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import ButtonBoard from './components/ButtonBoard';
import Viewport from './components/Viewport';
import {addHit} from './utils/addHit';
import {addFoul} from './utils/addHit';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Strike button is rendering', () => {
  const container = render(<ButtonBoard />)
  console.log(container);
})

test('Strike button is rendering', () => {
  const view = render(<Viewport />)
  console.log(view);
})


test('contains foul', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/foul/i);
  expect(linkElement).toBeInTheDocument();
});

test('contains baseball', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/baseball/i);
  expect(linkElement).toBeInTheDocument();
});


test('contains hit', () => {
 expect(addHit(0)).toBe(1);
})

test('contains foul', () => {
  expect(addFoul(0)).toBe(2);
 })