(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{646:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keyring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyring"}},[e._v("#")]),e._v(" Keyring")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Create, import, export and delete keys using the CLI keyring")]),e._v(" "),a("p",[e._v("The keyring holds the private/public keypairs used to interact with the node. For instance, a validator key needs to be set up before running the node, so that blocks can be correctly signed. The private key can be stored in different locations, called "),a("a",{attrs:{href:"#keyring-backends"}},[e._v('"backends"')]),e._v(", such as a file or the operating system's own key storage.")]),e._v(" "),a("h2",{attrs:{id:"add-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-keys"}},[e._v("#")]),e._v(" Add keys")]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("haqqd keys")]),e._v(" for help with the keys command and "),a("code",[e._v("haqqd keys [command] --help")]),e._v(" for more information about a particular subcommand.")]),e._v(" "),a("p",[e._v("To create a new key in the keyring, run the "),a("code",[e._v("add")]),e._v(" subcommand with a "),a("code",[e._v("<key_name>")]),e._v(" argument. For the purpose of this tutorial, we will solely use the "),a("code",[e._v("test")]),e._v(" backend, and call our new key "),a("code",[e._v("mykey")]),e._v(". This key will be used in the next section.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQga2V5cyBhZGQgbXlrZXkgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdAoKIyBQdXQgdGhlIGdlbmVyYXRlZCBhZGRyZXNzIGluIGEgdmFyaWFibGUgZm9yIGxhdGVyIHVzZS4KTVlfVkFMSURBVE9SX0FERFJFU1M9JChoYXFxZCBrZXlzIHNob3cgbXlrZXkgLWEgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdCkK"}}),e._v(" "),a("p",[e._v("This command generates a new 24-word mnemonic phrase, persists it to the relevant backend, and outputs information about the keypair. If this keypair will be used to hold value-bearing tokens, be sure to write down the mnemonic phrase somewhere safe!")]),e._v(" "),a("p",[e._v("By default, the keyring generates a "),a("code",[e._v("eth_secp256k1")]),e._v(" keypair. The keyring also supports "),a("code",[e._v("ed25519")]),e._v(" and "),a("code",[e._v("secp256k1")]),e._v(" keys, which may be created by passing the "),a("code",[e._v("--algo")]),e._v(" flag. A keyring can of course hold both types of keys simultaneously.")]),e._v(" "),a("h2",{attrs:{id:"keyring-backends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyring-backends"}},[e._v("#")]),e._v(" Keyring Backends")]),e._v(" "),a("h3",{attrs:{id:"os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[e._v("#")]),e._v(" OS")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("os")]),e._v(" backend relies on operating system-specific defaults to handle key storage\nsecurely. Typically, an operating system's credential sub-system handles password prompts,\nprivate keys storage, and user sessions according to the user's password policies. Here\nis a list of the most popular operating systems and their respective passwords manager:")]),e._v(" "),a("ul",[a("li",[e._v("macOS (since Mac OS 8.6): "),a("a",{attrs:{href:"https://support.apple.com/en-gb/guide/keychain-access/welcome/mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keychain"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Windows: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/win32/secauthn/credentials-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("Credentials Management API"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("GNU/Linux:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://gitlab.gnome.org/GNOME/libsecret",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsecret"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://api.kde.org/frameworks/kwallet/html/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("kwallet"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("GNU/Linux distributions that use GNOME as default desktop environment typically come with\n"),a("a",{attrs:{href:"https://wiki.gnome.org/Apps/Seahorse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seahorse"),a("OutboundLink")],1),e._v(". Users of KDE based distributions are\ncommonly provided with "),a("a",{attrs:{href:"https://userbase.kde.org/KDE_Wallet_Manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("KDE Wallet Manager"),a("OutboundLink")],1),e._v(".\nWhilst the former is in fact a "),a("code",[e._v("libsecret")]),e._v(" convenient frontend, the latter is a "),a("code",[e._v("kwallet")]),e._v("\nclient.")]),e._v(" "),a("p",[a("code",[e._v("os")]),e._v(" is the default option since operating system's default credentials managers are\ndesigned to meet users' most common needs and provide them with a comfortable\nexperience without compromising on security.")]),e._v(" "),a("p",[e._v("The recommended backends for headless environments are "),a("code",[e._v("file")]),e._v(" and "),a("code",[e._v("pass")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[e._v("#")]),e._v(" File")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("file")]),e._v(" stores the keyring encrypted within the app's configuration directory. This\nkeyring will request a password each time it is accessed, which may occur multiple\ntimes in a single command resulting in repeated password prompts. If using bash scripts\nto execute commands using the "),a("code",[e._v("file")]),e._v(" option you may want to utilize the following format\nfor multiple prompts:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBhc3N1bWluZyB0aGF0IEtFWVBBU1NXRCBpcyBzZXQgaW4gdGhlIGVudmlyb25tZW50CnllcyAkS0VZUEFTU1dEIHwgaGFxcWQga2V5cyBhZGQgbWUKeWVzICRLRVlQQVNTV0QgfCBoYXFxZCBrZXlzIHNob3cgbWUKIyBzdGFydCBoYXFxZCB3aXRoIGtleXJpbmctYmFja2VuZCBmbGFnCmhhcXFkIC0ta2V5cmluZy1iYWNrZW5kPWZpbGUgc3RhcnQK"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("The first time you add a key to an empty keyring, you will be prompted to type the password twice.")])]),e._v(" "),a("h3",{attrs:{id:"password-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-store"}},[e._v("#")]),e._v(" Password Store")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pass")]),e._v(" backend uses the "),a("a",{attrs:{href:"https://www.passwordstore.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pass"),a("OutboundLink")],1),e._v(" utility to manage on-disk\nencryption of keys' sensitive data and metadata. Keys are stored inside "),a("code",[e._v("gpg")]),e._v(" encrypted files\nwithin app-specific directories. "),a("code",[e._v("pass")]),e._v(" is available for the most popular UNIX\noperating systems as well as GNU/Linux distributions. Please refer to its manual page for\ninformation on how to download and install it.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[e._v("pass")]),e._v(" uses "),a("a",{attrs:{href:"https://gnupg.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GnuPG"),a("OutboundLink")],1),e._v(" for encryption. "),a("code",[e._v("gpg")]),e._v(" automatically invokes the "),a("code",[e._v("gpg-agent")]),e._v("\ndaemon upon execution, which handles the caching of GnuPG credentials. Please refer to "),a("code",[e._v("gpg-agent")]),e._v("\nman page for more information on how to configure cache parameters such as credentials TTL and\npassphrase expiration.")])]),e._v(" "),a("p",[e._v("The password store must be set up prior to first use:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGFzcyBpbml0ICZsdDtHUEdfS0VZX0lEJmd0Owo="}}),e._v(" "),a("p",[e._v("Replace "),a("code",[e._v("<GPG_KEY_ID>")]),e._v(" with your GPG key ID. You can use your personal GPG key or an alternative\none you may want to use specifically to encrypt the password store.")]),e._v(" "),a("h3",{attrs:{id:"kde-wallet-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kde-wallet-manager"}},[e._v("#")]),e._v(" KDE Wallet Manager")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("kwallet")]),e._v(" backend uses "),a("code",[e._v("KDE Wallet Manager")]),e._v(", which comes installed by default on the\nGNU/Linux distributions that ships KDE as default desktop environment. Please refer to\n"),a("a",{attrs:{href:"https://docs.kde.org/stable5/en/kwalletmanager/kwallet5/kwallet5.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("KWallet Handbook"),a("OutboundLink")],1),e._v(" for more\ninformation.")]),e._v(" "),a("h3",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("test")]),e._v(" backend is a password-less variation of the "),a("code",[e._v("file")]),e._v(" backend. Keys are stored\n"),a("strong",[e._v("unencrypted")]),e._v(" on disk.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[e._v("Provided for testing purposes only. The "),a("code",[e._v("test")]),e._v(" backend is "),a("strong",[e._v("NOT")]),e._v(" recommended for use in production environments.")])]),e._v(" "),a("h3",{attrs:{id:"in-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-memory"}},[e._v("#")]),e._v(" In Memory")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("memory")]),e._v(" backend stores keys in memory. The keys are immediately deleted after the program has exited.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[e._v("Provided for testing purposes only. The "),a("code",[e._v("memory")]),e._v(" backend is "),a("strong",[e._v("NOT")]),e._v(" recommended for use in production environments.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);