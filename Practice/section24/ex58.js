// WRITE YOUR CODE IN HERE:
// const nodes = []
function create100Nodes() {
    const nodes = []
    for (let i = 0; i < 100; i++) {
        let newNode = document.createElement('button')
        // newNode.append('ceva text');
        newNode.innerText = 'ceva text'
        // nodes.add(newNode);
        nodes.push(newNode);
        console.log(newNode);
    }
    return nodes;
}
const newButtons = create100Nodes()
const containerElement = document.querySelector('#container')
for (let btn of newButtons) {
    containerElement.appendChild(btn);
}