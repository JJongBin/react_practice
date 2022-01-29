const defaultTemplate = `<p>{message}</p>`;

export class Greeting {
  constructor(message, template = defaultTemplate) {
    if (typeof message !== 'string') {
      throw new TypeError(
        'message 매개변수의 타입은 String 유형이어야 합니다.'
      );
    }
    if (!template.includes('{message}')) {
      throw new Error('템플릿에 {message}가 포함되어 있지 않습니다.');
    }

    this.template = template.replace(/{message}/, message);
  }

  render(container) {
    if (!container || container.nodeType !== document.ELEMENT_NODE) {
      throw new TypeError(
        'container 매개변수 타입은 문서의 요소노드여야 합니다.'
      );
    }

    const template = document.createElement('template');
    template.innerHTML = this.template;

    container.append(template.content.cloneNode(true));
  }
}

export function createGreeting({ message, template }, container) {
  const greeting = new Greeting(message, template);
  return !container ? greeting : greeting.render(container);
}
