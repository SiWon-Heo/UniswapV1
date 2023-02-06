/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Factory, FactoryInterface } from "../../contracts/Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "createExchange",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getExchange",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612fda806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306f2bf621461003b5780631648f38e1461006b575b600080fd5b61005560048036038101906100509190610232565b61009b565b604051610062919061026e565b60405180910390f35b61008560048036038101906100809190610232565b610103565b604051610092919061026e565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008082604051610113906101c2565b61011d919061026e565b604051809103906000f080158015610139573d6000803e3d6000fd5b509050806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080915050919050565b612d1b8061028a83390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101ff826101d4565b9050919050565b61020f816101f4565b811461021a57600080fd5b50565b60008135905061022c81610206565b92915050565b600060208284031215610248576102476101cf565b5b60006102568482850161021d565b91505092915050565b610268816101f4565b82525050565b6000602082019050610283600083018461025f565b9291505056fe60806040523480156200001157600080fd5b5060405162002d1b38038062002d1b83398181016040528101906200003791906200027a565b6040518060400160405280600f81526020017f4772617920556e697377617020563200000000000000000000000000000000008152506040518060400160405280600781526020017f47554e492d5632000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000160565b508060049080519060200190620000d492919062000160565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000311565b8280546200016e90620002db565b90600052602060002090601f016020900481019282620001925760008555620001de565b82601f10620001ad57805160ff1916838001178555620001de565b82800160010185558215620001de579182015b82811115620001dd578251825591602001919060010190620001c0565b5b509050620001ed9190620001f1565b5090565b5b808211156200020c576000816000905550600101620001f2565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002428262000215565b9050919050565b620002548162000235565b81146200026057600080fd5b50565b600081519050620002748162000249565b92915050565b60006020828403121562000293576200029262000210565b5b6000620002a38482850162000263565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f457607f821691505b602082108114156200030b576200030a620002ac565b5b50919050565b6129fa80620003216000396000f3fe60806040526004361061011f5760003560e01c80635cf4ee91116100a0578063a9059cbb11610064578063a9059cbb14610405578063d3fdbbb514610442578063dd62ed3e1461047f578063e0486c8a146104bc578063f979dcd7146104e55761011f565b80635cf4ee91146102fa57806370a082311461033757806395d89b41146103745780639c8f9f231461039f578063a457c2d7146103c85761011f565b806337990981116100e7578063379909811461021f578063389d9a4014610248578063395093511461026457806351c6590a146102a1578063533a7b73146102bd5761011f565b806306fdde0314610124578063095ea7b31461014f57806318160ddd1461018c57806323b872dd146101b7578063313ce567146101f4575b600080fd5b34801561013057600080fd5b50610139610501565b6040516101469190611cd3565b60405180910390f35b34801561015b57600080fd5b5061017660048036038101906101719190611d8e565b610593565b6040516101839190611de9565b60405180910390f35b34801561019857600080fd5b506101a16105b6565b6040516101ae9190611e13565b60405180910390f35b3480156101c357600080fd5b506101de60048036038101906101d99190611e2e565b6105c0565b6040516101eb9190611de9565b60405180910390f35b34801561020057600080fd5b506102096105ef565b6040516102169190611e9d565b60405180910390f35b34801561022b57600080fd5b5061024660048036038101906102419190611eb8565b6105f8565b005b610262600480360381019061025d9190611f1f565b6108cb565b005b34801561027057600080fd5b5061028b60048036038101906102869190611d8e565b6108d9565b6040516102989190611de9565b60405180910390f35b6102bb60048036038101906102b69190611f5f565b610910565b005b3480156102c957600080fd5b506102e460048036038101906102df9190611f8c565b610bb9565b6040516102f19190611e13565b60405180910390f35b34801561030657600080fd5b50610321600480360381019061031c9190611fdf565b610c0f565b60405161032e9190611e13565b60405180910390f35b34801561034357600080fd5b5061035e6004803603810190610359919061201f565b610c30565b60405161036b9190611e13565b60405180910390f35b34801561038057600080fd5b50610389610c78565b6040516103969190611cd3565b60405180910390f35b3480156103ab57600080fd5b506103c660048036038101906103c19190611f5f565b610d0a565b005b3480156103d457600080fd5b506103ef60048036038101906103ea9190611d8e565b610efd565b6040516103fc9190611de9565b60405180910390f35b34801561041157600080fd5b5061042c60048036038101906104279190611d8e565b610f74565b6040516104399190611de9565b60405180910390f35b34801561044e57600080fd5b5061046960048036038101906104649190611f8c565b610f97565b6040516104769190611e13565b60405180910390f35b34801561048b57600080fd5b506104a660048036038101906104a1919061204c565b610fcf565b6040516104b39190611e13565b60405180910390f35b3480156104c857600080fd5b506104e360048036038101906104de9190611fdf565b611056565b005b6104ff60048036038101906104fa9190611f5f565b611250565b005b606060038054610510906120bb565b80601f016020809104026020016040519081016040528092919081815260200182805461053c906120bb565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b60008061059e61125d565b90506105ab818585611265565b600191505092915050565b6000600254905090565b6000806105cb61125d565b90506105d8858285611430565b6105e38585856114bc565b60019150509392505050565b60006012905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf62836040518263ffffffff1660e01b815260040161065591906120fc565b60206040518083038186803b15801561066d57600080fd5b505afa158015610681573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a5919061212c565b9050600061075e86600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161070891906120fc565b60206040518083038186803b15801561072057600080fd5b505afa158015610734573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610758919061216e565b47610bb9565b9050838110156107a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079a906121e7565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b815260040161080293929190612207565b602060405180830381600087803b15801561081c57600080fd5b505af1158015610830573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610854919061226a565b508173ffffffffffffffffffffffffffffffffffffffff1663389d9a408287336040518463ffffffff1660e01b8152600401610891929190612297565b6000604051808303818588803b1580156108aa57600080fd5b505af11580156108be573d6000803e3d6000fd5b5050505050505050505050565b6108d5828261173d565b5050565b6000806108e461125d565b90506109058185856108f68589610fcf565b61090091906122ef565b611265565b600191505092915050565b600061091a6105b6565b90506000811115610aec57600034476109339190612345565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099291906120fc565b60206040518083038186803b1580156109aa57600080fd5b505afa1580156109be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e2919061216e565b905060008282346109f39190612379565b6109fd9190612402565b905080851015610a0c57600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610a6b93929190612207565b602060405180830381600087803b158015610a8557600080fd5b505af1158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd919061226a565b506000833486610acd9190612379565b610ad79190612402565b9050610ae333826118f9565b50505050610bb5565b60008290506000479050610b0033826118f9565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610b5f93929190612207565b602060405180830381600087803b158015610b7957600080fd5b505af1158015610b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb1919061226a565b5050505b5050565b600080606385610bc99190612379565b905060008184610bd99190612379565b9050600082606487610beb9190612379565b610bf591906122ef565b90508082610c039190612402565b93505050509392505050565b60008083905060008390508082610c269190612402565b9250505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054610c87906120bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb3906120bb565b8015610d005780601f10610cd557610100808354040283529160200191610d00565b820191906000526020600020905b815481529060010190602001808311610ce357829003601f168201915b5050505050905090565b6000610d146105b6565b90506000814784610d259190612379565b610d2f9190612402565b9050600082600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610d8f91906120fc565b60206040518083038186803b158015610da757600080fd5b505afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf919061216e565b85610dea9190612379565b610df49190612402565b9050610e003385611a59565b3373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610e46573d6000803e3d6000fd5b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610ea4929190612433565b602060405180830381600087803b158015610ebe57600080fd5b505af1158015610ed2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef6919061226a565b5050505050565b600080610f0861125d565b90506000610f168286610fcf565b905083811015610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f52906124ce565b60405180910390fd5b610f688286868403611265565b60019250505092915050565b600080610f7f61125d565b9050610f8c8185856114bc565b600191505092915050565b6000808483610fa69190612379565b905060008585610fb691906122ef565b90508082610fc49190612402565b925050509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061110d83600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016110b791906120fc565b60206040518083038186803b1580156110cf57600080fd5b505afa1580156110e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611107919061216e565b47610f97565b905081811015611152576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611149906121e7565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016111b193929190612207565b602060405180830381600087803b1580156111cb57600080fd5b505af11580156111df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611203919061226a565b503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561124a573d6000803e3d6000fd5b50505050565b61125a813361173d565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cc90612560565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611345576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133c906125f2565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516114239190611e13565b60405180910390a3505050565b600061143c8484610fcf565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114b657818110156114a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149f9061265e565b60405180910390fd5b6114b58484848403611265565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561152c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611523906126f0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561159c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159390612782565b60405180910390fd5b6115a7838383611c30565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561162d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162490612814565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116c091906122ef565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516117249190611e13565b60405180910390a3611737848484611c35565b50505050565b60006117ff34344761174f9190612345565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016117aa91906120fc565b60206040518083038186803b1580156117c257600080fd5b505afa1580156117d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fa919061216e565b610bb9565b905082811015611844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183b906121e7565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b81526004016118a1929190612433565b602060405180830381600087803b1580156118bb57600080fd5b505af11580156118cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f3919061226a565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196090612880565b60405180910390fd5b61197560008383611c30565b806002600082825461198791906122ef565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119dc91906122ef565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a419190611e13565b60405180910390a3611a5560008383611c35565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac090612912565b60405180910390fd5b611ad582600083611c30565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611b5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b52906129a4565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254611bb29190612345565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c179190611e13565b60405180910390a3611c2b83600084611c35565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c74578082015181840152602081019050611c59565b83811115611c83576000848401525b50505050565b6000601f19601f8301169050919050565b6000611ca582611c3a565b611caf8185611c45565b9350611cbf818560208601611c56565b611cc881611c89565b840191505092915050565b60006020820190508181036000830152611ced8184611c9a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d2582611cfa565b9050919050565b611d3581611d1a565b8114611d4057600080fd5b50565b600081359050611d5281611d2c565b92915050565b6000819050919050565b611d6b81611d58565b8114611d7657600080fd5b50565b600081359050611d8881611d62565b92915050565b60008060408385031215611da557611da4611cf5565b5b6000611db385828601611d43565b9250506020611dc485828601611d79565b9150509250929050565b60008115159050919050565b611de381611dce565b82525050565b6000602082019050611dfe6000830184611dda565b92915050565b611e0d81611d58565b82525050565b6000602082019050611e286000830184611e04565b92915050565b600080600060608486031215611e4757611e46611cf5565b5b6000611e5586828701611d43565b9350506020611e6686828701611d43565b9250506040611e7786828701611d79565b9150509250925092565b600060ff82169050919050565b611e9781611e81565b82525050565b6000602082019050611eb26000830184611e8e565b92915050565b60008060008060808587031215611ed257611ed1611cf5565b5b6000611ee087828801611d79565b9450506020611ef187828801611d79565b9350506040611f0287828801611d79565b9250506060611f1387828801611d43565b91505092959194509250565b60008060408385031215611f3657611f35611cf5565b5b6000611f4485828601611d79565b9250506020611f5585828601611d43565b9150509250929050565b600060208284031215611f7557611f74611cf5565b5b6000611f8384828501611d79565b91505092915050565b600080600060608486031215611fa557611fa4611cf5565b5b6000611fb386828701611d79565b9350506020611fc486828701611d79565b9250506040611fd586828701611d79565b9150509250925092565b60008060408385031215611ff657611ff5611cf5565b5b600061200485828601611d79565b925050602061201585828601611d79565b9150509250929050565b60006020828403121561203557612034611cf5565b5b600061204384828501611d43565b91505092915050565b6000806040838503121561206357612062611cf5565b5b600061207185828601611d43565b925050602061208285828601611d43565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120d357607f821691505b602082108114156120e7576120e661208c565b5b50919050565b6120f681611d1a565b82525050565b600060208201905061211160008301846120ed565b92915050565b60008151905061212681611d2c565b92915050565b60006020828403121561214257612141611cf5565b5b600061215084828501612117565b91505092915050565b60008151905061216881611d62565b92915050565b60006020828403121561218457612183611cf5565b5b600061219284828501612159565b91505092915050565b7f496e73756666696369656e74206f757470757420416d6f756e74000000000000600082015250565b60006121d1601a83611c45565b91506121dc8261219b565b602082019050919050565b60006020820190508181036000830152612200816121c4565b9050919050565b600060608201905061221c60008301866120ed565b61222960208301856120ed565b6122366040830184611e04565b949350505050565b61224781611dce565b811461225257600080fd5b50565b6000815190506122648161223e565b92915050565b6000602082840312156122805761227f611cf5565b5b600061228e84828501612255565b91505092915050565b60006040820190506122ac6000830185611e04565b6122b960208301846120ed565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006122fa82611d58565b915061230583611d58565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561233a576123396122c0565b5b828201905092915050565b600061235082611d58565b915061235b83611d58565b92508282101561236e5761236d6122c0565b5b828203905092915050565b600061238482611d58565b915061238f83611d58565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156123c8576123c76122c0565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061240d82611d58565b915061241883611d58565b925082612428576124276123d3565b5b828204905092915050565b600060408201905061244860008301856120ed565b6124556020830184611e04565b9392505050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006124b8602583611c45565b91506124c38261245c565b604082019050919050565b600060208201905081810360008301526124e7816124ab565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061254a602483611c45565b9150612555826124ee565b604082019050919050565b600060208201905081810360008301526125798161253d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006125dc602283611c45565b91506125e782612580565b604082019050919050565b6000602082019050818103600083015261260b816125cf565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000612648601d83611c45565b915061265382612612565b602082019050919050565b600060208201905081810360008301526126778161263b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006126da602583611c45565b91506126e58261267e565b604082019050919050565b60006020820190508181036000830152612709816126cd565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061276c602383611c45565b915061277782612710565b604082019050919050565b6000602082019050818103600083015261279b8161275f565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006127fe602683611c45565b9150612809826127a2565b604082019050919050565b6000602082019050818103600083015261282d816127f1565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061286a601f83611c45565b915061287582612834565b602082019050919050565b600060208201905081810360008301526128998161285d565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006128fc602183611c45565b9150612907826128a0565b604082019050919050565b6000602082019050818103600083015261292b816128ef565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061298e602283611c45565b915061299982612932565b604082019050919050565b600060208201905081810360008301526129bd81612981565b905091905056fea26469706673582212205a3e4a8b99b0323641ffe6c1eff79197e9eb1f7e29854267c1fd90090448752364736f6c63430008090033a264697066735822122085c13502ae01a59e354605f9b8db98ac82f4bbcd6fcb37c196e86fe30af79e5464736f6c63430008090033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  override connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}
