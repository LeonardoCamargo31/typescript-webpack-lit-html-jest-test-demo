import sayHello from "./sayHello";
import { render } from "lit-html";
import { getByRole } from '@testing-library/dom'

describe('sayHello', () => {
  it('says hello', () => {
    render(sayHello('world'), document.body);
    const component = document.querySelector('h1');
    expect(component).toBeDefined();

    const  heading= getByRole(document.body, 'heading', {
      level:1,
      name: /Hello world/i 
    })
    expect(heading).toBeDefined()
  })
})