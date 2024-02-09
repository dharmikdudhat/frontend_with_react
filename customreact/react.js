function customRender(reactElement,maincontainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('href', reactElement.props.target)
    
    maincontainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'click me to visit google'
}

const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer)