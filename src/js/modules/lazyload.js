import lozad from 'lozad';

function Lazyload() {
    const observer = lozad('.lazyload'); // lazy loads elements with default selector as '.lozad'
    observer.observe();
}

export default Lazyload;
