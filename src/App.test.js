import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/index';
import renderer from 'react-test-renderer';
import {pickAndChoose} from '../src/constants/index';

describe('App', () => {
  it('renderização', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('snapshot', ()=>{
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('random', ()=>{
    const value = pickAndChoose();
    expect(value).toBeTruthy();
  });

  test('type', ()=>{
    const value = pickAndChoose();
    expect(typeof value).toBe("number");
  });
});

