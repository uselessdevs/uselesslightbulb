pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';


contract Uselesslightbulb is Ownable {

  using SafeMath for uint;

  uint weiPrice = 1000000000000000;
  uint count = 0;

  function toggle() public payable {
    require(msg.value >= weiPrice);
    count = count.add(1);
  }

  function getCount() external view returns (uint) {
    return count;
  }

  function withdraw() onlyOwner public {
    owner.transfer(address(this).balance);
  }

}
