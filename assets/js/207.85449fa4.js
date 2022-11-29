(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{760:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploy-node-on-cloud"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-node-on-cloud"}},[e._v("#")]),e._v(" Deploy Node on Cloud")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Learn how to deploy a node to different cloud providers.")]),e._v(" "),o("h2",{attrs:{id:"digital-ocean"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#digital-ocean"}},[e._v("#")]),e._v(" Digital Ocean")]),e._v(" "),o("h3",{attrs:{id:"account-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#account-setup"}},[e._v("#")]),e._v(" Account Setup")]),e._v(" "),o("p",[e._v("Head over to "),o("a",{attrs:{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Ocean"),o("OutboundLink")],1),e._v(" and create an account.")]),e._v(" "),o("p",[e._v("DigitalOcean will want a public key that it can place on any Droplets we start, so that we can access them with a key that we know only we have.")]),e._v(" "),o("p",[e._v("Let's create an SSH keypair now using "),o("code",[e._v("ssh-keygen -t rsa -b 4096")])]),e._v(" "),o("p",[e._v("This will ask you for a file where you want to save the key which you can call something like - "),o("code",[e._v("digital-ocean-key")]),e._v(".")]),e._v(" "),o("p",[e._v("It'll also ask for a passphrase - feel free to set one if you wish or you could leave it empty. If you created it in the same folder as we've been working out of, you'll see two files - one called "),o("code",[e._v("digital-ocean-key")]),e._v(" and one called "),o("code",[e._v("digital-ocean-key.pub")]),e._v(" - these are respectively your private and public keys.")]),e._v(" "),o("p",[e._v("In your DigitalOcean account, on the bottom left hand side, there is a link for "),o("code",[e._v("'Security'")]),e._v(". Follow this link, and the next page will have an option to add an SSH key")]),e._v(" "),o("p",[e._v("Click "),o("code",[e._v("'Add an SSH key'")]),e._v(" and you'll be presented with a dialog to enter your key. Simply copy the contents of your "),o("code",[e._v("digital-ocean-key.pub")]),e._v(" into the large text box (you can get the contents printed to the terminal with "),o("code",[e._v("cat digital-ocean-key.pub")]),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"create-droplet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-droplet"}},[e._v("#")]),e._v(" Create Droplet")]),e._v(" "),o("p",[e._v("Once you've added your SSH key. click on the "),o("code",[e._v("'Droplets'")]),e._v(" link on the left, and then on the next page click "),o("code",[e._v("'Create Droplet'")]),e._v(".")]),e._v(" "),o("p",[e._v("On this page, you'll be presented with a number of options for configuring your DigitalOcean Droplet, including the distribution, the plan, the size/cost per month, region, and authentication. Feel free to choose whichever settings work best for you.")]),e._v(" "),o("p",[e._v("Under "),o("code",[e._v("'Authentication'")]),e._v(", select "),o("code",[e._v("'SSH Key'")]),e._v(", and select which keys you would like to use (like the one you created in the last step). You can also name your Droplet if you wish. When you're finished, click "),o("code",[e._v("'Create Droplet'")]),e._v(" at the bottom.")]),e._v(" "),o("p",[e._v("Wait a minute for your Droplet to start up. It'll appear under the "),o("code",[e._v("'Droplets'")]),e._v(" panel with a green dot next to it when it is up and ready. At this point, we're ready to connect to it.")]),e._v(" "),o("h3",{attrs:{id:"deploy-to-droplet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-droplet"}},[e._v("#")]),e._v(" Deploy to Droplet")]),e._v(" "),o("h4",{attrs:{id:"connect-to-droplet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-droplet"}},[e._v("#")]),e._v(" Connect to Droplet")]),e._v(" "),o("p",[e._v("Click on the started Droplet, and you'll see details about it. At the moment, we're interested in the IP address - this is the address that the Droplet is at on the internet.")]),e._v(" "),o("p",[e._v("To access it, we'll need to connect to it using our previously created private key. From the same folder as that private key, run:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3NoIC1pIGRpZ2l0YWwtb2NlYW4ta2V5IHJvb3RAJmx0O0RST1BMRVRfSVBfQUREUkVTUyZndDsK"}}),e._v(" "),o("p",[e._v("Now you are connected to the droplet.")]),e._v(" "),o("h4",{attrs:{id:"install-haqq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-haqq"}},[e._v("#")]),e._v(" Install Haqq")]),e._v(" "),o("p",[e._v("Clone and build Haqq in the droplet using "),o("code",[e._v("git")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gaW5zdGFsbCBodHRwczovL2dpdGh1Yi5jb20vaGFxcS1uZXR3b3JrL2hhcXEuZ2l0Cg=="}}),e._v(" "),o("p",[e._v("Check that the binaries have been successfully installed:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgLWgK"}}),e._v(" "),o("h3",{attrs:{id:"copy-the-genesis-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-genesis-file"}},[e._v("#")]),e._v(" Copy the Genesis File")]),e._v(" "),o("p",[e._v("To connect the node to the existing testnet, fetch the testnet's "),o("code",[e._v("genesis.json")]),e._v(" file and copy it into the new droplets config directory (i.e "),o("code",[e._v("$HOME/.haqqd/config/genesis.json")]),e._v(").")]),e._v(" "),o("p",[e._v("To do this ssh into both the testnet droplet and the new node droplet.")]),e._v(" "),o("p",[e._v("On your local machine copy the genesis.json file from the testnet droplet to the new droplet using:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2NwIC0zIHJvb3RAJmx0O1RFU1RORVRfSVBfQUREUkVTUyZndDs6JEhPTUUvLmhhcXFkL2NvbmZpZy9nZW5lc2lzLmpzb24gcm9vdEAmbHQ7Tk9ERV9JUF9BRERSRVNTJmd0OzokSE9NRS8uaGFxcWQvY29uZmlnL2dlbmVzaXMuanNvbgo="}}),e._v(" "),o("h3",{attrs:{id:"start-the-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-the-node"}},[e._v("#")]),e._v(" Start the Node")]),e._v(" "),o("p",[e._v("Once the genesis file is copied over run "),o("code",[e._v("haqqd start")]),e._v(" inside the node droplet.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);