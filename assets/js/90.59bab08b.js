(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{640:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn about the encoding formats used on Haqq.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://docs.cosmos.network/main/core/encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Encoding"),a("OutboundLink")],1)]),e._v(" "),a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://eth.wiki/en/fundamentals/rlp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum RLP"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"encoding-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoding-formats"}},[e._v("#")]),e._v(" Encoding Formats")]),e._v(" "),a("h3",{attrs:{id:"protocol-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocol-buffers"}},[e._v("#")]),e._v(" Protocol Buffers")]),e._v(" "),a("p",[e._v("The Cosmos "),a("a",{attrs:{href:"https://stargate.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stargate"),a("OutboundLink")],1),e._v(" release introduces\n"),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf"),a("OutboundLink")],1),e._v(" as the main encoding format for both\nclient and state serialization. All the EVM module types that are used for state and clients\n(transaction messages, genesis, query services, etc) will be implemented as protocol buffer messages.")]),e._v(" "),a("h3",{attrs:{id:"amino"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),a("p",[e._v("The Cosmos SDK also supports the legacy Amino encoding format for backwards compatibility with\nprevious versions, specially for client encoding and signing with Ledger devices. Haqq does not\nsupport Amino in the EVM module, but it is supported for all other Cosmos SDK modules that enable it.")]),e._v(" "),a("h3",{attrs:{id:"rlp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rlp"}},[e._v("#")]),e._v(" RLP")]),e._v(" "),a("p",[e._v("Recursive Length Prefix ("),a("a",{attrs:{href:"https://eth.wiki/en/fundamentals/rlp",target:"_blank",rel:"noopener noreferrer"}},[e._v("RLP"),a("OutboundLink")],1),e._v("), is an encoding/decoding algorithm that serializes a message and\nallows for quick reconstruction of encoded data. Haqq uses RLP to encode/decode Ethereum\nmessages for JSON-RPC handling to conform messages to the proper Ethereum format. This allows\nmessages to be encoded and decoded in the exact format as Ethereum's.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/evm")]),e._v(" transactions ("),a("code",[e._v("MsgEthereumTx")]),e._v(") encoding is performed by casting the message to a go-ethereum's "),a("code",[e._v("Transaction")]),e._v(" and then marshaling the transaction data using RLP:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHhFbmNvZGVyIG92ZXJ3cml0ZXMgc2RrLlR4RW5jb2RlciB0byBzdXBwb3J0IE1zZ0V0aGVyZXVtVHgKZnVuYyAoZyB0eENvbmZpZykgVHhFbmNvZGVyKCkgc2RrLlR4RW5jb2RlciB7CiAgcmV0dXJuIGZ1bmModHggc2RrLlR4KSAoW11ieXRlLCBlcnJvcikgewogICAgbXNnLCBvayA6PSB0eC4oKmV2bXR5cGVzLk1zZ0V0aGVyZXVtVHgpCiAgICBpZiBvayB7CiAgICAgIHJldHVybiBtc2cuQXNUcmFuc2FjdGlvbigpLk1hcnNoYWxCaW5hcnkoKQogICB9CiAgICByZXR1cm4gZy5UeENvbmZpZy5UeEVuY29kZXIoKSh0eCkKICB9Cn0KCi8vIFR4RGVjb2RlciBvdmVyd3JpdGVzIHNkay5UeERlY29kZXIgdG8gc3VwcG9ydCBNc2dFdGhlcmV1bVR4CmZ1bmMgKGcgdHhDb25maWcpIFR4RGVjb2RlcigpIHNkay5UeERlY29kZXIgewogIHJldHVybiBmdW5jKHR4Qnl0ZXMgW11ieXRlKSAoc2RrLlR4LCBlcnJvcikgewogICAgdHggOj0gJmFtcDtldGh0eXBlcy5UcmFuc2FjdGlvbnt9CgogICAgZXJyIDo9IHR4LlVubWFyc2hhbEJpbmFyeSh0eEJ5dGVzKQogICAgaWYgZXJyID09IG5pbCB7CiAgICAgIG1zZyA6PSAmYW1wO2V2bXR5cGVzLk1zZ0V0aGVyZXVtVHh7fQogICAgICBtc2cuRnJvbUV0aGVyZXVtVHgodHgpCiAgICAgIHJldHVybiBtc2csIG5pbAogICAgfQoKICAgIHJldHVybiBnLlR4Q29uZmlnLlR4RGVjb2RlcigpKHR4Qnl0ZXMpCiAgfQp9Cg=="}}),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn how "),a("RouterLink",{attrs:{to:"/core/pending_state.html"}},[e._v("pending state")]),e._v(" is handled on Haqq.")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);