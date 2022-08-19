// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


// CONTRACT DEPLOYED TO: 0x39ef98a05b53e45a081d87832cffdc5dc6009d66
// OPENSEA LINK TO NFT: https://testnets.opensea.io/assets/rinkeby/0x39ef98a05b53e45a081d87832cffdc5dc6009d66/0

contract Longs is ERC721, ERC721Enumerable, ERC721URIStorage {
    using Counters for Counters.Counter;

    uint maximumSupply = 20000;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Longs", "devlongs") {}

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId <= maximumSupply, "Cannot mint more nft");
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
