(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{692:function(t,e,a){"use strict";a.r(e);var o=a(1),d=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("h2",{attrs:{id:"feepool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feepool"}},[t._v("#")]),t._v(" FeePool")]),t._v(" "),a("p",[t._v("All globally tracked parameters for distribution are stored within\n"),a("code",[t._v("FeePool")]),t._v(". Rewards are collected and added to the reward pool and\ndistributed to validators/delegators from here.")]),t._v(" "),a("p",[t._v("Note that the reward pool holds decimal coins ("),a("code",[t._v("DecCoins")]),t._v(") to allow\nfor fractions of coins to be received from operations like inflation.\nWhen coins are distributed from the pool they are truncated back to\n"),a("code",[t._v("sdk.Coins")]),t._v(" which are non-decimal.")]),t._v(" "),a("ul",[a("li",[t._v("FeePool: "),a("code",[t._v("0x00 -> ProtocolBuffer(FeePool)")])])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gY29pbnMgd2l0aCBkZWNpbWFsCnR5cGUgRGVjQ29pbnMgW11EZWNDb2luCgp0eXBlIERlY0NvaW4gc3RydWN0IHsKICAgIEFtb3VudCBzZGsuRGVjCiAgICBEZW5vbSAgc3RyaW5nCn0K"}}),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRmVlUG9vbCBpcyB0aGUgZ2xvYmFsIGZlZSBwb29sIGZvciBkaXN0cmlidXRpb24uCm1lc3NhZ2UgRmVlUG9vbCB7CiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5EZWNDb2luIGNvbW11bml0eV9wb29sID0gMSBbCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgICAgPSBmYWxzZSwKICAgIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjQ29pbnMmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgICAgPSAmcXVvdDt5YW1sOlwmcXVvdDtjb21tdW5pdHlfcG9vbFwmcXVvdDsmcXVvdDsKICBdOwp9"}})],1),t._v(" "),a("h2",{attrs:{id:"validator-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-distribution"}},[t._v("#")]),t._v(" Validator Distribution")]),t._v(" "),a("p",[t._v("Validator distribution information for the relevant validator is updated each time:")]),t._v(" "),a("ol",[a("li",[t._v("delegation amount to a validator is updated,")]),t._v(" "),a("li",[t._v("a validator successfully proposes a block and receives a reward,")]),t._v(" "),a("li",[t._v("any delegator withdraws from a validator, or")]),t._v(" "),a("li",[t._v("the validator withdraws its commission.")])]),t._v(" "),a("ul",[a("li",[t._v("ValidatorDistInfo: "),a("code",[t._v("0x02 | ValOperatorAddrLen (1 byte) | ValOperatorAddr -> ProtocolBuffer(validatorDistribution)")])])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3JEaXN0SW5mbyBzdHJ1Y3QgewogICAgT3BlcmF0b3JBZGRyZXNzICAgICBzZGsuQWNjQWRkcmVzcwogICAgU2VsZkJvbmRSZXdhcmRzICAgICBzZGsuRGVjQ29pbnMKICAgIFZhbGlkYXRvckNvbW1pc3Npb24gdHlwZXMuVmFsaWRhdG9yQWNjdW11bGF0ZWRDb21taXNzaW9uCn0K"}}),t._v(" "),a("h2",{attrs:{id:"delegation-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegation-distribution"}},[t._v("#")]),t._v(" Delegation Distribution")]),t._v(" "),a("p",[t._v("Each delegation distribution only needs to record the height at which it last\nwithdrew fees. Because a delegation must withdraw fees each time it's\nproperties change (aka bonded tokens etc.) its properties will remain constant\nand the delegator's "),a("em",[t._v("accumulation")]),t._v(" factor can be calculated passively knowing\nonly the height of the last withdrawal and its current properties.")]),t._v(" "),a("ul",[a("li",[t._v("DelegationDistInfo: "),a("code",[t._v("0x02 | DelegatorAddrLen (1 byte) | DelegatorAddr | ValOperatorAddrLen (1 byte) | ValOperatorAddr -> ProtocolBuffer(delegatorDist)")])])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZWxlZ2F0aW9uRGlzdEluZm8gc3RydWN0IHsKICAgIFdpdGhkcmF3YWxIZWlnaHQgaW50NjQgICAgLy8gbGFzdCB0aW1lIHRoaXMgZGVsZWdhdGlvbiB3aXRoZHJldyByZXdhcmRzCn0K"}})],1)}),[],!1,null,null,null);e.default=d.exports}}]);