(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{641:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pending-state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pending-state"}},[e._v("#")]),e._v(" Pending State")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn how Haqq handles pending state queries.")]),e._v(" "),n("h2",{attrs:{id:"pre-requisite-readings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),n("ul",[n("li",{attrs:{prereq:""}},[n("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/mempool/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Mempool"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"haqq-vs-ethereum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#haqq-vs-ethereum"}},[e._v("#")]),e._v(" Haqq vs Ethereum")]),e._v(" "),n("p",[e._v("In Ethereum, pending blocks are generated as they are queued for production by miners. These pending\nblocks include pending transactions that are picked out by miners, based on the highest reward paid\nin gas. This mechanism exists as block finality is not possible on the Ethereum network. Blocks are\ncommitted with probabilistic finality, which means that transactions and blocks become less likely\nto become reverted as more time (and blocks) passes.")]),e._v(" "),n("p",[e._v('Haqq is designed quite differently on this front as there is no concept of a "pending state".\nHaqq uses '),n("a",{attrs:{href:"https://docs.tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Core"),n("OutboundLink")],1),e._v(" BFT consensus which provides instant\nfinality for transaction. For this reason, Etheremint does not require a pending state mechanism, as\nall (if not most) of the transactions will be committed to the next block (avg. block time on Cosmos chains is ~8s). However, this causes a\nfew hiccups in terms of the Ethereum Web3-compatible queries that can be made to pending state.")]),e._v(" "),n("p",[e._v("Another significant difference with Ethereum, is that blocks are produced by validators or block producers, who include transactions from their local mempool into blocks in a\nfirst-in-first-out (FIFO) fashion. Transactions on Haqq cannot be ordered or cherry picked out from the Tendermint node "),n("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/mempool.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("mempool"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"pending-state-queries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pending-state-queries"}},[e._v("#")]),e._v(" Pending State Queries")]),e._v(" "),n("p",[e._v("Haqq will make queries which will account for any unconfirmed transactions present in a node's\ntransaction mempool. A pending state query made will be subjective and the query will be made on the\ntarget node's mempool. Thus, the pending state will not be the same for the same query to two\ndifferent nodes.")]),e._v(" "),n("h3",{attrs:{id:"json-rpc-calls-on-pending-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-calls-on-pending-transactions"}},[e._v("#")]),e._v(" JSON-RPC Calls on Pending Transactions")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth_getbalance"}},[n("code",[e._v("eth_getBalance")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-gettransactioncount"}},[n("code",[e._v("eth_getTransactionCount")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-getblocktransactioncountbynumber"}},[n("code",[e._v("eth_getBlockTransactionCountByNumber")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-getblockbynumber"}},[n("code",[e._v("eth_getBlockByNumber")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-gettransactionbyhash"}},[n("code",[e._v("eth_getTransactionByHash")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-gettransactionbyblockhashandindex"}},[n("code",[e._v("eth_getTransactionByBlockNumberAndIndex")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/json-rpc/endpoints.html#eth-sendtransaction"}},[n("code",[e._v("eth_sendTransaction")])])],1)]),e._v(" "),n("h2",{attrs:{hide:"",id:"next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),n("p",{attrs:{hide:""}},[e._v("Learn how to deploy a Solidity smart contract on Haqq using "),n("RouterLink",{attrs:{to:"/guides/tools/truffle.html"}},[e._v("Truffle")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);