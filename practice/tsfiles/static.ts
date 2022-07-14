class Gangsta {
    static totalBullets = 100;
    shoot() {
        Gangsta.totalBullets--;
        console.log(`Bullets left :${Gangsta.totalBullets}`)
    }
}

const g1 = new Gangsta();
g1.shoot();
// 99
const g2 = new Gangsta();
g2.shoot();
// 98

// Gangsta클래스의 두 인스턴스는 동일한 변수 totalBullets를 공유


// !!!  static인 클래스 멤버는 서브 클래스에 공유되지 않음. SuperGangsta클래스가 Gangsta의 서브 클래스라면 totolBullets 프로퍼티
//      그대로 복사해오는 것일 뿐.
