import { SHA256 } from 'crypto-js';
import merkle from 'merkle';
import { BlockHeader } from './blockHeader';
import hexToBinary from 'hex-to-binary';
import { 
    BLOCK_GENERATION_INTERVAL,
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    GENESIS,
    UNIT
} from '@core/config';

export class Block extends BlockHeader implements IBlock {
    public hash: string
    public merkleRoot: string;
    public nonce: number;
    public difficulty: number;
    public data: string[];

    constructor (
        _previusBlock: Block, 
        _data: string[], 
        _adjustmentBlock: Block = _previusBlock
    ) {
        super(_previusBlock)
        // super()를 통해 상위클래스의 생성자를 호출한다.

        const merkleRoot = Block.getMerkleRoot(_data)

        this.merkleRoot = merkleRoot
        this.hash = Block.createBlockHash(this)
        this.nonce = 0
        this.difficulty = Block.getDifficulty(this, _adjustmentBlock, _previusBlock)
        this.data = _data

    }

    public static getMerkleRoot<T>(_data: T[]): string {
        //<T> 제네릭이라고 하며, 클래스에서 사용할 타입을 해당 클래스를 사용할 때 결정하는 것을 의미한다.
        // https://hyunseob.github.io/2017/01/14/typescript-generic/
        const merkleTree = merkle('sha256').sync(_data)
        return merkleTree.root() || '0'.repeat(64)
    }

    public static createBlockHash(_block:Block): string {
        const { 
            version, 
            timestamp, 
            merkleRoot, 
            previousHash, 
            height, 
            difficulty, 
            nonce
        } = _block

        const values: string = `${version}${timestamp}${merkleRoot}${previousHash}${height}${difficulty}${nonce}`
        return SHA256(values).toString()
    }

    public static getDifficulty(
        _newBlock:Block,
        _adjustmentBlock: Block,
        _previousBlock: Block
    ): number {
        console.log(_newBlock, _adjustmentBlock)
        if (_newBlock.height < 9) return 0
        if (_newBlock.height < 19)  return 1
        if (_newBlock.height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0) return _previousBlock.difficulty

        const timeTaken: number = _newBlock.timestamp - _adjustmentBlock.timestamp
        const timeExpected: number = UNIT * BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL

        if (timeTaken< timeExpected/2) return _adjustmentBlock.difficulty + 1
        else if (timeTaken > timeExpected * 2) return _adjustmentBlock.difficulty - 1

        return _adjustmentBlock.difficulty
    }




}

/**
declare interface IBlockHeader {
    version: string,
    height: number,
    timestamp: number,
    previousHash: string
}
 */

/*
declare interface IBlock extends IBlockHeader {
    merkleRoot: string,
    hash: string,
    nonce: number,
    difficulty: number,
    data: string[]
}

*/
// https://github.com/ingoo-blockchain/Block5/blob/master/wallet/src/core/blockchain/block.ts