/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Exchange, ExchangeInterface } from "../../contracts/Exchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "ethToTokenSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "inputReserve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputReserve",
        type: "uint256",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputReserve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputReserve",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610763380380610763833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b61064c806101176000396000f3fe60806040526004361061003f5760003560e01c806351c6590a146100445780635cf4ee9114610060578063c1137e561461009d578063d3fdbbb5146100a7575b600080fd5b61005e600480360381019061005991906102e7565b6100e4565b005b34801561006c57600080fd5b5061008760048036038101906100829190610314565b610197565b6040516100949190610363565b60405180910390f35b6100a56101b8565b005b3480156100b357600080fd5b506100ce60048036038101906100c9919061037e565b610274565b6040516100db9190610363565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161014193929190610412565b602060405180830381600087803b15801561015b57600080fd5b505af115801561016f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101939190610481565b5050565b600080839050600083905080826101ae919061050c565b9250505092915050565b6000349050600081905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161021d92919061053d565b602060405180830381600087803b15801561023757600080fd5b505af115801561024b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026f9190610481565b505050565b60008084836102839190610566565b90506000858561029391906105c0565b905080826102a1919061050c565b925050509392505050565b600080fd5b6000819050919050565b6102c4816102b1565b81146102cf57600080fd5b50565b6000813590506102e1816102bb565b92915050565b6000602082840312156102fd576102fc6102ac565b5b600061030b848285016102d2565b91505092915050565b6000806040838503121561032b5761032a6102ac565b5b6000610339858286016102d2565b925050602061034a858286016102d2565b9150509250929050565b61035d816102b1565b82525050565b60006020820190506103786000830184610354565b92915050565b600080600060608486031215610397576103966102ac565b5b60006103a5868287016102d2565b93505060206103b6868287016102d2565b92505060406103c7868287016102d2565b9150509250925092565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103fc826103d1565b9050919050565b61040c816103f1565b82525050565b60006060820190506104276000830186610403565b6104346020830185610403565b6104416040830184610354565b949350505050565b60008115159050919050565b61045e81610449565b811461046957600080fd5b50565b60008151905061047b81610455565b92915050565b600060208284031215610497576104966102ac565b5b60006104a58482850161046c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610517826102b1565b9150610522836102b1565b925082610532576105316104ae565b5b828204905092915050565b60006040820190506105526000830185610403565b61055f6020830184610354565b9392505050565b6000610571826102b1565b915061057c836102b1565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156105b5576105b46104dd565b5b828202905092915050565b60006105cb826102b1565b91506105d6836102b1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561060b5761060a6104dd565b5b82820190509291505056fea26469706673582212208f909b94a3145c9e40ad3239276869407bec45b2319336c38d732a756d97f0d064736f6c63430008090033";

type ExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Exchange__factory extends ContractFactory {
  constructor(...args: ExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Exchange> {
    return super.deploy(_token, overrides || {}) as Promise<Exchange>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): Exchange {
    return super.attach(address) as Exchange;
  }
  override connect(signer: Signer): Exchange__factory {
    return super.connect(signer) as Exchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeInterface {
    return new utils.Interface(_abi) as ExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Exchange {
    return new Contract(address, _abi, signerOrProvider) as Exchange;
  }
}
