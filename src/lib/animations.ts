import { cubicOut,cubicIn } from 'svelte/easing';

export function growOut(
    node: HTMLElement,
    params: { delay?: number; duration?: number; easing?: (t: number) => number },
    options: { direction: 'in' | 'out' | 'both' }
) {
    const { direction } = options;

    const elemHeight = node.clientHeight;
    const elemWidth = node.clientWidth;
    const elemPaddings = window
        .getComputedStyle(node)
        .padding.split(' ')
        .map((padding) => parseInt(padding));
    //console.log(window.getComputedStyle(node).padding);
    //console.log(elemPaddings);

    return {
        delay: params.delay || 0,
        duration: params.duration || 1000,
        easing: params.easing || cubicOut,
        css: (t: number, u: number) => `
            opacity: ${direction === 'in' ? u : t};
            width: ${Math.round(elemWidth * t)}px;
            height: ${Math.round(elemHeight * t)}px;
            padding: ${elemPaddings.map((padding) => Math.round(padding * t)).join('px ')};
        `
    };
}

export function expandWidth(
    node: HTMLElement,
    params: { delay?: number; duration?: number },
    options: { direction: 'in' | 'out' | 'both' }
) {
    return expand(node, {...params, direction: 'width'}, options);
}

export function expandHeight(
    node: HTMLElement,
    params: { delay?: number; duration?: number },
    options: { direction: 'in' | 'out' | 'both' }
) {
    return expand(node, {...params, direction: 'height'} , options);
}

function expand(
    node: HTMLElement,
    params: { delay?: number; duration?: number, direction: 'width' | 'height' },
    options: { direction: 'in' | 'out' | 'both' }
) {
    const { delay = 0, duration = 400, direction } = params;
    let targetSize = 0;
    switch (direction) {
        case 'width':
            targetSize = node.clientWidth;
            break;
        case 'height':
            targetSize = node.clientHeight;
            break;
    }

    return {
        delay,
        duration,
        css: (t: number) => {
            const eased = options.direction === 'out' ? cubicIn(t) : cubicOut(t);

            return `${direction}: ${Math.round(targetSize*eased)}px; opacity: ${eased}`;
            //return `height ${eased*100}%; opacity: ${eased}`;
        }
    };
}

export function typewriter(node: HTMLElement, params: { delay?: number; speed: number }) {
	const { delay = 0, speed } = params;
	const text = node.textContent || '';
	const duration = text.length / (speed * 0.01);

	return {
		delay,
		duration,
		css: (t: number) => {
			return `opacity: ${t}`;
		},
		tick: (t: number) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

export function typewriterElements(node: HTMLElement, params: { delay?: number; speed: number }) {
	const { delay = 0, speed } = params;
	const children = node.childNodes;
	const duration = children.length / (speed*0.01);

	children.forEach((child: ChildNode) => {
        if (child instanceof HTMLElement)
		    child.style.opacity = '0';
	});

	return {
		delay,
		duration,
		css: (t: number) => {
			return `opacity: ${t}`;
		},
		tick: (t: number) => {
			const child = children[~~(children.length * t)];
			if (child instanceof HTMLElement) {
				child.style.opacity = '1';
			}
		}
	};
}

export function typewriterFixedTime(node: HTMLElement, params: { delay?: number; duration: number }) {
	const { delay = 0, duration } = params;
	const text = node.textContent || '';

	return {
		delay,
		duration,
		css: (t: number) => {
			return `opacity: ${t}`;
		},
		tick: (t: number) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}