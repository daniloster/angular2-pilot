interface System {
    then: (cb: Function) => void;
}

interface SystemStatic {
    import: (name: string) => System;
}

export var System: SystemStatic;