export default class PlaceholderButton{

    public static get(label: string, callback: Function): HTMLElement{

        const button = document.createElement('button');
        button.innerText = label;
        button.addEventListener('click', callback as any);

        return button;

    }

}