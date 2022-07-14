export class BlockHeader implements IBlockHeader {
    // implements를 통해 interface와 class 동시에 확장가능하다.
    // implements는 단순히 타입 체크를 위해 사용된다. 위의 경우 BlockHeader가 IBlockHeader 타입을 준수하는지를 체크한다.
    // extends를 하위클래스가 상위클래스로부터 상속을 받을 때 사용된다. 상위클래스의 메서드와 프로퍼티에 대해 하위클래스는 상속을 받음으로써 사용할 수 있게 된다.
    // 클래스의 prototype은 object이거나 null 이다.
    public version: string
    public height: number   
    public timestamp: number
    public previousHash: string

    constructor ( _previousBlock: IBlock ) {
        this.version  = BlockHeader.getVersion()
        this.timestamp = BlockHeader.getTimestamp()
        this.height = _previousBlock.height
        this.previousHash = _previousBlock.hash
    }

    public static getVersion() {
        return '1.0.0'
    }

    public static getTimestamp() {
        return new Date().getTime()
    }
}