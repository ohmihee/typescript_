class AppState {

    counter = 0;  // the app state
    private static instanceRef: AppState;

    private constructor() { }

    static getInstance(): AppState {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
            // private은 해당 클래스 내에서는 접근가능하므로 여기서는 new를 통해 인스턴스화하는 것 가능.
        } 

        return AppState.instanceRef; 
    }
}

// const appState = new AppState(); // error because of the private constructor

const appState1 = AppState.getInstance(); 

const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
appState2.counter++;
//appState2.counter++;

console.log(appState1.counter); // prints 3
console.log(appState2.counter); // prints 3