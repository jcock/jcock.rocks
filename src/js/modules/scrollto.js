import zenScroll from 'zenscroll';

function ScrollTo() {
    const defaultDuration = 400
    const edgeOffset = 1
    zenScroll.setup(defaultDuration, edgeOffset)
}

export default ScrollTo;
