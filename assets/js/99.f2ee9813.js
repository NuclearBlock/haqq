(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{653:function(a,t,g){"use strict";g.r(t);var e=g(1),o=Object(e.a)({},(function(){var a=this,t=a.$createElement,g=a._self._c||t;return g("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[g("h1",{attrs:{id:"hardhat-deploying-a-smart-contract"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#hardhat-deploying-a-smart-contract"}},[a._v("#")]),a._v(" Hardhat: Deploying a Smart Contract")]),a._v(" "),g("p",{attrs:{synopsis:""}},[a._v("Learn how to deploy a simple Solidity-based smart contract to Haqq using the Hardhat environment")]),a._v(" "),g("p",[g("a",{attrs:{href:"https://hardhat.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hardhat"),g("OutboundLink")],1),a._v(" is a flexible development environment for building Ethereum-based smart contracts. It is designed with integrations and extensibility in mind")]),a._v(" "),g("h2",{attrs:{id:"pre-requisite-readings"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[a._v("#")]),a._v(" Pre-requisite Readings")]),a._v(" "),g("ul",[g("li",{attrs:{prereq:""}},[g("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[a._v("Installation")])],1),a._v(" "),g("li",{attrs:{prereq:""}},[g("RouterLink",{attrs:{to:"/quickstart/run_node.html"}},[a._v("Run a node")])],1)]),a._v(" "),g("h2",{attrs:{id:"install-dependencies"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[a._v("#")]),a._v(" Install Dependencies")]),a._v(" "),g("p",[a._v("Before proceeding, you need to install Node.js (we'll use v16.x) and the npm package manager. You can download directly from "),g("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),g("OutboundLink")],1),a._v(" or in your terminal:")]),a._v(" "),g("Tabs",{attrs:{type:"border-card"}},[g("Tab",{attrs:{label:"Ubuntu"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtc0wgaHR0cHM6Ly9kZWIubm9kZXNvdXJjZS5jb20vc2V0dXBfMTYueCB8IHN1ZG8gLUUgYmFzaCAtCgpzdWRvIGFwdCBpbnN0YWxsIC15IG5vZGVqcwo="}})],1),a._v(" "),g("Tab",{attrs:{label:"MacOS"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBZb3UgY2FuIHVzZSBob21lYnJldyAoaHR0cHM6Ly9kb2NzLmJyZXcuc2gvSW5zdGFsbGF0aW9uKQokIGJyZXcgaW5zdGFsbCBub2RlCgojIE9yIHlvdSBjYW4gdXNlIG52bSAoaHR0cHM6Ly9naXRodWIuY29tL252bS1zaC9udm0pCiQgbnZtIGluc3RhbGwgbm9kZQo="}})],1)],1),a._v(" "),g("p",[a._v("You can verify that everything is installed correctly by querying the version for each package:")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBub2RlIC12Ci4uLgoKJCBucG0gLXYKLi4uCg=="}}),a._v(" "),g("div",{staticClass:"custom-block tip"},[g("p",[a._v("If you haven't already, you will also need to install Haqq if you plan on deploying your smart contracts locally. Check this "),g("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[a._v("document")]),a._v(" for the full instructions.")],1)]),a._v(" "),g("h2",{attrs:{id:"create-hardhat-project"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#create-hardhat-project"}},[a._v("#")]),a._v(" Create Hardhat Project")]),a._v(" "),g("p",[a._v("To create a new project, navigate to your project directory and run:")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdAoKODg4ICAgIDg4OCAgICAgICAgICAgICAgICAgICAgICA4ODggODg4ICAgICAgICAgICAgICAgODg4Cjg4OCAgICA4ODggICAgICAgICAgICAgICAgICAgICAgODg4IDg4OCAgICAgICAgICAgICAgIDg4OAo4ODggICAgODg4ICAgICAgICAgICAgICAgICAgICAgIDg4OCA4ODggICAgICAgICAgICAgICA4ODgKODg4ODg4ODg4OCAgODg4OGIuICA4ODhkODg4IC5kODg4ODggODg4ODhiLiAgIDg4ODhiLiAgODg4ODg4Cjg4OCAgICA4ODggICAgICZxdW90Ozg4YiA4ODhQJnF1b3Q7ICBkODgmcXVvdDsgODg4IDg4OCAmcXVvdDs4OGIgICAgICZxdW90Ozg4YiA4ODgKODg4ICAgIDg4OCAuZDg4ODg4OCA4ODggICAgODg4ICA4ODggODg4ICA4ODggLmQ4ODg4ODggODg4Cjg4OCAgICA4ODggODg4ICA4ODggODg4ICAgIFk4OGIgODg4IDg4OCAgODg4IDg4OCAgODg4IFk4OGIuCjg4OCAgICA4ODggJnF1b3Q7WTg4ODg4OCA4ODggICAgICZxdW90O1k4ODg4OCA4ODggIDg4OCAmcXVvdDtZODg4ODg4ICAmcXVvdDtZODg4CgpXZWxjb21lIHRvIEhhcmRoYXQgdjIuMC44Cgo/IFdoYXQgZG8geW91IHdhbnQgdG8gZG8/IOKApgrina8gQ3JlYXRlIGEgc2FtcGxlIHByb2plY3QKICBDcmVhdGUgYW4gZW1wdHkgaGFyZGhhdC5jb25maWcuanMK"}}),a._v(" "),g("p",[a._v("Following the prompts should create a new project structure in your directory. Consult the "),g("a",{attrs:{href:"https://hardhat.org/config/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hardhat config page"),g("OutboundLink")],1),a._v(" for a list of configuration options to specify in "),g("code",[a._v("hardhat.config.js")]),a._v(". Most importantly, you should set the "),g("code",[a._v("defaultNetwork")]),a._v(" entry to point to your desired JSON-RPC network:")]),a._v(" "),g("Tabs",{attrs:{type:"border-card"}},[g("Tab",{attrs:{label:"Local Node"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"bW9kdWxlLmV4cG9ydHMgPSB7CiAgZGVmYXVsdE5ldHdvcms6ICZxdW90O2xvY2FsJnF1b3Q7LAogIG5ldHdvcmtzOiB7CiAgICBoYXJkaGF0OiB7CiAgICB9LAogICAgbG9jYWw6IHsKICAgICAgdXJsOiAmcXVvdDtodHRwOi8vbG9jYWxob3N0Ojg1NDUvJnF1b3Q7LAogICAgICBhY2NvdW50czogW3ByaXZhdGVLZXkxLCBwcml2YXRlS2V5MiwgLi4uXQogICAgfQogIH0sCiAgLi4uCn0K"}})],1),a._v(" "),g("Tab",{attrs:{label:"Testnet"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"bW9kdWxlLmV4cG9ydHMgPSB7CiAgZGVmYXVsdE5ldHdvcms6ICZxdW90O3Rlc3RuZXQmcXVvdDssCiAgbmV0d29ya3M6IHsKICAgIGhhcmRoYXQ6IHsKICAgIH0sCiAgICB0ZXN0bmV0OiB7CiAgICAgIHVybDogJnF1b3Q7aHR0cHM6Ly9oYXFxLWFyY2hpdmUtdGVzdG5ldC5hcGkuYmRub2Rlcy5uZXQ6ODU0NS8mcXVvdDssCiAgICAgIGFjY291bnRzOiBbcHJpdmF0ZUtleTEsIHByaXZhdGVLZXkyLCAuLi5dCiAgICB9CiAgfSwKICAuLi4KfQo="}})],1)],1),a._v(" "),g("p",[a._v("To ensure you are targeting the correct network, you can query for a list of accounts available to you from your default network provider:")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdCBhY2NvdW50cwoweGYzOUZkNmU1MWFhZDg4RjZGNGNlNmFCODgyNzI3OWNmZkZiOTIyNjYKMHg3MDk5Nzk3MEM1MTgxMmRjM0EwMTBDN2QwMWI1MGUwZDE3ZGM3OUM4CjB4M0M0NENkRGRCNmE5MDBmYTJiNTg1ZGQyOTllMDNkMTJGQTQyOTNCQwoweDkwRjc5YmY2RUIyYzRmODcwMzY1RTc4NTk4MkUxZjEwMUU5M2I5MDYKLi4uCg=="}}),a._v(" "),g("h2",{attrs:{id:"deploying-a-smart-contract"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#deploying-a-smart-contract"}},[a._v("#")]),a._v(" Deploying a Smart Contract")]),a._v(" "),g("p",[a._v("You will see that a default smart contract, written in Solidity, has already been provided under "),g("code",[a._v("contracts/Greeter.sol")]),a._v(":")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cHJhZ21hIHNvbGlkaXR5IF4wLjguMDsKCmltcG9ydCAmcXVvdDtoYXJkaGF0L2NvbnNvbGUuc29sJnF1b3Q7OwoKY29udHJhY3QgR3JlZXRlciB7CiAgICBzdHJpbmcgcHJpdmF0ZSBncmVldGluZzsKCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9ncmVldGluZykgewogICAgICAgIGNvbnNvbGUubG9nKCZxdW90O0RlcGxveWluZyBhIEdyZWV0ZXIgd2l0aCBncmVldGluZzomcXVvdDssIF9ncmVldGluZyk7CiAgICAgICAgZ3JlZXRpbmcgPSBfZ3JlZXRpbmc7CiAgICB9CgogICAgZnVuY3Rpb24gZ3JlZXQoKSBwdWJsaWMgdmlldyByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGdyZWV0aW5nOwogICAgfQoKICAgIGZ1bmN0aW9uIHNldEdyZWV0aW5nKHN0cmluZyBtZW1vcnkgX2dyZWV0aW5nKSBwdWJsaWMgewogICAgICAgIGNvbnNvbGUubG9nKCZxdW90O0NoYW5naW5nIGdyZWV0aW5nIGZyb20gJyVzJyB0byAnJXMnJnF1b3Q7LCBncmVldGluZywgX2dyZWV0aW5nKTsKICAgICAgICBncmVldGluZyA9IF9ncmVldGluZzsKICAgIH0KfQo="}}),a._v(" "),g("p",[a._v("This contract allows you to set and query a string "),g("code",[a._v("greeting")]),a._v(". Hardhat also provides a script to deploy smart contracts to a target network; this can be invoked via the following command, targeting your default network:")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIHNjcmlwdHMvc2FtcGxlLXNjcmlwdC5qcwo="}}),a._v(" "),g("p",[a._v("Hardhat also lets you manually specify a target network via the "),g("code",[a._v("--network <your-network>")]),a._v(" flag:")]),a._v(" "),g("Tabs",{attrs:{type:"border-card"}},[g("Tab",{attrs:{label:"Local Node"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIC0tbmV0d29yayB7eyAkdGhlbWVDb25maWcucHJvamVjdC5ycGNfdXJsX2xvY2FsIH19IHNjcmlwdHMvc2FtcGxlLXNjcmlwdC5qcwo="}})],1),a._v(" "),g("Tab",{attrs:{label:"Testnet"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIC0tbmV0d29yayB7eyAkdGhlbWVDb25maWcucHJvamVjdC5ycGNfdXJsX3Rlc3RuZXQgfX0gc2NyaXB0cy9zYW1wbGUtc2NyaXB0LmpzCg=="}})],1)],1),a._v(" "),g("p",[a._v("Finally, try running a Hardhat test:")]),a._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdCB0ZXN0CkNvbXBpbGluZyAxIGZpbGUgd2l0aCAwLjguNApDb21waWxhdGlvbiBmaW5pc2hlZCBzdWNjZXNzZnVsbHkKCgogIEdyZWV0ZXIKRGVwbG95aW5nIGEgR3JlZXRlciB3aXRoIGdyZWV0aW5nOiBIZWxsbywgd29ybGQhCkNoYW5naW5nIGdyZWV0aW5nIGZyb20gJ0hlbGxvLCB3b3JsZCEnIHRvICdIb2xhLCBtdW5kbyEnCiAgICDinJMgU2hvdWxkIHJldHVybiB0aGUgbmV3IGdyZWV0aW5nIG9uY2UgaXQncyBjaGFuZ2VkICg4MDNtcykKCgogIDEgcGFzc2luZyAoODA1bXMpCg=="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);