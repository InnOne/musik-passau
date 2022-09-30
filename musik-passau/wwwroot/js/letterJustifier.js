function SplitText(parent, node) {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = window.getComputedStyle(parent, null).getPropertyValue('font');

    const parentNode = node.parentNode;

    const lines = getLineBreaks(node);
    parentNode.removeChild(node);

    for (let line of lines) {

        const div = document.createElement("div");
        div.appendChild(document.createTextNode(line))
        parentNode.appendChild(div)

        const totalSpace = parent.clientWidth;
        const totalLetterSpace = ctx.measureText(line).width;
        const totalWhiteSpace = totalSpace - totalLetterSpace;
        
        let spacing = (totalWhiteSpace / (line.length - 1)) - .1;

        div.style.letterSpacing = (spacing < 0 ? 0 : spacing) + "px";
        div.style.marginRight = "-" + (spacing < 0 ? 0 : spacing) + "px";
    }
}

function Justify() {
    for (let elem of document.getElementsByClassName("character_justify")) {
        const textNodes = [];
        findTextNodes(elem.firstChild, textNodes);

        elem.innerHTML = textNodes.map(value => value.textContent.trim()).join(' ').trim();

        SplitText(elem, elem.firstChild);
    }
}

function findTextNodes(node, textNodes) {
    const TEXT_NODE = 3;

    if(node.nodeType === TEXT_NODE)
        textNodes.push(node);

    if(node.firstChild)
        findTextNodes(node.firstChild, textNodes)

    if(node.nextSibling)
        findTextNodes(node.nextSibling, textNodes)
}

function getLineBreaks(node) {
    // we only deal with TextNodes
    if(!node || !node.parentNode || node.nodeType !== 3)
        return [];
    // our Range object form which we'll get the characters positions
    const range = document.createRange();
    // here we'll store all our lines
    const lines = [];
    // begin at the first character
    range.setStart(node, 0);
    // initial position
    let prevBottom = range.getBoundingClientRect().bottom;
    let str = node.textContent;
    let current = 1; // we already got index 0
    let lastFound = 0;
    let bottom = 0;
    // iterate over all characters
    while(current <= str.length) {
        // move our cursor
        range.setStart(node, current);
        if(current < str.length - 1)
            range.setEnd(node, current+1); // wrap it (for Chrome...)
        bottom = range.getBoundingClientRect().bottom;
        if(bottom > prevBottom) { // line break
            lines.push(
                str.substring(lastFound , current - lastFound).trim() // text content
            );
            prevBottom = bottom;
            lastFound = current;
        }
        current++;
    }
    // push the last line
    lines.push(str.substring(lastFound).trim());

    return lines;
}