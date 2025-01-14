import { html, TemplateResult } from 'lit-html'
import { until } from 'lit-html/directives/until'

export default function sayHello(name: string): TemplateResult {
  return html`<h1>Hello ${name}</h1>`;
}
